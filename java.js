$(document).ready(function () {
    
    $("#LoginSec").hide();
    $("#RegSec").hide(); 
    $("#AboutSec").hide(); 
    $("#SearchSec").hide(); 
    $("#CommentSec").hide(); 
    $("#homeImages").show();
    $("#CommentSec").hide();
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

    
   

});