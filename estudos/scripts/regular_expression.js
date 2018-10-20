/* Testando um expressão regular */

// -- test() - Retorna true ou false
var regex = /abc/;
var text = 'abc def';
console.log('Test()');
console.log(regex.test(text));

// -- exec() - retorna um array de informações - primeira ocorrência
var regex_2 = /a.c/; // -> busca por 'a - qualquer coisa - b' - primeira ocorrência
var text_2 = '234abc123 a4c5';
console.log('Exec()');
console.log(regex_2.exec(text_2)); 

// -- match() - retorna um array de informações - todas ocorrências
var regex_3 = /a.c/g; // -> busca por 'a - qualquer coisa - b' - todas as ocorrência
var text_3 = '234abc123 a4c5';
console.log('Match()');
console.log(text_3.match(regex_3)); 

/* Replace */
var textReplace = 'Abc abc Abc abc';

// Neste caso, apenas o primeiro 'a' será trocado pelo '1'.
console.log(textReplace.replace('a', '1'));

// Agora todos os 'a' serão trocados pelo '1'.
/*
 * g -> global, todos
 * i -> maiúsculos e minúsculos
 */

console.log('Replace simples');
console.log(textReplace.replace(/a/gi, '1')); 

// Extraindo informações com RegEx
var textReplace_2 = 'abc-123-def';
var regexReplace = /abc-(\d{3})-def/;

console.log('Replace extraindo informações.');
console.log(textReplace_2.replace(regexReplace, 'my number is: $1'));

// Buscando caracteres em textos com RegEx
'text'.search(/t/);