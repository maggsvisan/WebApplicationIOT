$(document).ready(function () {
    
    
//////////////////////////////////////////////
////////// PAGE DIVS SHOW AND HIDE //////////
//////////////////////////////////////////////
    
    $("#LoginSec").hide();
    $("#RegSec").hide(); 
    $("#AboutSec").hide(); 
    $("#SearchSec").hide(); 
    $("#CommentSec").hide(); 
    $("#homeImages").show();
    $("#CommentSec").hide();
    $("#FavSec").hide();
    $("#logoutButton").hide();
    $("#currentLogin").hide();
    $("#pickAClassroom").hide();
    
    
     
    $("#Home").on("click", function () {
        $("#homeImages").show();
        $("#LoginSec").hide();
        $("#RegSec").hide(); 
        $("#AboutSec").hide(); 
        $("#SearchSec").hide();
        $("#CommentSec").hide();
        $("#FavSec").hide();
        $("#pickAClassroom").hide();
  
    });
    
    $("#Login").on("click", function () {
        $("#homeImages").hide();
        $("#LoginSec").show();
        $("#RegSec").hide(); 
        $("#AboutSec").hide(); 
        $("#SearchSec").hide();
        $("#CommentSec").hide();
        $("#FavSec").hide();
        $("#pickAClassroom").hide();
    });
    
    $("#Regis").on("click", function () {
        $("#homeImages").hide();
        $("#LoginSec").hide();
        $("#RegSec").show(); 
        $("#AboutSec").hide(); 
        $("#SearchSec").hide();
        $("#CommentSec").hide();
        $("#FavSec").hide();
        $("#pickAClassroom").hide();
    });
    
    $("#AboutUs").on("click", function () {
        $("#homeImages").hide();
        $("#LoginSec").hide();
        $("#RegSec").hide(); 
        $("#AboutSec").show(); 
        $("#SearchSec").hide();
        $("#CommentSec").hide();
        $("#FavSec").hide();
        $("#pickAClassroom").hide();
    });
    
   $("#SearchCl").on("click", function () {
        $("#homeImages").hide();
        $("#LoginSec").hide();
        $("#RegSec").hide(); 
        $("#AboutSec").hide(); 
        $("#SearchSec").show(); 
        $("#CommentSec").hide();
        $("#FavSec").hide();
        $("#pickAClassroom").hide();

    });
    
    $("#Comm").on("click", function () {
        $("#homeImages").hide();
        $("#LoginSec").hide();
        $("#RegSec").hide(); 
        $("#AboutSec").hide(); 
        $("#SearchSec").hide(); 
        $("#CommentSec").show();
        $("#FavSec").hide();
        $("#pickAClassroom").hide();
    });  
    
    $("#Fav").on("click", function () {
        $("#homeImages").hide();
        $("#LoginSec").hide();
        $("#RegSec").hide(); 
        $("#AboutSec").hide(); 
        $("#SearchSec").hide(); 
        $("#CommentSec").hide();
        $("#FavSec").show();
        $("#pickAClassroom").hide();

    });

    
     $("#cetec2").on("click",function(){
      
        $("#LoginSec").hide();
        $("#RegSec").hide(); 
        $("#AboutSec").hide(); 
        $("#SearchSec").hide(); 
        $("#CommentSec").hide(); 
        $("#homeImages").hide();
        $("#CommentSec").hide();
        $("#FavSec").hide();
        $("#logoutButton").hide();
        $("#currentLogin").hide();
        $("#pickAClassroom").show();


    });
    
     $("#cedes2").on("click",function(){
      
        $("#LoginSec").hide();
        $("#RegSec").hide(); 
        $("#AboutSec").hide(); 
        $("#SearchSec").hide(); 
        $("#CommentSec").hide(); 
        $("#homeImages").hide();
        $("#CommentSec").hide();
        $("#FavSec").hide();
        $("#logoutButton").hide();
        $("#currentLogin").hide();
        $("#pickAClassroom").show();


    });
    
    
     $("#ciap2").on("click",function(){
      
        $("#LoginSec").hide();
        $("#RegSec").hide(); 
        $("#AboutSec").hide(); 
        $("#SearchSec").hide(); 
        $("#CommentSec").hide(); 
        $("#homeImages").hide();
        $("#CommentSec").hide();
        $("#FavSec").hide();
        $("#logoutButton").hide();
        $("#currentLogin").hide();
        $("#pickAClassroom").show();

    });
    
    
     $("#biotec2").on("click",function(){
      
        $("#LoginSec").hide();
        $("#RegSec").hide(); 
        $("#AboutSec").hide(); 
        $("#SearchSec").hide(); 
        $("#CommentSec").hide(); 
        $("#homeImages").hide();
        $("#CommentSec").hide();
        $("#FavSec").hide();
        $("#logoutButton").hide();
        $("#currentLogin").hide();
        $("#pickAClassroom").show();

    });
///////////////////////////////////////////////////
///////////////////////////////////////////////////
    
    
/////////////////////////////////////////////////////
///////////////// VERIFY SESSION ////////////////// 
/////////////////////////////////////////////////////
        
 $.ajax({
        url: 'data/ApplicationLayer.php',
        type: 'POST' ,
        data: { "action": "verifySession"},
        dataType: 'json',
        success: function(jsonResponse){
          if(jsonResponse.state === "true"){
            $("#currentLogin").append(jsonResponse.mat);
            $("#LoginSec").hide();
          }
          else{
            $("#LoginUsername").append("Welcome to out site");
          }

        },
        error: function(errorMessage){
          $("#currentLogin").append("Welcome");
          alert(errorMessage.responseText);
          $("#logoutButton").hide();
        }
  });
        
/////////////////////////////////////////////////////
///////////////////////////////////////////////////// 
/////////////////////////////////////////////////////
    


    
    
/////////////////////////////////////////////////////
///////////////// REGISTER SECTION ////////////////// 
/////////////////////////////////////////////////////

    $("#registerBtn").click(function () {
       
        var jsonData = {
            "fName": $("#inFname").val(), 
            "lName": $("#inLname").val(), 
            "password": $("#inPassword").val(), 
            "mat": $("#inMatricula").val(), 
            "accessType": $("#inAccessType").val(), 
            "action": "register"
            
        };
        
        $.ajax({
            url: "data/ApplicationLayer.php"
            , type: "POST"
            , data: jsonData
            , success: function (jsonResponse) {
                alert(jsonResponse.message + "!");
                //alert("New Register added" + jsonResponse.fName)
                console.log(jsonResponse);
            }
            , error: function (errorMessage) {
                alert(errorMessage.responseText);
            }
        });
        
    });
/////////////////////////////////////////////////////////////
    
    
///////////////////////////////////////////////    
/////////// GET USERNAME WITH COOKIE///////////
///////////////////////////////////////////////
    
    $.ajax({ //Gets user name in LoginForm
       // url: "php/CookieService.php"
        url: "data/ApplicationLayer.php"
        , type: "POST"
        , data:{
          "action": "retrieveCookie"
        }
        , success: function (jsonResponse) {
            $("#logMat").val(jsonResponse.cookieMat);
        }
        , error: function (errorMessage) {
            alert(errorMessage.responseText);
        }
    });
///////////////////////////////////////////////////   
///////////////////////////////////////////////////   

///////////////////////////////////////////////////
/////////////LOGIN WITH COOKIE/////////////////////
///////////////////////////////////////////////////
    
    $("#loginButton").click(function () { //Session begins       
        var jsonData = {
            "action": "login",
            "matricula": $("#logMat").val(),
            "password": $("#logPassword").val()
        };
       
        $.ajax({
            url: "data/ApplicationLayer.php"
            , type: "POST"
            , data: jsonData
            , dataType: "json"
            , contentType: "application/x-www-form-urlencoded"
            , success: function (jsonResponse) {
                
                alert("Welcome back " + jsonResponse.fName + " " + jsonResponse.lName);
                var newHTMLContent = "";
                
                newHTMLContent = jsonResponse.mat;
                $("#currentLogin").append(newHTMLContent); //currently login as
                $("#currentLogin").show();
                
             
                
                var jsonData2 = {
                    "CookieValue": $("#logMat").val(), 
                    "CookieName": "matID", 
                    "action": "createCookie"
                };

                var valueBox = $("#logRemember").is(":checked");
                
                if (valueBox) {
                    console.log(valueBox);
                    $.ajax({
                        //url: "php/CreateCookie.php"
                        url: "data/ApplicationLayer.php"
                        , type: "POST"
                        , data: jsonData2
                        , success: function (jsonResponse) {
                            console.log(jsonResponse);
                        }
                        , error: function (errorMessage) {
                            alert(errorMessage.responseText);
                        }
                    });
                }
                
                
                
            }
            , error: function (errorMessage) {
                alert(errorMessage.responseText);
            }
        });
        
        $("#logoutButton").show();
    
    });
///////////////////////////////////////////////////
    
    
///////////////////////////////////////////////////
////////////// DELETE SESSION /////////////////////
///////////////////////////////////////////////////

$("#logoutButton").on("click", function () {

        $.ajax({
            url: "data/ApplicationLayer.php"
            , type: "POST"
            , dataType: "json"
            ,data:{
                action: "deleteSession"
            }
            , success: function (jsonResponse) {
                alert(jsonResponse.success);
                window.location.replace("index.html");
            }
            , error: function (errorMessage) {
                alert(errorMessage.responseText);
            }
        });
    });
///////////////////////////////////////////////////    
    
    
///////////////////////////////////////////////////
//////////////// ADD COMMENTS /////////////////////
///////////////////////////////////////////////////
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
            
         //   alert(commentData.action);
            
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


/////////////////////////////////////////////////////
///////////////// Change Status ////////////////// 
/////////////////////////////////////////////////////
  $("#writeClassroomBtn").on("click", function () {
    alert("le dio change");
    if ($("input[name=LightStatus].checked").val()>= 0) //dice si es 1 o 0
    {
        var valueLight= $("input[name=LightStatus].checked").val();
    }
    
    else{
        var valueLight=-1;
    }
      
      
    if ($("input[name=ACStatus].checked").val()>=0) //dice si es 1 o 0
    {
        var valueAC= $("input[name=ACStatus].checked").val();
    }
    
    else{
        var valueAC =-1;
    }
    
        
       var jsonData = {
            "action": "changeSts",
            "lstatus": "valueLight",
            "ACstatus": "valueAC"
        };
      
        if ((valueAC < 0) && (valueLight < 0)) {
            
            $.ajax({
                url: "data/ApplicationLayer.php", 
                type: "POST",
                data: jsonData,
                dataType: "json",
                contentType: "application/x-www-form-urlencoded",
                success: function (jsonResponse) {
                    console.log(jsonResponse)
                },

                error: function (errorMessage){
                              alert("Error");
                }
            });
                
        }
      
        else{
            
            alert("Select an option!");
        }
        
  });
   
    
/////////////////////////////////////////////////////
///////////////////////////////////////////////////// 
/////////////////////////////////////////////////////
    
});