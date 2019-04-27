$(document).ready(function(){

var config = {
  apiKey: "AIzaSyCpq0tQ_Vkd6lMOA4s7dWmoTn45cTzIwvc",
  authDomain: "proyect1-27081.firebaseapp.com",
  databaseURL: "https://proyect1-27081.firebaseio.com",
  projectId: "proyect1-27081",
  storageBucket: "proyect1-27081.appspot.com",
  messagingSenderId: "998295644330"
};
firebase.initializeApp(config);

var ingredientsArray = [];
var addedIngredient = "";
var ingredientsString="";


// === Render buttons ===
function renderButtons(){

  $(".chipsRow").empty();

  for (var i = 0; i < ingredientsArray.length; i++) {
    var chipX = $("<div>");
    chipX.addClass("chip");
    chipX.attr("data-name", ingredientsArray[i]);
    chipX.text(ingredientsArray[i]);
    $(".chipsRow").append(chipX);

  };
  var closeX = $("<i>");
  closeX.text("close")
  closeX.addClass("close material-icons");
  $(".chip").append(closeX);
};

// === Add On click === 
$("#addIngredients").on("click", function(event) {
  event.preventDefault();
  addedIngredient = $("#ingredients").val().trim();
  ingredientsArray.push(addedIngredient);
  $("#ingredients").val("");
  renderButtons();
  console.log(ingredientsArray);
  ingredientsString = ingredientsArray.join("-");
  console.log(ingredientsString);

  ajaxCall();

      });



  function ajaxCall(){
    var key= "d700cd0ee0b7bf70739c9bd846d3080d"	;	
    var queryURL = "https://api.edamam.com/search?q=" +
    ingredientsString + "&app_id=" +  "f1e5b0de" + "&app_key=" + key;
      
      
      
    console.log(queryURL);
              
  // metodo ajax  para objetener de la url lo que quermos
    $.ajax({
    url: queryURL, 
    method: "GET"
    })
  // hace una promesa. de que se cargue hasta .que lo de arriba este listo o no se ejecute mientras
    
    .then(function(response) {

    var results = response.hits;
    console.log("Results", results);

     for (var i = 0; i < results.length; i++) {

      var cardContainer = $("<div>");
          cardContainer.addClass("cardContainer col s12 m6 l4 xl3");
          $(".recipesContainer").append(cardContainer);

      var singleCard = $("<div>");
          singleCard.addClass("card sticky-action col s12");
          cardContainer.append(singleCard);
          
      var imageContainer = $("<div>");
          imageContainer.addClass("card-image waves-effect waves-block waves-light"); 
          singleCard.append(imageContainer);
      
          var image = response.hits[i].recipe.image;
          console.log(image);
      
      var imageCard = $("<img>");
          imageCard.addClass("activator");
          imageCard.attr("src", image);
          imageContainer.append(imageCard);

      var cardContent = $("<div>");
          cardContent.addClass("card-content");
          singleCard.append(cardContent);    


          var nameRecipe = response.hits[i].recipe.label;
          console.log(nameRecipe);
       
      var cardTitle = $("<div>");
          cardTitle.addClass("cardTitle");
          cardContent.append(cardTitle);

      var nombre = $("<span>");
          nombre.addClass("card-title activator truncate");
          nombre.text(nameRecipe);    
          cardTitle.append(nombre);
          
      var iconoMas = $("<i>");
          iconoMas.addClass("material-icons small right");
          iconoMas.text("add_circle");
          nombre.append(iconoMas); 

          var cookingTime = response.hits[i].recipe.totalTime;
          console.log(cookingTime);

      var cardTime = $("<div>");
          cardTime.addClass("cardText");
          cardContent.append(cardTime);
          
      var time = $("<p>")
          time.text(cookingTime + " min");
          cardTime.append(time);
      
      var iconoReloj = $("<i>");
          iconoReloj.addClass("material-icons left");
          iconoReloj.text("timer");
          time.append(iconoReloj);


          
       var calories = response.hits[i].recipe.calories;
       console.log(calories);
       
        var cardContent = $("<div>");
      

       var servings = response.hits[i].recipe.yield;
       console.log(servings);


       var ingredientsLines = response.hits[i].recipe.ingredientLines;
       console.log(ingredientsLines)


       var source = response.hits[i].recipe.url
       console.log(source);
      
        };
     });


  }
      



  

});








