const xmlhttprequest = new XMLHttpRequest();
xmlhttprequest.open("GET","https://restcountries.com/v3.1/all");
xmlhttprequest.send();
xmlhttprequest.onload = function(){
    const response = JSON.parse(xmlhttprequest.responseText);
    console.log(response);
    const totalpopulation = country.reduce((accumlator , country) => {
    return accumlator + country.population;
},0);
console.log(totalpopulation);
}