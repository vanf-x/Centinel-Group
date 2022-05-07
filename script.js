document.addEventListener("DOMContentLoaded", () => {
  menuHamburguesa();
  window.addEventListener("resize", reportWindowSize);
});

//SERVICIOS
let $desplegable = document.querySelectorAll(".desplegable h3");
let $bloq = document.querySelectorAll(".bloq");

$desplegable.forEach((el, i) => {
  $desplegable[i].addEventListener("click", () => {
    $bloq.forEach((el, i) => {
      $bloq[i].classList.remove("active");
    });
    $bloq[i].classList.add("active");
  });
});
//MENU
const $nav = document.querySelector("header .nav");
const $menu = document.querySelector("header .menu");

function menuHamburguesa() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    $nav.classList.add("d-none");
    $menu.classList.remove("d-none");
    return;
  }
  $nav.classList.remove("d-none");
  $menu.classList.add("d-none");
}
$menu.addEventListener("click", () => {
  if ($nav.classList.contains("d-none")) {
    $nav.classList.remove("d-none");
    return;
  }
  $nav.classList.add("d-none");
});

const reportWindowSize = () => {
  menuHamburguesa();
};

//FORM
const $form = document.querySelector("#form");
const $name = document.querySelector("#name");
const $company = document.querySelector("#company");
const $mail = document.querySelector("#mail");
const $textArea = document.querySelector("#textArea");

const nombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
const correo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

let validacion = false;

$form.addEventListener("submit", (e) => {
  let nom = false;
  let cor = false;

  e.preventDefault();
  if (
    $name.value.trim() == "" ||
    $mail.value.trim() == "" ||
    $textArea.value.trim() == ""
  ) {
    mensaje("Aún quedan campos por completar", 1);
    return;
  }

  nom = nombre.test($name.value.trim());
  cor = correo.test($mail.value.trim());

  if (!nom) {
    mensaje("Formato de nombre incorecto", 1);
    return;
  }
  if (!cor) {
    mensaje("Formato de correo incorecto", 1);
    return;
  }

  mensaje("Correo enviado con éxito", 2);
  formReset();
});

function mensaje(mje, valor) {
  if (valor == 1) {
    const error = document.querySelector(".error");
    if (!error) {
      const div = document.createElement("div");
      div.classList.add("error");
      div.innerHTML = `
            <p>${mje}</p>
        `;
      $form.firstElementChild.append(div);
      setTimeout(() => {
        div.remove();
      }, 1500);
    }
    return;
  }

  if (valor == 2) {
    const div = document.createElement("div");
    div.classList.add("success");
    div.innerHTML = `
            <p>${mje}</p>
        `;
    $form.firstElementChild.append(div);
    setTimeout(() => {
      div.remove();
    }, 1500);
    return;
  }
}

function formReset() {
  $name.value = "";
  $mail.value = "";
  $textArea.value = "";
  $company.value = "";
}
