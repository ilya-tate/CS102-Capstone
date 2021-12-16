const url = '/api/v1/cart/61bbbae97b0f16969a334b1f';
const container = document.getElementById('container');

async function fetchCart() {
  try {
    console.log('hi');
    const {
      data: { cart },
    } = await axios.get(url);
    console.log(cart);
    const tempCart = cart.items
      .map(async (each) => {
        console.log(each);
        const product = await axios.get(`/api/v1/mom/${each._id}`);
        console.log(product);
        return `<div class="product">
      <img src="${product.image}" alt="${product.name}" class="img"/>
      <footer class='footer'>
      <p>${product.name}</p>
      <span>$${product.price}</span>
      <img src="./media/-1.png"/>
      <img src="./media/+1.png"/>
      </footer>
      </div>`;
      })
      .join('');
    container.innerHTML = tempCart;
  } catch (error) {
    console.log(error);
  }
}

fetchCart();
