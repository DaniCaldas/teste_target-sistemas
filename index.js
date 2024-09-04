const dados = require('./dados.json');
// -1
let indice = 13;
soma = 0;
for (let k = 0; k < indice; k = k + 1 ) {
    soma = soma + k;
    console.log(soma);
}

// - 2 
function fibonacci(n) {
    let fibSequence = [0, 1];
    
    while (fibSequence[fibSequence.length - 1] < n) {
        let nextValue = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
        fibSequence.push(nextValue);
    }

    return fibSequence;
}

function checkFibonacci(num) {
    const fibSequence = fibonacci(num);

    if (fibSequence.includes(num)) {
        console.log(`O número ${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${num} não pertence à sequência de Fibonacci.`);
    }
}
checkFibonacci(123)
// - 3
function FaturamentoDaDistribuidora() {
    
    let faturamentoMensal = dados;
    let menorFaturamento = faturamentoMensal.filter((faturamento => Math.min(faturamento.valor)));
    let maiorFaturamento = faturamentoMensal.filter((faturamento => Math.max(faturamento.valor)));
    
    let soma = faturamentoMensal.reduce((accum, faturamento) => accum + faturamento.valor, 0);
    let media = soma / faturamentoMensal.length;

    let diasComSuperiorMedia = faturamentoMensal.filter(faturamento => faturamento.valor > media);

    console.log( "Menor Faturamento", menorFaturamento)
    console.log("Maior Faturamento" ,maiorFaturamento)
    console.log("Dias com fatutamenro superior a media" ,diasComSuperiorMedia);
}
FaturamentoDaDistribuidora()

// - 4
function CalculoDeRepresentacao(){

    let faturamentoPorEstado = {
        SP: 67836.43,
        RJ: 36678.66,
        MG: 29229.88,
        ES: 27165.48,
        Outros: 19849.53
    };

    let totalFaturamento = Object.values(faturamentoPorEstado).reduce((accum, faturamento) => accum + faturamento, 0);

    let representacoes = Object.entries(faturamentoPorEstado).map(([estado, faturamento]) => ({
        estado,
        percentual: ((faturamento / totalFaturamento) * 100).toFixed(2)
    }));
    
    console.log(representacoes)
}
CalculoDeRepresentacao()

// - 5
function inverterString(str) {
    let invertido = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertido += str[i];
    }
    console.log(invertido);
}
inverterString("characters")
