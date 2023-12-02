function nameMenuItem(item) {
  return `Delicious ${item}`;
}

function createMenuItem(item, price, type) {
  var menuItem = {
    name: item,
    price: price,
    type: type,
  }
  return menuItem;
}

function addIngredients(ingredient, array){
  if (!array.includes(ingredient)){
    array.push(ingredient);
  }
  return array;
}

function formatPrice(price){
  return `$${price}`;
}

function decreasePrice(price){
  var discountPrice = price - price/10;
  return discountPrice;
}

function createRecipe(title, ingredients, type){
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: type,
  }
  return recipe;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


