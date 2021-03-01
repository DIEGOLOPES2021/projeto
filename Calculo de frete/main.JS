"use strict";

//para acessar objetos do dom baseados no id
//document.getElementById('total').innerText ="SENAI";
const distancia = document.getElementById('distancia');
const pedagio = document.getElementById('pedagio');
const calcular = document.getElementById('calcular');
const Qtdpedagios = document.getElementById('pedagios');
const total = document.getElementById('total');

function calcularPedagio (){
    
    const resultado = Number (Qtdpedagios.value) * 9.40;
    pedagio.innerText = resultado.toFixed(2);
}
calcular.addEventListener('click',calcularPedagio);

function calcularKm (){

    const resultadoo = Number (distancia.value) * 10;
    
}
calcular.addEventListener('click',calcularKm);

function calcularTotal (){

    const resultadoTotal = Number (resultado) * (resultadoo);
    total.innerText = resultadoTotal.toFixed(2);
}
calcular.addEventListener('click',calcularTotal);



