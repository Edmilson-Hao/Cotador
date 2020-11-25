function hapvidaambulatorial(){
    if(document.getElementById('018').value > 0){
        document.getElementById('resultado018').innerHTML = '0 - 18: \t' + document.getElementById('018').value + '\t' +  (document.getElementById('018').value * 103.52).toFixed(2);
    }
    if(document.getElementById('1923').value > 0){
        document.getElementById('resultado1923').innerHTML = '19-23: \t' + document.getElementById('1923').value + '\t' +  (document.getElementById('1923').value * 136.20).toFixed(2);
    }
}