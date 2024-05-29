import * as service from "./service.js";

const app = (()=> {

    const panel = document.getElementById(`text-panel`);

    function init() {
        console.log(`init app`);

        document.getElementById(`btn-fetch`).addEventListener(`click`, function (event) {
            service.getDataAsync()
                .then( function (jsonResult){
                    console.log(jsonResult);
                    panel.innerText = jsonResult.value;
                } )
                .catch( function (error) {
                    console.log(error);
                    panel.innerText = error;
                });
        });

        // service.promiseExample()
        //     .then( function (result){
        //         console.log(result);
        //         panel.innerText = result;
        //     } )
        //     .catch( function (error) {
        //         console.log(error);
        //         panel.innerText = error;
        //     });


    }

    return {
        init: init,
    }

})();

window.addEventListener(`DOMContentLoaded`, app.init );