/* This module must import and invoke the function that is exported by the fish monger module. 
This module should also define a function that build an HTML version of their daily menu.

The function should return the generated HTML string. The function must be named fishMenu.

Each day, the chef visits the monger and specifies the maximum price she is able to spend per fish.
This price must be passed as an argument to the fishMenu function so that it can be passed along to 
the fishmonger function when the chef buys the fish.

If the monger has any fish at that price point or less, the chef buys 50% of the existing inventory. 
This constraint will require you to update your fish monger logic!

The chef then creates 3 different meals per fish -
a soup, a grilled dinner, and sandwich. For example, if tuna was bought, the following meals will be 
on the menu.

Tuna Soup
Tuna Sandwich
Grilled Tuna
*/

/*
Your HTML structure must match the example below. Use the same elements and the same class names.
`<h1>Menu</h1>
<article class="menu">
    <h2>${ingredients.species}</h2>
    <section class="menu__item">${ingredients.species} Soup</section>
    <section class="menu__item">${ingredients.species} Sandwich</section>
    <section class="menu__item">Grilled ${ingredients.species}</section>
</article>`
*/
//-----------------------------------------------------------------------------------------------
// Import mongerInventory
    // const { mongerInventory } = require("./fishMonger")
const { mongerInventory } = require("./fishMonger") 

// Create fishMenu function with (budget) as param
const fishMenu = (budget) => {
    ingredients = mongerInventory(budget)
    output = `<h1>Menu</h1>\n<article class="menu">`
    for (const menuItem of ingredients) {
        output += 
            `\n\t<h2>${menuItem.species}</h2>
            <section class="menu__item">${menuItem.species} Soup</section>
            <section class="menu__item">${menuItem.species} Sandwich</section>
            <section class="menu__item">Grilled ${menuItem.species}</section>`
    }
    return output += `\n</article>`
}
    // Invoke the mongerInventory function passing a price as an argument
        // declare ingredients = mongerInventory(budget)
        
        // create three dinners per fish bought using the ingredients array, returned in HTML
            // a soup
            // a grilled dinner
            // a sandwhich


// Export fishMenu
    // module.exports = { fishMenu }

module.exports = { fishMenu }