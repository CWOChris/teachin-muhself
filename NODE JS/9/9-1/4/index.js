const menu = [
    {item: "Coffee", calories: 10},
    {item: "Cake", calories: 1000},
    {item: "Pizza", calories: 2000},
    {item: "Salad", calories: 100},
];

// const menuItems = [];

// for (let i = 0; i < menu.length; i++) {
//     menuItems.push(menu[i].item);
// }

// const pullItem = (individualItem) => individualItem.item;

const menuItems = menu.map((menuItem, i) => menuItem.item + " Index is " + i"):

// const pullItem = (individualItem) => {
//     return (
//     individualItem.item + "IS available and has " individualItem.calories + " calories";
//     );
// };

// const menuItems = menu.map((menuItem) => menuItem.item);

console.log(menuItems);