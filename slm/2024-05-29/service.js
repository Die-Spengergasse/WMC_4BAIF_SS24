export { promiseExample, getData, getDataAsync };


function promiseExample() {

    console.log(`service call`);

    return new Promise(function (resolve, reject) {
        let ran = Math.floor(Math.random() * 2);
        //
        console.log(`ran = ${ran}`);
        if(ran === 1) {
            console.log(`1`);
            resolve(`Daten aus dem Backend`);
        } else {
            reject(`Fehler Backend nicht erreichbar`);
        }
    });
}

const API = `https://api.chucknorris.io/jokes/random`;


function getData() {
    return fetch( API )
        .then(response => {

            if(!response.ok) {
                throw new Error(`Aufruf gescheitert! - response not ok`);
            }

            return response.json();
        });
}

async function getDataAsync() {
    try {
        const response = await fetch(API);
        return response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}
