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
    const alreadyinCart = addedProducts.some((a) => a.name === product.name);
    if (alreadyinCart) return null;
    setAddedProducts([...addedProducts, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (index) => {
    return setAddedProducts(addedProducts.filter((p, i) => i !== index));
  };

  const updateProductQuantity = (index) => {
    const isUpdate = addedProducts.map((p, i) =>
      i === index ? { ...p, quantity: p.quantity + 1 } : p
    );
    setAddedProducts(isUpdate);
  };
  /*

📌 Milestone 3: Modificare il carrello
Al click successivo del bottone "Aggiungi al carrello", se il prodotto è già presente:
Usa una funzione updateProductQuantity per incrementare la proprietà quantity del prodotto esistente.
Per ogni prodotto nel carrello, aggiungi un bottone "Rimuovi dal carrello":
Al click, usa una funzione removeFromCart per rimuovere il prodotto dal carrello.
Sotto alla lista del carrello, mostra il totale da pagare:
Calcola il totale moltiplicando il prezzo per la quantità di ogni prodotto e somma tutti i risultati.
Obiettivo: Gestire l’aggiunta, la rimozione e il calcolo del totale del carrello in modo dinamico. */

  return (
    <div className="container ">
      <div className="row d-flex">
        <div className="col-12  my-5 border border-secondary">
          <h1 className="my-5 border border-secondary">
            Elenco dei prodotti per nome e prezzo
          </h1>
          <ul className="d-flex flex-column border border-secondary">
            {products.map((product, index) => {
              return (
                <li className="d-flex my-2 col-8" key={index}>
                  <p className="col-3">Nome: {product.name}</p>
                  <p className="col-3">Prezzo: {product.price}</p>
                  <button
                    type="button"
                    className="btn btn-secondary my-1"
                    onClick={() => addToCart(product)}
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
              : addedProducts.map((product, index) => {
                  console.log({ addedProducts });
                  return (
                    <li key={index}>
                      <p>Nome: {product.name}</p>
                      <p>Prezzo: {product.price}</p>
                      <p>quantità: {product.quantity}</p>
                      <button
                        type="button"
                        className="btn btn-secondary mx-2"
                        onClick={() => updateProductQuantity(index)}
                      >
                        aumenta
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary mx-2"
                        onClick={() => removeFromCart(index)}
                      >
                        Rimuovi
                      </button>
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
