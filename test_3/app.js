const x = undefined;
const isTrue = true;
const age = 21;
const name = "Egor";
const person = { name: "Egor", age: 21};
const id = Symbol("23");
const bigNumber = 54674765476547646544444875786456437665;
const value = null;

        //1
console.log(Number(' 1 2 3 4 5')); //NaN
        //2
console.log('1234 5'); //1234 5
        //3
console.log('12345'); //12345
        //4
console.log(false); //false
        //5
console.log(0000000); //0
        //6
console.log(0.0000001); //1e-7
        //7
console.log(undefined); //undefined
        //8
console.log('100f'); //100f
        //9
console.log('100'); //100
        //10
console.log('000001'); //000001

console.log(Number(x), Boolean(x), String(x));
console.log(Number(isTrue), Boolean(isTrue), String(isTrue));
console.log(Number(age), Boolean(age), String(age));
console.log(Number(name), Boolean(name), String(name));
console.log(Number(person), Boolean(person), String(person));
console.log(Number(id), Boolean(id), String(id));
console.log(Number(bigNumber), Boolean(bigNumber), String(bigNumber));
console.log(Number(value), Boolean(value), String(value));

        //1
console.log(+"S0");     //неявное
        //2
console.log(Number("100"));     // явное
        //3
console.log("" + 1);    //неявное
        //4
console.log(String(1));     // явное
        //8
console.log(Boolean(0));    // явное
        //6
console.log(+"001");    //неявное
        //7
console.log(1 + "");    //неявное
        //8
console.log(Boolean(1));    //явное
        //9
console.log(String(1));     //явное
        //10
console.log(Number("Hello World"));     //явное

console.log(console.log);
console.log({name: 'Egor'});
console.log(Symbol('key'));
console.log(Number);
console.log("");
console.log(0);
console.log(-10);
console.log('-105');

console.log(Number(console.log), Boolean(console.log), String(console.log));
console.log(Number({name: 'Egor'}), Boolean({name: 'Egor'}), String({name: 'Egor'}));
console.log(Number(Symbol('key')), Boolean(Symbol('key')), String(Symbol('key')));
console.log(Number(Number), Boolean(Number), String(Number));
console.log(Number(""), Boolean(""), String(""));
console.log(Number(0), Boolean(0), String(0));
console.log(Number(-10), Boolean(-10), String(-10));
console.log(Number('-105'), Boolean('-105'), String('-105'));