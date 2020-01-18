$("#bur-submit").on("click", function(event){
    event.preventDefault();

    var newBurger = {
        burger_name: $("#burgerEntry").val().trim(),
        
    };

    console.log(newBurger);


$.post("/api/new", newBurger)

.then(function(){
    var row =$("<div>");
    row.addClass("burger");

    row.append("<p>" + newBurger.burger_name + "</p>")

    $("#cart").prepend(row);
});

$("#burgerEntry").val("");

});

$.get("/api/all", function(data) {

    if (data.length !== 0) {
  
      for (var i = 0; i < data.length; i++) {
  
        var row = $("<div>");
        row.addClass("burger");
  
        row.append("<p>" + data[i].burger_name + "</p>");
        
  
        $("#cart").prepend(row);
  
      }
  
    }
  
  });
  
