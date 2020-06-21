// chapter # 21-25(Strings Methods)
// Assignment # 21-25

// Task # 1

var firstName = prompt("enter your First name");
var lastName = prompt("enter your Last name");

var fullName= firstName +" "+ lastName ;
alert("Hello "+fullName);

// Task # 2

var mobileModle = prompt("enter your Favorite Mobile MOdel");
var lengthofString = mobileModle.length;   //name.length for finding length of string
document.write("My Favorite phone is : "+ " " + mobileModle);
document.write("</br> Length of string : "+ lengthofString);

// Task # 3

var text = "pakistani";
var index = text.indexOf("n");
document.write("String : pakistani. </br>")
document.write("Index of ' n ' is :"+index);

// Task # 4

var text = "Hello World";
var lastIndex = text.lastIndexOf("l");
document.write("String : Hello World </br> Last index of 'l' is :"+lastIndex);

// Task # 5

var text = "pakistani";
var char_ATindex= text.charAt(3);
document.write("String : pakistani </br> Character at index 3 is :"+char_ATindex);

// Task # 6

var firstName = prompt("enter your First name");
var lastName = prompt("enter your Last name");
var fullName = firstName.concat(" " +lastName);  // using concat() method
alert(fullName);

// Task # 7

var city = "Hyderabad";
var replace = city.replace("Hyder", "Islam"); // name.replace() method use for replacing 
document.write("city : Hyderabad </br> After replacement :"+replace );

// Task # 8

var message = "Ali and Sami are best friends. They play cricket and football together.";
var replace = message.replace(/and/g,"&");
document.write("Massage : Ali and Sami are best friends. They play cricket and football together. </br> After replacement :"+replace);

// Task # 9

var string="472";
var convert =Number(string);// convert string into number using ( Number() / parseInt())
document.write("value :"+string+" </br> type : string </br> value :"+convert+"</br> type: Number");
console.log(string );
console.log(convert );

// Task # 10

var input =prompt("Enter a word");
var caseChange= input.toUpperCase(); // .toUppercase
document.write("INPUT :"+ input +"</br> Upper Case : "+ caseChange);

// Task # 11

var input =prompt("Enter a word");
var caseChange= input.toLowerCase(); // .toLowercase
document.write("INPUT :"+ input +"</br> titel Case : "+ caseChange);

// Task # 12

var num =12.45;
var convert= num.toString();
alert("number is : 12.45");
var replace = convert.replace(".","");// using replace( ) method for removing dot(.)
alert("After removing dot number is :"+replace);

// Task # 13

var name = prompt("Enter your name");
 
for(var i=0; i<=name.length; i++){
    if( name[i]=== '!' || name[i]=== ',' || name[i]=== '@' || name[i]=== '.'){
        alert("enter a valid username. ");
      
        break;

    }
}


// Task # 14


 var falg=0;
  var Array = ["cake", "apple pie", "cookie", "chips", "patties"]
 var input = prompt("Welcome  to ABC bakery . what do you went to order sir/ma'am.");
 var case_Change = input.toLowerCase();

 for( var i=0;i<Array.length ; i++){
     if(Array[i] === case_Change){
    alert(input+" is avaliable at index "+i+" in ABC bakery ");

       falg=falg+1;
     }
 }
 if(falg === 0){
     alert("We are sory "+input +" is not avaliable in our bakery");

 }



// Task # 15

var passWord = prompt("Enter password");   // password code
document.write("Entered Password :"+passWord +"</br>");
for(var i=0; i<=passWord.length; i++){
    if(passWord[0] >= 0 || passWord[0] <= 9){
        document.write("Password can not begin with a number </br> Please enter a  valid passward .");
        break;
    }
    else if(passWord[i] === '>' || passWord[i] === '<' || passWord[i] === ';' || passWord[i] === ':' || passWord[i] === '"' || passWord[i] === '?' || passWord[i] === ',' || passWord[i] === '.' || passWord[i] === '|' || passWord[i] === '`' ||  passWord[i] === '~' ||  passWord[i] === '!' ||  passWord[i] === '@' ||  passWord[i] === '#' ||  passWord[i] === '$' ||  passWord[i] === '%' ||  passWord[i] === '^' ||  passWord[i] === '&' ||  passWord[i] === '*' ||  passWord[i] === '(' || passWord[i] === ')' || passWord[i] === '-' ||  passWord[i] === '_' || passWord[i] === '=' || passWord[i] === '+' ){
    document.write("Special character are not allowed in Password </br> Please enter a valid passward .");
      break;
    }
}


// Task # 16

var university = "University of karachi";
document.write("university name : University of karachi </br> </br> ");

var split= university.split("");
for(var i=0; i<split.length; i++){
    document.write(split[i]+"</br>");
}


// Task # 17

var input = prompt("Enter a word");
var lastWord= input.slice(input.length-1,input.length);
document.write("User input : "+input+"</br> Last ward of input : "+lastWord);

// Task # 18

var flag=0;
var string = prompt("Enter a sentence this program count word 'the' or 'THE' or 'The' in your sentence  ");
var numChars = string.length;
 for (var i = 0; i < numChars; i++) {
 if (string.slice(i, i + 3) === "the" || string.slice(i, i + 3) === "The" || string.slice(i, i + 3) === "THE"){
   flag=flag+1;
 }
 }
document.write("Text : "+string +"</br>")
 document.write("There are "+flag+" occurance(s) of ward 'the' or 'The' or 'THE' ");


// chapter # 26-30(Number methods)
// Assignment # 26-30

// Task # 1

var number = +prompt("Enter a positive flooting number");
if(number >0){
 var roundOf=Math.round(number);
 var ceil =Math.ceil(number);
 var floor = Math.floor(number);

 document.write("Number :"+number +"</br> round of value : "+roundOf+"</br> floor value : "+floor+"</br> ceil value : "+ceil );
}
else{
    document.write("Please enter positive number");
}

// Task # 2

var number = +prompt("Enter a negative flooting number");
if(number <0){
 var roundOf=Math.round(number);
 var ceil =Math.ceil(number);
 var floor = Math.floor(number);

 document.write("Number :"+number +"</br> round of value : "+roundOf+"</br> floor value : "+floor+"</br> ceil value : "+ceil );
}
else{
    document.write("Please enter negative number");
}


// Task # 3

var number = prompt("Enter a number");//absolute vale
if(number[0] === '-'){
   var convert=number.slice(1);
   document.write("absolute value of |"+number+"| is :"+convert);
}
else{
    document.write("absolute value of |"+number+"| is :"+number);
}

// Task # 4

var number =Math.random()*7;  // dice random value
var floor = Math.floor(number);
if(floor === 0){

}else{
    document.write("Random dice value :"+floor);
}

// Task # 5

var number = Math.random()*3; // coin toss
var floor = Math.floor(number);
if(floor === 1){
    document.write("1 </br> Random coin value </br> Tail");
}else if(floor === 2){
    document.write("2 </br> Random coin value </br> Head");
}else if (floor === 0) {
    floor++;
    if(floor === 1){
        document.write("1 </br> Random coin value </br> Tail");
    }
}

// Task # 6

var number =Math.random()*100;  //  random value 1-100
var floor = Math.floor(number);

document.write("Random  value between 1-100 is :"+floor);


// Task # 7

var weight = prompt("Enetr your weight in kilograms");
document.write("The User weight is : "+weight+" kilograms");



// Task # 8

 var number =6;
 var input= +prompt("Guess the number [Hint number is between 1-10]");
 if(input === number){
     alert("congratulation!")
 }else{
     alert("Try again!")
 }

// chapter # 31-34  (Dates Methods)
// Assignment # 31-34

// Task # 1

var date = new Date();
document.write(date);

// Task # 2

var monthNames=["january","Febouary","March","April","May","June","July","August","September","October","November","December"]
var date = new Date();
var month=date.getMonth();

for(var i=0; i<12; i++){
    if(month === i){
    document.write("Current month : "+monthNames[i]);
    }
}


// Task # 3

var daysName=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
var date = new Date();
var day=date.getDay();
 
for(var i=0; i<daysName.length; i++){
    if(day === i){
        document.write("Today is "+daysName[i]);
    }
}


// Task # 4

var date = new Date();
var day=date.getDay();
 
if(day=== 0 || day === 6){
    document.write("it's Fun day");
}else if(day === 1){
    document.write("Today is  Mon");
}else if(day === 2){
    document.write("Today is  Tues");
}else if(day === 3){
    document.write("Today is  Wed");
}else if(day === 4){
    document.write("Today is  Thurs");
}else if(day === 5){
    document.write("Today is  Fri");
}

// Task # 5

var date = new Date();
var date=date.getDate();

if(date<=15){
    document.write("First fifteen days of the month”")
}else{
    document.write("Last days of the month.")
}

// Task # 6

var date = new Date();

document.write("Current Date : "+date);
var miliSecond = date.getTime();
document.write("</br>Elapsed milliseconds since january 1,1970 : "+miliSecond);
var minutes= miliSecond/(1000*60*60);
document.write("</br>Elapsed minutes since january 1,1970 : "+minutes);

// Task # 7

var date = new Date();
var Hours=date.getHours();
document.write(Hours);
if(Hours < 12){
    alert("Its AM");
}else{
    alert("Its PM");
}

// Task # 8

var Laterdate =new Date();
var monthSet=Laterdate.setMonth(11);
var dateSet=Laterdate.setDate(31);
var setTime=Laterdate.setHours(0);
var setMinutes=Laterdate.setMinutes(0);
var setSeconds=Laterdate.setSeconds(0);
var setMiliSec=Laterdate.setMilliseconds(0);
document.write(Laterdate);

// Task # 9

var date = new Date(2020, 3, 24); // 24 April 2020 1st ramzan
document.write( "1st Ramzan was on "+date+"</br>");
var date1=new Date(); 
var numberOfDays = Math.ceil((date1 - date) /(1000*60*60*24) ); // gives num of days 
document.write(numberOfDays+" days passed since 1st Ramazan")


// Task # 10

var currentDate= new Date();
var time = currentDate.setFullYear(2015);//set year
var seconds= time/(1000*60) // convert into milisec to second
var round=Math.floor(seconds);// round of
document.write("On reference date "+currentDate+",</br>"+round+" seconds had passed since beginning of 2015");


// Task # 11

var currentDate= new Date();   // 1 hour back time
var a_HOur_Back= new Date();
var hour =a_HOur_Back.getHours();
hour=a_HOur_Back.setHours(hour-1);
document.write("Current date : "+currentDate+"</br> 1 Hour ago , it was "+a_HOur_Back);


// Task # 12

var currentDate= new Date(); // 100 year back
var  years_Back= new Date();
var year =years_Back.getFullYear();
yearr=years_Back.setFullYear(year-100);
alert("Current date : "+currentDate+"\n 100 years ago , it was "+years_Back);

// Task # 13
                      // age calculater
  var input = prompt("Enter your age");
  var currentDate = new Date();
  var year = currentDate.getFullYear();
  year=year-input;
  document.write("Your age is  "+input+" </br> Your Birth Year is "+year);


// Task # 14

// Heading  index.Html mwe ha (k-electric Bill)

var monthNames=["january","Febouary","March","April","May","June","July","August","September","October","November","December"]
var customerName = prompt("Enter customer name");// get name

var currentdate= new Date();// for seting of month
var month=currentdate.getMonth();
for(var i=0; i<12; i++){
    if(month === i){
      month=monthNames[i];
    }
}

var numberOFunits=+prompt("Enter Total Number of Units");// get units
var chargePERunits=prompt("Enter Charge per Units");// get amount per unit
var netAmount= numberOFunits * chargePERunits;
var latePamentsurCharge=350;
var grossAmount= netAmount + latePamentsurCharge;

document.write("Customer Name :"+customerName+" </br> Month : "+month+"<br> Number of Units : "+numberOFunits+" units</br> Charge per unit : "+chargePERunits+"</br></br> Net Amount payable(within due date) : "+netAmount+"</br> Late payment Surcharge : "+latePamentsurCharge+"</br> Gross Amount payable(After due date) : "+grossAmount);


// chapter # 35-38  (functions)
// Assignment # 35-38

// Task # 1

 function dateTime(){
     var date=new Date();
     document.write(date);
 }
dateTime();

// Task # 2

function fullName(){
    var FirstN=prompt("Enter your FirstName");
    var LastN=prompt("Enter your LastName");
    // alert("Hwllo "+FirstN.concat(" "+LastN)); // through method concat()
    var FullN=FirstN+LastN;// without method
    alert("Hello "+FullN);

}
fullName();

// Task # 3

function add(no1,no2 = 0){
    return (no1 + no2);
}
var no1=+prompt("enter 1st number");
var no2=+prompt("enter 2nd number");
var sum = add(no1,no2);
alert("Addition of "+no1+" and "+ no2 +" is :"+sum);

// Task # 4

function calculator(no1,no2 = 0, operator ){
    switch(operator){
        case '+':
            return (no1 + no2);
        case '-':
            return (no1 - no2);
        case '*':
            return (no1 * no2);
        case '/':
            return (no1 / no2);
        case '%':
            return (no1 % no2);
        default:
            alert("Please Enter Valid operator.");           
    }
    
}
var no1=+prompt("enter 1st number");
var operator=prompt("enter operator");
var no2=+prompt("enter 2nd number");
var result= calculator(no1,no2,operator);
alert("Result of "+no1+" "+operator+" "+ no2 +" is :"+result);


// Task # 5

function square(no){
    return(no*no);
}
var no = +prompt("Enter a number this functiom gives you square of your number");
var result=square(no);
alert("Square of "+no+" is : "+result);

// Task # 6

function Factorial(n) { 
    var ans=1; 
      
    for (var i = 2; i <= n; i++) {
        ans = ans * i; 
    }

    return ans; 
} 
  
var no = prompt("Enter a number")
var  result = Factorial(no);
alert("Factorail of "+ no +" is : "+result);

// Task # 7

function counting(){
    var startNo =+prompt("Enter start number");
    var endNo =+prompt("Enter end number");
    document.write("Counting form "+startNo+" to "+endNo+"</br></br>");
    for(var i=startNo;i<=endNo; i++){
       document.write(i+" </br>");
    }
}
counting();

// Task # 8

function Hypotenuse(){
    
    var base = prompt("Enter base of a triangle");
    var perpandicular = prompt("Enter perpendicular of a triangle");
     function square(base,perpandicular){
        return ((base*base) + (perpandicular*perpandicular));

     }
  
     document.write("Hypotenus of a triangle are : "+square(base,perpandicular));
}
 Hypotenuse();

// Task # 9

function area_Of_a_Rectangle(width,height =0){
    var Area = width * height;
    document.write("</br>width = "+width+" height = "+ height+"</br>")
    document.write("Area of a rectangle are : "+Area+"</br>");
}
area_Of_a_Rectangle(3,4);// passing value 
var width = prompt("Enter width");
var height=prompt("Enter height");
area_Of_a_Rectangle(width,height);// passing variable

// Task # 10

function checkingForpalandrome(string){
  var check="";
  for(var i=string.length-1;i>=0;i--){
      check += string[i]; // concatination
  }
  if(check === string){
      alert(string+" is palandrome ");
  }else{
    alert(string+" is not palandrome ");
  }
}
var word=prompt("Enter a word");
checkingForpalandrome(word);

// Task # 11

function firstWorduppercase(string){
    var firstWord=string.slice(0,1)
    var OtherWord=string.slice(1);
    var convert = firstWord.toUpperCase();
    var convertedString= convert+OtherWord;
    document.write("Example string : "+string+"</br> Expected output : "+convertedString);
}
var input = prompt("Enter  string");
firstWorduppercase(input);

// Task # 12

 function largeWord(string){
     var split = string.split(' ');
     var lengthOFlongestWord=0
      var longestWord=0;
     document.write("your input  String  ' "+string+"' </br> </br>");
     for(var i=0; i<split.length;i++){
           if(split[i].length> longestWord){
               longestWord = split[i];
               lengthOFlongestWord=split[i].length;// length of longestword
            }
           
        }
        return longestWord;
    }
 var input = prompt("Enter string");
 var result=largeWord(input);
 document.write(" The longest word in this string is: "+result)


// Task # 13

function charCount(string,letter){
    var flag=0;
    
    for(var i=0;i<string.length;i++){
        if(string[i] === letter){
            flag=flag+1;
        }
    }
    document.write("String : "+string+"</br>"+flag+" time occurance(s) of letter "+letter);
}
var string=prompt("Enter string");
var character=prompt("Enter a character \n check for uppercase character or loercase character ");
charCount(string,character);

// Task # 14

function calcArea(radius){ // function for Area
    var area_OF_circle = 3.142 * (radius*radius)
    return area_OF_circle;
   
}// ending area function

function calcCircumference(radius){ // function for circumference
    var circumference = 2 * 3.142 * radius;
    return circumference;
}// ending circumference function

function circle(){ // main function of circle this function call both function o
    var result;
    var number=+prompt("for finding Area of circle press 1 \n for finding circumference of circle press 2 "  );
    var radius = + prompt("Enter radius of circle");

  switch(number){

     case 1:
       result=calcArea(radius);
       alert("Area of a circle is : "+result);
       break;
    case 2:
       result=calcCircumference(radius);
       alert("Circumference of a circle is : "+result);
       break;
   }// ending switch
}// ending circle function
circle();// calling function in main