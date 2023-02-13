document.addEventListener("DOMContentLoaded", () => {
  const cardAdj = [
    {
      name: "img1",
      imagenes: "imagenes/img1.jpg"
    },
    {
      name: "img2",
      imagenes: "imagenes/img2.jpg"
    },
    {
      name: "img3",
      imagenes: "imagenes/img3.jpg"
    },
    {
      name: "img4",
      imagenes: "imagenes/img4.jpg"
    },
    {
      name: "img5",
      imagenes: "imagenes/img5.jpg"
    },
    {
      name: "img6",
      imagenes: "imagenes/img6.jpg"
    },
    {
      name: "img1",
      imagenes: "imagenes/img1.jpg"
    },
    {
      name: "img2",
      imagenes: "imagenes/img2.jpg"
    },
    {
      name: "img3",
      imagenes: "imagenes/img3.jpg"
    },
    {
      name: "img4",
      imagenes: "imagenes/img4.jpg"
    },
    {
      name: "img5",
      imagenes: "imagenes/img5.jpg"
    },
    {
      name: "img6",
      imagenes: "imagenes/img6.jpg"
    }
  ];
});


  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasGanadas = [];
  ///____________________________
  function crearTablero() {
    for (let i = 0; i < cardAdj.length; i++) {
      var carta = document.createElement("img");
      carta.setAttribute("src", "images/reverso.png");
      carta.setAttribute("data-id", i);
      carta.addEventListener("click", VoltearCarta);
      cuadricula.appendChild(carta);
    }
  }
});
