function cotarhapvidaambulatorial(){
    var totalPessoas = 0;
    var valorTotal = parseInt(0);

    if(document.getElementById('018').value > 0){
        let resultado = (document.getElementById('018').value * 103.52).toFixed(2);
        document.getElementById('resultado018').innerHTML = '0 - 18: \t' + document.getElementById('018').value + '\tR$' +  resultado;
        totalPessoas = totalPessoas + parseFloat(document.getElementById('018').value);
        valorTotal = valorTotal + resultado;
    }
    if(document.getElementById('1923').value > 0){
        let resultado = (document.getElementById('1923').value * 136.20).toFixed(2);
        document.getElementById('resultado1923').innerHTML = '19-23: \t' + document.getElementById('1923').value + '\tR$' + resultado;
        totalPessoas = totalPessoas + parseFloat(document.getElementById('1923').value);
        valorTotal = valorTotal + resultado;
    }

    

    if(totalPessoas > 0 && valorTotal > 0){
        document.getElementById('resultadoQuantidadeDePessoas').innerHTML = totalPessoas;
        document.getElementById('resultadoValorFinal').innerHTML = 'Total: \tR$' + valorTotal;
    }
}












































/*
    if(document.getElementById('1923').value > 0){
        document.getElementById('resultado1923').innerHTML = '19-23: \t' + document.getElementById('1923').value + '\tR$' + (document.getElementById('1923').value * 136.20).toFixed(2);
        totalPessoas = totalPessoas + parseInt(document.getElementById('1923').value);
        valorTotal = valorTotal + parseInt((document.getElementById('1923').value * 136.20));
    }
    if(document.getElementById('2428').value > 0) {
        document.getElementById('resultado2428').innerHTML = '24-28: \t' + document.getElementById('2428').value + '\tR$' + (document.getElementById('2428').value * 155.20);
        totalPessoas = totalPessoas + parseInt(document.getElementById('2428').value);
        valorTotal = valorTotal + parseInt((document.getElementById('2428').value * 155.20));
    }
    if(document.getElementById('2933').value > 0) {
        document.getElementById('resultado2933').innerHTML = '29-33: \t' + document.getElementById('2933').value + '\tR$' + (document.getElementById('2933').value * 173.08);
        totalPessoas = totalPessoas + parseInt(document.getElementById('2933').value);
        valorTotal = valorTotal + parseInt((document.getElementById('2933').value * 173.08));
    }
    if(document.getElementById('3438').value > 0) {
        document.getElementById('resultado3438').innerHTML = '34-38: \t' + document.getElementById('3438').value + '\tR$' + (document.getElementById('3438').value * 182.13);
        totalPessoas = totalPessoas + parseInt(document.getElementById('3438').value);
        valorTotal = valorTotal + parseInt((document.getElementById('3438').value * 182.13));
    }
    if(document.getElementById('3943').value > 0) {
        document.getElementById('resultado3943').innerHTML = '39-43: \t' + document.getElementById('3943').value + '\tR$' + (document.getElementById('3943').value * 204.42);
        totalPessoas = totalPessoas + parseInt(document.getElementById('3943').value);
        valorTotal = valorTotal + parseInt((document.getElementById('3943').value * 204.42));
    }
    if(document.getElementById('4448').value > 0) {
        document.getElementById('resultado4448').innerHTML = '44-48: \t' + document.getElementById('4448').value + '\tR$' + (document.getElementById('4448').value * 289.89);
        totalPessoas = totalPessoas + parseInt(document.getElementById('4448').value);
        valorTotal = valorTotal + parseInt((document.getElementById('4448').value * 289.89));
    }
    if(document.getElementById('4953').value > 0) {
        document.getElementById('resultado4953').innerHTML = '49-53: \t' + document.getElementById('4953').value + '\tR$' + (document.getElementById('4953').value * 346.43);
        totalPessoas = totalPessoas + parseInt(document.getElementById('4953').value);
        valorTotal = valorTotal + parseInt((document.getElementById('4953').value * 346.43));
    }
    if(document.getElementById('5458').value > 0) {
        document.getElementById('resultado5458').innerHTML = '54-58: \t' + document.getElementById('5458').value + '\tR$' + (document.getElementById('5458').value * 466.84);
        totalPessoas = totalPessoas + parseInt(document.getElementById('5458').value);
        valorTotal = valorTotal + parseInt((document.getElementById('5458').value * 466.84));
    }
    if(document.getElementById('59+').value > 0) {
        document.getElementById('resultado59+').innerHTML = '59 + : \t' + document.getElementById('59+').value + '\tR$' + (document.getElementById('59+').value * 606.21);
        totalPessoas = totalPessoas + parseInt(document.getElementById('59+').value);
        valorTotal = valorTotal + parseInt((document.getElementById('59+').value * 606.21));
    }
*/