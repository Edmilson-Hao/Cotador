function cotarhapvidaambulatorial(){
    var totalPessoas = 0;
    var totalValor = 0;

    if(document.getElementById('018').value > 0){
        let totalValorParcial = document.getElementById('018').value * 103.52;
        let totalPessoasParcial = document.getElementById('018').value;

        totalPessoas = totalPessoas + totalPessoasParcial;
        totalValor = totalValor + totalValorParcial;
    }

    


    if(totalPessoas > 0 && totalValor > 0){
        document.getElementById('subresultado').innerHTML += `
            <span class="spanResultado">Total Pessoas: \t ` + totalPessoas + `</span>
            <br>
            <span class="spanResultado>Valor Total: \t R$` + totalValor + `</span>
        `;
    }
}