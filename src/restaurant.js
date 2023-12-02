function createRestaurant(restName){
  var restObj = {
    name: restName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    }
  }
  return restObj;
}

function addMenuItem(restaurant, item){
  if (!restaurant['menus'][item.type].includes(item)){
  restaurant['menus'][item.type].push(item);
  }
}

function removeMenuItem(restaurant, item, type){
  for (i = 0; i < restaurant['menus'][type].length; i++){
   if (restaurant['menus'][type][i].name === item){
      restaurant['menus'][type].splice(i, 1);
      return `No one is eating our ${item} - it has been removed from the ${type} menu!`;
   }
  }
   return `Sorry, we don't sell ${item}, try adding a new recipe!`
}

function checkForFood(restaurant, food){
  if (restaurant['menus'][food.type].includes(food)){
    return `Yes, we're serving ${food.name} today!`
  } else{
      return `Sorry, we aren't serving ${food.name} today.`
  }
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  checkForFood
}