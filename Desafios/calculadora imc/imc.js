
const calcular = document.getElementById('calcular')


function imc () {
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1)
        let classificacao = ""
        if (valorIMC < 18.5){
            classificacao = 'Abaixo do Peso'
        }else if (valorIMC < 25) {
            classificacao = 'Peso ideal'
        }else if (valorIMC < 30) {
            classificacao = 'Acima do peso'
        }else if (valorIMC < 35){
            classificacao = 'Obesidade grau I'
        } else if (valorIMC < 40){
            classificacao = 'Obesidade grau II'
        }else {
            classificacao = 'Obesidade Morbida'
        }

        resultado.textContent = `${nome} tem o IMC ${valorIMC} e esta ${classificacao}` ;

    }else if (nome == ''){
        resultado.textContent = 'Preencha seu nome'
    }else if (altura == ''){
        resultado.textContent = 'Preencha sua altura'
    }else if (peso == ''){
        resultado.textContent = 'Preencha seu peso'
    }
    
}

calcular.addEventListener('click', imc)