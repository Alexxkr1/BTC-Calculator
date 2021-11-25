// Crypto Label

const getCryptoBtn = document.querySelector('.getCrypto');
const cryptoList = document.querySelector('.crypto');
const inputField = document.querySelector('input[type="text"]');

// Ammount Label
const ammountCrypto = document.querySelector('.numberCrypto');
const inputField2 = document.querySelector('input[type="number"]');

getCryptoBtn.addEventListener('click', getCrypto);

function getCrypto(){
    let cryptoCoin = inputField.value;
    let numberCrypto = inputField2.value;
    let url = `https://api.coindesk.com/v1/bpi/currentprice/${cryptoCoin}.json`;

    fetch(url)
    .then(response => {
        console.log(response);
        console.log(numberCrypto);
        return response.json();
    })
    .then(data => {
        let output = '';
        output += `<p><mark>Your Balance:</mark> ${data.bpi.USD.rate_float * numberCrypto}</p>` ;
        console.log(data.time.updatedISO);
            console.log(data.bpi.USD.rate_float * numberCrypto);

       
        cryptoList.innerHTML = output;
    })
    .catch(console.error);
}