/**
 * FUNCION PARA REGISTRAR UN ERROR CUANDO LA IMAGEN NO CARGE BIEN
 */
function handleLoadError(){
  console.log("Image not loaded. ERROR! ERROR!");
}

function handleImageLoad(evt) {
 
  // Añade el elemento de la imagen al DOM después de cargar la imagen
  document.body.append(evt.target);
}

// Completa el código de esta función
function loadImage(imageUrl, loadCallback,errorCallback) {
  const img = document.createElement("img");
  img.src = imageUrl;
  img.onload = loadCallback;
  img.onerror = errorCallback;
}

loadImage(
  /* ESTA IMAGEN SI SIRVE */
  "https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/functions/moved_dog-1.jpg",

  /* ESTA IMAGEN NO SIRVE */
     /* "https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/functions/moved_dog-12345.jpg", */
  handleImageLoad,
  handleLoadError
);