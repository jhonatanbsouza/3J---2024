const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo");
const tempo = document.querySelectorAll(".contador");
// guarda as divs contador na variável tempo
const tempoObjetivo1 = new Date(2023,10,25,18,0)
const tempoObjetivo2 = new Date(2024,8,25,18,0)
const tempoObjetivo3 = new Date(2024,10,25,18,0)
const tempoObjetivo4 = new Date(2024,10,25,18,0)

function calculaTempo(tempoObjetivo){
    const agora = new Date()
    let segundos
    let minutos
    let horas
    let dias
    segundos = Math.floor((tempoObjetivo-agora)/1000)
    minutos = Math.floor(segundos/60)
    horas = Math.floor(minutos/60)
    dias = Math.floor(horas/24)

    segundos = segundos%60
    minutos = minutos%60
    horas = horas%24
    // Se o meu tempo for maior que 0,
    // Senao retorn 'Prazo Finalizado'
    if (segundos >= 0){
        return `Faltam ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`
    } else {
        return 'Prazo Finalizado!'
    }    
}

tempo[0].textContent = calculaTempo(tempoObjetivo1);
tempo[1].textContent = calculaTempo(tempoObjetivo2);
tempo[2].textContent = calculaTempo(tempoObjetivo3);
tempo[3].textContent = calculaTempo(tempoObjetivo4)

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