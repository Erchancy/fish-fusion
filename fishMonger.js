/*
Monger Inventory:

This module must import boatInventory from the fishingBoat module 
This module should also define and export its own function that generates its own inventory that 
restaurants can use to purchase fish for their daily menus. The returned inventory should be 
an array of objects.

The exported function must be named mongerInventory.
Each day, the fishmonger buys exactly 10 of each inexpensive (see below) fish caught by the 
fishing boat. 
If any of the fishing boat's fish quantity is less than 10, the fish monger does not buy it.
The fishmonger does not buy any fish from the boat that is priced higher than $7.50 per fish.

The fishmonger lets the chef of a restuarant specify what their maximum budget is per fish. 
For example, a chef can tell the monger that she can only spend $5.00 per fish. The function 
should then return only fish that cost $5.00 or less. This could be any amount and will be 
information that will be provided to the monger inventory function.
From your array of purchased fish, you must filter that down to the fish that meet the price 
constraint of the restaurant chef.

Once you have that final array of fish, return that array.

Example of the filter array method
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
*/

//-------------------------------------------------------------------------------------------------

//Import boatInventory
    // const { boatInventory } = require("./fishingBoat.js")


/* Create function called mongerInventory(boatInventory, price)
    the function iterates through and checks the object amount and price of boatInventory
         Declare empty fishStock array
            check if fish is lower than $7.50 per fish AND
            check if amount of fish is at least 10 and if true, push quantity of 10 to fishStock
          for fish of boatInventory
              if fish.amount >= 10 && fish.price < 7.50 {
                  fishStock.push({ id: fish.id, species: fish.species, weight: fish.weight, price: fish.price, amount: 10 })
              }
              
              ////CHEFS REQUIREMENTS
            const purchasedFish = fishStock.filter(fuction(budget)) {
                return budget >= fishStock.price 
         };
         /////////////////////////////////// POSSIBLE ALTERNATIVE ///////////////////////////////
         set empty array to purchasedFish
         for fish of fishStock
              if fish.price < price {
                  purchasedFish.push({ id: fish.id, species: fish.species, weight: fish.weight, price: fish.price, amount: fish.amount * .5 })
              }
         //////////////////////////////////////////////////////////////////////////////////////////     
         return purchasedFish
          


Export mongerInventory function
         module.exports = { mongerInventory}
*/
const { boatInventory } = require("./fishingBoat.js")

const mongerInventory = (price) => {
    let fishStock = []
    let purchasedFish = []
    for (let fish of boatInventory())
              if (fish.amount >= 10 && fish.price < 7.50) {
                  fishStock.push({ id: fish.id, species: fish.species, weight: fish.weight, price: fish.price, amount: 10 })
              }
    for (let fish of fishStock)
        if (fish.price <= price) {
                  purchasedFish.push({ id: fish.id, species: fish.species, weight: fish.weight, price: fish.price, amount: fish.amount * .5 })
              }
    return purchasedFish
}
module.exports = { mongerInventory}