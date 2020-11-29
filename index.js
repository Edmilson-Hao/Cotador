//função para cotar o plano
function cotar(){
    document.getElementById('resultado').style.display = 'block';
    document.getElementById('voltarbtn').style.display = 'block';
    document.getElementById('corporcotador').style.display = 'none';
    document.getElementById('header').style.display = 'none';
    //Verificando plano selecionado
    if(document.getElementById('selecionarplanos').value === 'HapvidaAmbulatorial'){
        cotarhapvidaambulatorial();
    }
    
        
}

hideresultadodiv = () => {
    document.getElementById('resultado').style.display = 'none';
    document.getElementById('voltarbtn').style.display = 'none';
}