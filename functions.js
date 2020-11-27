function cotarhapvidaambulatorial(){
    var totalPessoas = 0;
    var totalValor = 0;

    if(document.getElementById('018').value > 0){
        let totalValorParcial = document.getElementById('018').value * 103.52;
        let totalPessoasParcial = document.getElementById('018').value;

        totalPessoas = totalPessoas + totalPessoasParcial;
        totalValor = totalValor + totalValorParcial;
    }
    if(document.getElementById('1923').value > 0){
        let totalValorParcial = document.getElementById('1923').value * 136.20;
        let totalPessoasParcial = document.getElementById('1923').value;

        totalPessoas = parseInt(totalPessoas) + parseInt(totalPessoasParcial);
        totalValor = totalValor + totalValorParcial;
    }
    if(document.getElementById('2428').value > 0){
        let totalValorParcial = document.getElementById('2428').value * 155.20;
        let totalPessoasParcial = document.getElementById('2428').value;

        totalPessoas = parseInt(totalPessoas) + parseInt(totalPessoasParcial);
        totalValor = totalValor + totalValorParcial;
    }
    


    


    if(totalPessoas > 0 && totalValor > 0){
        document.getElementById('resultadoQuantidadeDePessoas').innerHTML = 'Numero Total de Pessoas: \t' + totalPessoas;
        if(totalPessoas > 1){
            document.getElementById('resultadoValorFinal').innerHTML = 'Valor Total do Plano:\t R$ \t' + parseFloat(0.95 * totalValor).toFixed(2);
        }else{
            document.getElementById('resultadoValorFinal').innerHTML = 'Valor Total do Plano:\t R$ \t' + parseFloat(totalValor).toFixed(2);
        }
    }
}

/*

<p id="resultado2933"></p>

<p id="resultado3438"></p>

<p id="resultado3943"></p>

<p id="resultado4448"></p>

<p id="resultado4953"></p>

<p id="resultado5458"></p>

<p id="resultado59+"></p> */