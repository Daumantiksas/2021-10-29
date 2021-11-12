let books = {
    "Grozine":[
        {
            'ISBN': 'GR001',
            'year': 2022,
            'name': 'Grazuole ir pabaisa',
            'pages': 200,
            'price': 20
        },
        {
            'ISBN': 'GR002',
            'year': 2002,
            'name': 'Melisa',
            'pages': 400,
            'price': 25
        },
        {
            'ISBN': 'GR003',
            'year': 2000,
            'name': 'Raudonkepuraite',
            'pages': 150,
            'price': 15
        },
        {
            'ISBN': 'GR004',
            'year': 2000,
            'name': 'Pelene',
            'pages': 321,
            'price': 20
        }
    ],
    "Kriminaline" :[
        {
            'ISBN': 'KR001',
            'year': 2022,
            'name': 'Serlokas',
            'pages': 450,
            'price': 23
        },
        {
            'ISBN': 'KR002',
            'year': 2001,
            'name': 'Tunelis',
            'pages': 521,
            'price': 30
        },
        {
            'ISBN': 'KR003',
            'year': 2022,
            'name': 'Priedanga',
            'pages': 200,
            'price': 20
        },
        {
            'ISBN': 'KR004',
            'year': 1954,
            'name': 'Paslaptis',
            'pages': 987,
            'price': 18
        }
    ],
    "Moksline":[
        {
            'ISBN': 'MK001',
            'year': 2022,
            'name': 'Labaratorija',
            'pages': 456,
            'price': 11
        },
        {
            'ISBN': 'MK002',
            'year': 1982,
            'name': 'Gelmes',
            'pages': 563,
            'price': 24
        },
        {
            'ISBN': 'MK003',
            'year': 2022,
            'name': 'Deimantai',
            'pages': 587,
            'price': 40
        },
        {
            'ISBN': 'MK004',
            'year': 2000,
            'name': 'Gintarai',
            'pages': 258,
            'price': 23
        }
    ]
}
// for (let types in books){
//     console.log(types + ' literatura ' + books[types].length + ' Knygos')
//     console.log(' ')
//
//     for (let book of books[types]){
//         for(let data in book){
//             if(book[data] == 2022){
//                 console.log(data + ': '+ book[data] + ' (nauja knyga)')}else{
//                 console.log(data + ': '+ book[data])
//             }}
//         console.log(' ')
//     }
// }
//-----------------------------------------------------

const newObj = function (object){
    for(let types in object){
        object[types] = object[types].map(obj =>{
            let rObj = {};
            rObj.ISBN = obj.ISBN;
            rObj.year = obj.year;
            rObj.name = obj.name;
            rObj.pages = obj.pages;
            rObj.price = obj.price * 1.15;

            return rObj;
        })
    }
    return object;
}
console.log(newObj(books))
//-------------------------------------------------------
let tooLong = {};

function byName(item) {
    return item.name.length > 10;
}

for (let genre in books) {
    tooLong[genre] = books[genre].filter(byName)

}

console.log(tooLong)
//-------------------------------------------------------

for (let genre in books) {
    books[genre] = books[genre].sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }

        return 0;
    })
}
console.log(books);
