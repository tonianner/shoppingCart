$(document).ready(function(){
  var calcTotalPrice = function(){
    var itemPrices = $('.item-price');
    var itemQuantities = $('.item-qty .quantity');
    var itemLength = itemPrices.length;

    var totalPrice = 0;
    var subTotalPrice;

    for (var i = 0; i < itemLength; i++) {
      // console.log("loop #: ", i);

      var itemPriceElement = itemPrices[i];
      var itemPriceObject = $(itemPriceElement);
      var itemPriceText = itemPriceObject.text();
      var itemPriceTextWithoutDollar = itemPriceText.replace('$','');
      var itemPrice = Number(itemPriceTextWithoutDollar);
      // console.log("itemPrice: ", itemPrice);

      var itemQuantityElement = itemQuantities[i];
      var itemQuantity = itemQuantityElement.value;
      // console.log("itemQuantity: ", itemQuantity);

      subTotalPrice = itemPrice * itemQuantity;

      // update sub-total
      var subTotalElement = $('.item-subtotal')[i];
      var subTotalObject = $(subTotalElement);
      subTotalObject.text('$' + subTotalPrice.toFixed(2));

      totalPrice += subTotalPrice;
    }

    console.log("totalPrice: ", totalPrice);
    $('#total-price').text(totalPrice);
  };

  $('#calc-prices-button').click(calcTotalPrice);

  $('#new-item-create').click(function(){
    var itemName = $('#new-item-name').val();
    var itemUnitPrice = $('#new-item-unit-price').val();
    var newItem = '<div class="item row"> <div class="item-name col-xs-4">'+ itemName + '</div> <div class="item-price col-xs-3">'+ itemUnitPrice + '</div> <div class="item-qty col-xs-3"> <label>QTY</label> <input class="quantity" value="0"> <button class="cancel">Cancel</button> </div> <div class="item-subtotal col-xs-2"> $0.00 </div> </div>';
    $('#items-list').prepend(newItem);
  });

});