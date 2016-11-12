<?php

	function connectionToDataBase(){
		
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "tec";

		$conn = new mysqli($servername, $username, $password, $dbname);
		
		if ($conn->connect_error){
			return null;
		}
		else{
			return $conn;
		}
	}

	function attemptLogin($userName){

		$conn = connectionToDataBase();

		if ($conn != null){
			
            $sql = "SELECT fName, lName, username, passwrd FROM Users WHERE username = '$userName'";
		
			$result = $conn->query($sql);

			if ($result->num_rows > 0)
			{
                $row = $result -> fetch_assoc();
				$conn -> close();
			
                return array("firstName" => $row["fName"], "lastName" => $row["lName"], "username" => $row["username"],
                             "password" => $row["passwrd"], "status" => "SUCCESS");
			}
			else{
				$conn -> close();
				return array("status" => "USERNAME NOT FOUND");
			}
		}else{
			$conn -> close();
			return array("status" => "CONNECTION WITH DB WENT WRONG");
		}
	}


function attemptCreateSession($userName, $userPassword){
    
    $conn = connectionToDataBase();

    if ($conn != null)  { 
        $sql = "SELECT fName, lName, username FROM Users WHERE username = '$userName' AND passwrd ='$userPassword'";
      
        $result = $conn -> query($sql);
        
        if ($result->num_rows > 0)
        {
            $row = $result -> fetch_assoc();
            $conn -> close();
            
                // Starting the session
		    	session_start();
                session_destroy();
                session_start();
                
		    	$_SESSION["fName"] = $row["fName"];
		    	$_SESSION["lName"] = $row["lName"];
                $_SESSION["username"] = $userName;
                $_SESSION["password"] = $userPassword;		    	      
         }
        
        
        else 
        {   $conn -> close();
            header('HTTP/1.1 406 User not found');
            die("Wrong credentials provided!");
            
        }
    
    }
    
    else{
			$conn -> close();
			return array("status" => "CONNECTION WITH DB WENT WRONG");
		}
}



function attemptRegistration($fName, $lName, $mat, $userPassword, $access){
    
    $conn = connectionToDataBase();

    if ($conn != null){
    
    $sql = "INSERT INTO Users(fName,lName, matricula, passwrd,accessType) 
            VALUES ('$fName','$lName','$mat','$userPassword','$access')";
        
    // Run query and store resulting data
    $result = $conn->query($sql);
        
        if ($result == TRUE) {
            $conn -> close();
            return array("status" => "SUCCESS");   
        } 
            
            
        else{
            $conn -> close();
            return array ("status" => "Something went wrong");
        }
            
    }
        else {
            $conn -> close();
            header('HTTP/1.1 500 Bad connection, something went wrong while saving your data, please try again later');
     }
    
        
}


function loadCommentsDB(){  //returns all the comments on the DB
    
    $conn = connectionToDataBase();

    if ($conn != null){
    
    //MySQL query
    $sql = "SELECT * FROM Comments";
    
    // Run query and store resulting data
    $result = $conn -> query($sql); //
           
        if ($result->num_rows > 0)
        {    
            $response = array();    
            
            while($row = $result -> fetch_assoc()) {
                array_push($response, array("comment" => $row["ComText"], "user" => $row["userName"])); 
            }
            
            return ($response);
        }
        
        else{
             header("Comments don't loaded");
        }
            
    }
        else {
            $conn -> close();
            header('HTTP/1.1 500 Bad connection, something went wrong while saving your data, please try again later');
     }
    
        
}


function attemptInsertComment ($userName, $commentsubmit){
    
    $conn = connectionToDataBase();
    if ($conn != null){
                 
    $sql = "INSERT INTO Comments(ComText , userName) 
            VALUES ('$commentsubmit','$userName')";
        
    
    $result = $conn->query($sql);
        
        if ($result != null) {
            return array("status" => "SUCCESS");   
        } 
            
            
        else{
            return array("Error inserting comment");
        }
            
    }
        else {
            $conn -> close();
            header('HTTP/1.1 500 Bad connection, something went wrong while saving your data, please try again later');
     }
    
    
}





?>