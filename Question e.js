const xmlhttprequest = new XMLHttpRequest();
xmlhttprequest.open("GET","https://restcountries.com/v3.1/all");
xmlhttprequest.send();
xmlhttprequest.onload = function(){
    const response = JSON.parse(xmlhttprequest.responseText);
    console.log(response);
    console.log(
        response.filter((country) => {
            const {currencies={}}=country;
            return Object.keys(currencies).includes("USD");
        }) 
    );
};