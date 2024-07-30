const celsiusEl=document.getElementById("celsius");
const fahrenheitEl=document.getElementById("fahrenheit");
const kelvinEl=document.getElementById("kelvin");



function computeTemp(event){
    const theValue = +event.target.value

    switch (event.target.name) {
        case "celsius":
            kelvinEl.value = (theValue + 273.32).toFixed(2);
            fahrenheitEl.value = (theValue * 1.8 + 32).toFixed(2);
            break;
        case "fahrenheit":
            celsiusEl.value = ((theValue - 32) / 1.8).toFixed(2);
            kelvinEl.value = ((theValue - 32) / 1.8 + 273.32).toFixed(2);
            break;
        case "kelvin":
            celsiusEl.value = (theValue - 273.32).toFixed(2);
            fahrenheitEl.value = ((theValue - 273.32) * 1.8 + 32).toFixed(2); 
        default:
            break;
    }
}