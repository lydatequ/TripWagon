jQuery (init);

// Same as: jQuery ( document ).ready(init);

//Our Application logic goes here: 
function init (){

    let options = {
        url: "data.json",
        success: jsonHandleer
    }

    function jsonHandleer (data) {
        
        let entries = data [1].entries;
        // console.log (entries); 
        
        let cities = entries.map (getCity); //Array {Hotel} x 4

        function getCity (hotel) {
            return hotel.city;
        }

        function removeDups (names){
            let unique = {};
            names.forEach (function(i) {
                if (!unique[i]){
                    unique [i]= true;
                }
            })
            return Object.keys(unique);
        }

        let uniqueCities = removeDups(cities);

        console.log (uniqueCities);
    }

    $.ajax (options);

}


// Alternative, no global vars at all;
//jQuery (function init (){....});