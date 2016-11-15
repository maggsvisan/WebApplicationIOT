$(document).ready(function () {
    
    
//////////////////////////////////////////////
////////// PAGE DIVS SHOW AND HIDE //////////
//////////////////////////////////////////////
 var imageSelected;

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
    $("#CiapDropDownMenu").hide();
    $("#CetecDropDownMenu").hide();
    $("#CedesDropDownMenu").hide();
    $("#BiotecDropDownMenu").hide();
    $("#RegClass").hide();
    $("#RegUser").hide();
    
    $("#Home").on("click", function () {
        $("#homeImages").show();
        $("#LoginSec").hide();
        $("#RegSec").hide(); 
        $("#AboutSec").hide(); 
        $("#SearchSec").hide();
        $("#CommentSec").hide();
        $("#FavSec").hide();
        $("#pickAClassroom").hide();
        $("#CiapDropDownMenu").hide();
        $("#CetecDropDownMenu").hide();
        $("#CedesDropDownMenu").hide();
        $("#BiotecDropDownMenu").hide();
        $("#RegClass").hide();
        $("#RegUser").hide();
  
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
        $("#CiapDropDownMenu").hide();
        $("#CetecDropDownMenu").hide();
        $("#CedesDropDownMenu").hide();
        $("#BiotecDropDownMenu").hide();
        $("#RegClass").hide();
        $("#RegUser").hide();
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
        $("#ClassDropDownMenu").hide();
        $("#CiapDropDownMenu").hide();
        $("#CetecDropDownMenu").hide();
        $("#CedesDropDownMenu").hide();
        $("#BiotecDropDownMenu").hide();
        $("#RegClass").hide();
        $("#RegUser").hide();
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
        $("#ClassDropDownMenu").hide();
        $("#CiapDropDownMenu").hide();
        $("#CetecDropDownMenu").hide();
        $("#CedesDropDownMenu").hide();
        $("#BiotecDropDownMenu").hide();
        $("#RegClass").hide();
        $("#RegUser").hide();
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
        $("#CiapDropDownMenu").hide();
        $("#CetecDropDownMenu").hide();
        $("#CedesDropDownMenu").hide();
        $("#BiotecDropDownMenu").hide();
        $("#RegClass").hide();
        $("#RegUser").hide();

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
        $("#CiapDropDownMenu").hide();
        $("#CetecDropDownMenu").hide();
        $("#CedesDropDownMenu").hide();
        $("#BiotecDropDownMenu").hide();
        $("#RegClass").hide();
        $("#RegUser").hide();
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
        $("#ClassDropDownMenu").hide();
        $("#CiapDropDownMenu").hide();
        $("#CetecDropDownMenu").hide();
        $("#CedesDropDownMenu").hide();
        $("#BiotecDropDownMenu").hide();
        $("#RegClass").hide();
        $("#RegUser").hide();

    });

    
     $("#cetec2").on("click",function(){
        imageSelected= "CETEC";
      
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
        $("#CiapDropDownMenu").hide();
        $("#CetecDropDownMenu").show();
        $("#CedesDropDownMenu").hide();
        $("#BiotecDropDownMenu").hide();
        $("#RegClass").hide();
        $("#RegUser").hide();

    });
    
     $("#cedes2").on("click",function(){
        imageSelected= "CEDES";
      
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
        $("#CiapDropDownMenu").hide();
        $("#CetecDropDownMenu").hide();
        $("#CedesDropDownMenu").show();
        $("#BiotecDropDownMenu").hide();
        $("#RegClass").hide();
        $("#RegUser").hide();
         
    });
    
    
     $("#ciap2").on("click",function(){
        imageSelected= "CIAP";
                 
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
        $("#CiapDropDownMenu").show();
        $("#CetecDropDownMenu").hide();
        $("#CedesDropDownMenu").hide();
        $("#BiotecDropDownMenu").hide();
        $("#RegClass").hide();
        $("#RegUser").hide();
               
    });
    
    
     $("#biotec2").on("click",function(){
        imageSelected= "BIOTEC";
         
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
        $("#CiapDropDownMenu").hide();
        $("#CetecDropDownMenu").hide();
        $("#CedesDropDownMenu").hide();
        $("#BiotecDropDownMenu").show();
        $("#RegClass").hide();
        $("#RegUser").hide();
        


    });
    

    
    $("#BtnClass").on("click", function(){
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
        $("#pickAClassroom").hide();
        $("#CiapDropDownMenu").hide();
        $("#CetecDropDownMenu").hide();
        $("#CedesDropDownMenu").hide();
        $("#BiotecDropDownMenu").hide();
        $("#RegClass").show();
        $("#RegUser").hide();
        
    });   
    
    $("#BtnUser").on("click", function(){
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
        $("#pickAClassroom").hide();
        $("#CiapDropDownMenu").hide();
        $("#CetecDropDownMenu").hide();
        $("#CedesDropDownMenu").hide();
        $("#BiotecDropDownMenu").hide();
        $("#RegClass").hide();
        $("#RegUser").show();
        
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

  $("#writeClassroomBtn").on("click", function () {   //// Change Status 
               
                  var valueLight;
                  var valueAC;

                  if ($('input:radio[name=LightStatus]:checked').val()>= 0){
                        valueLight= $('input:radio[name=LightStatus]:checked').val();
                    }

                    else{
                        valueLight=-1;
                    }

                    if ($('input:radio[name=ACStatus]:checked').val()>=0) {
                         valueAC= $('input:radio[name=ACStatus]:checked').val();
                    }

                    else{
                        valueAC =-1;
                    }

                 alert(imageSelected);
                 alert(valueAC);
                 alert(valueLight);


                       var jsonData2 = { //hay que mandarle que salón es
                            "action": "changeSts",
                            "classroom": $("#inCNum").val(),
                           "building": imageSelected, 
                            "lstatus": valueLight,
                            "ACstatus": valueAC
                        };

                    console.log(jsonData2)

                        if ((valueAC >= 0) && (valueLight >= 0)) {
                        alert("entra if");

                            $.ajax({
                                url: "data/ApplicationLayer.php", 
                                type: "POST",
                                data: jsonData2,
                                dataType: "json",
                                contentType: "application/x-www-form-urlencoded",
                                success: function (jsonResponse) {
                                    console.log(jsonResponse)
                                },

                                error: function (errorMessage){
                                    alert(errorMessage.responseText);
                                    alert("Error changing status");
                                }
                            });

                        }

                        else{
                            alert("Select an option!");
                        }

            });   
    
 /////////////////////////////////////////////////////
/////////////// VALIDATE CLASSROOM ////////////////// 
/////////////////////////////////////////////////////
    
$(".searchBtn").click(function () {
        
        alert(imageSelected); 
        
        var jsonData = {
            "classroom": $("#inCNum").val(), 
            "buildNum": imageSelected,
            "action": "validateClassroom"
            
        };
        
        console.log(jsonData);
        
        $.ajax({
            url: "data/ApplicationLayer.php"
            , type: "POST"
            , data: jsonData
            , success: function (jsonResponse) {
                alert(jsonResponse.message)
                //console.log(jsonResponse);
                 alert("dio click a write");
              
                   
        }
            , error: function (errorMessage) {
                alert(errorMessage.responseText);
            }
        });
        
    });    

////////////////////////////////////////////////////
////////////////////////////////////////////////////

    
    
/////////////////////////////////////////////////////
/////////////// REGISTER CLASSROOM ////////////////// 
/////////////////////////////////////////////////////

    $("#BtnRegisterClass").click(function () {
       
        var jsonData = {
            "classNum": $("#inClassNum").val(), 
            "building": $("#inBuilding").val(), 
            "action": "registerClassroom"    
        };
        
        console.log(jsonData);
        $.ajax({
            url: "data/ApplicationLayer.php"
            , type: "POST"
            , data: jsonData
            , success: function (jsonResponse) {
                alert("Added!");
                //alert("New Register added" + jsonResponse.fName)
                console.log(jsonResponse);
                                
            }
            , error: function (errorMessage) {
                //alert(errorMessage.responseText);
                alert(errorMessage.responseText);
            }
        });
        
    });
/////////////////////////////////////////////////////////////


    
    
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



    
});