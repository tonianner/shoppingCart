var html = '';
html += '<div class="item row">';
html += ' <div class="item-name col-xs-4">';
html +=    itemName;
html += '  </div>';
html += '  <div class="item-price col-xs-3">';
html +=     itemUnitPrice;
html += '  </div>';
html += '  <div class="item-qty col-xs-3">';
html += '    <label>QTY</label>';
html += '    <input class="quantity" value="1">';
html += '    <button class="cancel">Cancel</button>';
html += '  </div>';
html += '  <div class="item-subtotal col-xs-2">';
html += '    $0.00';
html += '  </div>';
html += '</div>';


'<div class="item row"> <div class="item-name col-xs-4">'+ itemName + '</div> <div class="item-price col-xs-3">'+ itemUnitPrice + '</div> <div class="item-qty col-xs-3"> <label>QTY</label> <input class="quantity" value="1"> <button class="cancel">Cancel</button> </div> <div class="item-subtotal col-xs-2"> $0.00 </div> </div>'