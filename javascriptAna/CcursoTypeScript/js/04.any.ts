
//Toda variable no definida va a ser por defecto de tipo any

let vengador;


vengador = "Dr. Strange";
console.log(vengador.charAt(0))

vengador = 153.2666;
console.log(vengador.toFixed())

vengador = true;
console.log(vengador)

//Es igual que si la definimos

let derrotas:any;

derrotas = "Dr. Strange";
console.log(derrotas.charAt(0))

derrotas = 153.2666;
console.log(derrotas.toFixed())

derrotas = true;
console.log(derrotas)