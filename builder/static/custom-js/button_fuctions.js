function myFunction() {
    $.ajax({
            type: "GET",
            url: "/creator/", 
            success: function(data){
                console.log(data);
            }
          });
 }

