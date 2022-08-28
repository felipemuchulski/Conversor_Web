// Criar funções com as formulas de conversão para a pagina
/*  Funcionalidades do campo1

1 = Criar uma function que vai passar uma conditional verificando qual value foi atribuido no select do html;

2 = O button criado terá que verificar se o input foi preenchido com algum value, e após essa verificação ele ira ser responsavel por efetuar a conversão 


*/

//Declarar as variaveis para poder trabalhar com as campos do HTML no JavaScript

// Criar funções com as formulas de conversão para a pagina
/*  Funcionalidades do campo1

1 = Criar uma function que vai passar uma conditional verificando qual value foi atribuido no select do html;

2 = O button criado terá que verificar se o input foi preenchido com algum value, e após essa verificação ele ira ser responsavel por efetuar a conversão 


*/

//Declarar as variaveis para poder trabalhar com as campos do HTML no JavaScript

const input = document.getElementById('receptor');
const button = document.getElementById('button_action');
const reset = document.getElementById('reset_button');
 
button.addEventListener('click', validarInput)
function validarInput(){
    const valor = input.value;
    const regex = /^[0-9]*[CFKcfk]{1}?$/g.test(valor);

    console.log("teste0", valor.match(/^[0-9]*[CFKcfk]{1}?$/g))

    console.log(regex)
    if(regex){
            const valor = input.value;
            const celsiusExist = valor.toUpperCase().includes('C');
            const fahrenheitExist = valor.toUpperCase().includes('F');
            const kelvinExist = valor.toUpperCase().includes('K');
        
            if (!celsiusExist && !fahrenheitExist && !kelvinExist) {
                alert('Grau invalido'); throw new Error('Grau invalido')
        
            }
        
            //If celsiusExist convert Celsius for Fahrenheit and Kelvin
            
            let updatedDegree = parseInt(valor.replace('C', ''));
            let formulaA = (celsius) => celsius * 9 / 5 + 32 //fahrenheit
            let formulaB = (celsius) => celsius + 273; //kelvin
            let sinalDegree = ['F', 'K', 'C'];
            let resultFahrenheit = `${formulaA(updatedDegree) + sinalDegree[0]}`;
            let resultKelvin = `${formulaB(updatedDegree) + sinalDegree[1]}`;
            let resultCelsius = (updatedDegree) + sinalDegree[2];
        
            //If fahrenheitExist convert Fahrenheit for Celsius and Kelvin
            if (fahrenheitExist) {
                updatedDegree = parseInt(valor.replace('F', ''));
                formulaA = (fahrenheit) => (fahrenheit - 32) * 5 / 9; //Celsius;
                formulaB = (fahrenheit) => (fahrenheit - 32) * 5 / 9 + 273; //Kelvin
                sinalDegree = ['C', 'K', 'F'];
        
                resultCelsius = `${formulaA(updatedDegree) + sinalDegree[0]}`;
                resultKelvin = `${formulaB(updatedDegree) + sinalDegree[1]}`
                resultFahrenheit = (updatedDegree) + sinalDegree[2];
            }
        
            //If kelvinExist convert Kelvin for Fahrenheit and Celsius;
            
            if (kelvinExist) {
                updatedDegree = parseInt(valor.replace('K', ''));
                formulaA = (kelvin) => (kelvin - 273) * 9 / 5 + 32; //Fahrenheit
                formulaB = (kelvin) => kelvin - 273; //Celsius
                sinalDegree = ['F', 'C', 'K'];
        
                resultFahrenheit = `${formulaA(updatedDegree) + sinalDegree[0]}`;
                resultCelsius = `${formulaB(updatedDegree) + sinalDegree[1]}`;
                resultKelvin = (updatedDegree) + sinalDegree[2];
        
            }
        
            document.getElementById('celsius').value = parseInt(resultCelsius);
            document.getElementById('fahrenheit').value = parseInt(resultFahrenheit);
            document.getElementById('kelvin').value = parseInt(resultKelvin);
        
    } else{
        alert('Parametros invalidos')
    }
}


try {

} catch (error) {
    console.log(error.message)
}

    reset.addEventListener('click', function () {
    document.getElementById('receptor').value = "";
    document.getElementById('celsius').value = "";
    document.getElementById('fahrenheit').value = "";
    document.getElementById("kelvin").value = "";
})



