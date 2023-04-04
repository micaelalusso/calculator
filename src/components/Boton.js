import '../stylesheets/Boton.css'

function Boton(props) {

  const esOperador = valor => {
    return isNaN(valor) && (valor != '.' && (valor != '='));
  }

return ( 
  <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}> 
    {props.children}
  </div>
);
}

export default Boton; 

/* las comillas invertidas en JS sirven para crear Template Literals: crean una cadena de caracteres que puede contener cierto código de JS para definir el resultado */

/*fn esOperador: si el resultado es verdadero (cumple con las 3 condiciones), entonces se reemplaza toda la expresión por "operador", si es false, se retorna NULL */

/* el trimEnd llama al resultado final y borra los espacios que estén al final de este */