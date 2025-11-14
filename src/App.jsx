import { useState } from "react";

function App() {
  const products = [
    { name: "Mela", price: 0.5 },
    { name: "Pane", price: 1.2 },
    { name: "Latte", price: 1.0 },
    { name: "Pasta", price: 0.7 },
  ];

  const [product, setProducts] = useState(products);
  /**Crea un componente che mostra la lista dei prodotti.
Per ogni prodotto, mostra:
Nome
Prezzo

Obiettivo: Vedere un elenco leggibile di tutti i prodotti con nome e prezzo. */

  return (
    <div className="container">
      <div className="row d-flex">
        <div className="col-12  my-2">
          <h1 className="my-2">Elenco dei prodotti per nome e prezzo</h1>
          <ul className="d-flex flex-column">
            {products.map((p, index) => {
              return (
                <li className="d-flex" key={index}>
                  <p className="col-3  my-2">Nome: {p.name}</p>
                  <p className="col-3  my-2">Prezzo: {p.price}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
