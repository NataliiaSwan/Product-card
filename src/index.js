const products = [
  {
    title: "Aromatherapy Candle",
    description:
      "Relax and unwind with our soothing aromatherapy candle. Perfect for evenings and meditation.",
    features: ["Natural", "Eco-Friendly", "Handmade"],
    price: "€25",
    img: "https://images.unsplash.com/photo-1727498215942-2505160188a6?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Massage Oil",
    description: "Premium massage oil for relaxation and stress relief.",
    features: ["Natural", "Eco-Friendly", "Handmade"],
    price: "€18",
    img: "https://plus.unsplash.com/premium_photo-1661445028970-80e9ee083355?q=80&w=1170&auto=format&fit=crop",
  },
  {
    title: "Herbal Tea",
    description: "Organic herbal tea to boost your mood and health.",
    features: ["Natural", "Eco-Friendly", "Handmade"],
    price: "€12",
    img: "https://images.unsplash.com/photo-1648455321715-e8ed86188c0e?q=80&w=1170&auto=format&fit=crop",
  },
  {
    title: "Bath Bomb Set",
    description: "Relaxing bath bombs with essential oils.",
    features: ["Handmade", "Scented", "Colorful"],
    price: "€20",
    img: "https://images.unsplash.com/photo-1578426720323-6d3b67133446?q=80&w=2018&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Face Mask",
    description: "Natural face mask for glowing skin.",
    features: ["Vegan", "Organic", "Soft"],
    price: "€15",
    img: "https://images.unsplash.com/photo-1702312721778-6144b4ab745f?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Essential Oil Set",
    description: "Set of 5 essential oils for relaxation.",
    features: ["Natural", "Pure", "Aromatic"],
    price: "€30",
    img: "https://images.unsplash.com/photo-1572176798680-6d676b77ada0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHxFc3NlbnRpYWwlMjBPaWwlMjBTZXR8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Herbal Soap",
    description: "Organic handmade soap bars.",
    features: ["Natural", "Eco-Friendly", "Scented"],
    price: "€10",
    img: "https://plus.unsplash.com/premium_photo-1678529870211-f96f94f0334a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Yoga Mat",
    description: "Comfortable and non-slip yoga mat.",
    features: ["Eco-Friendly", "Durable", "Lightweight"],
    price: "€35",
    img: "https://plus.unsplash.com/premium_photo-1682095458794-9a0b21dc23b0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Tea Infuser",
    description: "Stainless steel tea infuser for loose leaves.",
    features: ["Durable", "Reusable", "Easy Clean"],
    price: "€8",
    img: "https://plus.unsplash.com/premium_photo-1730833405502-e105882bad98?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Scented Candle Set",
    description: "Pack of 3 scented candles for home relaxation.",
    features: ["Scented", "Decorative", "Handmade"],
    price: "€28",
    img: "https://images.unsplash.com/photo-1636714477840-3968c444f8ed?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const container = document.getElementById("cards-container");

products.forEach((product) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${product.img}" alt="${product.title}">
    <div class="card-content">
      <h2>${product.title}</h2>
      <p>${product.description}</p>
      <div class="features">
        ${product.features
          .map((f) => `<div class="feature">${f}</div>`)
          .join("")}
      </div>
      <div class="price">${product.price}</div>
      <div class="buttons">
        <button class="buy-btn">Buy Now</button>
        <button class="info-btn">Learn More</button>
      </div>
    </div>
  `;

  // Додаємо обробник кнопки Buy Now
  const buyBtn = card.querySelector(".buy-btn");
  buyBtn.addEventListener("click", () => {
    const name = prompt("Enter your name:");
    const email = prompt("Enter your email:");
    if (name && email) {
      alert(
        `Thanks, ${name}! We'll contact you at ${email} to confirm your order of ${product.title}.`
      );
    } else {
      alert("Please fill in both fields!");
    }
  });

  // Можна додати обробник Learn More, якщо потрібно
  const infoBtn = card.querySelector(".info-btn");
  infoBtn.addEventListener("click", () => {
    alert(`More info about ${product.title} will appear here.`);
  });

  container.appendChild(card);
});
