const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo");
const tempo = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date(2025,10,20);
const agora = new Date();

let segundos = Math.floor((tempoObjetivo1-agora)/1000)
let minutos = Math.floor(segundos/60)
let horas = Math.floor(minutos/60)
let dias = Math.floor(horas/24)

segundos = segundos%60
minutos = minutos%60
horas = horas%24

tempo[0].textContent = `Faltam ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`



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