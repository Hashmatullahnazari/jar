//        var userNames = ["mike","john","larry"];
//        var checkUser = userNames.indexOf("mike") > -1 ? true : false;
//        var output = document.getElementById("output");
//        
//        
//        var login = false;
//        var outputHolder = "";
//        var userOkay = login ? outputHolder = "true" : outputHolder = "false";
//        output.innerHTML = userOkay;
//        
//       // login ? alert("okay") : alert("denied");
 
 
//        var userNames = ["mike","john","larry"];
//        var userInput = prompt("what is your name?");
//        var output = document.getElementById("output");
//        output.innerHTML = userNames.indexOf(userInput) > -1 ?  "welcome " : "denied";
//        output.innerHTML += ", "+ userInput;

//
//        var userNames = ["mike","john","larry"];
//        var userInput = prompt("what is your name?");
//        var output = document.getElementById("output");
//        output.innerHTML = userNames.indexOf(userInput) > -1 ?  (alert('hello'), "welcome ") :("denied");
//        output.innerHTML += ", "+ userInput;
//
//        var login = true;
//        if(login == true){
//             output.innerHTML = 'welcome it was true';
//            
//        }else{
//             output.innerHTML = 'denied was not true';
//        }





//     var userNames = ["mike","john","larry"];
//        var userInput = prompt("what is your name?");
//        var output = document.getElementById("output");
//        var htmlOutput = "";
//        if(userNames.indexOf(userInput) > -1) {
//             alert("hello");
//            htmlOutput = "welcome it was true";
//            var age = prompt("age");
//            htmlOutput += age > 18 ? " you are over 18" : " you are under 18";
//        } else {
//            htmlOutput =  "denied was not true ";   
//        }
//        output.innerHTML = htmlOutput + ", "+ userInput; 