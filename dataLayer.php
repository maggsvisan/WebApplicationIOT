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

	function attemptLogin($mat){

		$conn = connectionToDataBase();

		if ($conn != null){
			
            $sql = "SELECT fName, lName, matricula, passwrd, accessType FROM Users WHERE matricula = '$mat'";
		
			$result = $conn->query($sql);

			if ($result->num_rows > 0)
			{
                $row = $result -> fetch_assoc();
				$conn -> close();
			
                return array("firstName" => $row["fName"], "lastName" => $row["lName"], "mat" => $row["matricula"],
                             "password" => $row["passwrd"], "accessType" => $row["accessType"], "status" => "SUCCESS");
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


function attemptCreateSession($mat, $userPassword){
    
    $conn = connectionToDataBase();

    if ($conn != null)  { 
        $sql = "SELECT fName, lName, matricula FROM Users WHERE matricula = '$mat' AND passwrd ='$userPassword'";
      
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
                $_SESSION["matricula"] = $mat;
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


    function attemptInsertComment ($comment,$id){

        $conn = connectionToDataBase();
        if ($conn != null){

        $sql = "INSERT INTO Comments(commnt,mat) 
                VALUES ('$comment','$id')";


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