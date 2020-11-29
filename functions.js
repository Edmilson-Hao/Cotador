cotarHapvidaAmbulatorial = () => {
    var totalPessoas = 0;
    var totalValor = 0;
    document.getElementById('subDivResultado').innerHTML = '';

    if(document.getElementById('018').value > 0){
        let totalValorParcial = document.getElementById('018').value * 103.52;
        let totalPessoasParcial = document.getElementById('018').value;

        totalPessoas = totalPessoas + totalPessoasParcial;
        totalValor = totalValor + totalValorParcial;

        document.getElementById('subDivResultado').innerHTML += `
            <table>
                <tr>
                    <th>0 - 18</th>
                    <th>` + totalPessoasParcial + `</th>
                    <th>` + totalValorParcial + `</th>
                </tr>
            </table>
        `;
    }

    


    if(totalPessoas > 0 && totalValor > 0){
        document.getElementById('subDivResultado').innerHTML += `
            <span class='spanResultado'>Total Pessoas: \t ` + totalPessoas + `</span>
            <br>
            <span class='spanResultado'>Valor Total: \t R$` + totalValor + `</span>
        `;
    }
}