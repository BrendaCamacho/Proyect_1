
var ingredient="tomato";
var key= "d700cd0ee0b7bf70739c9bd846d3080d"	;	
        var queryURL = "https://api.edamam.com/search?q=" +
        ingredient + "&app_id=" +  "f1e5b0de" + "&app_key=" + key;



        console.log(queryURL)
// metodo ajax  para objetener de la url lo que quermos
      $.ajax({
        url: queryURL, 
        method: "GET"
      })
      // hace una promesa de que se cargue hasta que lo de arriba este listo o no se ejecute mientras

        .then(function(response) {

            
        });