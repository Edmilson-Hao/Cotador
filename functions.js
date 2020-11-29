cotarHapvidaAmbulatorial = () => {
    var totalPessoas = 0;
    var totalValor = 0;
    document.getElementById('subDivResultado').innerHTML = '';

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

    

    //Imprimindo parte final do cotador
    if(totalPessoas > 0 && totalValor > 0){

        document.getElementById('subDivResultado').insertAdjacentHTML("afterbegin", `
            <table>    
                <tr>
                    <th>Faixa Etária</th>
                    <th>Quantidade</th>
                    <th>Unitário</th>
                    <th>Valor</th>
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
                <span class='valorSpanResultado'>R$:` + parseFloat(totalValor).toFixed(2) + `</span>
            </p>

            <br>

            <hr>
        `;
    }
}