const numero = () => {
    let num = parseInt(prompt('Ingrese un numero'));
    let resultado;  
    if (num >=1 && num<=20){
      for (i = 1; i <= num; i++) {
        resultado = num * i;
        console.log(i + ' x ' + num + ' = ' + resultado);
      }
      for (i = 1; i <= num; i++) {
        let factor = 1;
        for (j = 1; j <= i; j++) {
          factor = factor* j;
        }
        console.log('El factorial de ' + i + ' es: ' + factor);
      }
    }else{
      console.log("Número fuera del rango");
    }
  }

  const factorial = () =>{
    let numero,resultado,factor;
    do {
        numero = parseInt(prompt('ingrese un numero'));
        if (true===isNaN(numero)) {
            console.log("el valor ingresado no es valido.");
        }
    } while (true===isNaN(numero));
    if (numero >=1 && numero<=20) {
        for (let i = 1; i <= numero; i++) {
            resultado=numero*i;
            console.log(i+' x '+numero+' = '+resultado);
            
        }
        for (i = 1; i <= numero; i++) {
            factor=1;
            for (let j = 1; j <= i; j++) {
                factor = factor*j;
            }
            console.log('el factorial de '+i+' es '+factor);            
        }
    }else{
        console.log("Número fuera del rango");
    }
  }