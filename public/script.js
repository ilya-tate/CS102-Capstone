const url = '/api/v1/mom';
const fileFormDOM = document.querySelector('.momForm');

const nameInput = document.querySelector('#name');
const priceInput = document.querySelector('#price');
const ageInput = document.querySelector('#age');
const imageInput = document.querySelector('#image');
const momForm = document.querySelector('.momForm');

const container = document.querySelector('.container');
let imageValue;
console.log(momForm);
momForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const nameValue = nameInput.value;
  const priceValue = priceInput.value;
  const ageValue = ageInput.value;

  try {
    const mom = {
      name: nameValue,
      price: priceValue,
      age: ageValue,
      image: imageValue,
    };

    await axios.post(url, mom);
    fetchMoms();
  } catch (error) {
    console.log(error);
  }
});

imageInput.addEventListener('change', async (e) => {
  const imageFile = e.target.files[0];
  const formData = new FormData();
  formData.append('image', imageFile);
  // console.log([...formData.keys()]);

  try {
    const {
      data: {
        image: { src },
      },
    } = await axios.post(`/api/v1/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    imageValue = src;
  } catch (err) {}
});

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
      <footer>
      <p>${each.name}</p>
      <span>${each.price}</span>
      <img src="/public/media/AddToCart.png"/>
      </footer>
      </div>`;
      })
      .join('');
  } catch (error) {
    console.log(error);
  }
}

fetchMoms();
