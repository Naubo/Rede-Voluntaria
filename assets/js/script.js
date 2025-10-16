// Script para navegação automática do slider
let count = 1;
document.getElementById("radio1").checked = true;

// Mudar de imagem a cada 5 segundos
setInterval( function(){
    nextImage();
}, 5000)

// Função para passar para a próxima imagem
function nextImage(){
    count++;
    if(count>3){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}