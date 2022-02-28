$(document).ready(function(){
  $("#hide").click(function(){
      $("#Hide, #Fade, #Flip, #animate, #Animate, #T1, #T2, #flip").hide();
  });
  
  $("#show").click(function(){
    $("#Hide, #Fade, #Flip, #animate, #Animate, #T1, #T2, #flip").show();
  });
  
  $("#Fade").dblclick(function(){
      $("#Fade").fadeToggle("Slow");
  });
  
  $("#flip").dblclick(function(){
      $("#Flip").slideToggle("slow");
  }); 
  
  $("#Animate").dblclick(function(){
  var div = $("#animate");
  div.animate({height: 'toggle'});
  div.animate({fontSize: '3em'}, "slow");
});
  
   $("#T1").click(function(){
      $("#T1").fadeToggle("Slow");
  });
  
   $("#T2").click(function(){
      $("#T2").fadeToggle("Slow");
  });
  
  $("input").focus(function(){
  $(this).css("background-color", "#c0d6e4");
});
$("input").blur(function(){
  $(this).css("background-color", "#e5eecc");
});
  
$("button").click(function(){
  $("p").css("background-color", "white");
  $("p").css("color", "green"); 
  $("p").css("border-color", "green");

});

  
  $(function(){
  $("#datepicker").datepicker();
      
});
  
//     $( function() {
//    $( "#draggable" ).draggable();
//  } );
//    
});



function myFunction() {
// Get the value of the input field with id="numb"
let x = document.getElementById("age").value;
// If x is Not a Number or less than one or greater than 10
let text;
if (isNaN(x) || x < 18) {
  text = "Minors not Allowed/ No Input Found!";
} else {
  text = "Valid Age!";
}
document.getElementById("verify").innerHTML = text;
}

function validateUsername() {
    let usernameValue = $('#usernames').val();
    if (usernameValue.length == '') {
    $('#usercheck').show();
        usernameError = false;
        return false;
    }
    else if((usernameValue.length < 3)||
            (usernameValue.length > 10)) {
        $('#usercheck').show();
        $('#usercheck').html
("Length of username must be between 3 and 10");
        usernameError = false;
        return false;
    }
    else {
         $('#usercheck').show();
        $('#usercheck').html
        ("Valid Username");

    }
  }