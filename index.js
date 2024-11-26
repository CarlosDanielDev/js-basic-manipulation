const dados = [
  {
    title: "WHEY PROTEIN GRASSFED",
    subtitle: "Sabor Vanilla  do Tahiti",
    img: "./imagem-teste.png",
    variants: [
      {
        label: "UNIDADE",
        oldPrice: 174,
        currentPrice: 214,
      },
      {
        label: "KIT COM 3",
        oldPrice: 174,
        currentPrice: 214,
      },
    ],
  },
  {
    title: "WHEY PROTEIN GRASSFEDddddddd",
    subtitle: "Sabor Vanilla  do Tahiti",
    img: "./imagem-teste.png",
    variants: [
      {
        label: "UNIDADE",
        oldPrice: 174,
        currentPrice: 214,
      },
      {
        label: "KIT COM 3",
        oldPrice: 174,
        currentPrice: 214,
      },
    ],
  },
  {
    title: "WHEY PROTEIN GRASSFEDddddddd",
    subtitle: "Sabor Vanilla  do Tahiti",
    img: "./imagem-teste.png",
    variants: [
      {
        label: "UNIDADE",
        oldPrice: 174,
        currentPrice: 214,
      },
    ],
  },
];

function formatarDinheiro(valor) {
  const newValor = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);

  return newValor;
}

function renderizarComponente(item) {
  const caixa = document.createElement("div");
  caixa.classList.add("caixa");

  const containerPrincipal = document.createElement("div");

  caixa.appendChild(containerPrincipal);

  containerPrincipal.classList.add("container-principal");

  const imagem = document.createElement("img");
  imagem.setAttribute("src", item.img);

  containerPrincipal.appendChild(imagem);

  const titulo = document.createElement("h1");

  titulo.textContent = item.title;

  containerPrincipal.appendChild(titulo);

  const subtitulo = document.createElement("h2");

  subtitulo.textContent = item.subtitle;

  containerPrincipal.appendChild(subtitulo);

  const varianteContainer = document.createElement("div");

  varianteContainer.classList.add("variante-container");

  item.variants.forEach((subVariante) => {
    const variante = document.createElement("div");
    variante.classList.add("variante");

    const labelVariante = document.createElement("span");
    labelVariante.textContent = subVariante.label;

    variante.appendChild(labelVariante);

    const oldPrice = document.createElement("b");

    oldPrice.textContent = formatarDinheiro(subVariante.oldPrice);

    variante.appendChild(oldPrice);

    const currentPrice = document.createElement("strong");
    currentPrice.textContent = formatarDinheiro(subVariante.currentPrice);

    variante.appendChild(currentPrice);

    varianteContainer.appendChild(variante);
  });

  caixa.appendChild(varianteContainer);

  const button = document.createElement("button");

  button.textContent = "COMPRAR";

  caixa.appendChild(button);

  return caixa;
}

function colocarOsElementosEmTela(listaDeDados) {
  const listaHtml = document.getElementById("lista");
  listaHtml.innerHTML = "";

  listaDeDados.forEach((dado) => {
    const elemento = renderizarComponente(dado);

    listaHtml.appendChild(elemento);
  });
}

colocarOsElementosEmTela(dados);
