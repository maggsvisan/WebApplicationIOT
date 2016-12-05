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


function attemptInsertClassroom ($building, $num){  
    $conn = connectionToDataBase();

    if ($conn != null){
    
    $sql = "INSERT INTO Classroom(building, num) 
            VALUES ('$building','$num')";
        
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

    
function attemptChangeStatus($lightStatus, $ACStatus){
        
        $conn = connectionToDataBase();
        if ($conn != null){

        $sql = "INSERT INTO Actuators(stsTemp,stsLight) 
                VALUES ('$comment','$id')";


        $result = $conn->query($sql);

            if ($result != null) {
                return array("status" => "SUCCESS");   
                //regresar los valores de los leds y de la temperatura
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



function verifyClassroom ($classNumber, $buildingNum){
    
    $conn = connectionToDataBase();

	if ($conn != null){
			
        $sql = "SELECT id FROM Classroom WHERE building='$buildingNum' AND num = '$classNumber' ";
	//	echo $sql;
        
			$result = $conn->query($sql);

			if ($result->num_rows > 0)
			{
                $row = $result -> fetch_assoc();
				$conn -> close();
			
               // return array("build" => $row["building"],"number" => $row["num"],"status" => "SUCCESS");
               return array("status" => "SUCCESS");
			}
			else{
				$conn -> close();
				return array("status" => "CLASSROOM NOT FOUND");
			}
		}

    else{
		$conn -> close();
		return array("status" => "CONNECTION WITH DB WENT WRONG");
	}
        
        
} 



function getIDClassroom($classNumber, $buildingNumber){
        
    $conn = connectionToDataBase();

	if ($conn != null){
			
        $sql = "SELECT id FROM Classroom WHERE building='$buildingNumber' AND num = '$classNumber'";
		
			$result = $conn->query($sql);

			if ($result->num_rows > 0)
			{
                $row = $result -> fetch_assoc();
				$conn -> close();
			
                return array("idClassroom" => $row["id"], "status" => "SUCCESS");
			}
			else{
				$conn -> close();
				return array("status" => "CLASSROOM NOT FOUND");
			}
		}

    else{
		$conn -> close();
		return array("status" => "CONNECTION WITH DB WENT WRONG");
	}   
        
}



function getIDRegister($idClassroom){
        
    $conn = connectionToDataBase();

	if ($conn != null){
			
        $sql = "SELECT id FROM Register WHERE cnum='$idClassroom'";
		
			$result = $conn->query($sql);

			if ($result->num_rows > 0)
			{
                $row = $result -> fetch_assoc();
				$conn -> close();
			
                return array("idRegister" => $row["id"], "status" => "SUCCESS");
			}
			else{
				$conn -> close();
				return array("status" => "Registration form for this classroom does not exists!");
			}
		}

    else{
		$conn -> close();
		return array("status" => "CONNECTION WITH DB WENT WRONG");
	}   
        
}




function attemptChangeSts($idRegister, $lightStatus, $ACStatus){
    
    $conn = connectionToDataBase();

	if ($conn != null){
       
        $sql = "UPDATE Actuators SET stsTemp='$ACStatus', stsLight='$lightStatus' WHERE rnum='$idRegister'";
        
        
        if (mysqli_query($conn, $sql)) {
            $conn -> close();
            return array("status" => "SUCCESS" );
        }
        
        else {
            $conn -> close();
            return array("Error updating status");
            
        }

    }
    
    else {
        $conn -> close();
        header('HTTP/1.1 500 Bad connection, something went wrong while saving your data, please try again later');
     }
    
}



function createRegister($idClass){
        
        $conn = connectionToDataBase();
        if ($conn != null){

        $sql = "INSERT INTO Register(cnum, timeReg, dateReg) 
                VALUES ('$idClass','00:00:00' , '0000-00-00' ) " ;
        
      //  echo $sql;

        $result = $conn->query($sql);

            if ($result != null) {
                return array("status" => "SUCCESS");   
            } 


            else{
                return array("Error create register");
            }

        }
            else {
                $conn -> close();
                header('HTTP/1.1 500 Bad connection, something went wrong while saving your data, please try again later');
         }
                
}


function createActuators($idReg){
        
        $conn = connectionToDataBase();
        if ($conn != null){

        $sql = "INSERT INTO Actuators(stsTemp, stsLight, rnum) 
                VALUES (0 , 0, '$idReg' ) " ;
        
     //   echo $sql;

        $result = $conn->query($sql);

            if ($result != null) {
                return array("status" => "SUCCESS");   
            } 


            else{
                return array("Error create sensors");
            }

        }
            else {
                $conn -> close();
                header('HTTP/1.1 500 Bad connection, something went wrong while saving your data, please try again later');
         }
                
}



function createSensors($idReg){
        
        $conn = connectionToDataBase();
        if ($conn != null){

        $sql = "INSERT INTO Sensors(tempValue, lightValue, rnum, timeReg, dateReg ) 
                VALUES ('0' , '0', '$idReg','00:00:00' , '0000-00-00' ) " ;
        
     //   echo $sql;

        $result = $conn->query($sql);

            if ($result != null) {
                return array("status" => "SUCCESS");   
            } 


            else{
                return array("Error create sensors");
            }

        }
            else {
                $conn -> close();
                header('HTTP/1.1 500 Bad connection, something went wrong while saving your data, please try again later');
         }
                
}

function attemptReadSensors($idReg){
    
    $conn = connectionToDataBase();

	if ($conn != null){
			
        $sql = "SELECT tempValue, lightValue, timeReg, DateReg FROM Sensors WHERE rnum='$idReg'";
		
        // echo $sql;
			$result = $conn->query($sql);

			if ($result->num_rows > 0)
			{
                $row = $result -> fetch_assoc();
				$conn -> close();
			
                return array("tempVal" => $row["tempValue"],"lightVal" => $row["lightValue"], "time" => $row["timeReg"],
                             "date" => $row["DateReg"],"status" => "SUCCESS");
			}
			else{
				$conn -> close();
				return array("status" => "Registration form for this classroom does not exists!");
			}
		}

    else{
		$conn -> close();
		return array("status" => "CONNECTION WITH DB WENT WRONG");
	}   
       
} 


function loadDBComment(){
        $conn = connectionToDataBase();

        if($conn != null){

            $sql = "SELECT * FROM Comments";
            $result = $conn -> query($sql); //resultado del query
            
            
            if ($result->num_rows > 0){    
                $response = array();     
                
                while($row = $result -> fetch_assoc()) 
                {     
                    array_push($response,array("comment" => $row["commnt"], 
                                                "matricula" => $row["mat"]));
                }

                return ($response) ;
            }  

            else{
                header('HTTP/1.1 406 User not found');   
            }
        }
        else{
            $conn -> close();
            header('HTTP/1.1 500 Bad connection to Database');
        }
    }


function loadDBFavs($mat){
        $conn = connectionToDataBase();

        if($conn != null){
            
            $sql = "SELECT building , num  FROM favorites WHERE mat= '$mat'";
            $result = $conn -> query($sql); //resultado del query
            
            
            if ($result->num_rows > 0){    

                $response = array();     
                
                while($row = $result -> fetch_assoc()) 
                {     
                    array_push($response,array("building" => $row["building"], 
                                                "number" => $row["num"]));
                }

                return ($response) ;
            }  

            else{
                header('HTTP/1.1 406 User not found');   
            }
        }
        else{
            $conn -> close();
            header('HTTP/1.1 500 Bad connection to Database');
        }
    }



function loadUsers(){ //shows all users en DB
    $conn = connectionToDataBase();

    if ($conn != null){
    
    //MySQL query
    $sql = "SELECT * FROM Users";
    // Run query and store resulting data
    $result = $conn -> query($sql); //
           
        if ($result->num_rows > 0)
        {    
            $response = array();    
            
            while($row = $result -> fetch_assoc()) {
                array_push($response, array("mat" => $row["matricula"])); 
            }
            return ($response);
        }
        
        else{
             header("No users register");
        }
            
    }
        else {
            $conn -> close();
            header('HTTP/1.1 500 Bad connection, something went wrong while saving your data, please try again later');
     }
}


function loadClassrooms(){ //shows all classrooms en DB
    $conn = connectionToDataBase();

    if ($conn != null){
        $sql = "SELECT * FROM Classroom";
        
        //echo $sql;
        
        $result = $conn -> query($sql); 
           
        if ($result->num_rows > 0)
        {    
            $response = array();    
            
            while($row = $result -> fetch_assoc()) {
                array_push($response, array("buildings" => $row["building"], "numbers" => $row["num"])); 
            }
            return ($response);
        }
        
        else{
             header("No classrooms registered");
        }
            
    }
        else {
            $conn -> close();
            header('HTTP/1.1 500 Bad connection, something went wrong while saving your data, please try again later');
     }
}





function rmvUser($matNumber){
    
    $conn = connectionToDataBase();
    if ($conn != null){

        $sql = "DELETE FROM Users WHERE matricula='$matNumber'";
        
      //  echo $sql;

        $result = $conn->query($sql);

            if ($result != null) {
                return array("status" => "SUCCESS", "message" => "User Removed");   
            } 


            else{
                return array("Error create removing user");
            }

    }
     else {
            $conn -> close();
            header('HTTP/1.1 500 Bad connection, something went wrong while saving your data, please try again later');
         }
    
}

function  rmvClassroom($BuildingNumber,$ClassroomNumber){
    
    $conn = connectionToDataBase();
    if ($conn != null){

        $sql = "DELETE FROM Classroom WHERE building='$BuildingNumber' AND num='$ClassroomNumber'";
        
       // echo $sql;

        $result = $conn->query($sql);

            if ($result != null) {
                return array("status" => "SUCCESS", "message" => "Classroom removed");   
            } 


            else{
                return array("Error create removing user");
            }

    }
     else {
            $conn -> close();
            header('HTTP/1.1 500 Bad connection, something went wrong while saving your data, please try again later');
         }
    
}


function  rmvRegister($idReg){
    
    $conn = connectionToDataBase();
    if ($conn != null){

        $sql = "DELETE FROM Register WHERE id='$idReg'";
        
//        echo $sql;

        $result = $conn->query($sql);

            if ($result != null) {
                return array("status" => "SUCCESS", "message" => "Classroom removed");   
            } 


            else{
                return array("Error create removing user");
            }

    }
     else {
            $conn -> close();
            header('HTTP/1.1 500 Bad connection, something went wrong while saving your data, please try again later');
         }
    
}





function rmvActuators($idReg){
    
    $conn = connectionToDataBase();
    if ($conn != null){

        $sql = "DELETE FROM Actuators WHERE rnum='$idReg'";
        
      //  echo $sql;

        $result = $conn->query($sql);

            if ($result != null) {
                return array("status" => "SUCCESS");   
            } 


            else{
                return array("Error create removing user");
            }

    }
     else {
            $conn -> close();
            header('HTTP/1.1 500 Bad connection, something went wrong while saving your data, please try again later');
         }
    
}


function rmvSensors($idReg){
    
    $conn = connectionToDataBase();
    if ($conn != null){

        $sql = "DELETE FROM Sensors WHERE rnum='$idReg'";
        
       // echo $sql;

        $result = $conn->query($sql);

            if ($result != null) {
                return array("status" => "SUCCESS");   
            } 


            else{
                return array("Error create removing user");
            }

    }
     else {
            $conn -> close();
            header('HTTP/1.1 500 Bad connection, something went wrong while saving your data, please try again later');
         }
    
}


function validClassroom ($classNumber, $buildingNum){
    
    $conn = connectionToDataBase();

	if ($conn != null){
			
        $sql = "SELECT num, building FROM Classroom WHERE building='$buildingNum' AND num = '$classNumber' ";
		//echo $sql;
        
			$result = $conn->query($sql);

			if ($result->num_rows > 0)
			{
                $row = $result -> fetch_assoc();
				$conn -> close();
			
               // return array("build" => $row["building"],"number" => $row["num"],"status" => "SUCCESS");
               return array("status" => "Duplicated, insert another classroom");
			}
			else{
				$conn -> close();
				return array("status" => "Available");
			}
		}

    else{
		$conn -> close();
		return array("status" => "CONNECTION WITH DB WENT WRONG");
	}             
}



 function validateFavs($mat,$classroom,$building){
        $conn = connectionToDataBase();
        if ($conn != null){
            $sql = "SELECT building from favorites WHERE building='$building' AND num = '$classroom' AND  mat ='$mat'";
           // echo $sql;
            
                $result = $conn->query($sql);
                if ($result->num_rows > 0)
                {
                    $row = $result -> fetch_assoc();
                    $conn -> close();

                    return array("status" => "SUCCESS");
                }
                else{
                    $conn -> close();
                    return array("status" => "Not a favorite");
                }
            }
        else{
            $conn -> close();
            return array("status" => "CONNECTION WITH DB WENT WRONG");
        }   
    }

    function removeFavs($mat,$classroom,$building){
        $conn = connectionToDataBase();

        if ($conn != null){
            $sql = "DELETE FROM favorites WHERE mat='$mat' AND building='$building' AND num='$classroom'";
            // Run query and store resulting data
            $result = $conn->query($sql);
            
            if ($result == TRUE) {
                $conn -> close();
                return array("status" => "ERASED");   
            }  
        }   
        else{
            $conn -> close();
            return array ("status" => "Something went wrong, can't erase from favorites");
        }
    }


    function addFavs($mat,$classroom,$building){
        $conn = connectionToDataBase();

        if ($conn != null){
        $sql = "INSERT INTO favorites(building,num,mat) 
                VALUES ('$building','$classroom','$mat')";
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


function retrieveRecords ($classNumber, $buildingNum){ //shows all records of a classroom
    $conn = connectionToDataBase();

    if ($conn != null){
        $sql = "SELECT building, num, tempValue, lightValue, d FROM Record 
                WHERE building='$buildingNum' AND num='$classNumber'";
        
        
        $result = $conn -> query($sql); 
           
        if ($result->num_rows > 0)
        {    
            $response = array();    
            
            while($row = $result -> fetch_assoc()) {
                array_push($response,array("building" => $row["building"], 
                                           "num" => $row["num"],
                                           "temp" => $row["tempValue"],
                                           "light" => $row["lightValue"],
                                           "date" => $row["d"]));
            }
            return ($response);
        }
        
        else{
              header("No classroom's records");
        }
            
    }
        else {
            $conn -> close();
            header('HTTP/1.1 500 Bad connection, something went wrong while saving your data, please try again later');
     }
}






?>