let data = {
    "2d5ae478-87c7-45fa-acf9-f04aa4724421": {
        "person": "Maya",
        "phone": "+1-555-7653",
        "_id": "2d5ae478-87c7-45fa-acf9-f04aa4724421"
    },
    "6012c542-38e1-4660-ba40-1b109c40cb2f": {
        "person": "John",
        "phone": "+1-555-4986",
        "_id": "6012c542-38e1-4660-ba40-1b109c40cb2f"
    },
    "d749a819-1e41-4c65-9ce2-7b429c4ebd0d": {
        "person": "Nicolle",
        "phone": "+1-555-9124",
        "_id": "d749a819-1e41-4c65-9ce2-7b429c4ebd0d"
    }
}

console.log(Object.keys(data));
Object.keys(data).forEach(key => {
    let person = data[key].person;
    console.log(person);
})
