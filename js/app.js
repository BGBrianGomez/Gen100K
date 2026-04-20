const ACCESS_PASSWORD = "1234";

const categories = [
  {
    key: "nuevos",
    title: "Nuevos Socios",
    icon: "🚀",
    description: "Network Marketing",
  },
  {
    key: "redes",
    title: "Redes Sociales",
    icon: "📱",
    description: "Contenido, atraccion y presencia digital",
  },
  {
    key: "publicidad",
    title: "Publicidad",
    icon: "🎯",
    description: "Campanas, anuncios y conversion",
  },
];

const videos = {
  redes: [
    {
      titulo: "Como tener un perfil profesional en Instagram, Tiktok y Wsp",
      url: "https://www.youtube.com/embed/xcbvcjeQ9Tc",
    },
    {
      titulo:
        "Herramientas para grabar contenido: Como editar como un profesional",
      url: "https://www.youtube.com/embed/-z_qoTaCoiY",
    },
    {
      titulo: "Plan de contenido para Instagram",
      url: "https://www.youtube.com/embed/N0ZPvD6lFmw?start=3183",
    },
    {
      titulo: "Plan de contenido para tiktok",
      url: "https://www.youtube.com/embed/mXjzirH717s",
    },
    {
      titulo: "Como ser viral #1",
      url: "https://www.youtube.com/embed/yYsk0h69FFQ",
    },
    {
      titulo: "Como ser viral #2",
      url: "https://www.youtube.com/embed/PXSMto4Zluw",
    },
    {
      titulo: "Como ser viral #3",
      url: "https://www.youtube.com/embed/5abIk3yWong",
    },
    {
      titulo: "Como crear marca desde 0",
      url: "https://www.youtube.com/embed/o0deC4qvYaA",
    },
    {
      titulo: "Como crear flujo por tiktok Live",
      url: "https://drive.google.com/file/d/1a-ZjBriZKt4Vo46psRz3Rv6ZFXOkv1gO/preview",
    },
    {
      titulo: "Embudo de ventas 1",
      url: "https://www.youtube.com/embed/PeA-j_eKT2M",
    },
    {
      titulo: "Embudo de ventas 2",
      url: "https://www.youtube.com/embed/2s3lL1INDOg",
    },
  ],
  publicidad: [
    {
      titulo: "Como configurar tu Facebook personal",
      url: "https://www.youtube.com/embed/HaOf6LfwAuc",
    },
    {
      titulo: "Como crear tu pagina de FB",
      url: "https://www.youtube.com/embed/EQeeP-jlbSE?start=394",
    },
    {
      titulo: "Como crear tu cuenta comercial",
      url: "https://www.youtube.com/embed/xyiFDNCl1Mo?start=41",
    },
    {
      titulo: "Como lanzar publicidad para traer prospectos en muchos paises",
      url: "https://www.youtube.com/embed/9m2CDcbaeUs",
    },
    {
      titulo:
        "Como lanzar publicidad en Facebook Ads para eventos presenciales",
      url: "https://www.youtube.com/embed/i9KczCgqVUQ?start=155",
    },
    {
      titulo: "Como tener 20 invitados en eventos presenciales",
      url: "https://www.youtube.com/embed/2op48ThAdp4",
    },
    {
      titulo: "Como hacer anuncios en Instagram",
      url: "https://www.youtube.com/embed/WnqS30mNLxs?start=24",
    },
  ],
  nuevos: [
    {
      titulo: "Porque hacer network marketing",
      url: "https://www.youtube.com/embed/L11aUY7uVlQ?start=1243",
    },
    {
      titulo: "Plan de compensacion nivel pollito",
      url: "https://www.youtube.com/embed/sHExOdSiCaQ?start=889",
    },
    {
      titulo: "Porque es importante tener metas",
      url: "https://www.youtube.com/embed/sMSmQ3aqkOM",
    },
    {
      titulo: "Plan de 15 dias para ganar 1000$",
      url: "https://www.youtube.com/embed/on4D2uylCzY?start=6",
    },
    {
      titulo: "Como hacer mi lista de contactos",
      url: "https://www.youtube.com/embed/e1lZviQ9Zbw",
      recurso: {
        label: "AGILICADOR DE MEMORIA",
        url: "https://drive.google.com/file/d/13ML0821miGl2vmL5ZJMneR3ao0mGeuyJ/view?usp=sharing",
      },
    },
    {
      titulo: "Como hacer lanzamiento efectivo",
      url: "https://www.youtube.com/embed/MhejNYVX-Cg",
    },
    {
      titulo: "Como invitar de forma efectiva a mi lista",
      url: "https://www.youtube.com/embed/zpm6dr_jGEI",
    },
    {
      titulo: "Como tener flujo de prospectos",
      url: "https://www.youtube.com/embed/Rf5mlzPueQU?start=2999",
    },
    {
      titulo: "Como promover en redes sociales",
      url: "https://www.youtube.com/embed/E9s7IlFueHk",
      extras: [
        {
          label: "Drive de imagenes y videos",
          url: "https://drive.google.com/drive/folders/1Yvh9w_-lCwu4QTAm9EXv1Ev1pfIYB43F?usp=sharing",
        },
        {
          label: "Frases",
          url: "https://drive.google.com/drive/u/0/folders/1nZZ2B8UW8nPbjrPc_-nEhVn-wNsKfCCf",
        },
      ],
    },
    {
      titulo: "Como edificar",
      url: "https://www.youtube.com/embed/_M1FgSfxHSs",
    },
    {
      titulo: "Como presentar de forma efectiva",
      url: "https://www.youtube.com/embed/gS3QFhLAu6w?start=635",
    },
    {
      titulo: "Presentacion corta",
      url: "https://www.youtube.com/embed/ym49f3vk6u4",
    },
    {
      titulo: "Presentacion pro",
      url: "https://www.youtube.com/embed/rlXpK-J2y7c",
    },
    {
      titulo: "Como hacer un cierre nivel pollito",
      url: "https://www.youtube.com/embed/UHodDf3IzXM?start=1165",
    },
    {
      titulo: "Como hacer un cierre nivel pro",
      url: "https://www.youtube.com/embed/Tq9hMkYSX4I?start=867",
    },
    {
      titulo: "Manejo de objeciones",
      url: "https://www.youtube.com/embed/C3fSRK5cLyQ",
    },
    {
      titulo: "Como hacer seguimiento",
      url: "https://www.youtube.com/embed/lXb0SGxJXyA",
    },
    {
      titulo: "Lleva un orden para tus prospectos",
      url: "https://www.youtube.com/embed/gK2UhIyGgPw",
    },
    {
      titulo: "Duplicacion y promover eventos",
      url: "https://www.youtube.com/embed/TWnJ6HGFWQI",
    },
    {
      titulo: "Plan de compensacion completo",
      url: "https://www.youtube.com/embed/K2jXopxT8Gc",
    },
  ],
};

const page = document.body.dataset.page;
let videoLoaderTimeout = null;

document.addEventListener("DOMContentLoaded", () => {
  if (page === "login") {
    initLogin();
    return;
  }

  protectPage();
  initLogout();

  if (page === "home") {
    initHome();
  }

  if (page === "categoria") {
    initCategory();
  }
});

function initLogin() {
  if (isAuthenticated()) {
    window.location.href = "home.html";
    return;
  }

  const form = document.getElementById("loginForm");
  const passwordInput = document.getElementById("password");
  const errorElement = document.getElementById("loginError");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const password = passwordInput.value.trim();

    if (password === ACCESS_PASSWORD) {
      localStorage.setItem("auth", "true");
      window.location.href = "home.html";
      return;
    }

    errorElement.textContent = "Clave incorrecta. Intenta nuevamente.";
  });
}

function initHome() {
  const grid = document.getElementById("categoriesGrid");

  grid.innerHTML = categories
    .map(
      (category) => `
        <article class="category-card" data-category="${category.key}" tabindex="0" role="button" aria-label="Abrir ${category.title}">
          <div class="category-icon">${category.icon}</div>
          <div>
            <h3>${category.title}</h3>
            <span>${category.description}</span>
          </div>
        </article>
      `,
    )
    .join("");

  grid.querySelectorAll(".category-card").forEach((card) => {
    card.addEventListener("click", () => {
      const key = card.dataset.category;
      window.location.href = `categoria.html?tipo=${encodeURIComponent(key)}`;
    });

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        card.click();
      }
    });
  });
}

function initCategory() {
  const params = new URLSearchParams(window.location.search);
  const type = params.get("tipo");
  const category =
    categories.find((item) => item.key === type) || categories[0];
  const playlist = videos[category.key] || [];

  const categoryTitle = document.getElementById("categoryTitle");
  const playlistCount = document.getElementById("playlistCount");
  const videoList = document.getElementById("videoList");

  categoryTitle.textContent = category.title;
  playlistCount.textContent = `${playlist.length} ${playlist.length === 1 ? "video" : "videos"}`;
  bindVideoLoader();

  if (!playlist.length) {
    document.getElementById("mainVideoTitle").textContent =
      "No hay videos cargados";
    document.getElementById("mainVideo").src = "";
    hideVideoLoader();
    videoList.innerHTML = `<div class="empty-state">Esta categoria no tiene videos todavia.</div>`;
    return;
  }

  renderPlaylist(playlist, 0);
  setMainVideo(playlist[0]);
}

function renderPlaylist(playlist, activeIndex) {
  const videoList = document.getElementById("videoList");

  videoList.innerHTML = playlist
    .map(
      (video, index) => `
        <button class="video-item ${index === activeIndex ? "active" : ""}" type="button" data-index="${index}">
          <span class="video-index">${index + 1}</span>
          <span>
            <h3>${video.titulo}</h3>
            <p>Clase ${index + 1}</p>
          </span>
        </button>
      `,
    )
    .join("");

  videoList.querySelectorAll(".video-item").forEach((item) => {
    item.addEventListener("click", () => {
      const nextIndex = Number(item.dataset.index);
      setMainVideo(playlist[nextIndex]);
      renderPlaylist(playlist, nextIndex);
    });
  });
}

function setMainVideo(video) {
  const iframe = document.getElementById("mainVideo");
  const title = document.getElementById("mainVideoTitle");

  showVideoLoader();
  iframe.src = video.url;
  title.textContent = video.titulo;
  updateVideoResource(video);
}

function updateVideoResource(video) {
  const resourceWrapper = document.getElementById("videoResource");
  const resourceLink = document.getElementById("videoResourceLink");
  const extraActions = document.getElementById("videoExtraActions");

  if (!resourceWrapper || !resourceLink || !extraActions) {
    return;
  }

  if (!video.recurso) {
    resourceWrapper.hidden = true;
    resourceLink.href = "#";
    resourceLink.textContent = "Abrir recurso";
  } else {
    resourceLink.href = video.recurso.url;
    resourceLink.textContent = video.recurso.label;
    resourceWrapper.hidden = false;
  }

  if (!video.extras || !video.extras.length) {
    extraActions.hidden = true;
    extraActions.innerHTML = "";
    return;
  }

  extraActions.innerHTML = video.extras
    .map(
      (item) => `
        <a
          class="video-resource-link video-resource-link-secondary"
          href="${item.url}"
          target="_blank"
          rel="noopener noreferrer"
        >${item.label}</a>
      `,
    )
    .join("");

  extraActions.hidden = false;
}

function bindVideoLoader() {
  const iframe = document.getElementById("mainVideo");

  if (!iframe || iframe.dataset.loaderBound === "true") {
    return;
  }

  iframe.addEventListener("load", () => {
    window.clearTimeout(videoLoaderTimeout);
    window.setTimeout(hideVideoLoader, 250);
  });

  iframe.dataset.loaderBound = "true";
}

function showVideoLoader() {
  const loader = document.getElementById("videoLoader");

  if (!loader) {
    return;
  }

  loader.classList.add("active");
  window.clearTimeout(videoLoaderTimeout);
  videoLoaderTimeout = window.setTimeout(hideVideoLoader, 4000);
}

function hideVideoLoader() {
  const loader = document.getElementById("videoLoader");

  if (!loader) {
    return;
  }

  loader.classList.remove("active");
}

function initLogout() {
  const logoutButton = document.getElementById("logoutButton");

  if (!logoutButton) {
    return;
  }

  logoutButton.addEventListener("click", () => {
    localStorage.removeItem("auth");
    window.location.href = "index.html";
  });
}

function protectPage() {
  if (!isAuthenticated()) {
    window.location.href = "index.html";
  }
}

function isAuthenticated() {
  return localStorage.getItem("auth") === "true";
}
