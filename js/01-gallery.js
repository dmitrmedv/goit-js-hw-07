import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

function createCardsGallery(galleryItems) {
  return galleryItems
    .map((imgCard) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href= ${imgCard.original}>
    <img
      class="gallery__image"
      src=${imgCard.preview}
      data-source=${imgCard.original}
      alt=${imgCard.description}
    />
  </a>
</div>`;
    })
    .join("");
}

const cardsGallery = createCardsGallery(galleryItems);
galleryRef.insertAdjacentHTML("beforeend", cardsGallery);

galleryRef.addEventListener("click", onGalleryRefClik);

function onGalleryRefClik(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
  <img src='${event.target.dataset.source}' width='800' height='600'>
  `);

  instance.show();

  galleryRef.addEventListener("keydown", onEsc);

  function onEsc(event) {
    if (event.code === "Escape") {
      instance.close();
      galleryRef.removeEventListener("keydown", onEsc);
    }
  }
  event.preventDefault();
}
