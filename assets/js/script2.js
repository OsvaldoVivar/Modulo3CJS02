let textoSticker = document.querySelector("#textConfirmar");

let cantidad1 = document.querySelector("#sticker1");
let cantidad2 = document.querySelector("#sticker2");
let cantidad3 = document.querySelector("#sticker3");
let confirmar = document.querySelector("#enviarConfirmacion");

confirmar.addEventListener("click", function () {
  if (
    Number(cantidad1.value) +
      Number(cantidad2.value) +
      Number(cantidad3.value) >
    10
  ) {
    textoSticker.innerHTML = "Llevas demasiados Stickers";
  } else {
    textoSticker.innerHTML =
      " llevas " +
      (Number(cantidad1.value) +
        Number(cantidad2.value) +
        Number(cantidad3.value)) +
      " stickers";
  }
});
