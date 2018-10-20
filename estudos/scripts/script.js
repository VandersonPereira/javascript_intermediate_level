function Pencil(color, length){

    // Criando variáveis e funções privadas
    var code = 153;

    var funcaoPrivada = function(){
        // essa função é privada
    }

    // Garantindo que o objeto está sendo instanciado
    if (!(this instanceof Pencil)) {
        return new Pencil(color, length);
    }

    // Propriedades
    this.color = color;
    this.length = length;

    // Métodos
    this.write = function(text){
        console.log(text);
    }

    this.getCode = function (){
        return code;
    }

    this.setCode = function (value){
        code = value;
    }
}

// Dessa forma, não funcionaria se não fosse feita verificação 'this instanceof Pencil', ao criar o prototype e corrigido a criação do objeto.
var myPencil = Pencil('red', 15);

// Essa seria a forma correta, mas ambas funcionam.
var myPencil2 = new Pencil('blue', 20);

/* ---------------- Simulando herança ---------------------  */

// Classe pai
function Animal(){
    this.sleep = function(){
        console.log('zzzzzz');
    }
}

// Classe filho
function Dog(){
    this.bark = function(){
        console.log('woof!!');
    }
}

// Classe filho
function Cat(){
    this.miau = function(){
        console.log('miauuuu!');
    }
}

// Herdando de 'Animal'
Dog.prototype = new Animal();
Cat.prototype = new Animal();


