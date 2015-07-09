$(document).ready(function(){
  var returnSubtotalPrice = function(price, quantity, i){
    // Grab all the subtotal price
    var itemSubtotalPrices = $('.item-subtotal');

    // Identify the current subtotal using i as the index
    var currentSubtotal = $(itemSubtotalPrices[i])

    // Modify the current subtotal
    currentSubtotal.text('$'+(price*quantity).toFixed(2));
  };

  var returnTotalPrice = function(){
    var itemPrices = $('.item-price'); // Select all the prices
    var itemQuantities = $('.quantity'); // Select all the quantities
    var itemLength = itemPrices.length; // Both arrays will have the same length
    var totalPrice = 0; // Accumulator

    for (var i = 0; i < itemLength; i++){
      var price = $(itemPrices[i]).text().replace('$',''); // "10.00"
      var quantity = itemQuantities[i].value;
      totalPrice = totalPrice + price * quantity;
      
      returnSubtotalPrice(price, quantity, i);
    }

    $('#total-price').text('$'+totalPrice.toFixed(2));
  };

  var createItem = function(){
    // must check price is integer
    var itemName = $('#new-item-name').val();
    var itemUnitPrice = $('#new-item-unit-price').val();

    if ($.isNumeric(itemUnitPrice) == false){
      alert('Unit price must be a number');
    } else if (itemName == ''){
      alert('Item name cannot be empty');
    } else {
      itemUnitPrice = Number(itemUnitPrice).toFixed(2)
      var newItem = '<div class="item row"> <div class="item-name col-xs-4">'+ itemName + '</div> <div class="item-price col-xs-3">'+ itemUnitPrice + '</div> <div class="item-qty col-xs-3"> <label>QTY</label> <input class="quantity" value="0"> <button class="cancel">Cancel</button> </div> <div class="item-subtotal col-xs-2"> $0.00 </div> </div>';
      $('#items-list').prepend(newItem);
      // $(newItem).prependTo($('#items-list')).slideDown('slow');
    }
  };

  $('#calc-prices-button').click(function(){
    returnTotalPrice();
  });

  $(document).on('keyup', '.quantity', function(){
    returnTotalPrice();
  });

  $('#new-item-create').click(function(){
    createItem();
  });

  $(document).on('click', '.cancel',function(){
    // fadeOut = hiding = display: none;
    $(this).parent().parent().fadeOut('slow', function(){
      $(this).remove(); // This is removing the HTML
      // $(this).html(''); // This is removing the HTML
      returnTotalPrice(); // Recalculate the total price
    });
  });
});