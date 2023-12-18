# Belly Button Biodiversity Dashboard

## Description
This project involves building an interactive dashboard to explore the Belly Button Biodiversity dataset, cataloging microbes that colonize human navels. The dataset reveals prevalent microbial species, known as operational taxonomic units (OTUs), in individuals.

## Components

### 1. D3 Data Visualization
- Utilized the D3 library to read samples.json from [this URL](https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json).
- Created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in each individual.
  - Used `sample_values` as the values for the bar chart.
  - Used `otu_ids` as the labels for the bar chart.
  - Used `otu_labels` as the hovertext for the chart.

### 2. Bubble Chart
- Created a bubble chart to display each sample.
  - Used `otu_ids` for the x values.
  - Used `sample_values` for the y values.
  - Used `sample_values` for the marker size.
  - Used `otu_ids` for the marker colors.
  - Used `otu_labels` for the text values.

### 3. Sample Metadata Display
- Displayed the sample metadata, including an individual's demographic information.
- Displayed each key-value pair from the metadata JSON object on the page.

### 4. Dashboard Update
- Updated all plots dynamically when a new sample is selected.

### 5. Deployment
- Deployed the app to GitHub Pages.

## Table of Contents
  - static Folder
    - js Folder
      - app.js
    
  - index.html
    
  - samples.json

## Links
- https://omar-salloum.github.io/belly-button-challenge/ (Link to the deployed app on GitHub Pages)
