
var str = prompt('Vamos a cifrar!!\n Escriba SOLO LETRAS');
//  creando la función cipher para cifrar una palabra
function cipher(str) {
//  creando un array vacio que almacenará todas las letras de la palabra
  var arr = [];
  for (var i = 0 ; i < str.length ; i++) {
    //  creando variable indexCesar para encontrar la posición de cada letra según cifrado Cesar
    var indexCesar = str.charCodeAt(i);
    // verificando si la palabra ingresada esta en mayúscula
    if (indexCesar=>65 && indexCesar <= 99) {
    //  creando variable numCesar para avanzar 33 posiciones
      var numCesar1 = (indexCesar - 65 + 33) % 26 + 65 ;
      //  creando letterCesar para conocer la nueva letra de cada palabra segun Cifrado Cesar
      var letterCesar1 = String.fromCharCode(numCesar1);
      arr.push(letterCesar1);
    }
    else if (indexCesar=>97 && indexCesar <= 122)
{
      var numCesar2 = (indexCesar - 97 + 33) % 26 + 97 ;
      var letterCesar2 = String.fromCharCode(numCesar2);
      arr.push(letterCesar2);
}
    else
    { alert('ingresa UNA palabra');
    }
}
  //  uniendo todas las letras el array
  return alert('Tu palabra cifrada es:' + arr.join(''));
}
Acipher(str);

var str = prompt('Vamos a decifrar!!\n Escriba SOLO LETRAS');
//  creando la función cipher para decifrar una palabra
function decipher(str) {
//  creando un array vacio que almacenará todas las letras de la palabra
  var arr = [];
  for (var i = 0 ; i < str.length ; i++) {
  //  creando variable indexCesar para encontrar la posición de cada letra según cifrado Cesar
    var indexCesar = str.charCodeAt(i);
    // verificando si la palabra ingresada esta en mayúscula
    if (indexCesar=>65 && indexCesar <= 99) {
      //  creando variable numCesar para avanzar 33 posiciones
      var numCesar1 = (indexCesar - 33) % 26;
      //  creando letterCesar para conocer la nueva letra de cada palabra segun Cifrado Cesar
      var letterCesar1 = String.fromCharCode(numCesar1);
      arr.push(letterCesar1);
    }
    else if (indexCesar=>97 && indexCesar <= 122)
    {
      var numCesar2 = (indexCesar - 65 - 33) % 26 + 65 ;
      var letterCesar2 = String.fromCharCode(numCesar2);
      arr.push(letterCesar2);
    }
    else
    {
      alert('ingresa UNA palabra');
    }
  }
  //  uniendo todas las letras el array
  return alert('Tu palabra decifrada es:' + arr.join(''));
}
decipher(str);
