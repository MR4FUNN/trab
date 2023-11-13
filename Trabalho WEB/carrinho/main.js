const openShopping = document.querySelector(".shopping"),
      closeShopping = document.querySelector(".closeShopping"),
      body = document.querySelector("body"),
      list= document.querySelector(".list"),
      listCard = document.querySelector(".listCard"),
      total = document.querySelector(".total"),
      quantity = document.querySelector(".quantity")


openShopping.addEventListener("click", () => {
    body.classList.add("active");
})

closeShopping.addEventListener("click", () => {
    body.classList.remove("active")
})

let products = [
    {
        "id": 1,
        "name": "PRODUTO 1",
        "image":"1.png",
        "price": 2000
    },
    {
        "id": 2,
        "name": "PRODUTO 2",
        "image":"2.png",
        "price": 2200
    },
    {
        "id": 3,
        "name": "PRODUTO 3",
        "image":"3.png",
        "price": 2400
    },
    {
        "id": 4,
        "name": "PRODUTO 4",
        "image":"4.png",
        "price": 2600
    },
    {
        "id": 5,
        "name": "PRODUTO 5",
        "image":"5.png",
        "price": 1400
    },
    {
        "id": 6,
        "name": "PRODUTO 6",
        "image":"6.png",
        "price": 1800
    },
    {
        "id": 7,
        "name": "PRODUTO 7",
        "image":"7.png",
        "price": 1800
    },
    {
        "id": 8,
        "name": "PRODUTO 8",
        "image":"8.png",
        "price": 1800
    },
    {
        "id": 9,
        "name": "PRODUTO 9",
        "image":"9.png",
        "price": 1800
    },
    {
        "id": 10,
        "name": "PRODUTO 10",
        "image":"10.png",
        "price": 3500
    }
]


let listCards = [];

const initApp = () => {
    products.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
            <img src = "img/${value.image}">
            <div class = "title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick = "addToCard(${key})">Adicionar</button>
        `;
        list.appendChild(newDiv)
    })
}

initApp()


const addToCard = key => {
    if(listCards[key] == null) {
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        
        listCards[key].quantity = 1;
    
    }

    reloadCard()
}

const reloadCard = () => {
    listCard.innerHTML = "";
    let count = 0;
    let totalPrice= 0;

    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price
        count = count + value.quantity;

        if(value != null) {
            let newDiv = document.createElement("li");
            newDiv.innerHTML = `
                <div><img src = "img/${value.image}"></div>
                <div class = "cardTitle">${value.name}</div>
                <div class = "cardPrice">${value.price.toLocaleString()}</div>

                <div>
                    <button style = "background-color:#560bad;" class = "cardButton" onclick = "changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class = "count">${value.quantity}</div>
                    <button style = "background-color:#560bad;" class = "cardButton" onclick = "changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `
            listCard.appendChild(newDiv)
        }

        total.innerText = totalPrice.toLocaleString();
        quantity.innerText = count;
    })
}


const changeQuantity = (key, quantity) => {
    if(quantity == 0) {
        delete listCards[key]
    }
    else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price
    }
    reloadCard()
}