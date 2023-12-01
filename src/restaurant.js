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

function addMenuItem(restObject, itemObject){
  // TRIAL 1 restObject.menus.itemObject.type.push(itemObject);
  var foundMenu = itemObject.type;
  // restObject.menus.foundMenu.push(itemObject);
  if (foundMenu === 'breakfast'){
    // restObject.menus.foundMenu.push(itemObject);
    if (restObject.menus.breakfast.includes(itemObject) === false){
     restObject.menus.breakfast.push(itemObject);
     }
   } else if (foundMenu === 'lunch'){
    if (restObject.menus.lunch.includes(itemObject) === false){
     restObject.menus.lunch.push(itemObject);
     }
   } else if (foundMenu === 'dinner'){
    if (restObject.menus.dinner.includes(itemObject) === false){
    restObject.menus.dinner.push(itemObject);
    }
  }
}

function removeMenuItem(restaurant, item, type){
  if (type === 'breakfast'){
    for (i = 0; i < restaurant.menus.breakfast.length; i++){
      if (restaurant.menus.breakfast[i].name === item){
        restaurant.menus.breakfast.splice(i, 1);
        return `No one is eating our ${item} - it has been removed from the ${type} menu!`;
      } 
    }
  } else if (type === 'lunch'){
      for (i = 0; i < restaurant.menus.lunch.length; i++){
        if (restaurant.menus.lunch[i].name === item) {
          restaurant.menus.lunch.splice(i, 1);
          return `No one is eating our ${item} - it has been removed from the ${type} menu!`;
        } 
  }
  } else if (type === 'dinner'){
      for (i = 0; i < restaurant.menus.dinner.length; i++){
        if (restaurant.menus.dinner[i].name === item) {
          restaurant.menus.dinner.splice(i, 1);
          return `No one is eating our ${item} - it has been removed from the ${type} menu!`;
        } 
    }
  }
  return `Sorry, we don't sell ${item}, try adding a new recipe!`
}

function checkForFood(restaurant, food){
  if (restaurant.menus.breakfast.includes(food) || restaurant.menus.lunch.includes(food) || restaurant.menus.dinner.includes(food)){
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