let btn_btn = document.querySelector('.btn_btn')

let navbar_ativo = document.querySelector('.navbar_ativo')

btn_btn.addEventListener('click', ()=>{
    navbar_ativo.classList.toggle('navbar')
})