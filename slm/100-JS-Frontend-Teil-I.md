# README
v1.0

## Themen

- Event-Handling Teil I (window.addEventListner)
- IIFE - immediately invoked function expression in 4 Steps
- Revealing Module Pattern (IIFE -> RMP)
- Template Literals
- JS-Module (export, import)
- Event-Handling Teil II (submit, change, reset)
- JS-Classes
- FormData
- JSON Teil I
- Update vs Insert (ID oder nicht ID?)



## Event-Handling Teil I

```javascript
window.addEventListener( ... );
```

## IIFE - immediately invoked function expression in 4 Steps

```javascript

(function () {
  // …
})();

// mit Arrow-Function
(() => {
  // …
})();
```


## Revealing Module Pattern


Das _Revealing Module Pattern_ wird für den Start unserer Applikation verwendet: 

```javascript
const app = (() => {
  
    function init() {
        // view Aufruf ...
    }
    return {
        // ...
    }
})();

// window listener für Start der App
// window.addEventListener( ... )
```


## JS-Module

Module sind per Definition `'use strict'`.

HTML:
```html
    <script type="module" src="..."></script>
```

Achten Sie auf den _DOT-SLASH_ bei der Angabe des relativen Pfades.

Import:
```javascript
import xxxx from JAVASCRIPT_FILE
```

Export:
```javascript
export xxxx;
```

## JS-Klasse

Sehr einfache Implementierung der JS-Klasse Person mit einem Konstruktor, der ein Object übernimmt, das alle Daten beinhaltet: 
```javascript
class Person {
    constructor(data) {
        this.id = data.id;
        // ...
    }
}

```

## FormData

Auslesen aller Daten aus einem HTML-Formular und Transformation in eine JS-Klasse (Person):
```javascript

    const formData = new FormData( form );
    const jsonData = Object.fromEntries( formData );
    const newPerson = new Person( jsonData );

```

## View Modul

Initialisiert und aktualisiert die View (HTML) und dient als Schnittstelle zwischen HTML und Service-Modul


## Service Modul

Das Service Modul beinhaltet alle (CRUD) Functions für den Zugriff auf das Backend. Das Backend wird über die `Fetch-API` aufgerufen.

```javascript
function findAll() {
    // ...
}
function findById(id) {
    // ...
}
function save(person) {
    // wenn person id -> PUT
    // wenn person keine id -> POST
}
// ...

```