// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the sightings data from data.js
// console.log(data);

// Use d3 to update each cell's text with sightings

data.forEach(function(sightings) {
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

// Assign the data from `data.js` to a descriptive variable
var events = data;

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

// Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");
  
 // Get the value property of the input element
var inputValue = inputElement.property("value");
  
console.log(inputValue);
console.log(events);
  
var filteredData = events.filter(event => event.datetime === inputValue);
  
console.log(filteredData);

  
// Then, select the unordered list element by class name
// var list = d3.select(".summary");
// console.log(list);

// remove any children from the list to
tbody.html("");

// append stats to the list
// list.append("li").text(`Date: ${datetime}`);
});

