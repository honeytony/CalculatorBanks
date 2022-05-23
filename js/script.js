'use strict;'
//Финальные цифры
let sumKredit = document.getElementById("sumKredit"), 
    everyMonth = document.getElementById("everyMonth"), 
    recomended = document.getElementById("recomendedPayDay");

//Все инпуты
    let inputs = document.querySelectorAll("input");
    //Стоимость недвижимости
    let costApartament = document.getElementById("costApartament"),
        costApartamentRange = document.getElementById("costApartamentRange");
    
    //Срок кредита
    let kreditTerm = document.getElementById("kreditTerm"),
        kreditTermRange = document.getElementById("kreditTermRange");
  
    //Срок кредита
    let fee = document.getElementById("fee"),
        feeRange = document.getElementById("feeRange");
    
    let banks=['alpha', 'sberbank', 'pochta'],
        radios = document.getElementsByClassName("radio");
        var procent = 8.7;
    //radios[0].dataset.value
        
    for(var i = 0; i<radios.length; i++) {
        radios[i].addEventListener('click', function(){
            procent = parseFloat(this.dataset.value);
            calculate();
        });
    }
        
    

    //Вешаем обработчики
    adEvL(kreditTermRange, kreditTerm);
    adEvL(costApartamentRange, costApartament);
    adEvL(feeRange, fee);

function adEvL(range, input){
    input.value = range.value;
    
    range.addEventListener('input', function() {
        input.value = range.value;
        
        calculate();
    });
}

calculate();

function calculate() {
    let km = +kreditTerm.value*12; // Месяцев кредита
    let rk; 
    if(+fee.value > +costApartament.value){
        rk = 0;
    }else{
        rk = +costApartament.value - +fee.value;
    }
     //Цена - взнос
    sumKredit.innerHTML= rk;


    const everyMonthRounded = Math.round((rk + ((( rk / 100 ) * procent) / 12) * km) / km);
    everyMonth.innerHTML = everyMonthRounded;
    recomendedPayDay.innerHTML = everyMonthRounded + (everyMonthRounded/100)*35;
    //everyMonth.innerHTML = parseInt(((+sumKredit.innerHTML / +kreditTerm.value)/12) * parseFloat(procent));
}