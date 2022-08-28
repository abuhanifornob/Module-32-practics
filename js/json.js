//   Javascript Object Notation is (JSON)
// Common Propertis is -JSON.stringify, JSON.parse

const shop = {
        name: "Onlunt Shop",
        address: {
            state: 'Kochukhet Paikar Para',
            city: 'Dhaka',
            country: 'Bangladesh'
        },
        revinue: 123000,
        isOpen: true,
        isNew: false
    }
    //console.log(shop);

// Convert to stringify  
const objStringify = JSON.stringify(shop);
//console.log(objStringify);

//convert JSON Stringify to parse(Orginal Object)

const convertStringifyToObject = JSON.parse(objStringify);
//console.log(convertStringifyToObject);