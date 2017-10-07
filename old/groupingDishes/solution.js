function groupingDishes(dishes) {
    // read all ingrediants and store in OBJECT if not already stored
    // for each ingrediant, store the name of the dishes that have it (if more than two!)
    var ingrediants = {};
    var sorted = [];
    // create the ingrediants object
    for (var di = 0; di < dishes.length; di++) {
        var d = dishes[di];
        for (var ii = 1; ii < d.length; ii++) {
            var ingrediant = d[ii];
            // if that ingrediant wasn't added to the list, create that ingrediant
            if (!ingrediants[ingrediant]) {
                ingrediants[ingrediant] = [d[0]];
            }
            else {
                ingrediants[ingrediant].push(d[0]);
            }
        }
    }
    // remove the ingrediants that have 1 item
    for (var ingName in ingrediants) {
        if (ingrediants.hasOwnProperty(ingName)) {
            if (ingrediants[ingName].length < 2) {
                delete ingrediants[ingName];
            }
            else {
                ingrediants[ingName] = ingrediants[ingName].sort();
                sorted.push([ingName].concat(ingrediants[ingName]));
            }
        }
    }
    return sorted.sort(function (a, b) { return a[0] > b[0] ? 1 : -1; });
}
var dishes = [["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
    ["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
    ["Quesadilla", "Chicken", "Cheese", "Sauce"],
    ["Sandwich", "Salad", "Bread", "Tomato", "Cheese"]];
console.log(groupingDishes(dishes));
//# sourceMappingURL=solution.js.map