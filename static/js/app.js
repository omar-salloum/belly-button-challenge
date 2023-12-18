// Read in samples.json
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

const x = d3.json(url);

// Function to update plots and demographic info
function optionChanged(subjectID) {
  // Bar Chart (30 Points)
  x.then(data => {
    let subjectData = data.samples.find(sample => sample.id === subjectID);
    if (!subjectData) {
      console.log(`Data not found for selected Subject ID: ${subjectID}`);
      return;
    }

    let sortedValuesObject = subjectData.sample_values
      .map((value, index) => ({ value: value, index: index }))
      .sort((firstNum, secondNum) => secondNum.value - firstNum.value)
      .slice(0, 10);

    let sortedIds = sortedValuesObject.map(item => `OTU ${subjectData.otu_ids[item.index]}`).reverse();
    let finalValues = sortedValuesObject.map(item => item.value).reverse();

    let trace1 = {
      y: sortedIds,
      x: finalValues,
      hovertext: subjectData.otu_labels,
      type: "bar",
      orientation: "h"
    };

    let plotData = [trace1];

    Plotly.newPlot("bar", plotData);
  });

  // Bubble Charts (40 Points)
  x.then(data => {
    let subjectData = data.samples.find(sample => sample.id === subjectID);
    if (!subjectData) {
      console.log(`Data not found for selected Subject ID: ${subjectID}`);
      return;
    }

    let traceBubble = {
      x: subjectData.otu_ids,
      y: subjectData.sample_values,
      text: subjectData.otu_labels,
      mode: 'markers',
      marker: {
        size: subjectData.sample_values,
        color: subjectData.otu_ids,
      }
    };

    let layoutBubble = {
      xaxis: { title: 'OTU ID' },
      showlegend: false,
    };

    let plotDataBubble = [traceBubble];

    Plotly.newPlot("bubble", plotDataBubble, layoutBubble);
  });

  // Metadata and Deployment (30 points)
  const bod = d3.select("#sample-metadata");

  x.then(data => {
    let subjectMetadata = data.metadata.find(metadata => metadata.id.toString() === subjectID);
    if (!subjectMetadata) {
      console.log(`Metadata not found for selected Subject ID: ${subjectID}`);
      return;
    }

    bod.html("");

    Object.entries(subjectMetadata).forEach(([key, value]) => {
      bod.append("p").text(`${key}: ${value}`);
    });
  });
}

x.then(data => {
  const dropdown = d3.select("#selDataset");
  const metadataIds = data.names;
  const options = dropdown.selectAll("option")
    .data(metadataIds)
    .enter();

  options.append("option")
    .attr("value", d => d)
    .text(d => d);

  optionChanged(metadataIds[0]);
});

d3.select("#selDataset").on("change", function () {
  optionChanged(this.value);
});