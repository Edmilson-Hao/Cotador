//função para cotar o plano
function cotar(){
    document.getElementById('resultado').style.display = 'block';
    document.getElementById('corporcotador').style.display = 'none';

    //Verificando plano selecionado
    if(document.getElementById('selecionarplanos').value === 'HapvidaAmbulatorial'){
        cotarhapvidaambulatorial();
    }
    
        
}

//Ao terminar consulta da cotação, clicar no botão voltarbtn recarrega tela anterior
function hideresultadodiv(){
    document.getElementById('resultado').style.display = 'none';
    document.getElementById('corporcotador').style.display = 'block';
}