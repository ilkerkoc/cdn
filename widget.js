document.addEventListener("DOMContentLoaded", function () {
  const head = document.head;
  const body = document.body;

  // Meta ve stil
  head.innerHTML += `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fındık Ürünleri</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
      .mosaic-img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        display: block;
        transition: transform 0.3s;
      }
      .mosaic-img:hover {
        transform: scale(1.05);
      }
      .kare { height: 204px; }
      .image-container { position: relative; overflow: hidden; }
      .overlay-top-left, .overlay-top-right, .overlay-top-center,
      .overlay-center, .overlay-bottom-left {
        position: absolute; z-index: 10;
      }
      .overlay-top-left { top: 1rem; left: 1rem; }
      .overlay-top-right { top: 1rem; right: 1rem; text-align: right; }
      .overlay-top-center { top: 5rem; left: 50%; transform: translateX(-50%); text-align: center; }
      .overlay-center { top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; }
      .overlay-bottom-left { bottom: 1rem; left: 1rem; }
      .text-white-bold {
        color: white; font-weight: 600; font-size: 3rem; line-height: 1.3;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
        font-family: 'Jost', sans-serif;
      }
      .text-green-bold {
        color: #6B7B3A; font-weight: 600; font-size: 2.5rem; line-height: 1.1;
        font-family: 'Jost', sans-serif;
      }
      .text-black-bold {
        color: #000; font-weight: 600; font-size: 3rem; line-height: 1.3;
        text-transform: uppercase; letter-spacing: 0.1em;
        font-family: 'Jost', sans-serif;
      }
      .text-extra-small { font-size: 1rem; }
      .text-small { font-size: 1.25rem; }
      .text-medium { font-size: 1.5rem; }
      .text-large { font-size: 3rem; }
      .text-extra-large { font-size: 2.5rem; }
      .text-huge { font-size: 3rem; }
    </style>
  `;

  body.className = "bg-gray-100 min-h-screen flex flex-col items-center py-8";
  body.innerHTML = `
    <h1 class="text-3xl font-bold mb-8 text-green-bold">Fındık Ürünleri</h1>
    <div class="w-full max-w-7xl px-4">
      <div class="grid grid-cols-8 grid-rows-4 gap-5">
        ${[
          { col: 1, row: 1, cs: 2, rs: 2, img: "banner_dik_2.jpg", text: "KABUKLU<br />FINDIK", pos: "overlay-top-center", cls: "text-black-bold text-large" },
          { col: 3, row: 1, cs: 2, rs: 2, img: "banner_dik_1.jpg", text: "NATUREL<br />FINDIK", pos: "overlay-center", cls: "text-white-bold text-large" },
          { col: 1, row: 3, cs: 2, rs: 2, img: "banner_dik_3.jpg", text: "KAVRULMUŞ<br />FINDIK", pos: "overlay-center", cls: "text-white-bold text-large" },
          { col: 3, row: 3, cs: 2, rs: 2, img: "banner_dik_4.jpg", text: "PİKOLO</br> FINDIK", pos: "overlay-center", cls: "text-white-bold text-large" },
          { col: 5, row: 1, cs: 2, rs: 1, img: "banner_kare_1.jpg", text: "Fındık<br />Kreması", pos: "overlay-top-right", cls: "text-green-bold text-extra-large", kare: true },
          { col: 7, row: 1, cs: 2, rs: 1, img: "banner_kare_3.jpg", text: "Krokan", pos: "overlay-top-left", cls: "text-white-bold text-huge", kare: true },
          { col: 5, row: 2, cs: 2, rs: 1, img: "banner_kare_5.jpg", text: "Fındık<br />Kreması", pos: "overlay-top-left", cls: "text-white-bold text-large", kare: true },
          { col: 7, row: 2, cs: 2, rs: 2, img: "banner_kare_7.jpg", text: "Çay", pos: "overlay-top-left", cls: "text-white-bold text-extra-large", kare: true },
          { col: 5, row: 3, cs: 2, rs: 1, img: "banner_kare_2.jpg", text: "Çikolata", pos: "overlay-top-left", cls: "text-white-bold text-huge", kare: true },
          { col: 7, row: 3, cs: 2, rs: 2, img: "banner_kare_4.jpg", text: "Fındık</br>Ezmesi", pos: "overlay-top-left", cls: "text-white-bold text-huge", kare: true },
          { col: 5, row: 4, cs: 2, rs: 1, img: "banner_kare_6.jpg", text: "Pestil<br />Köme", pos: "overlay-top-left", cls: "text-white-bold text-large", kare: true },
          { col: 7, row: 4, cs: 2, rs: 1, img: "banner_kare_6.jpg", text: "Pestil<br />Köme", pos: "overlay-top-left", cls: "text-white-bold text-large", kare: true },
        ].map(item => `
          <div class="col-span-${item.cs} row-span-${item.rs} col-start-${item.col} row-start-${item.row}">
            <div class="rounded-lg overflow-hidden bg-white image-container">
              <div class="${item.pos}">
                <h3 class="${item.cls}">${item.text}</h3>
              </div>
              <img src="${item.img}" alt="${item.img}" class="mosaic-img ${item.kare ? 'kare' : ''}">
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
});
