CREATE TABLE Users (
	
    fName VARCHAR(30) NOT NULL,
    lName VARCHAR(30) NOT NULL,
    matricula VARCHAR(50) NOT NULL PRIMARY KEY,
    username VARCHAR(50),
    passwrd VARCHAR(50) NOT NULL,
    accessType VARCHAR(20) NOT NULL   #user or admin
    
);

CREATE TABLE Comments (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    comment VARCHAR (140) NOT NULL,
    userName  VARCHAR(50) , 
    
    FOREIGN KEY (userName) REFERENCES Users(username)

); 

CREATE TABLE Classroom ( 
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    building VARCHAR(50) NOT NULL,
    num INT NOT NULL,
    regnumber INT NOT NULL 
        
    FOREIGN KEY (regnumber) REFERENCES SensorRegister(id)

); 

CREATE TABLE SensorRegister (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    cbuilding VARCHAR(50) NOT NULL,
    cnum INT NOT NULL,
   # sensortype VARCHAR (50) NOT NULL,  #window, light, temp
    timeReg TIME NOT NULL, 
    dateReg DATE NOT NULL,

    temp INT NOT NULL,
    light int NOT NULL,
    window int NOT NULL

    
    FOREIGN KEY (cbuilding) REFERENCES Classroom(building)
    FOREIGN KEY (cnum) REFERENCES Classroom(num)

); 



CREATE TABLE Actuator( #this is por air and light1 
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name  VARCHAR(30) NOT NULL,
    sts INT NOT NULL

);

INSERT INTO Actuator(name, sts)
VALUES ('light1', '1')
