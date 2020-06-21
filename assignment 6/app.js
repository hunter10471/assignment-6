//chap 21-25//


//task 1//
var a = prompt('Enter first name')
var b = prompt("Enter last name")
var fullname = a+" "+b
alert("Welcome,"+" "+fullname)


//task 2//
var a = prompt("Enter your mobile phone:")
document.write("My mobile phone is:"+" "+a+"<br>")
document.write("length of string"+" "+a.length)


//task 3//
var a = "pakistani"
document.write("String:"+" "+"Pakistani <br>")
document.write("Index of 'n'"+" "+a.indexOf("n"))

//task 4//
var a = "Hello world"
document.write("String:"+" "+"Hello world <br>")
document.write("Index of last 'l'"+" "+a.lastIndexOf("l"))

//task 5//
var a = "pakistani"
document.write("String:"+" "+"Pakistani <br>")
document.write("CHaracter at index '3'"+" "+a.charAt(3))


//task 6//
var a = prompt('Enter first name')
var b = prompt("Enter last name")
var fullname = ""
fullname = fullname.concat(a," ",b)
alert("Welcome,"+" "+fullname)


//task 7//
var a = "hyderabad"
document.write("String :"+" "+a+"<br>")
document.write("Replaced string :"+" "+a.replace("hyder","islam"))

//task 8//
var message = "Ali and Sami are best friends. They play cricket and football together."
document.write(message.replace(/and/g,"&"))


//task 9//
var a = "472"
document.write("Value:"+" "+a+"<br>Type:"+" "+typeof a)
var a = 472
document.write("Value:"+" "+a+"<br>Type:"+" "+typeof a)


//task 10//
var a = prompt("Enter string:")
alert(a.toUpperCase())

//task 11//
var a = prompt("Enter string:")
alert(a.replace(a[0],a[0].toUpperCase()))

//task 12//
var a = 35.36
document.write("type :"+" "+typeof a+"<br>")
var a = toString(a)
var b = a.split(".",2)
for (i=0,i<=b.length;i++;){
var a = a.concat(toString(i)," ")
}
document.write("type: "+" "+typeof a)

//task 13//

var a = prompt("Enter username")
var b = [33,44,46,64]
for (i=0,i<=a.length;i++;){
    if (b.includes(a.charCodeAt(i,0))===true){
        alert("Enter a proper username.")
        break
}
else{
    continue
    alert("Welcome",a)}


}


//task 14//
var a = ["cake", "apple pie", "cookie", "chips", "patties"]
var b = prompt("Enter an eatable")
var b = b.toLowerCase()
    if (a.includes(b)===true){
        alert("WE HAVE THE PRODUCT")
    }
    
    else{alert("We do not have the product")

    }


 //task 15//
var a = prompt("Enter password")
var b = ["0","1","2","3","4","5","6","7","8","9"]
var c = ["!",",",".","@"]
for (i=0,i<=a.length;i++;)
    if (c.includes(a[i],0)===true){
        alert("Pass cannot contain special characters")
        break   
    }
    else{
     continue       
    }
if (b.includes(a[0],0)===true){
    alert("Do not start pass with number")
    
}
else if (a.length<6){
    alert("Pass must be 6 characters atleast")
}
else{
    alert("Congratulations, pass is updated.")
}



//task 16//

var university = "University of Karachi"
var a = university.split("")
document.write(a.join(" <br> "))


//task 17//
var a = prompt("Enter string")
document.write("last character of string:"+" "+a[-1])

//task 18//
var a = "the quick brown fox jumps over the lazy dog"
var count = 0
count = parseInt(count)
var b = a.split("the")
count = b.length-1
document.write("number of the in string:"+" "+count+b) 



//Chap 26-30//

//task 1//
var a = prompt("Enter a positive integer")
document.write("number:"+" "+a)
document.write("round off value:"+" "+Math.round(a))
document.write("ceil value:"+" "+Math.ceil(a))
document.write("Floor value"+" "+Math.floor(a))


//task 2//
var a = prompt("Enter a negative floating point integer:")
document.write("number:"+" "+a)
document.write("round off value:"+" "+Math.round(a))
document.write("ceil value:"+" "+Math.ceil(a))
document.write("Floor value"+" "+Math.floor(a))


//task 3//
var a = prompt("Enter an integer")
if (parseInt(a)<0){
    document.write("Absolute value is:"+" "+parseInt(a)*(-1))
}
else{
    document.write("absolute number is:"+" "+parseInt(a))
}


//task 4//
var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 6) + 1;
var numberOfStars = Math.floor(improvedNum);
document.write("Random die throw:"+" "+numberOfStars)


//task 5//
var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 2) + 1;
var numberOfStars = Math.floor(improvedNum);
document.write("Random toss throw:"+" "+numberOfStars)


//task 6//
var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 100) + 1;
var numberOfStars = Math.floor(improvedNum);
document.write("Random number:"+" "+numberOfStars)


//task 7//
var a = prompt("Enter weight")
var b = a.split("k")
document.write("Weight of user:"+" "+b[0]+"kilograms")

//task 8//
var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 10) + 1;
var numberOfStars = Math.floor(improvedNum);
var a = prompt("Enter number from 1-10")
if(parseInt(a)===numberOfStars){
    alert("Congrats! you guessed it right.")
}
else{
    alert("Try again :(")
}

//Chap 31-34//


//task 1//
var rightNow = new Date();
document.write(rightNow)

//task 2//
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var rightNow = new Date();
var month = rightNow.getMonth()
document.write(months[month])

//task 3//
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
 var now = new Date();
 var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
document.write(nameOfToday)


//task 4//
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
 var now = new Date();
 var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
if (nameOfToday==="sat" || "sun"){
    document.write("its funday!")
}

//task 5//
var date = new Date()
var day = date.getUTCDate()
if (day<16){
    document.write("First 15 days of the month")
}
else{
    document.write("Last 15 days of the month")
}


//task 6//
var date = new Date()
var time = date.getTime()
document.write("number of milliseconds:"+" "+time)
document.write("number of minutes:"+" "+time/60000)


//task 7//
var date = new Date()
var hour = date.getHours()
if (hour<12){
    document.write("its AM")
}
else{
    document.write("its PM")
}


//task 8//

var date = new Date()
var v = Date.setFullYear(2020, 10, 31)
document.write(v)


//task 9//

