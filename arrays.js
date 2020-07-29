"use strict";


// 1. printIndices
function printIndices(items) {
    for (const idx in items) {
        console.log(idx)
    }
}


// 2. everyOtherItem
function everyOtherItem(items) {
    everyOtherItem = []

    for (const item in items) {
        if (item % 2 === 0) {
            everyOtherItem.push(item)
        }
    }
    console.log(everyOtherItem)
}  


// 3. smallestNItems
function smallestNItems(items, n) {
    const sortedItems = items.sort((a,b) => a - b).slice(0,n);
    sortedItems.reverse();

    console.log(sortedItems);

}
