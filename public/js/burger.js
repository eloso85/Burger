$("#bur-submit").on("click", function(event){
    event.preventDefault();

    var newBurger = {
        burger_name: $("#burgerEntry").val().trim(),
        devoured: false
    };

    console.log(newBurger);


$.post("/api/new", newBurger)

.then(function(){
    var row =$("<div>");
    row.addClass("burger");

    row.append("<p>" + newBurger.burger_name + "</p>")
    row.append("<button>" + "Devour" + "</button>")
    $("#cart").prepend(row);
});

$("#burgerEntry").val("");

});

$("#cart").on("click","button", function(event){
  event.preventDefault();
      var devourBurger = {
        burger_name:$(".burger"),
        devoured:true
      }
      console.log(devourBurger);
      $.post("/api/new", devourBurger)

 // var devourBurger = $(".burger").val().trim()
      
  // $.get("/api/all", function(data) {

  //       if (data.length !== 0) {
      
  //         for (var i = 0; i < data.length; i++) {
      
  //           var row = $("<div>");
  //           row.addClass("eaten");
      
  //           row.append("<p>" + data[i].burger_name + "</p>");
            
      
  //           $("#eaten").prepend(row);
      
  //         }
      
  //       }
  //     console.log(data);
  //     });

  


//  $.post("/api/eaten", devourBurger)

// .then(function(){
//   var row =$("<div>");
//   row.addClass("eaten");

//   row.append("<p>" + devourBurger + "</p>")
  
//   $("#eaten").prepend(row);
// });

// $(".burger").val("");
// console.log(row);
});

// $.get("/api/all", function(data) {

//     if (data.length !== 0) {
  
//       for (var i = 0; i < data.length; i++) {
  
//         var row = $("<div>");
//         row.addClass("eaten");
  
//         row.append("<p>" + data[i].burger_name + "</p>");
        
  
//         $("#eaten").prepend(row);
  
//       }
  
//     }
  
//   });
  
