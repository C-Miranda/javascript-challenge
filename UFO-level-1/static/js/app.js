// from data.js
var tableData = data;
// console.log(tableData)

// YOUR CODE HERE!

renderTable(tableData);
 // Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
  renderTable(filteredData);

  console.log(filteredData);
};  

function renderTable(tableData) {
    // Get a reference to the table body
    var tbody = d3.select("tbody");

    tbody.html("");

    // Use d3 to append one table row `tr` for each sighting object
    tableData.forEach(function(sighting) {
        //   console.log(sighting);
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(function([key, value]) {
        //    console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
}