const products = [
    {id: 1, name: "Radio",Image:"https://m.media-amazon.com/images/I/71PRP67snfL._AC_UY218_.jpg",price:690},
    {id: 2, name: "Webcam",Image:"https://m.media-amazon.com/images/I/71U+rz14e4L._AC_UY218_.jpg",price:30200},
    {id: 3, name: "Laptop",Image:"https://m.media-amazon.com/images/I/71bRz-UEILL._AC_UY218_.jpg",price:25000}, 
    {id: 4, name: "Laptop",Image:"https://m.media-amazon.com/images/I/61fDHkQ6MqL._AC_UY218_.jpg",price:40000},
    {id: 5, name: "Smart Watch",Image:"https://m.media-amazon.com/images/I/61gvNkugY4L._AC_UY218_.jpg",price:5000},
    {id: 6, name: "Cycle",Image:"https://m.media-amazon.com/images/I/81uLms3JtKL._AC_UY218_.jpg",price:15000},
    {id: 7, name: "Toy",Image:"https://m.media-amazon.com/images/I/51GAWjyDl7L._AC_UL320_.jpg",price:1200},
    {id: 8, name: "Mobile",Image:"https://m.media-amazon.com/images/I/61Io5-ojWUL._AC_UY218_.jpg",price:1500},
]

//Render products

function renderProducts(products,productList){
    const container = document.getElementById(productList);
    container.innerHTML="";
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product-item");
        productDiv.innerHTML= `
        <img src= "${product.Image}"/>
        <h3>${product.name}</h3>
        <h2>${product.price}</h2>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
        `
        container.appendChild(productDiv);
   })
}

//Add to cart

function addToCart(productId){
    const product = products.find(p =>p.id  === productId);
    let cart = JSON.parse(localStorage.getItem("cart"))||[];
    cart.push(product);
    localStorage.setItem("cart",JSON.stringify(cart));
    alert(`${product.name} is added to cart`)
    renderCart();
}

//Render items  in cart

function renderCart(){
    const cart = JSON.parse(localStorage.getItem("cart"))||[];
    const container = document.getElementById("cartItems");
    container.innerHTML="";
    if(cart.length == 0){
        container.innetrHTML="<h1>Your Cart is Empty</h1>"
    }

    cart.forEach(item => {
        const cartDiv = document.createElement("div");
        cartDiv.innerHTML=`
        <img src="${item.Image}"/>
        <h3>${item.name}</h3>
        <h2>${item.price}</h2>
        <button onclick = "removeFromCart(${item.id})">Remove</button>
        `
        container.appendChild(cartDiv);
   })
}
//search functionality
function searchProducts(query) {
    const filterProducts = products.filter(product =>
     product.name.toLocaleLowerCase() . includes(query.toLocaleLowerCase())
    )
    renderProducts(filterProducts,"productList");
}

//Add EventListener to button
document.getElementById("searchButton") ?. addEventListener("click",() => {
    const query = document.getElementById("productSearch").value;
    searchProducts(query);
})

//Sorting

function sortProducts(criteria){
    if(criteria === "price"){
         return products.sort((a,b) => a.price-b.price);
 }
 return products;
}

//Adding Event listners
document.getElementById("sortOptions")?.addEventListener("change",(Event)=>{
    const sortedProducts = sortProducts(Event.target.value);
    renderProducts(sortedProducts,"productList");
})
//Remove from cart

function removeFormCart(productId){
    let cart = JSON.parse(localStorage.getItem("cart"))||[];
    cart =cart.filter(item => item.id !== productId);
    localStorage.setItem("cart",JSON.stringify(cart));
    alert("product is removed successfully");
    renderCart();
}
//calculate subtotal
function renderSubtotal(cart){
    const subtotal = cart.reduce((total,item) => total + item.price,0);
    const subtotalContainer = document.getElementById("subtotal");
    if(cart.length > 0){
        subtotalContainer.innerHTML = `Subtotal : Rs. ${subtotal} `
   }else{
      subtotalContainer.innerHTML = `No items in the cart`
   }
}


if(document.getElementById("productList"))renderProducts(products,"productList");
if(document.getElementById("cartItems"))renderCart();  


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    


























































































































































































































































































    
    
    
    
   