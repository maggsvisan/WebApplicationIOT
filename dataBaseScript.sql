CREATE TABLE Users (
	fName VARCHAR(30) NOT NULL,
    lName VARCHAR(30) NOT NULL,
    username VARCHAR(50) NOT NULL PRIMARY KEY,
    passwrd VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL
    
);

CREATE TABLE Comments (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    ComText VARCHAR (140) NOT NULL,
    email VARCHAR(50) NOT NULL,
    userName  VARCHAR(50) , 
    
    FOREIGN KEY (userName) REFERENCES Users(username)

); 


INSERT INTO Users(fName, lName, username, passwrd, email)
VALUES ('Margarita', 'Villarreal', 'maggsvisan', '12345', 'eva_villarreal@gmail.com')
        
INSERT INTO Comments(ComText, email, userName)
VALUES ('this is a test', 'maggs@itesm.mx','maggsvisan')