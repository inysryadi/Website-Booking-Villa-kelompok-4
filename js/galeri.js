function openPopup(img) {
  const popup = document.getElementById("popup-gambar");
  const popupImg = document.getElementById("popup-img");
  popup.style.display = "block";
  popupImg.src = img.src;
  popupImg.alt = img.alt;
}

function closePopup() {
  document.getElementById("popup-gambar").style.display = "none";
}
