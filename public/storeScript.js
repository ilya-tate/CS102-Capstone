const url = '/api/v1/mom';
const container = document.querySelector('.container');

async function fetchMoms() {
  try {
    console.log('hi');
    const {
      data: { mom },
    } = await axios.get(url);
    console.log(mom);
    const tempMoms = mom
      .map((each) => {
        return `<div class="product">
      <img src="${each.image}" alt="${each.name}" class="img"/>
      <footer class='footer'>
      <p>${each.name}</p>
      <span>$${each.price}</span>
      <img src="./media/AddToCart.png"/>
      </footer>
      </div>`;
      })
      .join('');
    container.innerHTML = tempMoms;
  } catch (error) {
    console.log(error);
  }
}

fetchMoms();
