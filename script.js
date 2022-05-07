document.addEventListener('DOMContentLoaded', ()=>{
    menuHamburguesa();
    window.addEventListener("resize", reportWindowSize);
})

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
const $form = document.querySelector('#form');
const $name = document.querySelector('#name');
const $mail = document.querySelector('#mail');
const $textArea = document.querySelector('#textArea');

$form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if($name.value.trim() == '' || $mail.value.trim() == '' || $textArea.value.trim() == ''){
        mensaje('Aún quedan campos por completar');
    }
})

function mensaje(mje){
    const error = document.querySelector('.error');
    if(!error){
        const div = document.createElement('div');
        div.classList.add('error');
        div.innerHTML = `
            <p>${mje}</p>
        `;
        $form.firstElementChild.append(div);
        setTimeout(()=>{
            div.remove();
        }, 1500)
    }

}