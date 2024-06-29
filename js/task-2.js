const gallery = document.querySelector('.gallery');
const galleryMarkup = images.map(({ url, alt }) => `
  <li class="gallery-item">
    <img src="${url}" alt="${alt}">
  </li>
`).join('');
gallery.insertAdjacentHTML('beforeend', galleryMarkup);