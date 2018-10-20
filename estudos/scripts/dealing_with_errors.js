/** Strict - Ativa o modo restrito do javascript, limitando algumas brechas.
 * No exemplo abaixo, a variável 'i' não foi declarada. 
 * Sem o modo restrito, isso seria permitido, e por baixo dos panos, o javascript criaria essa variável globalmente.
 * O 'use strict' pode ser colocado no início do documento, garantindo que todo o código seja validado.
 **/ 

 function myLooping(){
     "use strict"
     for(i = 0; i < 5; i++){
         console.log(i);
     }
 }

 // Debugger - Com a ferramenta de desenvolvimento do navegador aberta, é possível debugar o código.
 function myLooping_debugger(){
    debugger;
    for(i = 0; i < 5; i++){
        console.log(i);
    }
}

// Throw new Error - É possível, lançarmos erros, quando algo não dá certo.
function double(number){
    if(typeof number !== 'number'){
        throw new Error('Value expected: number. Value received: ' + typeof number);
    }
    return number * 2;
}

 myLooping();
 myLooping_debugger();

 // Try-Catch - Tratando erros lançados.
 try {
    double('a');
 } catch (error) {
    console.log(error);     
 }
 finally{
     console.log('Função executada.');
 }
