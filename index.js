//função para cotar o plano
cotar = () => {
    document.getElementById('corpoCotador').style.display = 'none';        
    document.getElementById('resultado').style.display = 'block';

    if(document.getElementById('selecionarplanos').value === 'HapvidaAmbulatorial') cotarHapvidaAmbulatorial();
}

voltar = () => {
    document.getElementById('corpoCotador').style.display = 'block';        
    document.getElementById('resultado').style.display = 'none';
}