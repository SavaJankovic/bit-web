// var dataXML = new XMLHttpRequest();

// dataXML.open("GET", "http://freegeoip.net/xml/4.2.2.2");

// dataXML.onload = function () {
//     var xmlDoc = dataXML.responseXML;
//     console.log(xmlDoc);

//     var countryName = xmlDoc.getElementsByTagName("CountryName")[0].childNodes[0].nodeValue;
//     var ip = xmlDoc.getElementsByTagName("IP")[0].childNodes[0].nodeValue;
//     var lt = xmlDoc.querySelector("Latitude").textContent;
//     console.log(countryName);
//     console.log(ip);

//     document.querySelector("#ip").innerHTML = `IP country:  ${ip}`;
//     document.querySelector("#print").innerHTML = `Country Name: ${countryName}`;
//     document.querySelector("#print1").innerHTML = `Latittude: ${lt}`;

// }


var dataJSON = new XMLHttpRequest();
dataJSON.open("GET", "http://freegeoip.net/json/github.com");
dataJSON.send();

dataJSON.onload = function () {
    var obj = JSON.parse(dataJSON.responseText);
    console.log(obj);

    var ip = obj.ip;
    var countryName = obj.country_name;
    var city = obj.city;

    document.querySelector("#ip").innerHTML = `IP country:  ${ip}`;
    document.querySelector("#print").innerHTML = `Country Name: ${countryName}`;

    document.querySelector("#print1").innerHTML = `City: ${city}`;

}