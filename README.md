# a3-janetmatsen-mdmurbach
===============

## Team Members

1. Matt Murbach ([mdmurbach](https://github.com/mdmurbach))
2. JanetMatsen ([janetmatsen](https://github.com/JanetMatsen))

## World Bank Climat Data Visualization

<div style="width: 50%; margin-left: auto; margin-right: auto; padding: 25px"><img src="https://github.com/CSE512-16S/a3-janetmatsen-mdmurbach/blob/master/pictures/scatter_screenshot.png?raw=true" width="70%"/></div>

This interactive plot includes the multidimensional data from the [World Bank's Climate data](http://data.worldbank.org/data-catalog/climate-change).
The data includes yearly information for a range of environmental economic and developmental metrics. 
You can explore trends between variables by using drop-down menus to select the x and y axis variables. 
Hover over any point and to see which country corresponts to the selected point. 

## Running Instructions

Access our visualization at http://cse512-16s.github.io/a3-janetmatsen-mdmurbach/.

## Story Board

The World Bank Climate Data set was appealing to Janet and Matt because of common interest in environmental and socioeconomic issues, and the fact that it was so high-dimensional.  
The data set consists of yearly data for dozens of measurable environmental and socail variables.
Janet was having fun exploring the data in Pandas, but was frustrated that she could only generate single plots at a time.  
For example: 
<div style="width: 50%; margin-left: auto; margin-right: auto; padding: 25px"><img src="https://github.com/CSE512-16S/a3-janetmatsen-mdmurbach/blob/master/pictures/early_scatter_sample.png?raw=true" width="100%"/></div>

Janet was particularly interested in which countries had especially high and low greenhouse gas emissions per amount of energy used. Matt was particularly interested in seing how these types of data changed over time. Thus, we came up with the idea to make a visualization that allowed exploration of both of our main questions and many others. 

While many of the pairs of variables had trends that made sense, nearly every pair of x and y axis variables had outliers that would be fun to identiy.
This motivated us to create a tooltip that showed which country was represented by the data point being hovered over. 
She also wished she could identify which coutntries were outliers in these preliminary graphics. 

The first layout of the visualization was sketched out...

<div style="width: 50%; margin-left: auto; margin-right: auto; padding: 25px"><img src="https://github.com/CSE512-16S/a3-janetmatsen-mdmurbach/blob/gh-pages/pictures/first_sketch.jpg?raw=true" width="50%"/></div>

The dropdown menus would allow the user to update the data shown while a transition between the plots would allow the user to follow specific countries of interest as the data changed. We also wanted to have a tooltip that showed up when the user mouses over a dot. This tooltip would show the country name...

<div style="width: 50%; margin-left: auto; margin-right: auto; padding: 25px"><img src="https://github.com/CSE512-16S/a3-janetmatsen-mdmurbach/blob/gh-pages/pictures/tooltip.jpg?raw=true" width="30%"/></div>

We had many ideas of features that could be added on to the basic scatter plot should time allow.
For example, perhaps you could query a list of particular countries by similarly to the Baby Name Voyager or have the time series of each country's x and y values shown in adjacent plots. 
Zooming could also allow you to focus on areas with many points.
An adjacent plot could show trends over time for the particular country.

Instead of adding extra widgets, Janet focused on addressing the challenge of sparse data. 
In this data set, values are not reported consistently across time or countries. 
To prevent the dissappointing user experience of having all the scatter points disappear upon click of an invalid variable, extra time was spent to refresh the x-axis and y-axis dropdown menu options given the particular year selected.

### Changes between Storyboard and the Final Implementation

As the map started to come together, we realized that mapping region to color would allow visualization of whether some regions of the world had similar trends or changed together over time. To add this we added the country region to the dataset, changed the fill color of the circles, and added a legend.

## Development Process

- Breakdown of how the work was split among the group members.
  - Initial static scatter plot (Matt and Janet)
  - Add x/y dropdown menu and color by region (Matt)
  - Added year option:  (Janet)
    - Reformatted code (in Python) and used two d3 nest commands to allow access to data by year and country 
    - Added a year dropdown 
    - Wrote functions that remove x and y options that have no values to plot for the selected year.  

  
- Commentary on the development process, including answers to the following questions:
  - Roughly how much time did you spend developing your application?
     - Matt ~ 20ish hrs??
     - Janet: ~20-30 hours, most of which were learning about d3 and javascript. (I could reproduce my work in 3-6 hours if starting fresh!) 
  - What aspects took the most time?
      - Getting "up to speed" with D3 basics was the primary challenge.  Neighter of us had written any D3 or javascript.  In addition to reading all of the suggested materials in class, video tutorials were key for Janet.  The ability to decode errors took more time than expected as well. 
      - Writing the functions that restrict the x and y options after a year was selected took the most active coding time for Janet. 
