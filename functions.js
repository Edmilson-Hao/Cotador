    var totalPessoas = 0;
    var totalValor = 0;
    var valorParcial;
    var numeroParcialPessoas;
cotarHapvidaAmbulatorial = () => {
    document.getElementById('subDivResultado').innerHTML = '';

    //0 a 18 anos
    if(document.getElementById('018').value > 0){
        valorParcial = 0;
        numeroParcialPessoas = 0;

        valorParcial = parseFloat(dados[0].valor * (document.getElementById('018').value)).toFixed(2);
        numeroParcialPessoas = document.getElementById('018').value;

        totalPessoas = parseInt(numeroParcialPessoas);
        totalValor = parseFloat(valorParcial).toFixed(2);

        document.getElementById('subDivResultado').innerHTML += `
            <table class='resultTable'>    
                <tr>
                    <th>0 - 18</th>
                    <th>` + numeroParcialPessoas + `</th>
                    <th>R$: ` + dados[0].valor + `</th>
                    <th>R$: ` + valorParcial+ `</th>
                </tr>
            </table>
            <br>
        `;
    }


    //19 a 23 anos
    if(document.getElementById('1923').value > 0){
        valorParcial = 0;
        numeroParcialPessoas = 0;
        
        valorParcial = parseFloat(dados[1].valor * (document.getElementById('1923').value)).toFixed(2);
        numeroParcialPessoas = document.getElementById('1923').value;

        totalPessoas = totalPessoas + parseInt(numeroParcialPessoas);
        
        totalvalor = parseFloat(totalValor) + parseFloat(valorParcial);
        
        
        
        document.getElementById('subDivResultado').innerHTML += `
            <table class='resultTable'>    
                <tr>
                    <th>19 - 23</th>
                    <th>` + numeroParcialPessoas + `</th>
                    <th>R$: ` + dados[1].valor + `</th>
                    <th>R$: ` + valorParcial + `</th>
                </tr>
            </table>
            <br>
        `;
    }

    




    if(totalPessoas > 0 ) {
        document.getElementById('subDivResultado').insertAdjacentHTML("afterbegin", `
            <table class='tableHeader'>    
                <tr>
                    <th>Faixa Etária</th>
                    <th class='thHeader'>Quantidade</th>
                    <th class='thHeader'>Unitário</th>
                    <th class='thHeader'>Valor</th>
                </tr>
            </table>
            <br>
        `);

        document.getElementById('subDivResultado').innerHTML += `
            <br>
            <p class='paragraphSpanResultado'>
                <span class='textoSpanResultado'>Total Pessoas:</span>
                <span class='valorSpanResultado'>` + parseInt(totalPessoas) + `</span>
            </p>
            
            <br>

            <hr>

            <p class='paragraphSpanResultado'>
                <span class='textoSpanResultado'>Valor Total:</span>
                <span class='valorSpanResultado'>R$:` + parseFloat(totalvalor).toFixed(2) + `</span>
            </p>

            <br>

            <hr>
        `;
    }
}



/*
//Tratamento da faixa etária 0 - 18
    if(document.getElementById('018').value > 0){
        let totalValorParcial = document.getElementById('018').value * 103.52;
        let totalPessoasParcial = document.getElementById('018').value;

        totalPessoas = totalPessoas + totalPessoasParcial;
        totalValor = totalValor + totalValorParcial;

        document.getElementById('subDivResultado').innerHTML += `
            <table>
                <tr>
                    <th>0 - 18</th>
                    <th>\t` + totalPessoasParcial + `</th>
                    <th>R$103.52</th>
                    <th>` + totalValorParcial + `</th>
                </tr>
            </table>
        `;
    }

    //Tratamento da faixa etária 19 - 23
    if(document.getElementById('1923').value > 0){
        let totalValorParcial = document.getElementById('1923').value * 136.20;
        let totalPessoasParcial = document.getElementById('1923').value;

        totalPessoas = totalPessoas + totalPessoasParcial;
        totalValor = totalValor + totalValorParcial;

        document.getElementById('subDivResultado').innerHTML += `
            <table>
                <tr>
                    <th>19-23</th>
                    <th>\t` + totalPessoasParcial + `</th>
                    <th>R$136.20</th>
                    <th>` + totalValorParcial.toFixed(2) + `</th>
                </tr>
            </table>
        `;
    }
*/