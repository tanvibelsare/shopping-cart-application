fetch( "https://fakestoreapi.com/products")
.then((response)=> response.json())
.then((data )=>{ 
  // console.log("data",data)
  // Add color and size to each product
  const products = data.map(product => {
    const color = getRandomColor();
    const size = getRandomSize();
    return { ...product, color, size };
  });
  // console.log(products)
  localStorage.setItem("products",JSON.stringify(products))
  // Initial page load
  // renderProducts(products);
})

.catch((error) => {
  console.log("Error fetching products:", error);
});


function getRandomColor() {
const colors = ["red", "blue", "green", "yellow", "purple"];
const randomIndex = Math.floor(Math.random() * colors.length);
return colors[randomIndex];
}

function getRandomSize() {
const sizes = ["S", "M", "L", "XL"];
const randomIndex = Math.floor(Math.random() * sizes.length);
return sizes[randomIndex];
}
let myProduct=JSON.parse(localStorage.getItem("products"))
const search=document.getElementById("Search")
myProduct.filter((item)=>item.title.includes(search.value))
console.log(myProduct)