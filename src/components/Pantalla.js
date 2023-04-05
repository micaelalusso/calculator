import '../stylesheets/Pantalla.css';

const Pantalla = ({ input }) => (
  <div className='input'>
    {input}
  </div>
);

export default Pantalla;

/* definir un componente con una función flecha:
- primero, definirlo como constante para que no se le pueda reasignar otro valor.
- nombre de componente
- le asignamos la función flecha, con ella le decimos a JS que vamos a retornar el valor entre paréntesis. 
el valor es la estructura del componente definida con JSX, tenemos el div que tiene la clase input, dentro del div reemplazamos el valor del props*/