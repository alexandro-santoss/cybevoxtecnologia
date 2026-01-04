const banners = [
  {
    title: "Tecnologia de Verdade é na CyberVox",
    desc: "Hardware, periféricos e informática com entrega rápida.",
    img: "https://via.placeholder.com/520x320?text=CyberVox+Hardware"
  },
  {
    title: "Ofertas Imperdíveis",
    desc: "Os melhores preços em periféricos e acessórios.",
    img: "https://via.placeholder.com/520x320?text=Ofertas+CyberVox"
  },
  {
    title: "Monte seu Setup",
    desc: "Tudo para seu PC gamer ou escritório.",
    img: "https://via.placeholder.com/520x320?text=Setup+Gamer"
  }
];

let index = 0;

setInterval(() => {
  index = (index + 1) % banners.length;
  document.getElementById("hero-title").innerText = banners[index].title;
  document.getElementById("hero-desc").innerText = banners[index].desc;
  document.getElementById("hero-img").src = banners[index].img;
}, 5000);
