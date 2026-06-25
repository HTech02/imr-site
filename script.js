const botao = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

botao.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});

const lightbox = document.getElementById("lightbox");
const imagem = document.getElementById("imagem-lightbox");

document.querySelectorAll(".galeria img").forEach(img => {

    img.onclick = () => {

        lightbox.style.display = "flex";
        imagem.src = img.src;

    }

});

lightbox.onclick = () => {

    lightbox.style.display = "none";

}