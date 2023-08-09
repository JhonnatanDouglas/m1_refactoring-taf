// Configuração de conversão de medidas

const convertMeters = 1000;
const convertSeconds = 60;

// Configuração para o gênero Masculino

const maleGender = 'male';
const maleHeight = 1.70;
let maleBarReps = 6;
let maleBarSeconds = 15;
let maleRunDistance1 = 3 * convertMeters;
let maleRunTime1 = 12 * convertSeconds;
let maleRunDistance2 = 5 * convertMeters;
let maleRunTime2 = 20 * convertSeconds;

// Configuração para o gênero Feminino

const femaleGender = 'female';
const femaleHeight = 1.60;
let femaleBarReps = 5;
let femaleBarSeconds = 12;
let femaleRunDistance1 = 4 * convertMeters;
let femaleRunTime1 = 15 * convertSeconds;
let femaleRunDistance2 = 6 * convertMeters;
let femaleRunTime2 = 22 * convertSeconds;

// Configuração em comum para os dois gêneros
let standardAbs = 41;
const standardSwimDistance = 100;
let standardSwimTime = 1 * convertSeconds;
let standardDiveTime = 30;

// Implemente aqui as funções

function gender(genderRequirement) { 
    if (genderRequirement == maleGender) { // Verifica o genero (Masculino)
        return true;
    } else if (genderRequirement == femaleGender) { // Verifica o genero (Feminino)
        return true;
    }
    return false;
}

function height(genderRequirement, heightRequirement) { 
    if (genderRequirement == maleGender && heightRequirement >= maleHeight) { // Se for Masculino:⁠ E tiver pelo menos 1,70 de altura
        return true;
    } else if (genderRequirement == femaleGender && heightRequirement >= femaleHeight) { // Se for Feminino: E tiver pelo menos 1,60 de altura
        return true;
    }
    return false;

}

function barTest(genderRequirement, barRepetitionRequirement, durationBarRequirement) { 
    if (genderRequirement == maleGender && (barRepetitionRequirement >= maleBarReps || durationBarRequirement <= maleBarSeconds)) { // Se for Masculino:⁠ Ter pelo menos 6 repetições de barra ou no máximo 15 segundos de duração
        return true; 
    } else if (genderRequirement == femaleGender && (barRepetitionRequirement >= femaleBarReps || durationBarRequirement <= femaleBarSeconds)) { // Se for Feminino: Ter pelo menos 5 repetições de barra ou no máximo 12 segundos de duração
        return true;
    }
    return false;
}

function abs(absRequirement) { 
    if (absRequirement >= standardAbs) { // Independente do gener: Ter ⁠⁠pelo menos 41 abdominais
        return true; 
    }
    return false;
}

function run(genderRequirement, runDistanceRequirement, runTimeRequirement) { 
    if (genderRequirement == maleGender && ((runDistanceRequirement >= maleRunDistance1 && runTimeRequirement <= maleRunTime1) || (runDistanceRequirement >= maleRunDistance2 && runTimeRequirement <= maleRunTime2))) { // Se for Masculino:⁠ Ter pelo menos 3km e no máximo 12 min de corrida ou pelo menos 5km em no máximo 20 min de corrida
        return true; 
    } else if (genderRequirement == femaleGender && ((runDistanceRequirement >= femaleRunDistance1 && runTimeRequirement <= femaleRunTime1) || (runDistanceRequirement >= femaleRunDistance2 && runTimeRequirement <= femaleRunTime2))) { // Se for Feminino: Ter pelo menos 4km e no máximo 15 min de corrida ou pelo menos 6km em no máximo 22 min de corrida 
        return true; 
    } 
    return false;
}

function swim(swimDistanceRequirement, swimTimeRequirement, diveTimeRequirement) { // Independente do gener: Ter pelo menos 100m em no máximo de 1 min de natação ou no máximo 30s de mergulho
    if ((swimDistanceRequirement >= standardSwimDistance && swimTimeRequirement <= standardSwimTime) || diveTimeRequirement <= standardDiveTime) {
        return true;
    }
    return false;
}

function showMessage(message) { // Mostra a mensagem em forma de texto e em maiusculo do candidato validado
    let convertToString = message.toString(); // Convertendo o booleano para string
    console.log(convertToString.toUpperCase()); // Convertendo a string para maiusculo e mostrando no console se o resultado final é TRUE ou FALSE
}

function areCandidateResultsValid(genderRequirement, heightRequirement, barRepetitionRequirement, durationBarRequirement, absRequirement, runDistanceRequirement, runTimeRequirement, swimDistanceRequirement, swimTimeRequirement, diveTimeRequirement) {
    let a = gender(genderRequirement);
    let b = height(genderRequirement, heightRequirement);
    let c = barTest(genderRequirement, barRepetitionRequirement, durationBarRequirement);
    let d = abs(absRequirement);
    let e = run(genderRequirement, runDistanceRequirement, runTimeRequirement);
    let f = swim(swimDistanceRequirement, swimTimeRequirement, diveTimeRequirement);

    if ((a && b && c && d && e && f) == true) {
        return true;
    }
    return false;
}

// Chamando a função com os parametros recebidos via script de teste
// e atribuindo a variavel que devera ser mostrada no console

const areCandidateValid = areCandidateResultsValid(
    process.argv[2],  // Genero
    process.argv[3],  // Altura
    process.argv[4],  // Repetições de barra
    process.argv[5],  // Tempo de barra em segundos
    process.argv[6],  // Abdominais
    process.argv[7],  // Distancia percorrida em metros
    process.argv[8],  // Tempo total da corrida em segundos
    process.argv[9],  // Distancia do nado em metros
    process.argv[10], // Tempo total de nado em segundos
    process.argv[11], // Tempo total de mergulho em segundos
);

// Chame aqui a função que mostra o resultado no console

showMessage(areCandidateValid); 