const botao = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

console.log(botao);
console.log(menu);

botao.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});

document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("ativo");
    });
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