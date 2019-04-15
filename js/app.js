jQuery (init);

// Same as: jQuery ( document ).ready(init);

//Our Application logic goes here: 
function init (){

    let options = {
        url: "data.json",
        success: jsonHandleer
    }

    function jsonHandleer (data) {
        console.log ( data );
    }

    $.ajax (options);
}


// Alternative, no global vars at all;
//jQuery (function init (){....});