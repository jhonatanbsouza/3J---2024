const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo");
const tempo = document.querySelectorAll(".contador");
// guarda as divs contador na variável tempo
console.log(tempo);
for(let i = 0; i < botoes.length ; i++){
    botoes[i].onclick = function(){
        for (let j = 0 ; j < botoes.length ; j++){
            botoes[j].classList.remove("ativo");
            conteudo[j].classList.remove("ativo")
        }
        botoes[i].classList.add("ativo")
        conteudo[i].classList.add("ativo")
    }
}

// Foi colocado display none na classe aba-conteudo no CSS
// Foram adicionadas as linhas 2, 7 e 10 deste arquivo
// Essas linhas servem para apagar a classe ativo de todos
// os conteúdos e adicionar a classe ativo somente
// no conteúdo relacionado com o botão que foi clicado.