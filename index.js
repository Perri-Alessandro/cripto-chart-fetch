///////////////////////////////////////////////////////////////////////////////////
let annoCorrente = new Date().getFullYear();
let eccolo = (document.getElementById("anno").innerHTML =
  "&copy;" +
  annoCorrente +
  " My Cripto Info. All rights reserved. Created by Perri Alessandro");
////////////////////////////////////////////////////////////////////////////////////

const getDataEtime = function () {
  const updateTime = function () {
    const now = new Date();
    // Ottenere la data completa (YYYY-MM-DD)
    const fullDate = now.toISOString().split("T")[0];
    // Ottenere l'ora completa (HH:MM:SS)
    const fullTime = now.toTimeString().split(" ")[0];

    const fullDateTime = `${fullDate} ${fullTime}`;

    const timeElement = document.getElementById("dataEora");
    timeElement.textContent = fullDateTime;
  };

  // Chiama la funzione updateTime ogni secondo (1000 millisecondi)
  setInterval(updateTime, 1000);
};
getDataEtime();

let shouldReload = true;
let completedFetches = 0;
const totalFetches = 4;

function checkAndReload() {
  completedFetches++;
  if (completedFetches === totalFetches && shouldReload) {
    shouldReload = false;

    setTimeout(() => {
      location.reload();
    }, 10000); // Ricarica la pagina dopo 10 secondi

    console.log("Tutte le chiamate Fetch sono state completate");
  }
}

fetchBitcoin();

function fetchBitcoin() {
  fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
  )
    .then((response) => {
      if (response.ok) {
        console.log("SERVER IS IN THE CALL", response);
        return response.json();
      } else if (response.status === 400) {
        throw new Error("ERROR 400");
      } else if (response.status === 401) {
        throw new Error("ERROR 401, AUTENTICATION PROBLEMS");
      } else if (response.status === 403) {
        throw new Error("ERROR 403");
      } else if (response.status === 500) {
        throw new Error("ERROR 500, SERVER PROBLEMS");
      } else {
        throw new Error("ERROR");
      }
    })
    .then((data) => {
      console.log("DATA RECEIVED FROM THE SERVER", data);
      const price = document.getElementById("price");
      const col = document.createElement("p");
      col.classList.add("col-4", "text-center");

      col.textContent = "BTC: " + data.bitcoin.usd;

      price.appendChild(col);

      checkAndReload();

      fetchEthereum();
    })
    .catch((err) => {
      console.log("ERROR, SERVER DOES NOT RECEIVE THE CALL", err);
      completedFetches++;
      checkAndReload();
    });
}
function fetchEthereum() {
  fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
  )
    .then((response) => {
      if (response.ok) {
        console.log("SERVER IN SECOND FETCH IS IN THE CALL", response);
        return response.json();
      } else if (response.status === 400) {
        throw new Error("ERROR SECOND FETCH 400");
      } else if (response.status === 401) {
        throw new Error("ERROR 401 SECOND FETCH, AUTENTICATION PROBLEMS");
      } else if (response.status === 403) {
        throw new Error("ERROR 403 SECOND FETCH");
      } else if (response.status === 500) {
        throw new Error("ERROR 500 SECOND FETCH, SERVER PROBLEMS");
      } else {
        throw new Error("ERROR SECOND FETCH");
      }
    })
    .then((data) => {
      console.log("DATA RECEIVED FROM THE SERVER IN THE SECOND FETCH", data);
      const price = document.getElementById("price");
      const col2 = document.createElement("p");
      col2.classList.add("col-4", "text-center");

      col2.textContent = "ETH: " + data.ethereum.usd;

      price.appendChild(col2);

      completedFetches++;
      checkAndReload();
      fetchPolkadot();
    })
    .catch((err) => {
      console.log("ERROR SECOND FETCH, SERVER DOES NOT RECEIVE THE CALL", err);
      completedFetches++;
      checkAndReload();
    });
}

function fetchPolkadot() {
  fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=polkadot&vs_currencies=usd"
  )
    .then((response) => {
      if (response.ok) {
        console.log("SERVER IN THIRD FETCH IS IN THE CALL", response);
        return response.json();
      } else if (response.status === 400) {
        throw new Error("ERROR THIRD FETCH 400");
      } else if (response.status === 401) {
        throw new Error("ERROR 401 THIRD FETCH, AUTENTICATION PROBLEMS");
      } else if (response.status === 403) {
        throw new Error("ERROR 403 THIRD FETCH");
      } else if (response.status === 500) {
        throw new Error("ERROR 500 THIRD FETCH, SERVER PROBLEMS");
      } else {
        throw new Error("ERROR THIRD FETCH");
      }
    })
    .then((data) => {
      console.log("DATA RECEIVED FROM THE SERVER IN THE THIRD FETCH", data);
      const price2 = document.getElementById("priceUnder");
      const col3 = document.createElement("p");
      col3.classList.add("col-4", "text-center");

      col3.textContent = "DOT: " + data.polkadot.usd;

      price2.appendChild(col3);

      completedFetches++;
      checkAndReload();

      fetchSolana();
    })
    .catch((err) => {
      console.log("ERROR THIRD FETCH, SERVER DOES NOT RECEIVE THE CALL", err);
      completedFetches++;
      checkAndReload();
    });
}

function fetchSolana() {
  fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd"
  )
    .then((response) => {
      if (response.ok) {
        console.log("SERVER IN FOURTH FETCH IS IN THE CALL", response);
        return response.json();
      } else if (response.status === 400) {
        throw new Error("ERROR FOURTH FETCH 400");
      } else if (response.status === 401) {
        throw new Error("ERROR 401 FOURTH FETCH, AUTENTICATION PROBLEMS");
      } else if (response.status === 403) {
        throw new Error("ERROR 403 FOURTH FETCH");
      } else if (response.status === 500) {
        throw new Error("ERROR 500 FOURTH FETCH, SERVER PROBLEMS");
      } else {
        throw new Error("ERROR FOURTH FETCH");
      }
    })
    .then((data) => {
      console.log("DATA RECEIVED FROM THE SERVER IN THE FOURTH FETCH", data);
      const priceUnder = document.getElementById("priceUnder");
      const col4 = document.createElement("p");
      col4.classList.add("col-4", "text-center");
      col4.id = "parentDiv";

      col4.textContent = "SOL: " + data.solana.usd;

      priceUnder.appendChild(col4);

      completedFetches++;
      checkAndReload();
    })
    .catch((err) => {
      console.log("ERROR FOURTH FETCH, SERVER DOES NOT RECEIVE THE CALL", err);
      completedFetches++;
      checkAndReload();
    });
}

function handleFetchResponse(response) {
  if (response.ok) {
    console.log("SERVER IS IN THE CALL", response);
    return response.json();
  } else {
    throw new Error("ERROR " + response.status);
  }
}

function handleFetchError(err) {
  console.log("ERROR, SERVER DOES NOT RECEIVE THE CALL", err);
  checkAndReload();
}

///////////////////////////////
function hideLoadingAnimation() {
  const loadingDiv = document.getElementById("loadingDiv");
  if (loadingDiv) {
    loadingDiv.style.display = "none";
  }
}
// Verifica se il div genitore è stato creato
const parentDiv = document.getElementById("parentDiv");
// Se il div genitore non è ancora stato creato, creo loading div e mostro l'animazione
if (!parentDiv) {
  const loadingDiv = document.createElement("div");
  loadingDiv.id = "loadingDiv";
  loadingDiv.classList.add("clessidra");
  loadingDiv.style.width = "20px";
  loadingDiv.style.height = "20px";
  document.body.appendChild(loadingDiv);
} else {
  hideLoadingAnimation(); // Nascondi l'animazione se il div genitore è già stato creato
  const loadingDiv = document.getElementById("loadingDiv");
  // Aggiungi un listener per l'evento "animationend" all'elemento di caricamento
  loadingDiv.addEventListener("animationend", () => {
    // Una volta completata l'animazione di opacità, nascondi il div di caricamento
    loadingDiv.style.display = "none";
  });
}
//////////////////////////////