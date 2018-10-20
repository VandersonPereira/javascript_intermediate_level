alert('Conectado');

var field;

class Field{
   constructor (cols, rows, containerId){
        // Propriedades
        this.cols = cols;
        this.rows = rows;
        this.container =  document.querySelector(containerId);
        this.createField();
   }

    // Métodos
    createField(){
        var field = [];
        for (let i = 0; i < this.rows; i++) {
            field[i] = [];
            for (let j = 0; j < this.cols; j++) {
                field[i].push(this.createRock());
            }
        }
        this.field = field;
        this.drawField();
    }

    createRock(){
        return Math.trunc(Math.random() * 5) === 1 ? '@' : '';
    }

    drawField(){
        var template = '';

        for (let i = 0; i < this.rows; i++) {
            template += '<tr>';
            for (let j = 0; j < this.cols; j++) {
                template += '<td>' + this.field[i][j] + '</td>';
            }
            template += '</tr>';
        }
        this.container.innerHTML = template;
    }
}

class Character{
    constructor(field, x, y, face){
        this.table = field;
        this.x = x;
        this.y = y;
        this.face = face;
        this.setPosition(this.x, this.y);
    }

    setPosition(x, y){
        if(this.table.field[y][x] === ''){
            this.table.field[this.y][this.x] = '';
            this.x = x;
            this.y = y;
            this.table.field[this.y][this.x] = this.face;
            this.table.drawField();
        }
    }
}

// Forçando as entradas
field = new Field(3, 4, '#myTable');
new Character(field, 2, 1, '-,-');