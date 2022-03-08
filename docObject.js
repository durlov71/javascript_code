// problem

const docObject = {
    name: "Mahbub",
    designation: "Neurologist",
    clinic: {
        name: "Square",
        address: {
            long: 102,
            lat: 56.5,
        },
    },
    operation: function() {
        console.log(`${this.name} is started doing operations`)

    },
}

/*
console.log(docObject);
console.log(docObject.name);
console.log(docObject.designation);
console.log(docObject.clinic.name);
console.log(docObject.clinic.address.long);  
*/
const { name, designation, clinic: { name: clinicName, address: { long, lat } } } = docObject;
console.log(clinicName);
console.log(lat);

// object traversing

for (let prop in docObject) {
    console.log(prop, docObject[prop])
}
docObject.operation()