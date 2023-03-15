function ProductosMedios(){
    //Entrada de datos
    var tam;
    var ArraySinFiltros = [];
    var ArregloFinal = [];
    var ProductoMedio;
    let myFunc = num => Number(num);
    var x0 = document.getElementById("x0").value;
    var x1 = document.getElementById("x1").value;
    var iteracion = document.getElementById("resultados").value;
    if(x0!=""||x1!=""||iteracion!="") {
        document.write('<p>La x0 es: '+x0+'</p>');
        document.write('<p>La x1 fue: '+x1+'</p>');
        for (let ciclo = 0;ciclo<=iteracion;ciclo++) {
            ProductoMedio = Medios(x0,x1); //guarda el producto
            ArraySinFiltros = Array.from(String(ProductoMedio), myFunc); //arreglo para cuadrados
            tam = ArraySinFiltros.length;
            if (tam==8) {
                ProductoMedio = Ocho(ArraySinFiltros); //guarda centrales con comas
            }else if(tam==7){
                ProductoMedio = Siete(ArraySinFiltros);
            }else if(tam==6){
                ProductoMedio = Seis(ArraySinFiltros);
            }
            x0 = x1;
            x1 = ConvertArrayaNum(ProductoMedio);
            semilla = ConvertArrayaNum(ProductoMedio);//convierte el arreglo en entero sin comas
            if((ArregloFinal.includes(ConvertArrayaNum(ProductoMedio)))==false) {
                document.write("R <b>"+ciclo+"</b>: 0."+ConvertArrayaNum(ProductoMedio)+"<br>");
                ArregloFinal.push(ConvertArrayaNum(ProductoMedio));
            }  
            else {
                alert("Elemento "+ConvertArrayaNum(ProductoMedio)+ " repetido");
                break;
            }
        }

    } else {
        alert("No debe haber campos vacíos");
        window.location.reload();
    }
}







function Medios(valor1,valor2) {
    var final = valor1*valor2;
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