
const products = [
  {
    productName: "lemon-yellow co-ord set",
    price: 15000,
    oldPrice: 20000,
    category: "best",
    image: "dress3.jpg",
    rating: "⭐⭐⭐⭐☆",
    reviews: ["very pretty!", "Worth the money. Very good quality."]
  },
  {
    productName: "desi suits set",
    price: 3000,
    oldPrice: 5000,
    category: "best",
    image: "download (2).webp",
    rating: "⭐⭐⭐⭐⭐",
    reviews: ["Stylish!", "Loved it"]
  },

  {
    productName: "floral white dress",
    price: 3500,
    oldPrice: 2000,
    category: "best",
    image: "Ai.jpg",
    rating: "⭐⭐⭐⭐⭐",
    reviews: ["Good quality!", "same as shown in image."]
  },
  
  
  {
    productName: "brown co-ord set",
    price: 2500,
    oldPrice: 4000,
    category: "new",
    image: "dress2.webp",
    rating: "⭐⭐⭐⭐☆",
    reviews: ["Comfortable!", "Good quality"]
  }
];


let cartCount = 0;

function addToCart(productName) {
  cartCount++;

  const cart = document.getElementById("cart-count");
  if (cart) {
    cart.innerText = "🛒 " + cartCount;
  }

  alert(productName + " added to cart!");
}


function displayProducts(category = "all") {
  const container = document.getElementById("product-list");
  if (!container) return;

  container.innerHTML = "";

  const filteredProducts =
    category === "all"
      ? products
      : products.filter(p => p.category === category);

  filteredProducts.forEach(p => {
    const discount = Math.round(
      ((p.oldPrice - p.price) / p.oldPrice) * 100
    );

    container.innerHTML += `
      <div class="img-card">
        <img src="${p.image}">
        <h4 class="product-name">${p.productName}</h4>

        <div class="price-box">
          <span class="new-price">₹${p.price}</span>
          <span class="old-price">₹${p.oldPrice}</span>
          <span class="discount">${discount}% off</span>
        </div>

        <div class="rating">${p.rating}</div>

        <button class="cart-btn" onclick="addToCart('${p.productName}')">
          Add to Cart
        </button>
      </div>
    `;
  });
}


function displayReviews() {
  const box = document.getElementById("reviews");
  if (!box) return;

  box.innerHTML = "";


  const customerNames = [
    "Priya Sharma",
    "Rahul Verma",
    "Sneha Das",
    "Amit Kumar",
    "Neha Gupta"
  ];

  let nameIndex = 0;

  products.forEach(p => {
    p.reviews.forEach(r => {

      const name = customerNames[nameIndex % customerNames.length];
      nameIndex++;

      box.innerHTML += `
        <div class="review-card">
          
          <div class="review-header">
            <h4>${name}</h4>
            <span class="verified">✔ Verified</span>
          </div>

          <div class="stars">${p.rating}</div>

          <p class="review-text">"${r}"</p>

          <small class="review-product">Product: ${p.productName}</small>

        </div>
      `;
    });
  });
}


const newsletterForm = document.getElementById("newsletter");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;

    if (email === "" || !email.includes("@")) {
      alert("Enter valid email");
    } else {
      alert("Subscribed successfully!");
    }
  });
}




displayProducts("all");   
displayReviews();         




const sliderImages = [
  "dress7.webp",
  "dress6.jpg",
  "dress8.jpg"
];

let currentSlide = 0;

function showSlide(index) {
  const img = document.getElementById("slider-image");
  if (!img) return;

  img.style.opacity = 0;

  setTimeout(() => {
    img.src = sliderImages[index];
    img.style.opacity = 1;
  }, 200);
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % sliderImages.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + sliderImages.length) % sliderImages.length;
  showSlide(currentSlide);
}


setInterval(nextSlide, 3000);


document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);
});