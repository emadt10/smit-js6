//Question 1
// function currenttime(){
//     var curdate= new Date();
//     document.write(curdate);
//     }
//     currenttime();

//q2
// function greet(a){
//     alert("hello"+a);
// }
// var name=prompt("Enter your NAme");
// document.write(greet(name));

//q3
// function sum(a,b){
//     return a+b;
//  }
//  var a=+prompt("enter 1 digit");
//  var b=+prompt("enter 2 digit");
//  document.write(sum(a,b));
 
//q4
// function calculate(num1, num2, operator) {
//     switch (operator) {
//       case '+':
//         return num1 + num2;
//         break;
//       case '-':
//         return num1 - num2;
//         break;
//       case '*':
//         return num1 * num2;
//         break;
//       case '/':
//        return num1 / num2;
       
        
//       default:
//         return "Invalid operator";
//     }
//   }
  
//   var num1 = parseFloat(prompt("Enter the first number:"));
//   var num2 = parseFloat(prompt("Enter the second number:"));
//   var operator = prompt("Enter the operator (+, -, *, /):");
  
//   var result = calculate(num1, num2, operator);
  
//   document.write(result);

//q5
// function square(a){
//     return a*a;
// }
// var b=+prompt("enter a no to square it");
// document.write(square(b));
  
//q6
// function factorial(n) {
//     var res = 1; 
//     for (var i = 1; i <= n; i++) {
//       res *= i; 
//     }
//     return res; 
//   }
  
//   var number = +prompt("Enter a number for factorial");
//   var result = factorial(number);
//   document.write("Factorial of " + number + " = " + result);

//q7
// function count(a,b){
//     for(var i=a;i<=b;i++){
//         document.write(i);
//     }
// }
// var a=+prompt("Start no");
// var b=+prompt("End no");
// document.write(count(a,b));

//q8
// function calHypotenuse(base, perpendicular) {
//     function calculateSquare(x) {
//       return x * x;
//     }
  
//     var baseSquared = calculateSquare(base);
//     var perpendicularSquared = calculateSquare(perpendicular);
  
//     var hypotenuseSquared = baseSquared + perpendicularSquared;
  
//     var hypotenuse = hypotenuseSquared*hypotenuseSquared;
  
//     return hypotenuse;
//   }
  
  
//   var base = +prompt("enter base");
//   var perpendicular = +prompt("enter perpendicular");
  
//   var hyp = calHypotenuse(base, perpendicular);
//   document.write(hyp);
  
//q9
//function calrecByValues(width, height) {
//     var area = width * height;
//     return area;
//   }
  
  
//   var wv = +prompt("enter width");
//   var hv = +prompt("enter height");
//   var area = calrecByValues(wv, hv);
//   document.write("Area : "+area);

//arg by variable

// function calculateArea(w,h)
// {
//     var area=w*h;
//     return "The area of the rectangle is: "+area;
// }
// var w=5, h=10;
// document.write(calculateArea(w,h));
// document.write("<br>"+calculateArea(10,15));

//q10
// function palindrom(a){
//     var revstr='';
//     for(i=a.length-1;i>=0;i--){
//         revstr+=a[i];
//     }
//     if(a==revstr){
//         return "IT Is PALINDROME!!"
//     }
//     else{
//         return "Not Matched"
//     }
// }
// document.write(palindrom("abba"));

//q11
// function upperCaseLetter(str) {

//     var nString= "";
//     for (var i = 0; i < str.length; i++) {
//       if (i==0 || str[i-1]==' ')
//       {
//       nString+=str[i].toUpperCase();
//       }
//       else {
//         nString += str[i];
//       }
//     }
//     return "Original String: "+str+"<br>Revised String: "+nString;
// }
//     document.write(upperCaseLetter("the quick brown fox"));

//q12
// function longestWord(str) {
//     var words = str.split(' ');
//     var longestWord = '';
  
//     for (var i = 0; i < words.length; i++) {
//       var currentWord = words[i];
//       if (currentWord.length > longestWord.length) {
//         longestWord = currentWord;
//       }
//     }
  
//     return "The longest word in the string '<b>" + str + "'</b> is " + longestWord;
//   }
// document.write(longestWord("Web Development tutorial"));

//q13
// function searchChar(str,c)
// {
//     var o = 0;
//     for (var i=0; i<str.length; i++)
//     {
//         if (str[i]==c)
//         {
//             o++;
//         }
//     }
//     return "The letter "+c+" has occurred "+o+" time(s) in string "+str+".";
// }
// document.write(searchChar("Maldieves",'a'));

//q14

// function calcCircumference(a) 
// {
//     return "The circumference is "+(2*3.14*a);
// }
// document.write(calcCircumference(9));
  