//função para cotar o plano
cotar = () => {
    var planoSelecionado = document.getElementById('selecionarplanos').value;
    document.getElementById('corpoCotador').style.display = 'none';        
    document.getElementById('resultado').style.display = 'block';

    switch(planoSelecionado){
        case 'hapvidaAmbulatorial':
            //Dando Título e logo ao topo do resultado
            document.getElementById('logoplano').src = './img/logos/hapvida.png';
            document.getElementById('tituloDoPlano').innerHTML = "Hapvida Ambulatorial";
            cotarHapvidaAmbulatorial();
        break;
        case 'Mangoes':
        case 'Papayas':
            console.log('Mangoes and papayas are $2.79 a pound.');
            // expected output: "Mangoes and papayas are $2.79 a pound."
            break;
        default:
            console.log(`Sorry, we are out of ${expr}.`);
    }
}

voltar = () => {
    document.getElementById('corpoCotador').style.display = 'block';        
    document.getElementById('resultado').style.display = 'none';
}