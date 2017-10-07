function groupingDishes(dishes: string[][]): string[][] {
    // read all ingrediants and store in OBJECT if not already stored
    // for each ingrediant, store the name of the dishes that have it (if more than two!)

    const ingrediants: object = {};
    let sorted: string[][] = [];

    // create the ingrediants object
    for (let di = 0; di < dishes.length; di++) {
        const d = dishes[di];

        for (let ii = 1; ii < d.length; ii++) {
            const ingrediant = d[ii];

            // if that ingrediant wasn't added to the list, create that ingrediant
            if (!ingrediants[ingrediant]) {
                ingrediants[ingrediant] = [d[0]];
            } else {
                ingrediants[ingrediant].push(d[0])
            }
        }
    }



    // remove the ingrediants that have 1 item
    for (let ingName in ingrediants) {
        if (ingrediants.hasOwnProperty(ingName)) {
            if (ingrediants[ingName].length < 2) {
                delete ingrediants[ingName];
            } else {
                ingrediants[ingName] = ingrediants[ingName].sort();
                sorted.push([ingName].concat(ingrediants[ingName]));
            }
        }
    }

    return sorted.sort((a, b) => a[0] > b[0] ? 1 : -1)
}

const dishes =
    [["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
    ["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
    ["Quesadilla", "Chicken", "Cheese", "Sauce"],
    ["Sandwich", "Salad", "Bread", "Tomato", "Cheese"]];
console.log(groupingDishes(dishes));