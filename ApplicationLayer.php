<?php

header('Content-type: application/json');
require_once __DIR__ . '/dataLayer.php';

$action = $_POST["action"];

switch($action){
	case "login" : loginFunction(); //
					break;
    
    case "retrieveCookie" : retrieveCookie();//
                           break;
    
    case "createCookie": createCookie(); //
                         break;
        
    case "verifySession": verifySession(); //
                        break;
    
    case "deleteSession": deleteSession(); //
                          break;
    
    case "insertComment": insertComment();//
                          break;
        
    case "register": registerFunction(); //
                      break;
        
    case "changeSts": changeSts(); //
                     break;
    
    case "registerClassroom": registerClassroom(); //
                        break;
        
    
    case "validateClassroom": validateClassroom();
                        break;
    
    case "readSensors": readSensors();
                        break;
        
    case "loadComment" : loadComments();
                        break;
        
    case "loadFavorites": loadFavorites();
                        break;
    
    case "removeUser": removeUser();
                        break; 
    
    case "removeClassroom": removeClassroom();
                        break;
            
}

function loadComments(){
    
    $result =  loadDBComment();
    echo json_encode($result);
}

function loadFavorites(){
    $mat = $_POST["matricula"];
    $result = loadDBFavs($mat);
    echo json_encode($result);
}


function loginFunction(){
	$mat = $_POST["matricula"];
	$userPassword = $_POST["password"];

	$result = attemptLogin($mat);  
    
	if ($result["status"] == "SUCCESS"){
		
        $decryptedPassword = decryptPassword($result['password']);
        
        # Compare the decrypted password with the one provided by the user
    	if ($decryptedPassword === $userPassword)
		   	{	
            
                $newSession= attemptCreateSession($mat, $result['password']);
                echo json_encode(array("message" => "Login Successful", 
                                       "fName" => $result["firstName"] , 
                                        "lName" => $result["lastName"],
                                        "mat"=> $result["mat"],
                                       ));  
			}   
        
        
        else
			{
				header('HTTP/1.1 306 Wrong credentials');
				die("Wrong credentials");
			}
	}	
	else{
		header('HTTP/1.1 500' . $result["status"]);
		die($result["status"]);
	}	
}



function verifySession(){
    
    // Start session
    session_start();
    //verify if username is set in session
    if(empty($_SESSION['matricula'])) {
        $response = array("matricula"=>null, "password"=>null, "state"  =>"false");
        echo json_encode($response);
    }
    else {
    	$response = array("mat"=>$_SESSION['matricula'], "password"=> $_SESSION['password'], "state"  =>"true");
        
    	echo json_encode($response);
    }
    
}


function deleteSession(){
    
	session_start();
	if (isset($_SESSION['fName']) && isset($_SESSION['lName']))
	{
		unset($_SESSION['fName']);
		unset($_SESSION['lName']);
		session_destroy();
		echo json_encode(array('success' => 'Session closed'));   	    
	}
	else
	{
		header('HTTP/1.1 406 Session has expired, you will be redirected to the login');
		die("Session has expired!");
	}
    
}



function registerFunction(){ 
    
        $fName = $_POST["fName"];
        $lName= $_POST["lName"];
        $passwrd = $_POST["password"];
        $mat= $_POST["mat"];
        $access= $_POST["accessType"];
        
    
        $userPassword = encryptPassword();
        
        $result = attemptRegistration($fName, $lName, $mat, $userPassword, $access);
    
    
        if ($result["status"] == "SUCCESS"){
		 $response = array("message"=> "Now you are register");
         echo json_encode($response); //sent it to presentation layer
      
        }	
        else{
            header('HTTP/1.1 500' . $result["status"]);
            die($result["status"]); //returns error from DataLayer
        }	
       
}


function createCookie(){
    
    $cookieName = $_POST["CookieName"];
	$cookieValue = $_POST["CookieValue"];

	setcookie($cookieName, $cookieValue, time() + (86400 * 20), "/"); // 86400 = 1 day

  if (isset($_COOKIE[$cookieName])) {
    echo json_encode("Cookie $cookieName created");
    } 
    
    else {
    echo json_encode("Can't create cookie");
  }
    
}

function retrieveCookie(){
    
    if (isset($_COOKIE['matID'])) //this checks if a cookie is set or not
	{
		echo json_encode(array('cookieMat' => $_COOKIE['matID'])); 
        
	}
	else
	{
		header('HTTP/1.1 406 Cookie not set yet.');
	    die("It is the first time you enter this application.");
	}
    
}



/////////////////////// Encryption and Decryption //////////////////////////////

#Action to decrypt the password of the user
	function decryptPassword($password)
	{
		$key = pack('H*', "bcb04b7e103a05afe34763051cef08bc55abe029fdebae5e1d417e2ffb2a00a3");
	    
	    $iv_size = mcrypt_get_iv_size(MCRYPT_RIJNDAEL_128, MCRYPT_MODE_CBC);
    	
	    $ciphertext_dec = base64_decode($password);
	    $iv_dec = substr($ciphertext_dec, 0, $iv_size);
	    $ciphertext_dec = substr($ciphertext_dec, $iv_size);

	    $password = mcrypt_decrypt(MCRYPT_RIJNDAEL_128, $key, $ciphertext_dec, MCRYPT_MODE_CBC, $iv_dec);
	   	
	   	
	   	$count = 0;
	   	$length = strlen($password);

	    for ($i = $length - 1; $i >= 0; $i --)
	    {
	    	if (ord($password{$i}) === 0)
	    	{
	    		$count ++;
	    	}
	    }

	    $password = substr($password, 0,  $length - $count); 

	    return $password;
	}



	# Action to encrypt the password of the user
	function encryptPassword()
	{
        $userPassword= $_POST["password"];

	    $key = pack('H*', "bcb04b7e103a05afe34763051cef08bc55abe029fdebae5e1d417e2ffb2a00a3");
	    $key_size =  strlen($key);
	    
	    $plaintext = $userPassword;

	    $iv_size = mcrypt_get_iv_size(MCRYPT_RIJNDAEL_128, MCRYPT_MODE_CBC);
	    $iv = mcrypt_create_iv($iv_size, MCRYPT_RAND);
	    
	    $ciphertext = mcrypt_encrypt(MCRYPT_RIJNDAEL_128, $key, $plaintext, MCRYPT_MODE_CBC, $iv);
	    $ciphertext = $iv . $ciphertext;
	    
	    $userPassword = base64_encode($ciphertext);

	    return $userPassword;
	}



function insertComment(){
        $id = $_POST["idComm"];
        //$name = $_POST["nameComm"]; //POST, parameter passed by the front end
        $comment= $_POST["comComm"];
      
        $result= attemptInsertComment ($comment,$id);

        if ($result["status"] == "SUCCESS"){
            echo json_encode(array("comment" =>$comment, "id"=>$id));
        }
        else{
            header('HTTP/1.1 500' . $result["status"]);
            die($result["status"]); //returns error from DataLayer
        }	
    
}


function registerClassroom(){ //creates register and actuators
        $building= $_POST["building"];
        $num= $_POST["classNum"];
        
        $result= attemptInsertClassroom ($building, $num);
        echo $result["status"];
        
        if ($result["status"] == "SUCCESS"){
            $response = array("message"=> "Now you are register");
            echo json_encode($response); //sent it to presentation layer
            
            
             $getClassroom= getIDClassroom($num, $building);   
            // echo $getClassroom["status"];
                
                 
             if ($getClassroom["status"] == "SUCCESS"){
                $idClass = $getClassroom["idClassroom"]; #gets ID classroom 
                
                $result2= createRegister($idClass); //crea la hoja de registro
                
                //echo $result2["status"];                
                
                 if($result2["status"]== "SUCCESS"){
                     
                     $getReg= getIDRegister($idClass);
                     $idReg= $getReg["idRegister"];
                     
                     $result3= createActuators($idReg); //crea hoja de actuadores
                     
                     $result4= createSensors($idReg); // crea hoja de lectura de sensores
                     
                 }
                 
                 else{
                  header('HTTP/1.1 500' .  $result2["status"]); 
                  //die($getRegister["status"]); //returns error from DataLayer
                }    
            
                   
             }
                 
              else{
                  header('HTTP/1.1 500' .  $getRegister["status"]); //classroom no existe
                  //die($getRegister["status"]); //returns error from DataLayer
                }    
            
        }

        else{
            header('HTTP/1.1 500' . $result["status"]); //no se pudo registrar salon
            die($result["status"]); //returns error from DataLayer
        }	
        
 }

 

function validateClassroom(){ //validate if classroom exists
   
    $classNumber= $_POST["classroom"];
    $buildingNum= $_POST["buildNum"];
     
    $result=  verifyClassroom($classNumber, $buildingNum);
    echo $result["status"];
        
     if ($result["status"] == "SUCCESS"){
         $response = array("message"=> "Classroom Exists!");
         echo json_encode($response); //sent it to presentation layer  
      }	
    
    else{
            header('HTTP/1.1 500' . $result["status"]);
            die($result["status"]); //returns error from DataLayer
        }	
            
}
 

function changeSts(){
        $lightStatus= $_POST["lstatus"];
        $ACStatus= $_POST["ACstatus"];
        $classNumber= $_POST["classroom"];
        $buildingNumber= $_POST["building"];
        
        $getClassroom= getIDClassroom($classNumber, $buildingNumber); #gets ID classroom    
        
        
        if ($getClassroom["status"] == "SUCCESS"){
                $idClass = $getClassroom["idClassroom"];
            
                $getRegister= getIDRegister($idClass); #gets ID Register
                
                if($getRegister["status"]== "SUCCESS"){
                        $idReg= $getRegister["idRegister"];
                    
                    $result= attemptChangeSts($idReg, $lightStatus, $ACStatus); #update table
                            
                      if ($result["status"] == "SUCCESS"){
                            $response = array("message"=> "Classroom Updated!");
                            echo json_encode($response); //sent it to presentation layer  
                        }	
    
                      else{
                            header('HTTP/1.1 500' . $result["status"]);
                            die($result["status"]); //returns error from DataLayer
                     }
                     
                    
                 }     
                else{
                    header('HTTP/1.1 500' .  $getRegister["status"]);
                    die($getRegister["status"]); //returns error from DataLayer
                }
        }	

        else{
            header('HTTP/1.1 500' .  $getClassroom["status"]);
            die($getClassroom["status"]); //returns error from DataLayer
        }	        
        
    }




function readSensors(){

        $classNumber= $_POST["classroom"];
        $buildingNumber= $_POST["building"];
        
        $getClassroom= getIDClassroom($classNumber, $buildingNumber); #gets ID classroom    
        
        
        if ($getClassroom["status"] == "SUCCESS"){
                $idClass = $getClassroom["idClassroom"];
            
                $getRegister= getIDRegister($idClass); #gets ID Register
                
                if($getRegister["status"]== "SUCCESS"){
                        $idReg= $getRegister["idRegister"];
                    
                        $result= attemptReadSensors($idReg); #read values of Sensors
                            
                      if ($result["status"] == "SUCCESS"){
                           // $response = array("tempVal"=> $result["tempVal"],"lightVal"=> $result["lightVal"] );         
                          echo json_encode($result); //sent it to presentation layer  
                        }	
    
                      else{
                            header('HTTP/1.1 500' . $result["status"]);
                            die($result["status"]); //returns error from DataLayer
                     }
                     
                    
                 }     
                else{
                    header('HTTP/1.1 500' .  $getRegister["status"]);
                    die($getRegister["status"]); //returns error from DataLayer
                }
        }	

        else{
            header('HTTP/1.1 500' .  $getClassroom["status"]);
            die($getClassroom["status"]); //returns error from DataLayer
        }	        
        
    }


function removeUser(){
    $matNumber= $_POST["mat"];
    
    $result= rmvUser($matNumber);
    
    if($result["status"]== "SUCCESS"){
         echo json_encode($result["message"]);
    }
    
    else {
        header('HTTP/1.1 500' . $result["status"]);
        die($result["status"]); //returns error from DataLayer
    }
    
}




function removeClassroom(){ // deletes classroom records
    $BuildingNumber= $_POST["building"];
    $ClassroomNumber= $_POST["number"];
    
  
    $getClassroom= getIDClassroom($ClassroomNumber, $BuildingNumber);   
    echo $getClassroom["status"];
                             
    if ($getClassroom["status"] == "SUCCESS"){
        $idClass = $getClassroom["idClassroom"]; #gets ID classroom 
                
        $getReg= getIDRegister($idClass);
   
        if($getReg["status"]== "SUCCESS"){
            
            $idReg= $getReg["idRegister"];   
            
            $result1= rmvActuators($idReg); //elimina hoja de actuadores              
            $result2= rmvSensors($idReg); // elimina hoja de lectura de sensores
            
            if($result1["status"]=="SUCCESS" && $result2["status"]=="SUCCESS"){
                
                $result3= rmvRegister($idReg); //elimina hoja de registros
                
                if($result3["status"]=="SUCCESS"){
                    
                  $result4= rmvClassroom($BuildingNumber,$ClassroomNumber); //deletes a classroom
                  echo json_encode($result4["message"]);
                }
                
                else{
                  header('HTTP/1.1 500' .  $result3["status"]); 
                  die($result3["status"]); //returns error from DataLayer
                }  
                
            }
            
            else{
              header('HTTP/1.1 500' .  $result1["status"]); 
              die($result1["status"]); //returns error from DataLayer
            }           
            
        }    
        
         else{
          header('HTTP/1.1 500' .  $getReg["status"]); 
          die($getReg["status"]); //returns error from DataLayer
        }              
                     
                     
    }
                 
     else{
        header('HTTP/1.1 500' .  $getClassroom["status"]); 
        die($getClassroom["status"]); //returns error from DataLayer
    }    
            
                     
 }

 



?>