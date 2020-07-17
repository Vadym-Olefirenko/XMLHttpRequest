import '../scss/app.scss';


window.addEventListener('DOMContentLoaded', () => {
    const inputUSD = document.getElementById("USD"),
          inputUAH = document.getElementById("UAH");

    inputUSD.addEventListener('input', () => {

        let request = new XMLHttpRequest;

        request.open("GET", "serv.json");

        request.setRequestHeader("Content-type", "application/json; charset = utf-8");

        request.send();

        request.addEventListener('load', () => {
            if (request.status === 200) {
                let data = JSON.parse(request.response);
                inputUAH.value = (+inputUSD.value * data.current.UAH).toFixed(2);
            } else {
                inputUAH.value = "Try against Later!"
            }
        });

    });
});

