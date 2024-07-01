
const gallery = document.querySelector('.gallery');

const galleryItemsHTML = images.map(image => {
  const li = document.createElement('li');
  const img = document.createElement('img');
  img.src = image.url;
  img.alt = image.alt;
  li.appendChild(img);
  return li.outerHTML;
}).join('');

gallery.insertAdjacentHTML('beforeend', galleryItemsHTML);