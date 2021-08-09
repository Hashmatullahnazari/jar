//var myArray = ['book',100,false, 1];//literal array
//var myArray3 = [];//literal array

//var myArray1 = new Array('string',100,false);
//var myArray2 = new Array();
//
//console.log(myArray[0]);
//
//myArray[1] = 'new value';


//var myArray = ['string',100,false];
//
//console.log(myArray[0]);
//myArray[1] = 'new value';
//console.log(myArray);

//var question1 = prompt ('which task 1-4?');
//var question2 = prompt ('status 1 = done 2 = in progress 3 = to do?');
//
//var task = ['take out garbage','read a book','write javascript','go to work'];
//
//var progress = ['done','in progress','to do '];
//
//console.log('today you will ' + task[question1-1] + 'status of task ' + progress[question2-1]);

//var question1 = prompt('what is you favorite fruit?');
//var question2 = prompt('my favorite fruit is?')
//
//var fruits = ['apples','banana','cherry'];
//
//var ate = ['crispy', ' full of carbs ',' yummy'];
//
//console.log('i like ' + fruits[(question1-1)] + ' it is ' +  ate[(question2-1)]);

//let task = ['take out garbage', 'read a book', 'write javascript', 'go to work', 'sleep'];
//let progress = ['done', 'in progress', 'to do'];

////var question1 = prompt('what task from 1 -' + task.length+'?');
////var question2 = prompt('status 1 = dome 2 = in progress 3 = to do?');

//console.log('today you will ' + task[(question1-1)] + ' you have status of task =' + progress[(question2-1)]);


//let task = ['take out garbage', 'read a book', 'write javascript', 'go to work', 'sleep'];
//let progress = ['done', 'in progress', 'to do'];

//task[task.length] = 'watch tv';

//console.log(task[(task.length-1)]);
//console.log(task);

//var question1 = prompt('what task from 1 -' + task.length+'?');
//var question2 = prompt('status 1 = dome 2 = in progress 3 = to do?');


//guessing game
//var animals = ['cat', 'dog', 'rabbit', 'bird', 'fish'];
//var randomIndex = Math.floor(Math.random()*animals.length);
//var randomAnimal = animals[randomIndex];
//var message = prompt('which index value '+ randomAnimal);
//
//var response = (message == randomIndex) ? 'correct':'wrong it was' + randomIndex;
//alert(response);

//var animals = ['cat', 'dog', 'rabbit', 'bird', 'fish'];
//
//animals.push('sheep');
//var remove1 = animals.pop();
//animals.shift();
//animals.unshift('horse');
//
//animals.splice(2,1)
//animals.reverse();
//animals.sort();
//console.log(remove1);
//console.log(animals);




//var animals = ['cat', 'dog', 'rabbit', 'bird', 'fish', 'zebra'];
//starVal = (animals.length-1);
//console.log(starVal);
//animals[20] ='horse';
//animals.fill('mouse',6,starVal,(animals.length-1));
//console.log(animals);
//animals.sort();
//animals.reverse();
//console.log(animals);
//var newHolders = ['cat', 'dog', 'rabbit', 'bird'];
//newHolders[10] ='horse';
//newHolders.fill('fish', 3, 10);
//newHolders.reverse();
//newHolders.pop();
//newHolders.push('sheep');



//var newHolder = ['cat', 'dog', 'rabbit', 'bird'];
//var posIndex = newHolder.indexOf('cat');
//var q = prompt('what did you want to look for');
//
//var p = newHolder.indexOf(q);
//
//var message = p > -1 ? 'found':'Not There'
//console.log(message);




//var arr = [['cat','dog','fish'],[4,2,5,6,6,4],'hello',50];

//var ourFriends = [['Mike','John','Larry'],[1980,1990,2016]];
//
//var q = prompt('which friend?');
//console.log('You met john ' + ourFriends[0][q] + 'in' + ' year when you met ' + ourFriends[1][q]);

//var arr = ['cat','dog','fish',4,2,5,6,6,4];
//var car = {color:'red',make:'ford',doors:5,model:'mustang'};
//car.color = 'blue';
//var prop =prompt('what did you want to know about the car');
//console.log(car[prop]);
//console.log(car);
//console.log(car[prop]);


//for(var x in arr){
//    console.log(x); index value
//    console.log(arr[x]); the item value
//}

//i = 0;
//while(i<arr.length)
//     {
         

        //output.innerHTML = arr;
         
//console.log("<br>The number is " + i);
         //console.log(arr[i]);the item value
         //console.log(i);index value
//  i = i + 1;
//}

//for(x = 0; x <= arr.length; x = x + 1)
//    {
//        //console.log(arr[x]);the item value
//      console.log(arr); index value
//        //console.log(x);index value
//    }





var car = {color:'red',make:'ford',doors:5,model:'mustang'};
var yellow = car.length;
for(x = 0; x <= yellow; x = x + 1)
   {
    console.log(start(x)); //the item value
    console.log(start); //index value
    console.log(x);  //index value
    }





