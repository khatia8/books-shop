const container = document.createElement('div');
container.classList.add('container');
document.getElementsByTagName('body')[0].prepend(container);

const generateBookItem = (wrapper, item) => {
  const img = document.createElement('img');
  img.src = item.imageLink;
  wrapper.appendChild(img);

  const author = document.createElement('p');
  author.innerText = item.author;
  wrapper.appendChild(author);

  const title = document.createElement('h2');
  title.innerText = item.title;
  wrapper.appendChild(title);

  const price = document.createElement('p');
  price.innerText = `Price: $${item.price}`;
  wrapper.appendChild(price);

  const description = document.createElement('p');
  description.innerText = item.description;
  wrapper.appendChild(description);

  const showMoreBtn = document.createElement('button');
  showMoreBtn.id = 'show-more';
  showMoreBtn.textContent = 'Show more ';
  wrapper.appendChild(showMoreBtn);

  const addCartBtn = document.createElement('button');
  addCartBtn.textContent = 'add To Cart';
  wrapper.appendChild(addCartBtn);
};

const generateModal = (wrapper, item) => {
  const content = document.createElement('div');
  content.className = 'modal-content';
  wrapper.appendChild(content);

  const img = document.createElement('img');
  img.src = item.imageLink;
  content.appendChild(img);

  const author = document.createElement('h2');
  author.innerHTML = item.author;
  content.appendChild(author);

  const description = document.createElement('p');
  description.innerHTML = item.description;
  content.appendChild(description);

  const close = document.createElement('span');
  close.id = 'close';
  close.textContent = 'X';
  content.appendChild(close);
};

const buttonClicksListener = (wrapper) => {
  const showMore = document.getElementById('show-more');
  const close = document.getElementById('close');

  if (showMore) {
    showMore.onclick = () => {
      wrapper.style.display = 'block';
    };
  }

  if (close) {
    close.onclick = () => {
      wrapper.style.display = 'none';
    };
  }

  window.onclick = (event) => {
    if (event.target == wrapper) {
      wrapper.style.display = 'none';
    }
  };
};

fetch('./books.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    data.forEach((element) => {
      const bookWrapper = document.createElement('div');
      bookWrapper.classList.add('container');
      container.appendChild(bookWrapper);

      const modalWrapper = document.createElement('div');
      modalWrapper.className = 'modal-wrapper';
      container.appendChild(modalWrapper);

      generateBookItem(bookWrapper, element);
      generateModal(modalWrapper, element);
      buttonClicksListener(modalWrapper);
    });
  });
