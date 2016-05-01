// function to get list of years. 
// used to populate the y-dropdown
function getListOfYears() {
  years = []
  for (i in data) {
      // ?? is making labels out of int a problem? 
      //years.push(Math.round(data[i]["key"]))}
      years.push( data[i]["key"] )}
  return years;
}


function getListOfVars(){
  // Just returns a list of all of the possible values given 
  // the first year's first country object. 
  // get just one year's data to investigate.
  d = data[0].values[0].values;
  variables = [];
  for (i in d) {
    //only look in the first object; assume they are all equivalent. 
    variables.push(d[i]["series"])
  }
  return variables;
};

function varCountDict() {
  varnames = getListOfVars()
  // build an object w/ keys that are elements of varnames and values = 0
  frequencies = {}
  for (v in varnames) {
  frequencies[varnames[v]] = 0;
  }
  return frequencies; 
}

// dyi = nestedObjectByKey(data, "key", 1991)
function countMeaningfulValuesGivenYear(data_year_instance) {
  // vardict is an object with key:value pairs where keys are series names
  // like "Population growth (annual %)" and values are zero (initially)
  vardict = varCountDict();
  null_count = 0;

  // loop over the data in data_year_instance and increment 
  // the appropriate key by 1 if it has a numeric and non-null value. 
  //for (key in vardict){
  //  // adds 1 to every key:  vardict[key] += 1
  //}
  ////return vardict;
  for (c_num in data_year_instance) {   // c_num is country number/index
    // data_year_instance[num] gets you to a list of objects by country.  
    // need to loop through the values in its values array
    for (s_num in data_year_instance[c_num].values) {  // s_num is series number/index
      //console.log(data_year_instance[c_num].values[s_num]["series"])
      series_name = data_year_instance[c_num].values[s_num]["series"];
      //console.log(data_year_instance[c_num].values[s_num]["value"])
      series_value = data_year_instance[c_num].values[s_num]["value"];
      //console.log(series_name + ": " + series_value)
      if (isNaN(series_value)) {null_count += 1} else  { vardict[series_name] += 1 }
    }
  }
  console.log("looping complete")
  console.log("number of missing values across series: " + null_count)
  return vardict;
}

function columnsWithEnoughPoints(data_year_instance, n=0){
// Return the names of series that have more than n points.
  count_dict = countMeaningfulValuesGivenYear(data_year_instance);
  good_columns = [];
  // Loop through each key value pair and keep track of which columns
  // have more than n non-null entries. 
  for (var key_name in count_dict) {
    if (count_dict[key_name] > n) { good_columns.push(key_name) }
  }
  return good_columns
}


function nestedObjectByKey(array, key_name, desired_value) {
// If you have [Object, Object, ...] and each Object has an
// array of objects as its value (e.g. from d3.nest), 
// you can use this function to get the object in the values 
console.log("find object within array with key name " + key_name + ", and value " + desired_value)
// array that has "key":desired_value
  object_nums = Object.keys(array)
  for (obj_num in object_nums){ 
    //console.log(obj_num);
    //console.log('obj_num: ' + obj_num);
    //console.log(array[obj_num]);
    found_value = array[obj_num][key_name];
    //console.log('candidate value: ' + found_value);
    //console.log(typeof desired_value)
    if (found_value.toString() == desired_value.toString()) {
      // console.log("found array for sought value. (" + desired_value + ")");
      right_object =  array[obj_num]
      //console.log("return object: ")
      //console.log(right_array)
      // returns another list of objects!!

  // print the results:

  return right_object.values
    };
   };
};

function valueFromFlatArray(array, target_key_name, target_key_value, output_key){
// If you have array =  [Object, Object, ...], but each Object in that
// array does *NOT* have an array as a value for that key, 
// you can use this function to get the number stored in key "value"
  object_nums = Object.keys(array)
  //console.log("loop over these object numbers:")
  //console.log(object_nums)
  for (obj_num in object_nums){ 
    obj = array[obj_num]
    //console.log(obj)
    if (obj[target_key_name] == target_key_value){
        return obj[output_key]
    }                      
  }
}

function findValue(year, country, series, value) {
// find the value from series:value in the raw data after wading through a 
// year level (from nest) and a country level (from Nest).
  // Loop through all the years.  Will get one array per country. 
  for (obj_num in Object.keys(data)){ 
    //console.log(obj_num);
    // find the array for the right year. 
    //console.log('obj_num: ' + obj_num);
    //console.log(data[obj_num]);
    //year = data[obj_num]['key'];
    //console.log('year: ' + year);
    // array_for_year = data[obj_num].values; 
    //array_for_year = getArrayByKeyValPair(data, "key", "1990"); 
    array_for_year = nestedObjectByKey(data, "key", year); 
    //console.log('array for year ' + year + ": " )
    //console.log(array_for_year)
    // Loop through each country, now that you've found the year. 
    // Find the array for the right country
    array_for_country = nestedObjectByKey(array_for_year, "key", "China")
    //console.log('array for country ' + country + ": " )
    //console.log(array_for_country)
    // Loop through each series. 
    // By now each series already has the right year and country. 
    found_value = valueFromFlatArray(array_for_country, "series", series, value)
    //console.log('value for ' + series + ": " )
    //console.log(found_value)
    return(found_value)
  }
};
