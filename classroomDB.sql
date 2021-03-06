CREATE TABLE Users (
    fName VARCHAR(30) NOT NULL,
    lName VARCHAR(30) NOT NULL,
    matricula VARCHAR(50) NOT NULL PRIMARY KEY,
    passwrd VARCHAR(50) NOT NULL,
    accessType VARCHAR(20) NOT NULL 
);

CREATE TABLE Classroom ( 
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY, 
    building VARCHAR(50) NOT NULL,
    num VARCHAR(50) NOT NULL
); 

CREATE TABLE Register (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    cnum INT NOT NULL,
    timeReg TIME NOT NULL, 
    dateReg DATE NOT NULL,
   
    FOREIGN KEY (cnum) REFERENCES Classroom(id)
); 

CREATE TABLE Actuators(  
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    stsTemp INT NOT NULL, #boolean value
    stsLight INT NOT NULL, #boolean value
    rnum INT NOT NULL,   
    
    FOREIGN KEY (rnum) REFERENCES Register(id)

);

 
CREATE TABLE Sensors(  
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    tempValue VARCHAR(50) NOT NULL,
    lightValue VARCHAR(50) NOT NULL,
    rnum INT NOT NULL,  
    timeReg TIME NOT NULL, 
    dateReg DATE NOT NULL,

    FOREIGN KEY (rnum) REFERENCES Register(id)

);

 
CREATE TABLE Comments (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    commnt VARCHAR(140) NOT NULL,
    mat  VARCHAR(50) NOT NULL, 
    
    FOREIGN KEY (mat) REFERENCES Users(matricula)
); 

CREATE TABLE Favorites (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    building VARCHAR(140) NOT NULL,
    num VARCHAR(50) NOT NULL,
    mat  VARCHAR(50) NOT NULL
);
 

CREATE TABLE Record(  
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    building VARCHAR(50) NOT NULL,
    num VARCHAR(50) NOT NULL,
    tempValue VARCHAR(50) NOT NULL,
    lightValue VARCHAR(50) NOT NULL,
    d VARCHAR(50) NOT NULL  
);

INSERT INTO Register(cnum, timeReg, dateReg)
values (6, '13:00:15' , '2010-01-02' )

INSERT INTO Record(building, num, tempValue,lightValue,d )
values ('CETEC','123', '24', '144', '13:00:15 2010-01-02' )

INSERT INTO Register(cnum, timeReg, dateReg)
values (1, '13:00:00' , '2008-01-02' )

INSERT INTO Sensors(tempValue, lightValue, rnum)
VALUES ('x', 'x', 1)

INSERT INTO Actuators(stsTemp, stsLight, rnum)
VALUES (1, 0, 2)

INSERT INTO Actuators(stsTemp, stsLight, rnum)
VALUES (0, 0, 3)