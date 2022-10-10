let container = document.getElementById('container');
let btn = document.getElementById('btn');


btn.addEventListener('click', fetchDetails);


  function fetchDetails() {


    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'sample.json', true);

    xhr.onload = function () {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let surpriseHtml = "";
            let surprise = `<div class="card bg-primary" style="width: 18rem;">
            <img src="${json.urlImage}" class="card-img-top" alt="picture">
            <div class="card-body">
                <h5 class="card-title text-light">${json.start}</h5>
                <h5 class="card-title text-light">${json.name}</h5>
                <p class="card-text text-light">${json.description}</p>
            </div>
        </div>`
            surpriseHtml += surprise;
            container.innerHTML = surpriseHtml;

        }
        else {
            console.log("an error occured");
        }
    }
    xhr.send();
}


