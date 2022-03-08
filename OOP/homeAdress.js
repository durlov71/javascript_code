// Create Object using factory and constructor functions
const homeAdress1 = homeAdd('A', 'B', 'C')
const homeAdress2 = homeAdd('D', 'E', 'F')

const home1 = new HomeAdress('13/7', 'Dhaka', 'Bangladesh')
const home2 = new HomeAdress('14/2', 'Block H', '')

function homeAdd(street, city, country) {
    const adress = {
        street,
        city,
        country,
    };
    return adress;
}

function HomeAdress(street, city, zipcode) {

    this.street = street;
    this.city = city;
    this.country = zipcode;
}

console.log(homeAdress1)
console.log(homeAdress2)

console.log(home1)
console.log(home2)