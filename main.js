// Mark Lund - DGM 3760 - Todo Data

// I need a way to increment the IDs of todo items
// Maybe there's a better way to do this but for now
// we'll just assign the ID of a new item to the array's current size
// first we prepare an empty array to hold the items later
let itemList = []

// now, I'm not sure what is meant by 'data model' in the assignment but
// I think the best way to keep track of individual todo items with multiple traits
// is to use a class
// this class takes in 3 parameters from the user and sets the other 2 up
class todoItem {
    constructor(name, category, duedate) {
        this.name = name;
        this.category = category;
        this.duedtate = duedate;
        this.status = false;
        this.ID = itemList.length;
    }
}

