const nome = document.querySelector(".nome")
const altura = document.querySelector(".altura")
const peso = document.querySelector(".peso")
const form = document.querySelector(".painel")
const resultado = document.querySelector(".resultado")

// Comparando resultados
const comparaImc = (resultados) => {
    // extrai nome form
    const pessoa = nome.value

    // arredondar resultado
    const resultadosFinais = + (parseFloat(resultados).toFixed(2))
    // const resultadosFinais = Math.round(resultados)

    // analisa resultados
    if (resultadosFinais < 17) {
        resultado.innerHTML = `${pessoa}, seu imc é ${resultadosFinais}. Você está muito abaixo do peso.`
        return
    } else if (resultadosFinais >= 17 && resultados < 18.5) {
        resultado.innerHTML = `${pessoa}, seu imc é ${resultadosFinais}. Você está abaixo do peso.`
        return
    } else if (resultadosFinais >= 18.5 && resultados < 25) {
        resultado.innerHTML = `${pessoa}, seu imc é ${resultadosFinais}. Você está no peso normal.`
        return
    } else if (resultadosFinais >= 25 && resultados < 30) {
        resultado.innerHTML = `${pessoa}, seu imc é ${resultadosFinais}. Você está acima do peso normal.`
        return
    } else if (resultadosFinais >= 30 && resultados < 35) {
        resultado.innerHTML = `${pessoa}, seu imc é ${resultadosFinais}. Você está com obesidade I.`
        return
    } else if (resultadosFinais >= 35 && resultados < 40) {
        resultado.innerHTML = `${pessoa}, seu imc é ${resultadosFinais}. Você está com obesidade II(severa).`
        return
    } else if (resultadosFinais >= 40) {
        resultado.innerHTML = `${pessoa}, seu imc é ${resultadosFinais}. Você está com obesidade III(mórbida).`
        return
    }
}

// cálculo IMC
const calculaImc = (altura, peso) => {
    const imc = peso / (altura * altura)
    comparaImc(imc)
}

// verificações
const verificaDados = () => {
    // Converte pra número
    let alturaN = Number(altura.value)
    let pesoN = Number(peso.value)

    // verifica se foi preenchido
    if (alturaN === 0 || pesoN === 0) {
        alert("Você não pode deixar os campos em branco!")
        return
    } else if (isNaN(alturaN) || isNaN(pesoN)) {
        alert("Você precisa escrever números!")
        return
    }
    calculaImc(alturaN, pesoN)
}

// receber o submit
const recebeSubmit = (event) => {
    event.preventDefault()
    verificaDados(form)
}

form.addEventListener("submit", recebeSubmit)