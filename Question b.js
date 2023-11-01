const xmlhttprequest = new XMLHttpRequest();
xmlhttprequest.open("GET","https://restcountries.com/v3.1/all");
xmlhttprequest.send();
xmlhttprequest.onload = function(){
    const response = JSON.parse(xmlhttprequest.responseText);
    console.log(response.filter((country)=>country.population < 200000));
}