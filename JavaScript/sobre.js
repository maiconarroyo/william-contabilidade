let btn_hiden = document.querySelector('.icon-sobre.-menos');
let btn_show = document.querySelector('.icon-sobre.-mais');
let irf_sobre = document.querySelector('.servicos-section.-sobre');
let div_sobre = document.querySelector('#irf-divSobre');

div_sobre.addEventListener('click', function () {
    if (!irf_sobre.classList.contains('show')) {
        irf_sobre.classList.add('show');
        btn_show.style.display = "none";
        btn_hiden.style.display = "flex";
    } else {
        irf_sobre.classList.remove('show');
        btn_show.style.display = "flex";
        btn_hiden.style.display = "none";
    }
});
