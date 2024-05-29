# README
v1.0

## Themen

- JSON
- Promise
- Fetch-API, Promise, async/await
    - Response: https://developer.mozilla.org/en-US/docs/Web/API/Response
- Error-Handling (try/catch)
- Starten der Applikation, bei Verwendung des Backends (CORS - Cross origin resource sharing)


## Promises

Ein Promise ist ein Wrapper-Object, das asynchrone Operationen ausführt. Läuft die Operation fehlerfrei, so wird die
Function `resolve()` aufgerufen, tritt hingegen ein Fehler auf, so wird die Function `reject()` aufgerufen.

Beispiel Promise Object erzeugen:

```javascript
const result = new Promise((resolve, reject) => {
    // Asynchrone Operation (z.B. ein API-Aufruf)
    const success = true; // Dies ist nur ein Beispiel, in der Realität wäre dies das Ergebnis der Operation
    if (success) {
        resolve("Operation war erfolgreich!");
    } else {
        reject("Es gab einen Fehler.");
    }
});

promise.then((result) => {
    console.log(result); // "Operation war erfolgreich!" wird ausgegeben, wenn resolve aufgerufen wurde
}).catch((error) => {
    console.error(error); // "Es gab einen Fehler." wird ausgegeben, wenn reject aufgerufen wurde
});
```


## Fetch-API

Link: https://developer.mozilla.org/en-US/docs/Web/API/fetch

Annahme: Die function `fetchData` befindet sich im `service.js` Script und wird aus dem `view.js` Script aufgerufen.

### Mit async/await
```javascript
async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();   // Auslesen des JSON Objektes 
        return data;  // Rückgabe des Ergebnisses
    } catch (error) {
        console.error('Fehler beim Aufruf der API:', error);
        throw error;  // Fehler wird zurückgegeben
    }
}
```

### Ohne async/await

Annahme: Die function `fetchData` befindet sich im `service.js` Script und wird aus dem `view.js` Script aufgerufen.

```javascript
function fetchData() {
    return fetch('https://api.example.com/data')
        .then(response => {
            if (!response.ok) {
                throw new Error('Fehler beim Aufruf der API');
            }
            return response.json();
        });
}
```


### Ergebnis verarbeiten

Annahme: Die function `fetchData` befindet sich im `service.js` Script und wird aus dem `view.js` Script aufgerufen.

```javascript
service.fetchData()
    .then(data => {
        console.log('Ergebnis=', data);
    })
    .catch(error => {
        console.error('Fehler=', error);
    });
```