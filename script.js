const items = [
    {
        category: 'Fish',
        orientation: 'Landscape',
        name: 'Banana Wrasse',
        img: 'david-clode-l-QdJMZX7PU-unsplash.jpg',
        price: 35.99,
        credit: 'Photo by Mathew Schwartz on Unsplash'
    },
    {
        category: 'Insect',
        orientation: 'Landscape',
        name: 'Bee',
        img: 'usgs-F8JH5TX0hhs-unsplash.jpg',
        price: 15.99,
        credit: 'Photo by USGS on Unsplash'
    },
    {
        category: 'Insect',
        orientation: 'Landscape',
        name: 'Butterfly',
        img: 'david-clode-sD5xXDlBY7Y-unsplash.jpg',
        price: 40.99,
        credit: 'Photo by David Clode on Unsplash'
    },
    {
        category: 'Mammal',
        orientation: 'Portrait',
        name: 'Cat',
        img: 'max-baskakov-OzAeZPNsLXk-unsplash.jpg',
        price: 49.99,
        credit: 'Photo by Max Baskakov on Unsplash'
    },
    {
        category: 'Reptile',
        orientation: 'Landscape',
        name: 'Crocodile',
        img: 'rajeevan-msn-cIU4jIZDOmI-unsplash.jpg',
        price: 32.99,
        credit: 'Photo by Rajeevan MSN on Unsplash'
    },
    {
        category: 'Bird',
        orientation: 'Landscape',
        name: 'Eagle',
        img: 'zdenek-machacek-fzdVhDxAQsU-unsplash.jpg',
        price: 42.99,
        credit: 'Photo by Zdeněk Macháček on Unsplash'
    },
    {
        category: 'Bird',
        orientation: 'Landscape',
        name: 'Egret',
        img: 'mathew-schwartz-B87kwVXbKhI-unsplash.jpg',
        price: 46.99,
        credit: 'Photo by Mathew Schwartz on Unsplash'
    },
    {
        category: 'Amphibian',
        orientation: 'Portrait',
        name: 'Frog',
        img: 'drew-brown-VBvoy5gofWg-unsplash.jpg',
        price: 35.99,
        credit: 'Photo by Drew Brown on Unsplash'
    },
    {
        category: 'Mammal',
        orientation: 'Portrait',
        name: 'Horse',
        img: 'henrik-h-Xb5KYxllb2Y-unsplash.jpg',
        price: 25.99,
        credit: 'Photo by Henrik H on Unsplash'
    },
    {
        category: 'Insect',
        orientation: 'Portrait',
        name: 'Ladybug',
        img: 'kevin-grieve-ycWetpI06GU-unsplash.jpg',
        price: 20.99,
        credit: 'Photo by Kevin Grieve on Unsplash'
    },
    {
        category: 'Bird',
        orientation: 'Landscape',
        name: 'Rooster',
        img: 'ashes-sitoula-KdZvvyemkPM-unsplash.jpg',
        price: 46.99,
        credit: 'Photo by Ashes Sitoula on Unsplash'
    },
    {
        category: 'Mammal',
        orientation: 'Landscape',
        name: 'Shark',
        img: 'greg-jeanneau-pf1fMYwrEgg-unsplash.jpg',
        price: 24.99,
        credit: 'Photo by Greg Jeanneau on Unsplash'
    },
    {
        category: 'Reptile',
        orientation: 'Landscape',
        name: 'Snake',
        img: 'marius-masalar-LN_gdbQtzvk-unsplash.jpg',
        price: 27.99,
        credit: 'Photo by Marius Masalar on Unsplash'
    },
    {
        category: 'Amphibian',
        orientation: 'Portrait',
        name: 'Tortoise',
        img: 'victor-ene-CmRp_0MG8f0-unsplash.jpg',
        price: 36.99,
        credit: 'Photo by Victor Ene on Unsplash'
    }
];

function clearTable() {
    var loc = document.getElementById("main");
    var itemList = document.getElementById("itemList")
    loc.removeChild(itemList)
}

function populateItems(items, filter = 'none') {
    var x = 0
    var filtered = []

    main = document.getElementById('main')
    itemList = document.createElement('div')
    itemList.id = 'itemList'

    if (filter != 'none') {
        for (var x in items) {
            if (items[x].category == filter || items[x].orientation == filter) {
                filtered.push(items[x])
            }
        }
        var filteredBy = document.createElement('div')
        filteredBy.id = 'filterText'
        var filterText = document.createTextNode('Filtered by: ' + filter)
        filteredBy.appendChild(filterText);
        itemList.appendChild(filteredBy)
    }
    else {
        filtered = items
    }

    for (var x in filtered) {
        var item = document.createElement('div')
        item.setAttribute('class', 'item')


        var title = document.createElement('div')
        title.setAttribute('class', 'iTitle')
        titleText = document.createTextNode(filtered[x].name)
        title.appendChild(titleText)
        item.appendChild(title)

        var image = document.createElement('div')
        image.setAttribute('class', 'iImage')
        imgElement = document.createElement('img')
        imgElement.src = 'images/' + filtered[x].img
        imgElement.setAttribute('class', 'img')

        image.appendChild(imgElement)
        item.appendChild(image)

        var details = document.createElement('div')
        details.setAttribute('class', 'details')
        var category = document.createElement('div')
        category.setAttribute('class', 'iCategory')
        categoryText = document.createTextNode(filtered[x].category)
        category.appendChild(categoryText)
        details.appendChild(category)
        var spacer = document.createElement('div')
        details.appendChild(spacer)
        var price = document.createElement('div')
        price.setAttribute('class', 'iPrice')
        priceText = document.createTextNode('$' + filtered[x].price)
        price.appendChild(priceText)
        details.appendChild(price)
        item.appendChild(details)

        var credit = document.createElement('div')
        credit.setAttribute('class', 'iCredit')
        creditText = document.createTextNode(filtered[x].credit)
        credit.appendChild(creditText)
        item.appendChild(credit)

        itemList.appendChild(item)
    }
    main.appendChild(itemList)
}

window.onload = function () {
    populateItems(items)

    document.getElementById('portrait').onclick = function (e) {
        clearTable();
        populateItems(items, 'Portrait')
    }
    document.getElementById('landscape').onclick = function (e) {
        clearTable();
        populateItems(items, 'Landscape')
    }
    document.getElementById('mammal').onclick = function (e) {
        clearTable();
        populateItems(items, 'Mammal')
    }
    document.getElementById('bird').onclick = function (e) {
        clearTable();
        populateItems(items, 'Bird')
    }
    document.getElementById('reptile').onclick = function (e) {
        clearTable();
        populateItems(items, 'Reptile')
    }
    document.getElementById('amphibian').onclick = function (e) {
        clearTable();
        populateItems(items, 'Amphibian')
    }
    document.getElementById('insect').onclick = function (e) {
        clearTable();
        populateItems(items, 'Insect')
    }
    document.getElementById('clear').onclick = function (e) {
        clearTable();
        populateItems(items)
    }
}
