const container = document.createElement('div');
container.classList.add('container');
document.getElementsByTagName('body')[0].prepend(container);

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

      const img = document.createElement('img');
      img.src = element.imageLink;
      bookWrapper.appendChild(img);

      const author = document.createElement('p');
      author.innerText = element.author;
      bookWrapper.appendChild(author);

      const title = document.createElement('h2');
      title.innerText = element.title;
      bookWrapper.appendChild(title);

      const price = document.createElement('p');
      price.innerText = `Price: $${element.price}`;
      bookWrapper.appendChild(price);

      const description = document.createElement('p');
      description.innerText = element.description;
      bookWrapper.appendChild(description);
    });
  });
