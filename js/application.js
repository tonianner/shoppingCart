$(document).ready(function(){
  //event listener to Create button
  $('#createButton').on("click", function(e){
    e.preventDefault();
      var nameInput = $('#nameInput').val();
      var priceInput = $('#priceInput').val();
      var quantity = '<input value="0">';
      var subTotalPrice = '<td class="subTotalPrice">$0.00</td>'
      var addRows = 
        '<tr><td>' + nameInput +'</td><td>'+ priceInput + '</td>' +
        '<td class="values"><label>QTY</label>' + quantity + 
        '<button class="cancel">Cancel</button></td>' +
        subTotalPrice +
        '</tr>';
    $('#list').append(addRows)});
});

//multiply

var qtyValue = $('td.values input').val()
var qtyFloat = parseFloat(qtyValue);





