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
Matt was particularly interested in XXXXX.
We decided to make a plot that allowed exploration of both of our main questions and many others.

Mapping region to color would allow visualization of whether some regions of the world ...

We had many ideas of features that could be added on to the basic scatter plot should time allow.
For example, perhaps you could query a list of particular countries by similarly to the Baby Name Voyager. 
Or, time series of each country's x and y values could be shown in an adjacent plot.  
Zooming could allow you to focus on areas with many points. 

Put either your storyboard content or a [link to your storyboard pdf file](storyboard.pdf?raw=true) here. Just like A2, you can use any software to create a *reasonable* pdf storyboard.


### Changes between Storyboard and the Final Implementation

(A paragraph explaining changes between the storyboard and the final implementation.)



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
