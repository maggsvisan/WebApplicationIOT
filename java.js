$(document).ready(function () {

    $.ajax({
        url: 'data/ApplicationLayer.php',
        type: 'POST' ,
        data: { "action": "verifySession"},
        dataType: 'json',
        success: function(jsonResponse){
          if(jsonResponse.state === "true"){
            $("#currentLogin").empty();
            $("#currentLogin").append("Welcome, ");
            $("#currentLogin").append(jsonResponse.mat);
            $("#currentLogin").show();
            $("#Login").hide();
            $("#logoutButton").show();
          }
          else{
            $("#currentLogin").hide();
            $("#Login").show();
            $("#logoutButton").hide();
          }
        },
        error: function(errorMessage){
          alert(errorMessage.responseText);
          alert("False verify");
          $("#currentLogin").hide();
        }
    });
    
//////////////////////////////////////////////
////////// PAGE DIVS SHOW AND HIDE //////////
//////////////////////////////////////////////
 var imageSelected;
 var classNum;

    $("#Login").show();
    $("#LoginSec").hide();
    $("#RegSec").hide(); 
    $("#AboutSec").hide(); 
    $("#SearchSec").hide(); 
    $("#CommentSec").hide(); 
    $("#homeImages").show();
    $("#CommentSec").hide();
    $("#FavSec").hide();
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
        $("#Status").hide();
        $("#Pick").show(); 
        $("#LoginSec").hide();
        $("#RegSec").hide(); 
        $("#AboutSec").hide(); 
        $("#SearchSec").hide(); 
        $("#CommentSec").hide(); 
        $("#homeImages").hide();
        $("#CommentSec").hide();
        $("#FavSec").hide();
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
        $("#pickAClassroom").show();
        $("#CiapDropDownMenu").hide();
        $("#CetecDropDownMenu").hide();
        $("#CedesDropDownMenu").show();
        $("#BiotecDropDownMenu").hide();
        $("#RegClass").hide();
        $("#RegUser").hide();
        $("#menupickC").hide;

          alert($(".imagemenu").val());
    });
    
    
     $("#ciap2").on("click",function(){
        $("#Status").hide();
        $("#Pick").show();
        imageSelected= "CIAP";
        $("#LoginSec").hide();
        $("#RegSec").hide(); 
        $("#AboutSec").hide(); 
        $("#SearchSec").hide(); 
        $("#CommentSec").hide(); 
        $("#homeImages").hide();
        $("#CommentSec").hide();
        $("#FavSec").hide();
        $("#pickAClassroom").show();
        $("#CiapDropDownMenu").show();
        $("#CetecDropDownMenu").hide();
        $("#CedesDropDownMenu").hide();
        $("#BiotecDropDownMenu").hide();
        $("#RegClass").hide();
        $("#RegUser").hide();
        $("#Status").hide;
        
    });
    
    
     $("#biotec2").on("click",function(){
         $("#Status").hide();
        $("#Pick").show();
        imageSelected= "BIOTEC";
        $("#LoginSec").hide();
        $("#RegSec").hide(); 
        $("#AboutSec").hide(); 
        $("#SearchSec").hide(); 
        $("#CommentSec").hide(); 
        $("#homeImages").hide();
        $("#CommentSec").hide();
        $("#FavSec").hide();
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
    
   $("#Fav").on("click",function(){
        $("#Favoritos").empty();
        $.ajax({
            url: 'data/ApplicationLayer.php',
            type: 'POST' ,
            data: { "action": "verifySession"},
            dataType: 'json',
            success: function(jsonResponse){
                    if(jsonResponse.state === "true"){
                        var Matricula = jsonResponse.mat;
                        alert(Matricula);
                        dataFav = {
                            "matricula" : Matricula,
                            "action" : "loadFavorites"
                        };
                        $.ajax({  
                            url: "data/ApplicationLayer.php",
                            type: "POST",
                            data: dataFav,
                            success: function (jsonResponse){
                                if (jsonResponse.length > 0){
                                    alert("Enter loading");
                                     var postFavs = "<table> <tr><th>Building</th> <th>Number</th> </tr>";
                                    $.each(jsonResponse,function(index){
                                        postFavs    += "<tr>"
                                                    +  "<td>" + jsonResponse[index].building      + "</td>"
                                                    +  "<td>" + jsonResponse[index].number        + "</td>"
                                                    +  "</tr>";   
                                    });
                                    postFavs+= "</table>";
                                    $("#Favoritos").append(postFavs);
                                } 
                                
                            },
                            error:function(errorMessage){
                                if ($("#Favoritos").is(':empty')){
                                    $("#Favoritos").append("No favorites to show. Select some from the classroom section");
                                }
                            }
                        });//------------------------
                    }

            },
            error: function(errorMessage){
                  alert(errorMessage.responseText);
                  alert("False verify");
                  $("#currentLogin").hide();
            }
        });

            
    });    

///////////////////////////////////////////////////
///////////LOAD COMMENTS///////////////////////////
///////////////////////////////////////////////////

    $("#Comm").on("click", function () {
        $.ajax({  
            url: "data/ApplicationLayer.php",
            type: "POST",
            data: { 
                "action"  : "loadComment"
            },
            success: function (jsonResponse){
                var postComment = "";
                if (jsonResponse.length > 0){
                    $.each(jsonResponse,function(index){
                        postComment += "<tr>"
                                   // +  "<td>" + $("#comName").val() + "</td>"
                                    +  "<td>" + jsonResponse[index].matricula      + "</td>"
                                    +  "<td>" + jsonResponse[index].comment        + "</td></tr>";   
                    });
                } 
                $("#submitTable").append(postComment);
            },
            error:function(errorMessage){
                alert(errorMessage.responseText);
                alert("Error");
            }
        });//------------------------
    });
    
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

/////////////////////////////////////////////////////
////////////////// READ SENSORS /////////////////////
/////////////////////////////////////////////////////
        
$("#readClassroomBtn").on("click", function () { 
   
   var jsonData = { 
        "action": "readSensors",
      //  "classroom": $("#inCNum").val(),
        "classroom": classNum,
        "building": imageSelected, 
    };
    
    console.log(jsonData);
    
     $.ajax({
            url: "data/ApplicationLayer.php", 
            type: "POST", 
            data: jsonData, 
            success: function (jsonResponse) {
                
                $("#printTemp").empty();
                $("#printLight").empty();
                $("#printTemp").append(jsonResponse.tempVal);
                $("#printLight").append(jsonResponse.lightVal);       
        }
            , error: function (errorMessage) {
                alert(errorMessage.responseText);
                alert("data error");
            }
        });
   
});
    
    
/////////////////////////////////////////////////////
///////////////////////////////////////////////////// 
/////////////////////////////////////////////////////
    

    
/////////////////////////////////////////////////////
////////////////// WRITE SENSORS /////////////////////
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

        
                       var jsonData2 = { //hay que mandarle que salón es
                            "action": "changeSts",
                           // "classroom": $("#inCNum").val(),
                            "classroom": classNum,
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
    
$("#btnSearch").click(function () {
        $("#Status").show();
        $("#Pick").hide();
        alert("");
         $("#room").empty();
        $("#room").append(imageSelected);
        alert(imageSelected); 
        classNum= $("#inCNum").val();
       
        var jsonData = {
          //  "classroom": $("#inCNum").val(), 
            "classroom":classNum, 
            "buildNum": imageSelected,
            "action": "validateClassroom"
            
        };
        $("#inCNum").val("");
        console.log(jsonData);
       
        $.ajax({
            url: "data/ApplicationLayer.php"
            , type: "POST"
            , data: jsonData
            , success: function (jsonResponse) {
                alert(jsonResponse.message)

                //console.log(jsonResponse);

              
                   
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
                $("#Login").hide();
                $("#logoutButton").show();
                $("#homeImages").show();
                $("#LoginSec").hide();
                
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
        

    
    });
///////////////////////////////////////////////////
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
                $("#Login").show();
                $("#logoutButton").hide();
                $("#currentLogin").hide();
            }
            , error: function (errorMessage) {
                alert(errorMessage.responseText);
            }
        });
    });
///////////////////////////////////////////////////    
///////////////////////////////////////////////////    
    
    
//////////////////////////////////////////////////
//////////////// ADD COMMENTS /////////////////////
///////////////////////////////////////////////////
     $("#postCommentButton").on("click", function () {
        data={};
        data.id = $("#comID").val();
        data.comment = $("#comComment").val();
         
        if (data.id === "" ||data.comment === "" )
            alert("Fill the corresponding fields");
      
         else
        {
            commentData= {
               "idComm"  : data.id,
               "comComm": data.comment,
               "action" : "insertComment"
            };
                $.ajax({
                    url:"data/ApplicationLayer.php",
                    type:"POST",
                    data:commentData,
                    dataType:"json",
                    success: function (jsonResponse) {
                    console.log(jsonResponse)
                                                      
                        var newComment = "<tr>";
                            newComment += //"<td>" + jsonResponse.name    + "</td>"
                                            "<td>" + jsonResponse.id      + "</td>"
                                       +  "<td>" + jsonResponse.comment + "</td>"
                                       +  "</tr>";
                        $("#submitTable").append(newComment);
                    
                        $("#comID").val("");
                        $("#comComment").val("");
                    },
                    error: function (errorMessage){
                          alert("Error");
                    }
                });
        }
    });


/////////////////////////////////////////////////
/////////////////////////////////////////////////
    var Liked=false;
    $(".btnFav").on("click",function(){

        if(!Liked){
            $.ajax({
                url: 'data/ApplicationLayer.php',
                type: 'POST' ,
                data: { "action": "verifySession"},
                dataType: 'json',
                success: function(jsonResponse){
                    if(jsonResponse.state === "true"){
                        var Mat=jsonResponse.mat;
                        dataFav={
                           "mat":Mat,
                           "classroom": classNum,
                           "building": imageSelected ,
                           "action" : "AddFavorite"
                        }
                        $.ajax({
                            url: 'data/ApplicationLayer.php',
                            type: 'POST',
                            data: dataFav,
                            dataType: 'json',
                            success: function(jsonResponse){
                                if(jsonResponse.status == "SUCCESS")
                                alert(Liked);
                                Liked=!Liked;
                                $("#Favorite").hide();
                                $("#UnFavorite").show();
                            },
                            error: function(errorMessage){
                                alert("Error Adding to Favorites, try again later");
                            }
                        }); 
                    }   
                },
                error: function(errorMessage){
                  alert(errorMessage.responseText);
                  alert("False verify");
                  $("#currentLogin").hide();
            }
    });



        }
        else {
            alert(Liked);
            Liked=!Liked;
            $("#Favorite").show();
            $("#UnFavorite").hide();
        }
    });
    
});