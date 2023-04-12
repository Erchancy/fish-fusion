/* The boat will have many fish
        Create a dailyCatch array
     Each fish object will have four properties
        1. Species
        2. Weight
        3. Price (prices range from $3 to $10 per fish)
        4. Amount (how many of this species were caught today)

    Define a function that displays today's catch
        This function must be defined as the value of a variable named boatInventory.
        The array of fish objects will be the return value when the function is invoked (see data below).
        The array of fish must not be included in the scope of the function, but rather in scope of the module.
*/
/*
DATA for dailyCatch array:

[
    { id: 1, species: "Halibut", weight: 6, price: 3.55, amount: 30 },
    { id: 2, species: "Mackerel", weight: 3, price: 4.10, amount: 48 },
    { id: 3, species: "Salmon", weight: 5, price: 3.05, amount: 25 },
    { id: 4, species: "Walleye", weight: 2, price: 9.45, amount: 19 },
    { id: 5, species: "Sunfish", weight: 25, price: 5.18, amount: 1 },
    { id: 6, species: "Orange Roughy", weight: 4, price: 6.95, amount: 37 },
    { id: 7, species: "Tuna", weight: 18, price: 8.66, amount: 5 },
    { id: 8, species: "Puffer", weight: 2, price: 9.84, amount: 52 }
]
*/
//-------------------------------------------------------------------------------------------------

//Create function called boatInventory that returns dailyCatch
    // boatInventory = () => {
        // return dailyCatch
//         }
//Export boatInventory
    // module.exports = { boatInventory }

dailyCatch = [
    { id: 1, species: "Halibut", weight: 6, price: 3.55, amount: 30 },
    { id: 2, species: "Mackerel", weight: 3, price: 4.10, amount: 48 },
    { id: 3, species: "Salmon", weight: 5, price: 3.05, amount: 25 },
    { id: 4, species: "Walleye", weight: 2, price: 9.45, amount: 19 },
    { id: 5, species: "Sunfish", weight: 25, price: 5.18, amount: 1 },
    { id: 6, species: "Orange Roughy", weight: 4, price: 6.95, amount: 37 },
    { id: 7, species: "Tuna", weight: 18, price: 8.66, amount: 5 },
    { id: 8, species: "Puffer", weight: 2, price: 9.84, amount: 52 }];

const boatInventory = () => {
    return dailyCatch
}

module.exports = { boatInventory }
