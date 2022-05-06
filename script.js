//SERVICIOS
let $desplegable = document.querySelectorAll(".desplegable h3");
let $bloq = document.querySelectorAll(".bloq");

$desplegable.forEach((el, i)=>{
    $desplegable[i].addEventListener('click', ()=>{
        $bloq.forEach((el, i)=>{
            $bloq[i].classList.remove('active');
        })
        $bloq[i].classList.add('active');
    })
})