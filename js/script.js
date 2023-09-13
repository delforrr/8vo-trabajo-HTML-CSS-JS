const botonOmnitrix = document.querySelector("#containerOmnitrix");
const pantallaOmnitrix = document.querySelector(".alien");
const sonidoOmnitrix = document.querySelector("#sonidoOmnitrix");
const botonMusica = document.querySelector("#botonMusica");
const música = document.querySelector("#opening");
let imagenes = [
  "imagenes/acuatico.png",
  "imagenes/bestia.png",
  "imagenes/cannonbolt.png",
  "imagenes/cuatro brazos.png",
  "imagenes/diamante.png",
  "imagenes/fantasmatico.png",
  "imagenes/fuego.png",
  "imagenes/insectoide.png",
  "imagenes/materia gris.png",
  "imagenes/ultra t.png",
  "imagenes/xlr8.png",
];

function usarOmnitrix() {
  let random = parseInt(Math.random() * imagenes.length);
  return imagenes[random];
}

botonOmnitrix.addEventListener("click", () => {
  pantallaOmnitrix.setAttribute("src", usarOmnitrix());
  sonidoOmnitrix.play();
});

botonMusica.addEventListener("click", () => {
  if (música.paused) {
    música.load();
    música.play();
  } else {
    música.pause();
  }
});
