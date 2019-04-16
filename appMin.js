jQuery( init );

// Same as: jQuery( document ).ready( init );

// Our Application logic goes here:
function init( $ ){

    let options = {
        url: "../data.json",
        success: jsonHandler
    }

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

        let entries = data[1].entries;
        let cities = entries.map( getCity ); 
        let uniqueCities = removeDups( cities ); 

        createOptions( uniqueCities );

    }

    $.ajax( options );

}

// Alternative, no global vars at all:
// jQuery(function init(){ ... });