let books = {
    "Grozine":[
        {
            'ISBN': 'GR001',
            'year': 2022,
            'name': 'Grazuole ir pabaisa',
            'pages': 200
        },
        {
            'ISBN': 'GR002',
            'year': 2002,
            'name': 'Melisa',
            'pages': 400
        },
        {
            'ISBN': 'GR003',
            'year': 2000,
            'name': 'Raudonkepuraite',
            'pages': 150
        },
        {
            'ISBN': 'GR004',
            'year': 2000,
            'name': 'Pelene',
            'pages': 321
        }
    ],
    "Kriminaline" :[
            {
                'ISBN': 'KR001',
                'year': 2022,
                'name': 'Serlokas',
                'pages': 450
            },
            {
                'ISBN': 'KR002',
                'year': 2001,
                'name': 'Tunelis',
                'pages': 521
            },
            {
                'ISBN': 'KR003',
                'year': 2022,
                'name': 'Priedanga',
                'pages': 200
            },
            {
                'ISBN': 'KR004',
                'year': 1954,
                'name': 'Paslaptis',
                'pages': 987
            }
    ],
    "Moksline":[
        {
            'ISBN': 'MK001',
            'year': 2022,
            'name': 'Labaratorija',
            'pages': 456
        },
        {
            'ISBN': 'MK002',
            'year': 1982,
            'name': 'Gelmes',
            'pages': 563
        },
        {
            'ISBN': 'MK003',
            'year': 2022,
            'name': 'Deimantai',
            'pages': 587
        },
        {
            'ISBN': 'MK004',
            'year': 2000,
            'name': 'Gintarai',
            'pages': 258
        }
    ]
}
for (let types in books){
    console.log(types + ' literatura ' + books[types].length + ' Knygos')
    console.log(' ')
for (let book of books[types]){
    for(let data in book){
        if(book[data] == 2022){
            console.log(data + ': '+ book[data] + ' (nauja knyga)')}else{
                console.log(data + ': '+ book[data]) 
        }}
        console.log(' ')
    }}