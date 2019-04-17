jQuery (init);

// Same as: jQuery ( document ).ready(init);

//Our Application logic goes here: 
function init( $ ){

    let options = {
        url: "../data.json",
        success: jsonHandler
    }
    let entries;

    function removeDups(names) {
        let unique = {};
        names.forEach(function(i) {
          if(!unique[i]) { unique[i] = true; }
        });
        return Object.keys(unique);
    }

    function createOptions( listOfCities ){

        let datalist = document.querySelector( "#cities-list" );
        listOfCities.map( addOption );

        function addOption( city ){
            datalist.innerHTML += `<option value="${ city }"></option>`;
        }

    }

    function jsonHandler( data ){

        function getCity( hotel ){ 
            return hotel.city;
        }

        entries = data[1].entries;
        let cities = entries.map( getCity ); 
        let uniqueCities = removeDups( cities ); 
        uniqueCities.sort();
        createOptions( uniqueCities );

    }

    function getHotelsFromSelected( selectedCity ){

        function filterHotels( hotel ){
            return hotel.city.toLowerCase() === selectedCity.toLowerCase().trim();
        }

        let availableHotels = entries.filter( filterHotels );

        return availableHotels;

    }

    function handleCityInput( e ){
        if ( e.keyCode === 13 ){
            let selectedCity = this.value;
            getHotelsFromSelected( selectedCity );
        }
    }

    // HANDLE CITY INPUT 
    let citiesInput = document.querySelector( "#cities" );
    
    citiesInput.addEventListener( "keydown", handleCityInput );

    $.ajax( options );

}


// Alternative, no global vars at all;
//jQuery (function init (){....});