function imc(){
    var peso = window.document.querySelector('input#peso');
    var altura = window.document.querySelector('input#altura');
    var resultado = window.document.getElementById('resultado').value;
    var Peso = Number(peso.value)
    var Altura = Number(altura.value[0]+'.'+altura.value[2]+altura.value[3])
    var calculo = Peso/(Altura*Altura)
    var textResultado = ""
    if (calculo < 10){
        return "Desnutrição Grau V"
    }else if (calculo >= 10 && calculo < 12.9){
        textResultado = "Desnutrição Grau IV"
        window.document.getElementById('resultado').style="background-color:#B71C1C"
    }else if (calculo >= 13 && calculo < 15.9){
        textResultado = "Desnutrição Grau III"
        window.document.getElementById('resultado').style="background-color:#B71C1C"
    }else if (calculo >= 16 && calculo < 16.9){
        textResultado = "Desnutrição Grau II"
        window.document.getElementById('resultado').style="background-color:#B71C1C"
    }else if (calculo >= 17 && calculo < 18.4){
        textResultado = "Desnutrição Grau I"
        window.document.getElementById('resultado').style="background-color:#B71C1C"
    }else if (calculo >= 18.5 && calculo < 24.9){
        textResultado = "Normal"
        window.document.getElementById('resultado').style="background-color:#33691E"
    }else if (calculo >= 25 && calculo < 29.9){
        textResultado = "Pré-Obesidade"
        window.document.getElementById('resultado').style="background-color:#B71C1C"
    }else if (calculo >= 30 && calculo < 34.5){
        textResultado = "Obesidade Grau I"
        window.document.getElementById('resultado').style="background-color:#B71C1C"
    }else if (calculo >= 35 && calculo < 39.9){
        textResultado = "Obesidade Grau II"
        window.document.getElementById('resultado').style="background-color:#B71C1C"
    }else if (calculo >= 40){
        textResultado = "Obesidade Grau III"
        window.document.getElementById('resultado').style="background-color:#B71C1C"
    }
    window.document.getElementById('resultado').value=textResultado;
}