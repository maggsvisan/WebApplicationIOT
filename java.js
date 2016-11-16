$(document).ready(function () {

    $("#slideshow > div:gt(0)").hide();

    setInterval(function() {
      $('#slideshow > div:first')
        .fadeOut(1500)
        .next()
        .fadeIn(1500)
        .fadeOut(1500)
        .next()
        .fadeIn(1500)
        .end()
        .appendTo('#slideshow');
    }, 3000);
    
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
var matRmvUser;
var BRmvClass;
var NumRmClass;

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
    $("#RemoveSec").hide();
    $("#RemoveClass").hide();
    $("#RemoveUser").hide();
    
    $("#RmvReg").on("click", function () {
        $("#homeImages").hide();
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
        $("#RemoveSec").show();
        $("#RemoveClass").hide();
        $("#RemoveUser").hide();
    });
    
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
        $("#RemoveSec").hide();
        $("#RemoveClass").hide();
        $("#RemoveUser").hide();

  
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
        $("#RemoveSec").hide();
        $("#RemoveClass").hide();
        $("#RemoveUser").hide();
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
        $("#RemoveSec").hide();
        $("#RemoveClass").hide();
        $("#RemoveUser").hide();
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
        $("#RemoveSec").hide();
        $("#RemoveClass").hide();
        $("#RemoveUser").hide();
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
        $("#RemoveSec").hide();
        $("#RemoveClass").hide();
        $("#RemoveUser").hide();

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
        $("#RemoveSec").hide();
        $("#RemoveClass").hide();
        $("#RemoveUser").hide();
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
        $("#RemoveSec").hide();
        $("#RemoveClass").hide();
        $("#RemoveUser").hide();
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
        $("#pickAClassroom").show();
        $("#CiapDropDownMenu").hide();
        $("#CetecDropDownMenu").show();
        $("#CedesDropDownMenu").hide();
        $("#BiotecDropDownMenu").hide();
        $("#RegClass").hide();
        $("#RegUser").hide();
        $("#RemoveSec").hide();
        $("#RemoveClass").hide();
        $("#RemoveUser").hide();

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
        $("#RemoveSec").hide();
        $("#RemoveClass").hide();
        $("#RemoveUser").hide();
         
    
    });
    
    
     $("#ciap2").on("click",function(){
     //   var imageSelected;
         
       // localStorage.setItem('imageSelected', $(".imagemenu").val());
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
        $("#RemoveSec").hide();
        $("#RemoveClass").hide();
        $("#RemoveUser").hide();
         
        
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
        $("#pickAClassroom").show();
        $("#CiapDropDownMenu").hide();
        $("#CetecDropDownMenu").hide();
        $("#CedesDropDownMenu").hide();
        $("#BiotecDropDownMenu").show();
        $("#RegClass").hide();
        $("#RegUser").hide();
        $("#RemoveSec").hide();
        $("#RemoveClass").hide();
        $("#RemoveUser").hide();


    });
    
    
    $("#BtnRmvClass").on("click", function(){
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
        $("#RegUser").hide();
        $("#RemoveSec").hide();
        $("#RemoveClass").show();
        $("#RemoveUser").hide();
        
    });   
    
    $("#BtnRmvUser").on("click", function(){
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
        $("#RegUser").hide();
        $("#RemoveSec").hide();
        $("#RemoveClass").hide();
        $("#RemoveUser").show();
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
        $("#RemoveSec").hide();
        $("#RemoveClass").hide();
        $("#RemoveUser").hide();
        
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
        $("#RemoveSec").hide();
        $("#RemoveClass").hide();
        $("#RemoveUser").hide();
        
    });
///////////////////////////////////////////////////
///////////////////////////////////////////////////

   
    

    
///////////////////////////////////////////////////
//////////////// REMOVE A USER ////////////////////
///////////////////////////////////////////////////

    $("#BtnRmvUser2").on("click", function () {
        
 
        matRmvUser= $("#inRmvMatricula").val();
        
        $("#inRmvMatricula").val("");
        
        
         var jsonData = { 
                "action": "removeUser",
                "mat":matRmvUser
            };
        
        console.log(jsonData);

        $.ajax({  
            url: "data/ApplicationLayer.php",
            type: "POST",
            data: jsonData,
            success: function (jsonResponse){
                alert(jsonResponse.message);
            },
            error:function(errorMessage){
                alert(errorMessage.responseText);
            }
        });//------------------------
    });
    
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////    

    
///////////////////////////////////////////////////
//////////////// REMOVE A CLASSROOM ////////////////////
///////////////////////////////////////////////////

    $("#BtnRmvClass2").on("click", function () {
        
        BRmvClass= $("#inRmvBuilding").val();
        NumRmClass= $("#inRmvClassNum").val();
        
        $("#inRmvBuilding").val("");
        $("#inRmvClassNum").val("");
        
        
         var jsonData = { 
                "action": "removeClassroom",
                "building":BRmvClass,
                "number":NumRmClass
            };
        
        console.log(jsonData);

        $.ajax({  
            url: "data/ApplicationLayer.php",
            type: "POST",
            data: jsonData,
            success: function (jsonResponse){
                alert(jsonResponse.message);
            },
            error:function(errorMessage){
                alert(errorMessage.responseText);
            }
        });//------------------------
    });
    
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////    

    
    
///////////////////////////////////////////////////
//////////////// ADD A FAVORITE //////////////////////
///////////////////////////////////////////////////
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
//////////////// LOAD USERS ////////////////////
///////////////////////////////////////////////////

$("#BtnLoadUser").on("click", function () {               
     $.ajax({
        url: "data/ApplicationLayer.php",
        type:"POST",
        data:{"action" : "LoadUsers"},
        success:function(jsonResponse){
        var postUser = "";
         if (jsonResponse.length > 0){
                    $.each(jsonResponse,function(index){
                        postUser += "<li>" + jsonResponse[index].mat + "</li>" + "<br>";   
                    });
         } 
        $("#regisUsers").empty();
         $("#regisUsers").append(postUser);
        
     },
     error: function(errorMessage){
         alert(errorMessage.responseText);     }
         
     });
});
/////////////////////////////////////////////////////
///////////////////////////////////////////////////// 
///////////////////////////////////////////////////// 
    
///////////////////////////////////////////////////
//////////////// LOAD CLASSROOMS //////////////////
///////////////////////////////////////////////////

$("#BtnLoadClass").on("click", function () {
     $.ajax({
        url: "data/ApplicationLayer.php",
        type:"POST",
        data:{"action" : "LoadClassrooms"},
        success:function(jsonResponse){
            var postClassroom = "";
            if (jsonResponse.length > 0){
                    $.each(jsonResponse,function(index){
                        postClassroom += "<tr>"
                                    +  "<td>" + jsonResponse[index].buildings+ "</td>"
                                    +  "<td>" + jsonResponse[index].numbers+ "</td></tr>";   
                    });
            } 
                $("#submitClassroom").append(postClassroom);    
        },
     error: function(errorMessage){
         alert(errorMessage.responseText);     
     }
         
     });
});
    
/////////////////////////////////////////////////////
///////////////////////////////////////////////////// 
///////////////////////////////////////////////////// 

  
/////////////////////////////////////////////////////
///////////////////////////////////////////////////// 
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
         $("#room").empty();
        $("#room").append(imageSelected);
        classNum= $("#inCNum").val();
       
        var jsonData = {
          //  "classroom": $("#inCNum").val(), 
            "classroom":classNum, 
            "buildNum": imageSelected,
            "action": "validateClassroom"  
        };

        $("#inCNum").val("");
      
        $.ajax({
            url: "data/ApplicationLayer.php"
            , type: "POST"
            , data: jsonData
            , success: function (jsonResponse) { 
                alert(jsonResponse.status);  

                var jsonData2 = {
                        "action": "verifySession"  
                    };
        
                $.ajax({                                 //detecta salon y hace favorites
                    url: 'data/ApplicationLayer.php',
                    type: 'POST' ,
                    data: jsonData2,
                    dataType: 'json',
                    
                    success: function(jsonResponse2){
                       // alert(jsonResponse2.state)
                        
                        if(jsonResponse2.state){
                               var jsonData3= {
                                            "mat":jsonResponse2.mat,
                                            "classroom":classNum, 
                                            "building": imageSelected,
                                            "action": "validateFavorite"
                                        };
                                        
                              
                              $.ajax({
                                    url:"data/ApplicationLayer.php",
                                    type:"POST",
                                    data: jsonData3,
                                    success:function(jsonResponse3){
                                     console.log("Entra al if validate fav");
                                       alert(jsonResponse3);
                                       
                                       if(jsonResponse.status == 'SUCCESS'){
                                            alert("Already a Favorite");
                                            $("#Favorite").hide();
                                            $("#UnFavorite").show();

                                        }
                                        else{
                                            console.log("Not a favorite");
                                            $("#Favorite").show();
                                            $("#UnFavorite").hide();   
                                        } 
                                    },
                                    error: function(errorMessage){
                                        alert(errorMessage.responseText);

                                    }


                                }); 
                            }  
                    },
                    error: function(errorMessage){
                      alert(errorMessage.responseText);
                      $("#currentLogin").hide();
                }
            });

            }
        
            , error: function (errorMessage) {
                alert(errorMessage.responseText);
            }  
        });
        
    });    
////////////////////////////////////////////////////
////////////////////////////////////////////////////

    
/////////////////////////////////////////////////
/////////////////////////////////////////////////
    var Liked=false;
    $("#Favorite").on("click",function(){
            alert("Adding to favorites");
            $.ajax({
                url: 'data/ApplicationLayer.php',
                type: 'POST' ,
                data: { "action": "verifySession"},
                dataType: 'json',
                success: function(jsonResponse){

                    if(jsonResponse.state === "true"){
                        alert("Validate True");
                        var Mat=jsonResponse.mat;
                        dataFav={
                           "mat":Mat,
                           "classroom": classNum,
                           "building": imageSelected ,
                           "action" : "addFavorite"
                        }
                        console.log(dataFav);
                        $.ajax({
                            url: 'data/ApplicationLayer.php',
                            type: 'POST',
                            data: dataFav,
                            dataType: 'json',
                            success: function(jsonResponse){
                                console.log(jsonResponse);
                                if(jsonResponse.status == "SUCCESS")
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
    });
    
    $("#UnFavorite").on("click",function(){
        //Already a favorite  Remove button shown
            alert("Removing from Favorites");
            $.ajax({
                url: 'data/ApplicationLayer.php',
                type: 'POST' ,
                data: { "action": "verifySession"},
                dataType: 'json',
                success: function(jsonResponse){
                    if(jsonResponse.state === "true"){
                        alert("Enter validate");
                        var Mat=jsonResponse.mat;
                        dataFav={
                           "mat":Mat,
                           "classroom": classNum,
                           "building": imageSelected ,
                           "action" : "removeFavorite"
                        }
                        console.log(dataFav);
                        $.ajax({
                            url: 'data/ApplicationLayer.php',
                            type: 'POST',
                            data: dataFav,
                            dataType: 'json',
                            success: function(jsonResponse){
                                if(jsonResponse.status == "ERASED")
                                alert(Liked);
                                Liked=!Liked;
                                $("#Favorite").show();
                                $("#UnFavorite").hide();
                            },
                            error: function(errorMessage){
                                alert("Error Removing from favorites, try again later");
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
    
    });
    
/////////////////////////////////////////////////////
/////////////// REGISTER CLASSROOM ////////////////// 
/////////////////////////////////////////////////////

    $("#BtnRegisterClass").click(function () {
       
        var jsonData = {
            "classNum": $("#inClassNum").val(), 
            "building": $("#inBuilding").val(), 
            "action": "registerClassroom"    
        };
        
       // console.log(jsonData);
        $.ajax({
            url: "data/ApplicationLayer.php"
            , type: "POST"
            , data: jsonData
            , success: function (jsonResponse) {
                alert(jsonResponse.message);
                //console.log(jsonResponse);
               
                                
            }
            , error: function (errorMessage) {
                //alert(errorMessage.responseText);
                alert(errorMessage.responseText);
            }
        });
                
                $("#homeImages").show();
                $("#RegClass").hide(); 
                $("#inClassNum").val("");
                $("#inBuilding").val("");
        
    });
/////////////////////////////////////////////////////////////


    
    
/////////////////////////////////////////////////////
///////////////// REGISTER USER ////////////////// 
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
                $("#homeImages").show();
                $("#RegUser").hide(); 
                
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


    
});