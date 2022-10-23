import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

function createCardsGallery(galleryItems) {
  return galleryItems
    .map((imgCard) => {
      return `<a class="gallery__item" href=${imgCard.original}>
  <img class="gallery__image" src=${imgCard.preview} alt=${imgCard.description} />
</a>`;
    })
    .join("");
}

const cardsGallery = createCardsGallery(galleryItems);
galleryRef.insertAdjacentHTML("beforeend", cardsGallery);

galleryRef.addEventListener("click", onGalleryRefClik);

function onGalleryRefClik(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

lightbox.open();
