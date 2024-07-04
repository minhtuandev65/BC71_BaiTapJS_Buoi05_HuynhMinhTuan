function calculatorElectricityBill() {
    var electricityConsumption = document.getElementById('electricityConsumption').value.trim();
    var totalInput = document.getElementById('total');
    var rate = null;
    var total = null;
    if(electricityConsumption <= 50){
        rate = 500
        total = electricityConsumption * rate
        totalInput.value = total + ' Vnđ';
    }else if (electricityConsumption > 50 && electricityConsumption <= 100){
        rate = 650;
        total = electricityConsumption * rate
        totalInput.value = total + ' Vnđ';
    }else if (electricityConsumption > 100 && electricityConsumption <= 150){
        rate = 850;
        total = electricityConsumption * rate
        totalInput.value = total + ' Vnđ';
    }else{
        rate = 1300;
        total = electricityConsumption * rate
        totalInput.value = total + ' Vnđ';
    }
} 
document.getElementById('submit').addEventListener('click', calculatorElectricityBill);