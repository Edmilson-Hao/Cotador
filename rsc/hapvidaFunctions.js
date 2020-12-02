cotarHapvidaAmbulatorial = () => {
    //Declarando variáveis
    var totalPessoas = 0;
    var totalValor = 0.00;
    var trava = false;

    //Resetando corpo do resultado
    document.getElementById('subDivResultado').innerHTML = '';

    //0 a 18 anos
    if(document.getElementById('018').value > 0){
        let valorDestaFaixa = 103.52;
        let quantidadeDePessoasDestaFaixa = Number(document.getElementById('018').value);

        totalValor += valorDestaFaixa * quantidadeDePessoasDestaFaixa;
        totalPessoas += quantidadeDePessoasDestaFaixa;

        document.getElementById('subDivResultado').innerHTML += `
            <table class='resultTable'>    
                <tr>
                    <th>0 - 18</th>
                    <th>` + quantidadeDePessoasDestaFaixa + `</th>
                    <th>R$: ` + valorDestaFaixa + `</th>
                    <th>R$: ` + (valorDestaFaixa * quantidadeDePessoasDestaFaixa).toFixed(2) + `</th>
                </tr>
            </table>
            <br>
        `;
    }

    //19 a 23 anos
    if(document.getElementById('1923').value > 0){
        let valorDestaFaixa = 136.20;
        let quantidadeDePessoasDestaFaixa = Number(document.getElementById('1923').value);
        
        totalValor += valorDestaFaixa * quantidadeDePessoasDestaFaixa;
        totalPessoas += quantidadeDePessoasDestaFaixa;
        
        document.getElementById('subDivResultado').innerHTML += `
            <table class='resultTable'>    
                <tr>
                    <th>19-23</th>
                    <th>` + quantidadeDePessoasDestaFaixa + `</th>
                    <th>R$: ` + valorDestaFaixa + `</th>
                    <th>R$: ` + (valorDestaFaixa * quantidadeDePessoasDestaFaixa).toFixed(2) + `</th>
                </tr>
            </table>
            <br>
        `;
    }

    //24 a 28 anos
    if(document.getElementById('2428').value > 0){
        let valorDestaFaixa = 155.20;
        let quantidadeDePessoasDestaFaixa = Number(document.getElementById('2428').value);
        
        totalValor += valorDestaFaixa * quantidadeDePessoasDestaFaixa;
        totalPessoas += quantidadeDePessoasDestaFaixa;
        
        document.getElementById('subDivResultado').innerHTML += `
            <table class='resultTable'>    
                <tr>
                    <th>24-28</th>
                    <th>` + quantidadeDePessoasDestaFaixa + `</th>
                    <th>R$: ` + valorDestaFaixa + `</th>
                    <th>R$: ` + (valorDestaFaixa * quantidadeDePessoasDestaFaixa).toFixed(2) + `</th>
                </tr>
            </table>
            <br>
        `;
    }

    //29 a 33 anos
    if(document.getElementById('2933').value > 0){
        let valorDestaFaixa = 173.08;
        let quantidadeDePessoasDestaFaixa = Number(document.getElementById('2933').value);
        
        totalValor += valorDestaFaixa * quantidadeDePessoasDestaFaixa;
        totalPessoas += quantidadeDePessoasDestaFaixa;
        
        document.getElementById('subDivResultado').innerHTML += `
            <table class='resultTable'>    
                <tr>
                    <th>29-33</th>
                    <th>` + quantidadeDePessoasDestaFaixa + `</th>
                    <th>R$: ` + valorDestaFaixa + `</th>
                    <th>R$: ` + (valorDestaFaixa * quantidadeDePessoasDestaFaixa).toFixed(2) + `</th>
                </tr>
            </table>
            <br>
        `;
    }

    //34 a 38 anos
    if(document.getElementById('3438').value > 0){
        let valorDestaFaixa = 182.13;
        let quantidadeDePessoasDestaFaixa = Number(document.getElementById('3438').value);
        
        totalValor += valorDestaFaixa * quantidadeDePessoasDestaFaixa;
        totalPessoas += quantidadeDePessoasDestaFaixa;
        
        document.getElementById('subDivResultado').innerHTML += `
            <table class='resultTable'>    
                <tr>
                    <th>34-38</th>
                    <th>` + quantidadeDePessoasDestaFaixa + `</th>
                    <th>R$: ` + valorDestaFaixa + `</th>
                    <th>R$: ` + (valorDestaFaixa * quantidadeDePessoasDestaFaixa).toFixed(2) + `</th>
                </tr>
            </table>
            <br>
        `;
    }

    //39 a 43 anos
    if(document.getElementById('3943').value > 0){
        let valorDestaFaixa = 204.43;
        let quantidadeDePessoasDestaFaixa = Number(document.getElementById('3943').value);
        
        totalValor += valorDestaFaixa * quantidadeDePessoasDestaFaixa;
        totalPessoas += quantidadeDePessoasDestaFaixa;
        
        document.getElementById('subDivResultado').innerHTML += `
            <table class='resultTable'>    
                <tr>
                    <th>39-43</th>
                    <th>` + quantidadeDePessoasDestaFaixa + `</th>
                    <th>R$: ` + valorDestaFaixa + `</th>
                    <th>R$: ` + (valorDestaFaixa * quantidadeDePessoasDestaFaixa).toFixed(2) + `</th>
                </tr>
            </table>
            <br>
        `;
    }
    
    //44 a 48 anos
    if(document.getElementById('4448').value > 0){
        let valorDestaFaixa = 249.89;
        let quantidadeDePessoasDestaFaixa = Number(document.getElementById('3943').value);
        
        totalValor += valorDestaFaixa * quantidadeDePessoasDestaFaixa;
        totalPessoas += quantidadeDePessoasDestaFaixa;
        
        document.getElementById('subDivResultado').innerHTML += `
            <table class='resultTable'>    
                <tr>
                    <th>44-48</th>
                    <th>` + quantidadeDePessoasDestaFaixa + `</th>
                    <th>R$: ` + valorDestaFaixa + `</th>
                    <th>R$: ` + (valorDestaFaixa * quantidadeDePessoasDestaFaixa).toFixed(2) + `</th>
                </tr>
            </table>
            <br>
        `;
    }
    
    //49 a 53 anos
    if(document.getElementById('4953').value > 0){
        let valorDestaFaixa = 346.43;
        let quantidadeDePessoasDestaFaixa = Number(document.getElementById('3943').value);
        
        totalValor += valorDestaFaixa * quantidadeDePessoasDestaFaixa;
        totalPessoas += quantidadeDePessoasDestaFaixa;
        
        document.getElementById('subDivResultado').innerHTML += `
            <table class='resultTable'>    
                <tr>
                    <th>49-53</th>
                    <th>` + quantidadeDePessoasDestaFaixa + `</th>
                    <th>R$: ` + valorDestaFaixa + `</th>
                    <th>R$: ` + (valorDestaFaixa * quantidadeDePessoasDestaFaixa).toFixed(2) + `</th>
                </tr>
            </table>
            <br>
        `;
    }
    
    //54 a 58 anos
    if(document.getElementById('5458').value > 0){
        let valorDestaFaixa = 466.84;
        let quantidadeDePessoasDestaFaixa = Number(document.getElementById('3943').value);
        
        totalValor += valorDestaFaixa * quantidadeDePessoasDestaFaixa;
        totalPessoas += quantidadeDePessoasDestaFaixa;
        
        document.getElementById('subDivResultado').innerHTML += `
            <table class='resultTable'>    
                <tr>
                    <th>54-58</th>
                    <th>` + quantidadeDePessoasDestaFaixa + `</th>
                    <th>R$: ` + valorDestaFaixa + `</th>
                    <th>R$: ` + (valorDestaFaixa * quantidadeDePessoasDestaFaixa).toFixed(2) + `</th>
                </tr>
            </table>
            <br>
        `;
    }
    
    //59 anos +
    if(document.getElementById('59+').value > 0){
        let valorDestaFaixa = 606.21;
        let quantidadeDePessoasDestaFaixa = Number(document.getElementById('3943').value);
        
        totalValor += valorDestaFaixa * quantidadeDePessoasDestaFaixa;
        totalPessoas += quantidadeDePessoasDestaFaixa;
        
        document.getElementById('subDivResultado').innerHTML += `
            <table class='resultTable'>    
                <tr>
                    <th>59 - +</th>
                    <th>` + quantidadeDePessoasDestaFaixa + `</th>
                    <th>R$: ` + valorDestaFaixa + `</th>
                    <th>R$: ` + (valorDestaFaixa * quantidadeDePessoasDestaFaixa).toFixed(2) + `</th>
                </tr>
            </table>
            <br>
        `;
    }

    //Imprimindo rodapé de resultados
    if(totalPessoas > 0){
        document.getElementById('subDivResultado').insertAdjacentHTML("afterbegin", `
            <table class='headerTable'>    
                <tr>
                    <th>Idade</th>
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