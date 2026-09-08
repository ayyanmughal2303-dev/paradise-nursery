import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../redux/CartSlice";

const plants = [
// Indoor Plants
{
id: 1,
name: "Snake Plant",
price: 25,
category: "Indoor Plants",
image: "/images/snake-plant.jpg",
},
{
id: 2,
name: "Peace Lily",
price: 30,
category: "Indoor Plants",
image: "/images/peace-lily.jpg",
},
{
id: 3,
name: "Monstera",
price: 35,
category: "Indoor Plants",
image: "/images/monstera.jpg",
},
{
id: 4,
name: "Spider Plant",
price: 20,
category: "Indoor Plants",
image: "/images/spider-plant.jpg",
},
{
id: 5,
name: "Pothos",
price: 22,
category: "Indoor Plants",
image: "/images/pothos.jpg",
},
{
id: 6,
name: "ZZ Plant",
price: 28,
category: "Indoor Plants",
image: "/images/zz-plant.jpg",
},

// Flowering Plants
{
id: 7,
name: "Rose",
price: 18,
category: "Flowering Plants",
image: "/images/rose.jpg",
},
{
id: 8,
name: "Orchid",
price: 40,
category: "Flowering Plants",
image: "/images/orchid.jpg",
},
{
id: 9,
name: "Jasmine",
price: 25,
category: "Flowering Plants",
image: "/images/jasmine.jpg",
},
{
id: 10,
name: "Lavender",
price: 22,
category: "Flowering Plants",
image: "/images/lavender.jpg",
},
{
id: 11,
name: "Hibiscus",
price: 27,
category: "Flowering Plants",
image: "/images/hibiscus.jpg",
},
{
id: 12,
name: "Begonia",
price: 24,
category: "Flowering Plants",
image: "/images/begonia.jpg",
},

// Succulents
{
id: 13,
name: "Aloe Vera",
price: 20,
category: "Succulents",
image: "/images/aloe-vera.jpg",
},
{
id: 14,
name: "Echeveria",
price: 18,
category: "Succulents",
image: "/images/echeveria.jpg",
},
{
id: 15,
name: "Jade Plant",
price: 25,
category: "Succulents",
image: "/images/jade.jpg",
},
{
id: 16,
name: "Haworthia",
price: 21,
category: "Succulents",
image: "/images/haworthia.jpg",
},
{
id: 17,
name: "String of Pearls",
price: 30,
category: "Succulents",
image: "/images/string-of-pearls.jpg",
},
{
id: 18,
name: "Cactus",
price: 15,
category: "Succulents",
image: "/images/cactus.jpg",
},
];

function ProductList() {
const dispatch = useDispatch();

const cartItems = useSelector((state) => state.cart.items);

const cartCount = cartItems.reduce(
(total, item) => total + item.quantity,
0
);

const categories = [
"Indoor Plants",
"Flowering Plants",
"Succulents",
];

const handleAddToCart = (plant) => {
dispatch(addItem(plant));
};

const isInCart = (plantId) => {
return cartItems.some((item) => item.id === plantId);
};

return ( <div className="product-page">
{/* Navigation Bar */} <nav className="navbar"> <Link to="/" className="logo">
Paradise Nursery </Link>

```
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/plants">Plants</Link>
      <Link to="/cart">
        🛒 Cart ({cartCount})
      </Link>
    </div>
  </nav>

  {/* Product Listing */}
  <main className="product-list">
    <h1>Our Plants</h1>

    <p>
      Discover beautiful plants for your home and create
      your own paradise.
    </p>

    {categories.map((category) => (
      <section key={category} className="plant-category">
        <h2>{category}</h2>

        <div className="plant-grid">
          {plants
            .filter((plant) => plant.category === category)
            .map((plant) => (
              <div className="plant-card" key={plant.id}>
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="plant-image"
                />

                <h3>{plant.name}</h3>

                <p className="plant-price">
                  ${plant.price.toFixed(2)}
                </p>

                <button
                  onClick={() => handleAddToCart(plant)}
                  disabled={isInCart(plant.id)}
                >
                  {isInCart(plant.id)
                    ? "Added to Cart"
                    : "Add to Cart"}
                </button>
              </div>
            ))}
        </div>
      </section>
    ))}
  </main>
</div>
```

);
}

export default ProductList;
