
function takeOrder(order, typeArray){
  if (typeArray.length < 3){
    typeArray.push(order);
  }
}

function refundOrder(orderNumber, typeArray){
  for (var i = 0; i < typeArray.length; i++){
    if (typeArray[i].orderNumber === orderNumber){
      typeArray.splice(i, 1);
    }
  }
}

function listItems(typeArray){
  var itemList = '';
  for (var i = 0; i < typeArray.length; i++){
    if (itemList === '') {
      itemList = typeArray[i].item;
    } else {
    itemList = `${itemList}, ${typeArray[i].item}`;
    }
  }
  return itemList;
}

function searchOrder(typeArray, item){
  var inOrder = false;
  for (var i = 0; i < typeArray.length; i++){
    if (typeArray[i].item === item){
      inOrder = true;
    }
  }
  return inOrder;
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}