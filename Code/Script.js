// console.log("Tushar");

// alert("Alert")

// document.write("I Love Bangladesh");
// document.write("<h1>I Love Bangladesh</h1>");



// document.write("Name : Tushar Ahmed </br>");
// document.write("BSc in CSE");


// var name = "Tushar";
// document.write(name);
// name = "Maruf";
// document.write(name);


// var num = 20;
// num=toString(num)  
// console.log(typeof(num));


// var num = "20";
// num = parseInt(num);  
// console.log(typeof(num));


// var n = 20.345678
// console.log(n.toFixed())
// console.log(n.toFixed(3))
// console.log(n.toPrecision(4))


// console.log(Number("12"))
// console.log(typeof(Number("12")))
// console.log(Number(true))
// console.log(Number(false))


// console.log("Md " + "Maruf " + "Ahmed " + "Tushar");
// var firstName = "Tushar";
// var lastName = " Ahmed";
// var fullName = firstName + lastName;
// document.write("My name is "+ fullName);

// num1 = 10
// num2 = 20
// document.write("Num1 : " +num1, " Num2 : "+num2);


// var name = "Tushar";
// var l = name.length;
// document.write(l);


// var i = prompt("Enter your name : ");
// document.write("Number of Character : " + i.length);


// var text = "Tushar";
// document.write(text.charAt(2));


// var text = "Tushar Ahmed"
// text = text.toUpperCase();
// document.write(text);


// var tx1 = "My name is ";
// var tx2 = "Tushar Ahmed";
// var tx = tx1.concat(tx2);
// document.write(tx);


// var tx = "Bangladesh";
// var ans = tx.slice(2,5); // 2 index theke (5-2)=3 ta word dekhabe
// document.write(ans);


// console.log(2**3);
// var x = 3;
// x *= 5;
// console.log(x);


// var n1 = prompt("Enter first number : ");
// var n2 = prompt("Enter second number : ");
// n1 = parseInt(n1, 10);
// n2 = parseInt(n2, 10);
// var sum, sub;
// sum = n1 + n2;
// document.write("Summation : " + sum + "<br/>");
// sub = n1 - n2;
// document.write("Substraction : " + sub);



// var base = parseFloat(prompt("Enter base: "));
// var height = parseFloat(prompt("Enter height: "));
// var area = (base * height) / 2;
// document.write("Area of Traingle : " + area);



// var Fahrenheit, Celsius;
// Fahrenheit= parseFloat(prompt("Enter Fahrenheit :"));
// Celsius= (Fahrenheit-32)*(5/9);
// document.write("Celsius : ="+ Celsius);



// console.log(20 == "20") // check value 
// console.log(20 === "20") // check data type 
// console.log(25 != 20)
// var n1 = 20;
// var n2 = 15;
// var n3 = 12;
// console.log(n1 > n2 && n1 > n3);
// console.log(n1 > n2 || n1 > n3);
// console.log(!(22>20));



                //  if else condition 
// var marks = parseInt(prompt("please enter your marks: "));
// if(marks>=80){
// 	document.write("you got A+ ");
// }
// else if(marks>=75){
// 	document.write("you got A ");
// }
// else if(marks>=70){
// 	document.write("you got A- ");
// }
// else if(marks>=65){
// 	document.write("you got B+ ");
// }
// else if(marks>=60){
// 	document.write("you got B ");
// }
// else if(marks>=55){
// 	document.write("you got B- ");
// }
// else if(marks>=50){
// 	document.write("you got c+ ");
// }
// else if(marks>=45){
// 	document.write("you got c ");
// }
// else if(marks>=40){
// 	document.write("you got D ");
// }
// else if(marks>100){
// 	document.write("you input wrong data ");
// }
// else{
// 	document.write("you are failed");
// }



//     letter=prompt("Enter a letter: ");
//     if(letter=="a" || letter=="e" || letter=="i" ||letter=="o" ||letter=="u")
//       Console.log("Vowel");
//     else
//     console.log(" consonent");


                  //     switch case 
// var letter = prompt('Enter any digit :');
// letter = letter.toLowerCase();
// switch(letter){
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//     console.log('vawel');
//     break;
//     default:
//         console.log('consonant')
// }


              // for loop
// var input = prompt("Enter anything : ")
// for (var k = 10 ; k >= 1 ; k = k-1){
//     // document.write(input + "<br>")
//     console.log(input)
// }
// document.write("<h1>End</h1>");


              // while() loop
// var i = 1;
// var sum = 0;
// while (i <= 100) {
//     if (i % 3 == 0 && i % 5 ==0) {
//         sum = sum + i;
//     }
//     i++;
// }
// document.write(sum);


        // do...while() loop
// var i = 1;
// do{
//   document.write(" "+i);
//   i++;
// }
// while(i<=10)



           // continue
// for (var i = 1; i <= 100; i++) {
//   if (i % 2 != 0) {
//     continue; // skip 
//   }
//   document.write("  " + i)

// }
           //break
// for (var i = 1; i <= 100; i++) {
//   document.write(" " + i)
//   if (i == 8) {
//     break;
//   }
// }


            // ternary operator 
// var number = Number(prompt('Enter a number'));
// var result = number>0? 'positive' : number < 0? 'Negative'  : 'Zero';
// console.log(result);


          // function
function addition(x, y) {
    var add = x + y;
    document.write("The addition value is : " + add +"<br/>");
}
function subtraction(x, y) {
    var sub = x - y;
    document.write("The subtraction value is : " + sub +"<br/>");
}
function multiplication(x, y) {
    var mul = x * y;
    document.write("The multiplication value is : " + mul +"<br/>");
}
function division(x, y) {
    var div = x / y;
    document.write("The division value is : " + div +"<br/>");
}
function modulus(x, y) {
    var mod = x % y;
    document.write("The modulus value is : " + mod);
}
addition(10, 20);
subtraction(10, 20);
multiplication(10, 20);
division(10, 20);
modulus(10, 20);
