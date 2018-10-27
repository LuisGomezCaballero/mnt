const menu={
    "lunch":[
        "Macarrones",
        "Hamburguesa",
        'Pizza',
        'Emperador',
        'Canelones',
        'Fajitas',
        'Boquerones'    
    ],
    dinner:[
        'Nuggets de pollo',
        'Ensalada',
        'Spaghetti',
        'Tortilla',
        'Merluza',
        'Perrito',
        'Solomillo Wellington'
    ]
};

function generateMockedmenu(){
    const td = document.getElementsByTagName("td");
    console.log(td);
    console.log(td[0]);

    td[0].innerHTML = menu.lunch[0];
    td[1].innerHTML = menu.dinner[0];
    td[2].innerHTML = menu.lunch[1];
    td[3].innerHTML = menu.dinner[1];
    td[4].innerHTML = menu.lunch[2];
    td[5].innerHTML = menu.dinner[2];
    td[6].innerHTML = menu.lunch[3];
    td[7].innerHTML = menu.dinner[3];
    td[8].innerHTML = menu.lunch[4];
    td[9].innerHTML = menu.dinner[4];
    td[10].innerHTML = menu.lunch[5];
    td[11].innerHTML = menu.dinner[5];
    td[12].innerHTML = menu.dinner[6];
    td[13].innerHTML = menu.lunch[6]; 
}

