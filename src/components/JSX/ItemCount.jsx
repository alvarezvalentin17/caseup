import { useState } from "react";
import '../CSS/ItemCount.css'
import Swal from "sweetalert2";


function ItemCount({ stock, onAdd }) {

  const initial = 1;

  const [numero, setNumero] = useState(initial);

  const sumar = () => {
    if (numero < stock) {
      setNumero(numero + 1);
    } else {
      Swal.fire({
        title: "Atencion!",
        text: "Ya ha llegado al stock maximo de este producto",
        icon: "warning",
      });
    }
  };

  const restar = () => {
    if (numero >= 1) {
      setNumero(numero - 1);
    } else {
      Swal.fire({
        title: "Atencion!",
        text: "No se pueden ingresar numeros negativos",
        icon: "warning",
      });
    }
  };



  return (
    <>
      <section className="Counter">
        <h4>Cantidad:</h4>
        <section className="contador">
          <button className="btn" onClick={restar}>
            -
          </button>
          <h2 className="view">{numero}</h2>
          <button className="btn" onClick={sumar}>
            +
          </button>
        </section>
      </section>
      <section className="Counter1">
        <p>{stock > 1 ? `${stock} unidades disponibles` : `Ultima unidad!`}</p>
        <button className="addCart" onClick={() => onAdd(numero)}>
          Agregar al carrito
        </button>
      </section>
    </>
  );
}

export default ItemCount;
