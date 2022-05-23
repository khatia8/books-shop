const cartContainer = document.createElement('div');
cartContainer.classList.add('cart-container');
document.getElementsByTagName('body')[0].prepend(cartContainer);

const container = document.createElement('div');
container.classList.add('container');
document.getElementsByTagName('body')[0].prepend(container);

const confirmBtn = document.createElement('button');
confirmBtn.textContent = 'Confirm order';
document.getElementsByClassName('cart-container')[0].prepend(confirmBtn);

const order = document.getElementById('order');

confirmBtn.onclick = function () {
  order.style.display = 'block';
};

const onCheckboxClick = () => {
  const gifts = document.getElementsByClassName('gift');
  let temp = 0;
  for (let count = 0; count < gifts.length; count++) {
    if (gifts[count].checked == true) {
      temp = temp + 1;
    }
  }
  if (temp >= 3) {
    return false;
  }
};

const generateBookItem = (wrapper, item, modal) => {
  const img = document.createElement('img');
  img.src = item.imageLink;
  wrapper.appendChild(img);

  const wrap = document.createElement('div');
  wrapper.appendChild(wrap);

  const author = document.createElement('p');
  author.innerText = item.author;
  wrap.appendChild(author);

  const title = document.createElement('h2');
  title.innerText = item.title;
  wrap.appendChild(title);

  const price = document.createElement('p');
  price.innerText = `Price: $${item.price}`;
  wrap.appendChild(price);

  const description = document.createElement('p');
  description.innerText = item.description;
  wrap.appendChild(description);

  const showMoreBtn = document.createElement('button');
  showMoreBtn.id = 'show-more';
  showMoreBtn.textContent = 'Show more ';
  wrap.appendChild(showMoreBtn);

  const addCartBtn = document.createElement('button');
  addCartBtn.textContent = 'add To Cart';
  wrap.appendChild(addCartBtn);

  showMoreBtn.onclick = () => {
    modal.style.display = 'block';
  };

  generateCartItem(cartContainer, item, addCartBtn);
};

const generateModal = (wrapper, item) => {
  const content = document.createElement('div');
  content.className = 'modal-content';
  wrapper.appendChild(content);

  const img = document.createElement('img');
  img.src = item.imageLink;
  content.appendChild(img);

  const wrap = document.createElement('div');
  content.appendChild(wrap);

  const close = document.createElement('span');
  close.id = 'close';
  close.textContent = 'X';
  wrap.appendChild(close);

  const author = document.createElement('h2');
  author.innerHTML = item.author;
  wrap.appendChild(author);

  const description = document.createElement('p');
  description.innerHTML = item.description;
  wrap.appendChild(description);

  close.onclick = () => {
    wrapper.style.display = 'none';
  };
};

const generateCartItem = (wrapper, item, addBtn) => {
  var cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');
  wrapper.appendChild(cartItem);

  var img = document.createElement('img');
  img.src = item.imageLink;
  cartItem.appendChild(img);

  var cartPrice = document.createElement('h2');
  cartPrice.textContent = `$${item.price}`;
  cartItem.appendChild(cartPrice);

  var removeBtn = document.createElement('p');
  removeBtn.classList.add('remove');
  removeBtn.textContent = 'X';
  cartItem.appendChild(removeBtn);

  addBtn.onclick = function () {
    cartItem.style.display = 'flex';
  };
  removeBtn.onclick = function () {
    cartItem.style.display = 'none';
  };
};

fetch('./books.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((element) => {
      const bookWrapper = document.createElement('div');
      bookWrapper.classList.add('book-container');
      container.appendChild(bookWrapper);

      const modalWrapper = document.createElement('div');
      modalWrapper.className = 'modal-wrapper';
      container.appendChild(modalWrapper);

      generateBookItem(bookWrapper, element, modalWrapper);
      generateModal(modalWrapper, element);

      window.onclick = (event) => {
        if (event.target == modalWrapper) {
          modalWrapper.style.display = 'none';
        }
      };
    });
  });
