
//Lista de nomes de todas as imagens
let listImage = ["bolo-baunilia-morango", "bolo-brigadeirinho", "bolo-cafe", "bolo-cenourinha", "bolo-chocolate-chantily", "bolo-frutas-vermelhas", "bolo-morango", "bolo-torre-chocolate", "bolo-torre", "bolo-uva-ninho", "brauly-nutella", "cupcake"];

//Index inicial para pegar imagem
let index = 0;

function changeImage(c) {
    
    index += c;

    if(index > listImage.length -1) index = 0;
    else if(index < 0) index = listImage.length-1;

    document.getElementById("img-change").src="../culinaria/images/"+listImage[index]+".jpg";

    return index;
}

setInterval(changeImage, 2500, 1);