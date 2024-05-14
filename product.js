fetch_master("https://dummyjson.com/products").then(
    function (value) { 
            x = value;
            make_div(x);
        },
    function (error) { alert("Database Error!") }
);

const grid_container = document.getElementById("grid-container");

function make_div(arr){
    let items = arr.products;
    let len = items.length;

    for(let i = 0; i<len; i++){
        // Create the main div element
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-items';

        // Create the product image div and append the image
        const productImageDiv = document.createElement('div');
        productImageDiv.className = 'product_image';
        const productImage = document.createElement('img');
        productImage.src = items[i].thumbnail;
        productImageDiv.appendChild(productImage);

        // Create the product title div
        const productTitle = document.createElement('div');
        productTitle.className = 'product_title text-margin';
        productTitle.textContent = items[i].title;

        // Create the product price div
        const productPrice = document.createElement('div');
        productPrice.className = "product_price text-margin'"
        productPrice.textContent = '$' + items[i].price;

        // Create the product description div
        const productDesc = document.createElement('div');
        productDesc.className = 'product_desc text-margin';
        productDesc.textContent = items[i].description;

        // Append all the child elements to the main div
        gridItem.appendChild(productImageDiv);
        gridItem.appendChild(productTitle);
        gridItem.appendChild(productPrice);
        gridItem.appendChild(productDesc);

        grid_container.appendChild(gridItem);

    }
}