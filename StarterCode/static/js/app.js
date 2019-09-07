// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// remove any info from the table
tbody.html("");

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

// remove any info from the table
tbody.html("");

// Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");
  
 // Get the value property of the input element
var inputValue = inputElement.property("value");
  
console.log(inputValue);
  
var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
  
console.log(filteredData);

filteredData.forEach(function(sightings) {
  console.log(sightings);
  var row = tbody.append("tr");

  Object.entries(sightings).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the sighting object
    var cell = row.append("td");
    cell.text(value);
  });
});

});

