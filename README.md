# a3-janetmatsen-mdmurbach
===============

## Team Members

1. Matt Murbach (mdmurbach)
2. JanetMatsen (janetmatsen)

## World Bank Climat Data Visualization

<div style="width: 50%; margin-left: auto; margin-right: auto; padding: 25px"><img src="https://github.com/CSE512-16S/a3-janetmatsen-mdmurbach/blob/gh-pages/pictures/scatter_screenshot.png?raw=true" width="50%"/></div>

This interactive plot includes the data from the [World Bank's Climate data](http://data.worldbank.org/data-catalog/climate-change).
The data includes yearly information for a range of environmental economic and developmental metrics. 
You can explore trends between variables and identify which countries are outliers. 
Hover over any point to see which country corresponts to the selected point. 

## Running Instructions

Access our visualization at http://cse512-16s.github.io/a3-janetmatsen-mdmurbach/.


## Story Board

Janet was particularly interested in which countries had especially high and low greenhouse gas emissions per amount of energy used. Matt was particularly interested in seing how these types of data changed over time. Thus, we came up with the idea to make a visualization that allowed exploration of both of our main questions and many others. 

The first layout of the visualization was sketched out...

<div style="width: 50%; margin-left: auto; margin-right: auto; padding: 25px"><img src="https://github.com/CSE512-16S/a3-janetmatsen-mdmurbach/blob/gh-pages/pictures/first_sketch.jpg?raw=true" width="100%"/></div>

The dropdown menus would allow the user to update the data shown while a transition between the plots would allow the user to follow specific countries of interest as the data changed. We also wanted to have a tooltip that showed up when the user mouses over a dot. This tooltip would show the country name...

<div style="width: 50%; margin-left: auto; margin-right: auto; padding: 25px"><img src="https://github.com/CSE512-16S/a3-janetmatsen-mdmurbach/blob/gh-pages/pictures/tooltip.jpg?raw=true" width="50%"/></div>

We had many ideas of features that could be added on to the basic scatter plot should time allow.
For example, perhaps you could query a list of particular countries by similarly to the Baby Name Voyager or have the time series of each country's x and y values shown in adjacent plots. Zooming could also allow you to focus on areas with many points. 

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
