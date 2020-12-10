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

        case 'hapvidaAmbulatoriaComCoparticipação':
            //Dando Título e logo ao topo do resultado
            document.getElementById('logoplano').src = './img/logos/hapvida.png';
            document.getElementById('tituloDoPlano').innerHTML = "Hapvida Ambulatorial Com Coparticipação";
            cotarHapvidaAmbulatorialComCoparticipação();
        break;

        case 'hapvidaEnfermaria':
            //Dando Título e logo ao topo do resultado
            document.getElementById('logoplano').src = './img/logos/hapvida.png';
            document.getElementById('tituloDoPlano').innerHTML = "Hapvida Enfermaria";
            cotarHapvidaEnfermaria();
        break;

        case 'hapvidaEnfermariaComCoparticipação':
            //Dando Título e logo ao topo do resultado
            document.getElementById('logoplano').src = './img/logos/hapvida.png';
            document.getElementById('tituloDoPlano').innerHTML = "Hapvida Enfermaria Com Coparticipação";
            cotarHapvidaEnfermariaComCoparticipação();
        break;
        
        case 'hapvidaApartamento':
            //Dando Título e logo ao topo do resultado
            document.getElementById('logoplano').src = './img/logos/hapvida.png';
            document.getElementById('tituloDoPlano').innerHTML = "Hapvida Apartamento";
            cotarHapvidaApartamento();
        break;

        case 'hapvidaApartamentoComCoparticipação':
            //Dando Título e logo ao topo do resultado
            document.getElementById('logoplano').src = './img/logos/hapvida.png';
            document.getElementById('tituloDoPlano').innerHTML = "Hapvida Apartamento Com  Coparticipação";
            cotarHapvidaApartamentoComCoparticipação();
        break;

        default:
            console.log(`Sorry, we are out of ${expr}.`);
    }
}

voltar = () => {
    document.getElementById('corpoCotador').style.display = 'block';        
    document.getElementById('resultado').style.display = 'none';
}