//função para cotar o plano
function cotar(){
    document.getElementById('resultado').style.display = 'block';
    document.getElementById('corporcotador').style.display = 'none';

    //Verificando plano selecionado
    if(document.getElementById('selecionarplanos').value === 'HapvidaAmbulatorial'){
        cotarhapvidaambulatorial();
    } 
}
