var ingredientsArray = [];
var addedIngredient = "";



  $("#addIngredients").on("click",function(){
  event.preventDefault();
  addedIngredient = $("#ingredients").val().trim()
  ingredientsArray.push(addedIngredient);
  $("#ingredients").val("");
  console.log(ingredientsArray);
  console.log(addedIngredient);
  displayChip();
  
  });

  function displayChip(){
    $(".chipsRow").empty();

    for (var i = 0; i < ingredientsArray.length; i++) {

        var chipX = $("<div>");
        chipX.addClass("chip");
        chipX.text(ingredientsArray[i]);

        var closeX = $("<i>");
        closeX.text("close")
        closeX.addClass("close material-icons");
      
    }

  };








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
// variable que reciba el input para que sea parte de query URL
//Al dar click se tiene que agregar el ingrediente (tomar en cuenta prevenDefaul)

// funcion para crear las palabras y funcion para ver como meter las palabras al query

        });