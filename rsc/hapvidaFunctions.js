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
        let quantidadeDePessoasDestaFaixa = Number(document.getElementById('4448').value);
        
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
        let quantidadeDePessoasDestaFaixa = Number(document.getElementById('4953').value);
        
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
        let quantidadeDePessoasDestaFaixa = Number(document.getElementById('5458').value);
        
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
        let quantidadeDePessoasDestaFaixa = Number(document.getElementById('59+').value);
        
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

        let valorFinal;
        if(totalPessoas > 1){
            valorFinal = parseFloat(totalValor*0.95).toFixed(2);
        }else if (totalPessoas === 1){
            valorFinal = parseFloat(totalValor).toFixed(2);
        }

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
                <span class='valorSpanResultado'>R$:` + valorFinal + `</span>
            </p>

            <br>

            <hr>
        `;
    }
}

cotarHapvidaAmbulatorialComCoparticipação = () => {
    //Declarando variáveis
    var totalPessoas = 0;
    var totalValor = 0.00;
    var trava = false;

    //Resetando corpo do resultado
    document.getElementById('subDivResultado').innerHTML = '';

    //0 a 18 anos
    if(document.getElementById('018').value > 0){
        let valorDestaFaixa = 67.83;
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
        let valorDestaFaixa = 88.98;
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
        let valorDestaFaixa = 101.28;
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
        let valorDestaFaixa = 112.86;
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
        let valorDestaFaixa = 118.72;
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
        let valorDestaFaixa = 133.15;
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
        let valorDestaFaixa = 162.58;
        let quantidadeDePessoasDestaFaixa = Number(document.getElementById('4448').value);
        
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
        let valorDestaFaixa = 225.07;
        let quantidadeDePessoasDestaFaixa = Number(document.getElementById('4953').value);
        
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
        let valorDestaFaixa = 303.02;
        let quantidadeDePessoasDestaFaixa = Number(document.getElementById('5458').value);
        
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
        let valorDestaFaixa = 393.24;
        let quantidadeDePessoasDestaFaixa = Number(document.getElementById('59+').value);
        
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

        let valorFinal;
        if(totalPessoas > 1){
            valorFinal = parseFloat(totalValor*0.95).toFixed(2);
        }else if (totalPessoas === 1){
            valorFinal = parseFloat(totalValor).toFixed(2);
        }

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
                <span class='valorSpanResultado'>R$:` + valorFinal + `</span>
            </p>

            <br>

            <hr>
        `;
    }
}

cotarHapvidaEnfermaria = () => {
    //Declarando variáveis
    var totalPessoas = 0;
    var totalValor = 0.00;
    var trava = false;

    //Resetando corpo do resultado
    document.getElementById('subDivResultado').innerHTML = '';

    //0 a 18 anos
    if(document.getElementById('018').value > 0){
        let valorDestaFaixa = 178.07;
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
        let valorDestaFaixa = 229.99;
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
        let valorDestaFaixa = 262.12;
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
        let valorDestaFaixa = 291.69;
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
        let valorDestaFaixa = 305.46;
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
        let valorDestaFaixa = 343.12;
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
        let valorDestaFaixa = 415.12;
        let quantidadeDePessoasDestaFaixa = Number(document.getElementById('4448').value);
        
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
        let valorDestaFaixa = 566.84;
        let quantidadeDePessoasDestaFaixa = Number(document.getElementById('4953').value);
        
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
        let valorDestaFaixa = 759.71;
        let quantidadeDePessoasDestaFaixa = Number(document.getElementById('5458').value);
        
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
        let valorDestaFaixa = 982.89;
        let quantidadeDePessoasDestaFaixa = Number(document.getElementById('59+').value);
        
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

        let valorFinal;
        if(totalPessoas > 1){
            valorFinal = parseFloat(totalValor*0.95).toFixed(2);
        }else if (totalPessoas === 1){
            valorFinal = parseFloat(totalValor).toFixed(2);
        }
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
                <span class='valorSpanResultado'>R$:` + valorFinal + `</span>
            </p>

            <br>

            <hr>
        `;
    }
}

cotarHapvidaEnfermariaComCoparticipação = () => {
    //Declarando variáveis
    var totalPessoas = 0;
    var totalValor = 0.00;
    var trava = false;

    //Resetando corpo do resultado
    document.getElementById('subDivResultado').innerHTML = '';

    //0 a 18 anos
    if(document.getElementById('018').value > 0){
        let valorDestaFaixa = 132.18;
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
        let valorDestaFaixa = 169.42;
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
        let valorDestaFaixa = 192.46;
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
        let valorDestaFaixa = 213.67;
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
        let valorDestaFaixa = 223.55;
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
        let valorDestaFaixa = 250.56;
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
        let valorDestaFaixa = 411.02;
        let quantidadeDePessoasDestaFaixa = Number(document.getElementById('4448').value);
        
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
        let valorDestaFaixa = 411.02;
        let quantidadeDePessoasDestaFaixa = Number(document.getElementById('4953').value);
        
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
        let valorDestaFaixa = 549.35;
        let quantidadeDePessoasDestaFaixa = Number(document.getElementById('5458').value);
        
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
        let valorDestaFaixa = 709.43;
        let quantidadeDePessoasDestaFaixa = Number(document.getElementById('59+').value);
        
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

        let valorFinal;
        if(totalPessoas > 1){
            valorFinal = parseFloat(totalValor*0.95).toFixed(2);
        }else if (totalPessoas === 1){
            valorFinal = parseFloat(totalValor).toFixed(2);
        }
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
                <span class='valorSpanResultado'>R$:` + valorFinal + `</span>
            </p>

            <br>

            <hr>
        `;
    }
}

cotarHapvidaApartamento = () => {
        //Declarando variáveis
        var totalPessoas = 0;
        var totalValor = 0.00;
        var trava = false;
    
        //Resetando corpo do resultado
        document.getElementById('subDivResultado').innerHTML = '';
    
        //0 a 18 anos
        if(document.getElementById('018').value > 0){
            let valorDestaFaixa = 259.23;
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
            let valorDestaFaixa = 337.13;
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
            let valorDestaFaixa = 385.33;
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
            let valorDestaFaixa = 429.67;
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
            let valorDestaFaixa = 450.38;
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
            let valorDestaFaixa = 506.84;
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
            let valorDestaFaixa = 614.88;
            let quantidadeDePessoasDestaFaixa = Number(document.getElementById('4448').value);
            
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
            let valorDestaFaixa = 842.52;
            let quantidadeDePessoasDestaFaixa = Number(document.getElementById('4953').value);
            
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
            let valorDestaFaixa = 1131.87;
            let quantidadeDePessoasDestaFaixa = Number(document.getElementById('5958').value);
            
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
            let valorDestaFaixa = 1466.69;
            let quantidadeDePessoasDestaFaixa = Number(document.getElementById('59+').value);
            
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
    
            let valorFinal;
            if(totalPessoas > 1){
                valorFinal = parseFloat(totalValor*0.95).toFixed(2);
            }else if (totalPessoas === 1){
                valorFinal = parseFloat(totalValor).toFixed(2);
            }
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
                    <span class='valorSpanResultado'>R$:` + valorFinal + `</span>
                </p>
    
                <br>
    
                <hr>
            `;
        }
}

cotarHapvidaApartamentoComCoparticipação = () => {
    //Declarando variáveis
    var totalPessoas = 0;
    var totalValor = 0.00;
    var trava = false;

    //Resetando corpo do resultado
    document.getElementById('subDivResultado').innerHTML = '';

    //0 a 18 anos
    if(document.getElementById('018').value > 0){
        let valorDestaFaixa = 190.39;
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
        let valorDestaFaixa = 246.27;
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
        let valorDestaFaixa = 280.83;
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
        let valorDestaFaixa = 312.64;
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
        let valorDestaFaixa = 327.49;
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
        let valorDestaFaixa = 367.99;
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
        let valorDestaFaixa = 445.48;
        let quantidadeDePessoasDestaFaixa = Number(document.getElementById('4448').value);
        
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
        let valorDestaFaixa = 608.75;
        let quantidadeDePessoasDestaFaixa = Number(document.getElementById('4953').value);
        
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
        let valorDestaFaixa = 816.28;
        let quantidadeDePessoasDestaFaixa = Number(document.getElementById('5958').value);
        
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
        let valorDestaFaixa = 1056.43;
        let quantidadeDePessoasDestaFaixa = Number(document.getElementById('59+').value);
        
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

        let valorFinal;
        if(totalPessoas > 1){
            valorFinal = parseFloat(totalValor*0.95).toFixed(2);
        }else if (totalPessoas === 1){
            valorFinal = parseFloat(totalValor).toFixed(2);
        }
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
                <span class='valorSpanResultado'>R$:` + valorFinal + `</span>
            </p>

            <br>

            <hr>
        `;
    }
}