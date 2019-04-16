jQuery (init);

// Same as: jQuery ( document ).ready(init);

//Our Application logic goes here: 
function init ( $ ){

    let options = {
        url: "../data.json",
        success: jsonHandleer
    }

    function removeDups (names){
        let unique = {};
        names.forEach(function(i) {
            if (!unique[i]){
                unique [i]= true; 
            }
        })
        return Object.keys(unique);
    }

    function createOptions( listOfCitites ){
        // 1. Get datalist
        let datalist = document.querySelector ( "#cities-list");
        // 1.1 TEST!!
        // 2. Loop over unique cities array
        listOfCitites.map( addOption );
        
        function addOption( city ){
            datalist.innerHTML += `<option value="${city}"><option>`;
        }
        // 2.1 Inside loop:
            // Create option element
            // Add city value
            // Add to datalist (innerHTML)
            // HINT: datalist.innerHTML = "<option>... </option>";  
    }

    function jsonHandleer (data) {
        
        function getCity (hotel) {
            return hotel.city;
        }

        let entries = data[1].entries;
        let cities = entries.map (getCity); //Array {Hotel} x 4
        let uniqueCities = removeDups(cities);
        uniqueCities.sort();
        
        createOptions(uniqueCities);
        

    }

    // HANDLE CITY INPUT

    let citiesInput = document.querySelector("#cities");
    citiesInput.addEventListener ("keydown", handleCityInput);

    function handleCityInput (e){
        console.log ( e );
        if (e.keycode == 13) {
            console.log ("get hotels from city..");
        }
    }

    $.ajax (options);

}


// Alternative, no global vars at all;
//jQuery (function init (){....});