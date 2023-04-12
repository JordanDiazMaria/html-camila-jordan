document.addEventListener("DOMContentLoaded", () => {
  const cardAdj = [
    {
      name: "img1",
      img: "imagenes/img1.png"
    },
    {
      name: "img2",
      img: "imagenes/img2.png"
    },
    {
      name: "img3",
      img: "imagenes/img3.png"
    },
    {
      name: "img4",
      img: "imagenes/img4.png"
    },
    {
      name: "img5",
      img: "imagenes/img5.png"
    },
    {
      name: "img6",
      img: "imagenes/img6.png"
    },
    {
      name: "img1",
      img: "imagenes/img1.png"
    },
    {
      name: "img2",
      img: "imagenes/img2.png"
    },
    {
      name: "img3",
      img: "imagenes/img3.png"
    },
    {
      name: "img4",
      img: "imagenes/img4.png"
    },
    {
      name: "img5",
      img: "imagenes/img5.png"
    },
    {
      name: "img6",
      img: "imagenes/img6.png"
    }
  ];

  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];

  function crearTablero() {
    for (let i = 0; i < cardAdj.length; i++) {
      var carta = document.createElement("img");
      carta.setAttribute("src", "imagenes/reverso.png");
      carta.setAttribute("data-id", i);
      carta.addEventListener("click", voltearCarta);
      cuadricula.appendChild(carta);
    }
  }
  function verificarPareja() {
    var cards = document.querySelectorAll("img");
    const opcionUnoId = cartasEscogidasId[0];
    const opcionDosId = cartasEscogidasId[1];

    if (opcionUnoId === opcionDosId) {
      cards[opcionUnoId].setAttribute("src", "imagenes/reverso.png");
      cards[opcionDosId].setAttribute("src", "imagenes/reverso.png");
      alert("¡Diste click a la misma imagen! :(");
    } else if (cartasEscogidas[0] === cartasEscogidas[1]) {
      alert("¡Correcto :D!");
      cards[opcionUnoId].setAttribute("src", "imagenes/blank.png");
      cards[opcionDosId].setAttribute("src", "imagenes/blank.png");
      cards[opcionUnoId].removeEventListener("click", voltearCarta);
      cards[opcionDosId].removeEventListener("click", voltearCarta);
      cartasGanadas.push(cartasEscogidas);
    } else {
      cards[opcionUnoId].setAttribute("src", "imagenes/reverso.png");
      cards[opcionDosId].setAttribute("src", "imagenes/reverso.png");
      alert("¡Intenta de nuevo!");
    }
    cartasEscogidas = [];
    cartasEscogidasId = [];

    resultado.textContent = cartasGanadas.length;

    if (cartasGanadas.length === cardAdj.length / 2) {
      resultado.textContent = "¡Felicidades, encontraste todos los pares!";
    }
  }
  function voltearCarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscogidas.push(cardAdj[cardId].name);
    cartasEscogidasId.push(cardId);
    this.setAttribute("src", cardAdj[cardId].img);
    if (cartasEscogidas.length === 2) {
      setTimeout(verificarPareja, 1500);
    }
  }
  crearTablero();
});
