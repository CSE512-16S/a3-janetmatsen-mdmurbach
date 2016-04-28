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
