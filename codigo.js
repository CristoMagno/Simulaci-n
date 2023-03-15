function calcular(){
    var semilla, iteracion;
    var constante;
    var MulConst;
    var ArraySinFiltros = [];
    var ArregloFinal = [];
    var MulConst;
    //Funcion para pasar un string a un numero
    let myFunc = num => Number(num);
    constante = document.getElementById("const").value;
    semilla = document.getElementById("semilla").value;
    iteracion = document.getElementById("resultados").value;
    if (constante==""||semilla==""||iteracion=="") {
        confirm("No debe haber campos vacíos");
        window.location.reload();
    } else {
        document.write('<p>La constante es: '+constante+'</p>');
        document.write('<p>La semilla fue: '+semilla+'</p>');

        for (let ciclo = 0;ciclo<=iteracion;ciclo++) {
            MulConst = Producto(constante,semilla); //guarda el producto
            ArraySinFiltros = Array.from(String(MulConst), myFunc); //arreglo para cuadrados
            tam = ArraySinFiltros.length;
            if (tam==8) {
                MulConst = Ocho(ArraySinFiltros); //guarda centrales con comas
            }else if(tam==7){
                MulConst = Siete(ArraySinFiltros);
            }else if(tam==6){
                MulConst = Seis(ArraySinFiltros);
            }
            semilla = ConvertArrayaNum(MulConst);//convierte el arreglo en entero sin comas
            if((ArregloFinal.includes(ConvertArrayaNum(MulConst)))==false) {
                document.write("R <b>"+(ciclo+1)+"</b>: 0."+ConvertArrayaNum(MulConst)+"<br>");
                ArregloFinal.push(semilla);
            }  
            else {
                alert("Elemento "+ConvertArrayaNum(MulConst)+ " repetido");
                break;
            }
        }
    }
}

function Producto(constante,variable) {
    var iteracionltado = constante*variable;
    return iteracionltado;
    
}




function cuadrado(x) {
    var final = Math.pow(x,2);
    return final;
}
function ConvertArrayaNum(Arreglo) {
    var Numero = Arreglo.join();
    Numero = Numero.replace(/,/g, "");
    return Numero;
}
function Ocho(Arreglo) {
    Arreglo.shift();//elimina el primer elemento
    Arreglo.shift();
    Arreglo.pop();//elimina el ultimo elemento
    Arreglo.pop();
    return Arreglo;
}
function Siete(Arreglo) {
    Arreglo.unshift(0);//Agrega cero al inicio
    Arreglo.shift();
    Arreglo.shift();//Elimina el primer elemento del arreglo
    Arreglo.pop();//elimina el ultimo elemento
    Arreglo.pop();
    return Arreglo;
}
function Seis(Arreglo) {
    Arreglo.unshift(0);//Agrega un cero al inicio
    Arreglo.unshift(0);
    Arreglo.shift();//Elimina el primer elemento del arreglo
    Arreglo.shift();
    Arreglo.pop();//elimina el ultimo elemento
    Arreglo.pop();
    return Arreglo;
}