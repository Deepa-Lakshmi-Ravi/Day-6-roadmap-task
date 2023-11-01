const xmlhttprequest = new XMLHttpRequest();
xmlhttprequest.open("GET","https://restcountries.com/v3.1/all");
xmlhttprequest.send();
xmlhttprequest.onload = function(){
    const response = JSON.parse(xmlhttprequest.responseText);
    console.log(response);
    country.forEach(function(countries){
        console.log("Name: " + countries.name);
        console.log("Capital:" + countries.capital);
        console.log("Flag: " + countries.flag);
    });
}