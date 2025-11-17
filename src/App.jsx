import { useState } from "react";
import { useReducer } from "react";
//prendo il cartReducer fornito e importo useReducer da react e cambio lo state con addedProducts
function cartReducer(addedProducts, action) {
  switch (action.type) {
    case "ADD_ITEM":
      // Logica per aggiungere un prodotto

      const alreadyinCart = addedProducts.some(
        (a) => a.name === action.payload.name
      );
      if (alreadyinCart) return action.payload;
      setAddedProducts([...addedProducts, { ...action.payload, quantity: 1 }]);

    case "REMOVE_ITEM":
    // Logica per rimuovere un prodotto

    case "UPDATE_QUANTITY":
    // Logica per aggiornare la quantità

    default:
      return addedProducts;
  }
}

function App() {
  const products = [
    { name: "Mela", price: 0.5 },
    { name: "Pane", price: 1.2 },
    { name: "Latte", price: 1.0 },
    { name: "Pasta", price: 0.7 },
  ];

  /**📌 Milestone 2:
   *  Aggiungere prodotti al carrello
  Aggiungi uno stato locale addedProducts (inizialmente un array vuoto) per rappresentare i prodotti nel carrello.
  
  Trasformo lo useState  const [addedProducts, setAddedProducts] = useState([]); e uso adesso cartReducer
  dispatchCart lo inserirò nel codice con il type e il payload mentre userò useReducer e lo state iniziale che è un array vuoto*/

  const [addedProducts, dispatchCart] = useReducer(cartReducer, []);
  /*
adesso devo importare tutta la logica nel cartReducer ma prima vado nel codice dove metto il dispatchCart e mi definisco i vari payload

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
        <div className="col-12  my-5 border border-danger-subtle">
          <h1 className="my-5 border border-danger-subtle">
            🍁🍂 Autumn Shop 🍁🍂{" "}
          </h1>
          <ul className="d-flex flex-column border border-danger-subtle">
            {products.map((product, index) => {
              return (
                <li className="d-flex my-2 col-8" key={index}>
                  <p className="col-3">Name: {product.name}</p>
                  <p className="col-3">Price: {product.price}$ </p>
                  <button
                    type="button"
                    className="btn btn-warning my-1"
                    onClick={() =>
                      dispatchCart({ type: "ADD_ITEM", payload: product })
                    }
                  >
                    🌰 Add to your list 🌰
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-12 border border-danger-subtle">
          <h1>🥧Your cart🥧</h1>
          <ul className="d-flex flex-column border border-danger-subtle">
            {!addedProducts
              ? null
              : addedProducts.map((product, index) => {
                  console.log({ addedProducts });
                  return (
                    <li key={index}>
                      <p>Name: {product.name}</p>
                      <p>Price: {product.price}$</p>
                      <p>Quantity: {product.quantity}</p>
                      <button
                        type="button"
                        className="btn btn-warning mx-2"
                        onClick={() =>
                          dispatchCart({
                            type: "UPDATE_QUANTITY",
                            payload: index,
                          })
                        }
                      >
                        Add
                      </button>
                      <button
                        type="button"
                        className="btn btn-warning mx-2"
                        onClick={() =>
                          dispatchCart({ type: "REMOVE_ITEM", payload: index })
                        }
                      >
                        Remove
                      </button>
                    </li>
                  );
                })}
          </ul>
        </div>
        <div className="row d-flex my-5 border border-danger-subtle">
          <div className="col-5 mt-3">
            <h3 className="d-flex">
              <p className="mx-1">Total:</p>
              {addedProducts
                .reduce((acc, val) => {
                  return acc + val.price * val.quantity;
                }, 0)
                .toFixed(2)}
              $
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

/*🎯 Bonus 2: Usare useReducer per gestire lo stato del carrello
Sostituisci useState con useReducer per gestire lo stato del carrello.

Configura il reducer con queste azioni:

ADD_ITEM: Aggiunge un nuovo articolo al carrello con quantity = 1.
REMOVE_ITEM: Rimuove un articolo specifico dal carrello.
UPDATE_QUANTITY: Modifica la quantità di un articolo esistente nel carrello, assicurandoti di gestire i casi limite (es. valori negativi).
La struttura del reducer potrebbe essere:

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      // Logica per aggiungere un prodotto
      break;
    case 'REMOVE_ITEM':
      // Logica per rimuovere un prodotto
      break;
    case 'UPDATE_QUANTITY':
      // Logica per aggiornare la quantità
      break;
    default:
      return state;
  }
}
Inizializza lo stato con un array vuoto e usa useReducer per gestire le azioni del carrello.
Obiettivo: Migliorare la struttura del codice utilizzando un approccio più scalabile e organizzato.*/
