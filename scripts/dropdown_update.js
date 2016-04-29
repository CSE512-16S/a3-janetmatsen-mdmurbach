
function remove(id) {
    // http://stackoverflow.com/questions/3387427/remove-element-by-id
    return (elem=document.getElementById(id)).parentNode.removeChild(elem);
}

function remove_xy_dropdowns() {
    remove("x_drop")
    remove("y_drop")
}

function add_year_dropdown() {
  // TODO: add title at top showing the year selected. 
  // Create Dropdown table for the year
  console.log("add year dropdown")

  year_label = d3.select("body").append("label")
    .text("Year")
    .attr("class", "labels");

  year_dropDown = year_label.append("select")
                .attr("class","dropdowns");

  // populate the dropDown options (without labels)           
  var year_options = year_dropDown.selectAll("option")
       .data( getListOfYears )
     .enter()
       .append("option");

  // tmp troubleshooting  
  //console.log(getListOfVars())
  
  // put labels on the dropdown options.  
  year_options.text(function(d) {return d}) // adds label to each dropdown row
    .attr("value", function(d) {return d}) // accessed in x_menuChanged()
    // set initially selected option
    .attr("selected", function(d) {if(d == year_selected) { return d}}); 
    ;

}

function add_x_y_dropdowns(option_list) {
  // remove the old dropdown menu
  //removeDrop()

  // x-axis label
  x_label = d3.select("body").append("label")
                .text("X axis")
                .attr("id", "x_drop")
                .attr("class","labels");
  
  // Create Dropdown table for x-axis
  x_dropDown = x_label.append("select")
                //.attr("name", "x-list")  // ?? redundant b/c not in CSS? 
                //.setAttribute("id", "uniqueIdentifier");
                .attr("id", "x_drop")
                .attr("class","dropdowns");

  // populate the dropDown options (without labels)           
  var x_options = x_dropDown.selectAll("option")
       .data(dropdown_options)
     .enter()
       .append("option");
  
  // put labels on the dropdown options.  
  // (empty strings on dropdowns if omitted)    
  x_options.text(function(d) {return d}) // adds label to each dropdown row
    .attr("value", function(d) {return d}) // accessed in x_menuChanged()
    // set initially selected option
    .attr("selected", function(d) {if(d == xseries) { return d}}); 
    ;

  // Create Dropdown table for y-axis
  y_label = d3.select("body").append("label")
                .attr("id", "y_drop")
                .text("Y axis")
                .attr("class","labels"); 
                
  y_dropDown = y_label.append("select")
                .attr("id", "y_drop")
                .attr("name", "y-list")  // ?? redundant b/c not in CSS?
                .attr("class","dropdowns");

  // populate the dropDown options (without labels)  
  // ?? just curious, could the x and y functions be combined 
  // into 1 factored function? (J doesn't have namespace intuition yet)
  // M - I think there need to be two dropdown objects, but the data/attributes 
  // for each could probably be combined with some thought.
  var y_options = y_dropDown.selectAll("option")
       // appending on a an array (["Land area...", "Ag... (% of total )", ...]
       .data(dropdown_options)
     .enter()
       .append("option");
       
  // put text on each y dropDown
  y_options.text(function(d) {return d})
    .attr("value", function(d) {return d})
    // set initially selected option
    .attr("selected", function(d) {if(d == yseries) { return d}});
}

  	  
