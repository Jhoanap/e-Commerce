fetch("product.json")//gets info
.then (response => response.json())//opens file
.then(products => {
    const productContainer = document.getElementById('container'); //grabs container ID
    products.forEach(product=> {
        const card = document.createElement('div'); //creates div 
        card.classList.add('product-card');//method used to add Css classes to html element
        card.innerHTML = `
        <img class="pdimg" src="${product.location}" alt="${product.name}"/>
        <h4 class="title">${product.name}</h4>
        <h4 class="description">${product.description}</h4>
        <h4 class="price">${product.price}<h4>
        `;
        productContainer.appendChild(card);
    });
})