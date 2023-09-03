// Mark Lund - DGM 3760 - Todo Data Model
// I'm uncertain whether a functional link between the JS and HTML is desired yet so
// I'll just try and implement the JS requirements for now

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

// we need a function to put a new todoItem into the itemList
function addItemToList (givenName, givenCategory, givenDuedate) {
    let currentItem = new todoItem(givenName, givenCategory, givenDuedate)
    itemList.unshift(currentItem)
}

// and one to delete a todoItem with a specific ID - full disclosure I asked GPT for help
// with this one but I didn't copy verbatim, just some idea stuff
// I'd actually not heard of findIndex before this
function removeItemByID (givenID) {
    let theIndex = itemList.findIndex(function(itemToCheck){
        return itemToCheck.ID === givenID
    })
    itemList.splice(theIndex, 1)
}

// I get the sense that I'm misunderstanding something