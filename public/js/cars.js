"use strict";
var thing = 3
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";

function formatCars(carsJSON) {
  var htmlstring = '<div class="row">'
  $.map(carsJSON, function(object) {
    htmlstring += `<div class="col-md-4 car"><h2>${object.Make}</h2><p><strong>Model:</strong> ${object.Model}</p><p><strong>Year:</strong> ${object.Year}</p></div>`
  })
  htmlstring += '</div>'
  return htmlstring;
}

function addCarsToDOM(carsJSON) {
  $('#cars').append(formatCars(carsJSON))
}

function fetchJSON() {
  var url = baseUrl + thing + "/3"
  thing += 1
  $.ajax({
        url: url,
        contentType: 'application/json',
        dataType: 'jsonp',
        success: function(data) {
          addCarsToDOM(data)
        }
      });

}
