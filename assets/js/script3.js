let textoSticker = document.querySelector("#textConfirmar");

let seleccion1 = document.querySelector("#select1");
let seleccion2 = document.querySelector("#select2");
let seleccion3 = document.querySelector("#select3");
let texto = document.querySelector("#textoResultado");
let ingresarContrasena = document.querySelector("#ingresar");

ingresarContrasena.addEventListener("click", function () {
  if (
    seleccion1.value === "9" &&
    seleccion2.value === "1" &&
    seleccion3.value === "1"
  ) {
    texto.innerHTML = "password 1 correcto";
  } else if (
    seleccion1.value === "7" &&
    seleccion2.value === "1" &&
    seleccion3.value === "4"
  ) {
    texto.innerHTML = "password 2 correcto";
  } else {
    texto.innerHTML = "password incorrecto";
  }
});
