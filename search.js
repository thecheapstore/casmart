// List of products with name and description (you can load this dynamically if needed)
const products = [
    { name: 'Aspirin', description: 'Pain reliever and fever reducer', url: 'product-details.html?name=Aspirin' },
    { name: 'Paracetamol', description: 'Used to treat fever and mild pain', url: 'product-details.html?name=Paracetamol' },
    { name: 'Ibuprofen', description: 'Nonsteroidal anti-inflammatory drug', url: 'product-details.html?name=Ibuprofen' },
    { name: 'Vitamin C', description: 'Boosts immune system', url: 'product-details.html?name=VitaminC' }
  ];
  
  // Function to perform search and display results
  function searchProducts() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const results = products.filter(product => 
      product.name.toLowerCase().includes(query) || 
      product.description.toLowerCase().includes(query)
    );
  
    displayResults(results);
  }
  
  // Function to display search results
  function displayResults(results) {
    const resultsContainer = document.getElementById('search-results');
    if (results.length > 0) {
      let resultsHTML = '<ul>';
      results.forEach(result => {
        resultsHTML += `<li><a href="${result.url}">${result.name}</a> - ${result.description}</li>`;
      });
      resultsHTML += '</ul>';
      resultsContainer.innerHTML = resultsHTML;
    } else {
      resultsContainer.innerHTML = '<p>No products found</p>';
    }
  }
  
  // Optional: Trigger search as the user types
  document.getElementById('search-input').addEventListener('input', searchProducts);
  