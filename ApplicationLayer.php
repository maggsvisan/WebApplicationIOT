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
        
    case "loadComments": loadComments(); //all comments of the DB 
                            break;
        
}

function loginFunction(){
	$userName = $_POST["username"];
	$userPassword = $_POST["password"];

    
	$result = attemptLogin($userName);  
    
	if ($result["status"] == "SUCCESS"){
		
        $decryptedPassword = decryptPassword($result['password']);
        
        # Compare the decrypted password with the one provided by the user
    	if ($decryptedPassword === $userPassword)
		   	{	
            
                $newSession= attemptCreateSession($userName, $result['password']);
                echo json_encode(array("message" => "Login Successful", 
                                       "fName" => $result["firstName"] , 
                                        "lName" => $result["lastName"],
                                        "user" => $result["username"],
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


function verifySession(){
    
    // Start session
    session_start();
    //verify if username is set in session
    if(empty($_SESSION['username'])) {
        $response = array("username"=>null, "password"=>null, "state"  =>"false");
        echo json_encode($response);
    }
    else {
    	$response = array("username"=>$_SESSION['username'], "password"=> $_SESSION['password'], "state"  =>"true");
        
    	echo json_encode($response);
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


function loadComments(){
    
    $result= loadCommentsDB();
    echo json_encode($result);
    
}
   


function insertComment(){
    $id = $_POST["idcomm"];
    $name = $_POST["nameComm"]; //POST, parameter passed by the front end
    $comment= $_POST["comComm"];
    echo $name;
    $result= attemptInsertComment ($comment,$id);
        echo json_encode($result);

    if ($result["status"] == "SUCCESS"){
		echo json_encode(array("name"=> $name , "comment" =>$comment, "id"=>$id));
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
    
    if (isset($_COOKIE['username'])) //this checks if a cookie is set or not
	{
		echo json_encode(array('cookieUsername' => $_COOKIE['username'])); 
        
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


?>