


var products = [];



 var nameInput = document.querySelector('#name');
 var descriptionInput = document.querySelector('#description');
 var priceInput = document.querySelector('#price');

document.querySelector('.products').onsubmit = function(e){
e.preventDefault();
var product = {
    name:nameInput.value,
    description:descriptionInput.value,
    price:priceInput.value,
};
products.push(product);
printData(products);
nameInput.value ="";
descriptionInput.value="";
priceInput.value="";
}

function printData(products){

    var body = document.querySelector('.tbody');
    var data =``;

    for(var i=0;i<products.length;i++){

        data+=`
                <tr>
                    <td>${products[i].name}</td>
                    <td>${products[i].description}</td>
                    <td>${products[i].price}</td>
                </tr>
        `
    }

    body.innerHTML=data;
}

