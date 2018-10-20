/* Construção de classes */
class Pencil{
    constructor(color){
        this.color = color;
    }

    write(text){
        console.log(text);
    }
}

var pencil = new Pencil();

/* Herdando classes */
class Animal{
    sleep(){
        console.log('zzzzzzz');
    }
}

class Dog extends Animal{
    bark(){
        console.log('Au au au!');
    }
}

var dog = new Dog();

/* Métodos estáticas */
class Teste{
    static methodStatic(){
        console.log('Método estático.');
    }
}

/* Utilizando o 'super' */
class Vehicle{
    run(){
        console.log('Saiu do lugar...');
    }
}

class Car extends Animal{
    run(){
        super.run();
        console.log('Agora ta correndo!');
    }
}