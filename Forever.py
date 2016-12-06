import time
import grovepi
import datetime
import MySQLdb
from grove_rgb_lcd import *



HOST = '10.15.249.6'
PORT = 3306
USER = 'root'
PASSWORD= 'root'
DB = 'tec2'


# Open database connection
db = MySQLdb.connect(host = HOST, port = PORT, user = USER, passwd= PASSWORD, db = DB)
db3 = MySQLdb.connect(host = HOST, port = PORT, user = USER, passwd= PASSWORD, db = DB)

# prepare a cursor object using cursor() method
cursor = db.cursor()
cursor3 = db3.cursor()

# Connect the Grove Temperature Sensor to analog port A0
# SIG,NC,VCC,GND
sensor = 0
light = 1
touch = 2
led = 5
grovepi.pinMode(touch,"INPUT")
grovepi.pinMode(led,"OUTPUT")
l = grovepi.pinMode(light,"INPUT")

while True:
    ########################Samplingtime#########################
    time.sleep(1)
    #############################################################
    db2 = MySQLdb.connect(host = HOST, port = PORT, user = USER, passwd= PASSWORD, db = DB)
    cursor2 = db2.cursor()
    time.sleep(.5)
    temp = grovepi.temp(sensor,'1.1')
    time.sleep(.5)
    value= grovepi.analogRead(light)
    time.sleep(.5)
    luz = (float)(1023 - value) * 10 / value

    print("temp =", temp)
    print("light =", luz)
    time.sleep(.5)

    # Prepare SQL query to INSERT a record into the database.
    sql = "UPDATE sensors SET tempValue = %s, lightValue = %s WHERE rnum = %s"
    data = (round(temp,3),round(luz,3), 1)
    time.sleep(.5)
    sql2 = "SELECT stsTemp, stsLight FROM actuators \
       WHERE  rnum = 1 "
    st = datetime.datetime.fromtimestamp(time.time()).strftime('%Y-%m-%d-%H:%M:%S')
    print(st)
    sql3 = "INSERT INTO record(building,num,tempValue,lightValue,d) \
          VALUES ('%s','%s','%s','%s','%s')" % \
          ('CETEC','101',round(temp,3),round(luz,3),st)
    try:
        print("Executing sql write")
        # Execute the SQL command
        cursor.execute(sql,data)
        print("Executed, commiting write")
        db.commit()
        print("Commited update")
        time.sleep(.5)
        print("Executing sql read")
        # Execute the SQL command
        print("!")
        cursor3.execute(sql3)
        print("@")
        db3.commit()
        print("#")
        time.sleep(.5)
    
        
        cursor2.execute(sql2)
        print("Executed, fetching read")
        # Fetch all the rows in a list of lists.
        results = cursor2.fetchall()
        print("Results stored")
        for row in results:
            status = row[0]
            status2 = row[1]

            if(status == 1):
                grovepi.digitalWrite(led,1)
            if(status == 0):
                grovepi.digitalWrite(led,0)
            if(status2 == 1):
                setRGB(0,0,255)
            if(status2 == 0):
                print("digi3")
                setRGB(255,0,0)
            print("Sleep")
            time.sleep(1)
        db2.close()

          
    except:
        print "My SQL Error"
        print("Except")
        db.rollback()
        db2.rollback()

        
# disconnect from server
db.close()

