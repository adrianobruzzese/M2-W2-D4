document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  const resetButton = document.getElementById('reset');
  const apiUrl = 'https://striveschool-api.herokuapp.com/api/product/';
  const authToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhNjBmNjE4N2U1YzAwMTgxNGM3MzciLCJpYXQiOjE3MDU2NjQ3NTgsImV4cCI6MTcwNjg3NDM1OH0.vzJPr4HBsSqd0dkq16k3e6y2f6yLUBj4gS2xYgLIt_4';

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const productData = {
      name: document.getElementById('name').value,
      brand: document.getElementById('brand').value,
      price: document.getElementById('price').value,
      imageUrl: document.getElementById('image').value,
      description: document.getElementById('description').value,
    };

    // Effettua la richiesta POST all'API
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(productData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        addProductCard(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });

  resetButton.addEventListener('click', function () {
    form.reset();
  });
});

function addProductCard(wine) {
    const container = document.getElementById('productsContainer');
    
    const cardHTML = `
        <div class="card h-100">
            <img src="${wine.image}" class="card-img-top" alt="${wine.name}">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${wine.name}</h5>
                <p class="card-text flex-grow-1">${wine.description}</p>
                <p class="card-text">${wine.brand}</p>
                <a href="#" class="btn btn-primary">${wine.price}€</a>
                <a href="./details.html?wineId=${wine._id}" class="btn btn-success mt-2">VAI AI DETTAGLI</a>
            </div>
        </div>
    `;

    container.innerHTML += cardHTML;}
