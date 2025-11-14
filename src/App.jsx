import { useState } from "react";

function App() {
  const products = [
    { name: "Mela", price: 0.5 },
    { name: "Pane", price: 1.2 },
    { name: "Latte", price: 1.0 },
    { name: "Pasta", price: 0.7 },
  ];

  /**📌 Milestone 2:
   *  Aggiungere prodotti al carrello
  Aggiungi uno stato locale addedProducts (inizialmente un array vuoto) per rappresentare i prodotti nel carrello.*/
  const [addedProducts, setAddedProducts] = useState([]);
  /*
Per ogni prodotto della lista, aggiungi un bottone "Aggiungi al carrello":
Al click del bottone, usa una funzione addToCart per:
*/
  const addToCart = (product) => {
    setAddedProducts([...addedProducts, { ...product, quantity: 1 }]);
  };
  /*

Aggiungere il prodotto al carrello se non è già presente, con una proprietà quantity = 1.
Se il prodotto è già nel carrello, ignora l’azione.
Sotto alla lista dei prodotti, mostra una lista dei prodotti nel carrello se addedProducts contiene almeno un elemento.
Per ogni prodotto nel carrello, mostra:
Nome
Prezzo
Quantità

Obiettivo: L’utente può aggiungere prodotti al carrello e vedere una lista dei prodotti aggiunti. */

  return (
    <div className="container ">
      <div className="row d-flex">
        <div className="col-12  my-5 border border-secondary">
          <h1 className="my-5 border border-secondary">
            Elenco dei prodotti per nome e prezzo
          </h1>
          <ul className="d-flex flex-column border border-secondary">
            {products.map((p, index) => {
              return (
                <li className="d-flex my-2 col-8" key={index}>
                  <p className="col-3">Nome: {p.name}</p>
                  <p className="col-3">Prezzo: {p.price}</p>
                  <button
                    type="button"
                    className="btn btn-secondary my-1"
                    onClick={() => addToCart(p)}
                  >
                    aggiungi alla lista
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-12 border border-secondary">
          <h1>Carrello con i prodotti aggiunti</h1>
          <ul className="d-flex flex-column border border-secondary">
            {!addedProducts
              ? null
              : addedProducts.map((a, index) => {
                  return (
                    <li key={index}>
                      <p>Nome: {a.name}</p>
                      <p>Prezzo: {a.price}</p>
                      <p>quantità: {a.quantity}</p>
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
