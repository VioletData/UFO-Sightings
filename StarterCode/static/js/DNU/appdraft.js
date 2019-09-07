// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the sightings data from data.js
console.log(data);

// function buildTable(data) {
//   // Clear existing data
//   tbody.html("");

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
    }
    );
  });
// }

// // Assign the data from `data.js` to a descriptive variable
// var events = data;

// // Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

// // Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");
  
// //  Get the value property of the input element
var inputValue = inputElement.property("value");
  
// console.log(inputValue);
// console.log(events);
  
var filteredData = events.filter(event => event.datetime === inputValue);
  
// console.log(filteredData);


// buildTable(filteredData);
// });
  

// });
// remove any children from the list to
// list.html("");

});






// Build table 
// buildTable(tableData);