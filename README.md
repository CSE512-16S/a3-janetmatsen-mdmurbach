# a3-janetmatsen-mdmurbach
===============

## Team Members

1. Matt Murbach (mdmurbach)
2. JanetMatsen (janetmatsen)

## Project Name

Insert summary picture here.

This interactive plot includes the data from the [World Bank's Climate data](http://data.worldbank.org/data-catalog/climate-change).
The data includes yearly information for a range of environmental economic and developmental metrics. 
You can explore trends between variables and identify which countries are outliers. 
Hover over any point to see which country corresponts to the selected point. 

## Running Instructions

Access our visualization at http://cse512-16s.github.io/a3-janetmatsen-mdmurbach/.


## Story Board

Janet was particularly interested in which countries had especially high and low greenhouse gas emissions per amount of energy used.  
Matt was particularly interested in seing how these types of data changed over time. Thus, we came up with the idea to make a visualization that allowed exploration of both of our main questions and many others.

The first layout of the visualization was sketched out.

![first](https://github.com/CSE512-16S/a3-janetmatsen-mdmurbach/blob/gh-pages/pictures/first_sketch.jpg?raw=true)

We also wanted to have a tooltip that showed up when the user mouses over a dot. This tooltip would show the country name.

![tooltip](https://github.com/CSE512-16S/a3-janetmatsen-mdmurbach/blob/gh-pages/pictures/tooltip.jpg?raw=true)

We had many ideas of features that could be added on to the basic scatter plot should time allow.
For example, perhaps you could query a list of particular countries by similarly to the Baby Name Voyager. 
Or, time series of each country's x and y values could be shown in an adjacent plot.  
Zooming could allow you to focus on areas with many points. 

### Changes between Storyboard and the Final Implementation

As the map started to come together, we realized that mapping region to color would allow visualization of whether some regions of the world had similar trends or changed together over time. To add this we added the country region to the dataset, changed the fill color of the circles, and added a legend.

## Development Process

Include:
- Breakdown of how the work was split among the group members.
- A commentary on the development process, including answers to the following questions:
  - Roughly how much time did you spend developing your application?
  - What aspects took the most time?
  - 
Having no prior experience with JavaScript or D3 led us to scope simple and add components as time and skill allowed.
We began by implementing a static scatter plot.
Next, drop-down menus allowed the user to change which data were mapped to the X and Y axes. 
Subsequently D3.nest was used to break apart the data by year, and a third drop-down menu was added to plot data by year. 
