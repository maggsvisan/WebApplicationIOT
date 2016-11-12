$(document).ready(function () {
    
    $("#LoginSec").hide();
    $("#RegSec").hide(); 
    $("#AboutSec").hide(); 
    $("#SearchSec").hide(); 
    $("#CommentSec").show(); 
    $("#homeImages").hide();
    $("#FavSec").hide();
    
  
    $("#Home").on("click", function () {
        $("#homeImages").show();
        $("#LoginSec").hide();
        $("#RegSec").hide(); 
        $("#AboutSec").hide(); 
        $("#SearchSec").hide();
        $("#CommentSec").hide();
        $("#FavSec").hide();
    });
    
    $("#Login").on("click", function () {
        $("#homeImages").hide();
        $("#LoginSec").show();
        $("#RegSec").hide(); 
        $("#AboutSec").hide(); 
        $("#SearchSec").hide();
        $("#CommentSec").hide();
        $("#FavSec").hide();
    });
    
    $("#Regis").on("click", function () {
        $("#homeImages").hide();
        $("#LoginSec").hide();
        $("#RegSec").show(); 
        $("#AboutSec").hide(); 
        $("#SearchSec").hide();
        $("#CommentSec").hide();
        $("#FavSec").hide();
    });
    
    $("#AboutUs").on("click", function () {
        $("#homeImages").hide();
        $("#LoginSec").hide();
        $("#RegSec").hide(); 
        $("#AboutSec").show(); 
        $("#SearchSec").hide();
        $("#CommentSec").hide();
        $("#FavSec").hide();
    });
    
   $("#SearchCl").on("click", function () {
        $("#homeImages").hide();
        $("#LoginSec").hide();
        $("#RegSec").hide(); 
        $("#AboutSec").hide(); 
        $("#SearchSec").show(); 
        $("#CommentSec").hide();
        $("#FavSec").hide();
    });
    
    $("#Comm").on("click", function () {
        $("#homeImages").hide();
        $("#LoginSec").hide();
        $("#RegSec").hide(); 
        $("#AboutSec").hide(); 
        $("#SearchSec").hide(); 
        $("#CommentSec").show();
        $("#FavSec").hide();
    });  
    
    $("#Fav").on("click", function () {
        $("#homeImages").hide();
        $("#LoginSec").hide();
        $("#RegSec").hide(); 
        $("#AboutSec").hide(); 
        $("#SearchSec").hide(); 
        $("#CommentSec").hide();
        $("#FavSec").show();
    });
//Comments
     $("#postCommentButton").on("click", function () {
        data={};
        data.name = $("#comName").val(); 
        data.id = $("#comID").val();
        data.comment = $("#comComment").val();
        if (data.name === "" ||data.id === "" ||data.comment === "" )
            alert("Fill the corresponding fields");
        else
        {
            commentData= {
               "nameComm"  : data.name ,
               "idComm"  : data.id,
               "comComm": data.comment,
               "action" : "insertcomment"
            };
            alert(commentData.action);
                $.ajax({
                    url:"data/ApplicationLayer.php",
                    type:"POST",
                    data:commentData,
                    dataType:"json",
                    success: function (jsonResponse) {
                    console.log(jsonResponse)
                    alert("Entra Success") ;                                  
                        var newComment = "<tr>";
                            newComment += "<td>" + jsonResponse.name    + "</td>"
                                       +  "<td>" + jsonResponse.id      + "</td>"
                                       +  "<td>" + jsonResponse.comment + "</td>"
                                       +  "</tr>";
                        alert(newComment);
                        $("#submitTable").append(newComment);
                        
                        $("#comName").val("");
                        $("#comID").val("");
                        $("#comComment").val("");
                    },
                    error: function (errorMessage){
                          alert("Error");
                    }
                });
        }
     });
    
   

});