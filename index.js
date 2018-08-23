// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]
function destructivelyAppendDriver(names){
  
  drivers.push(names);
}
function destructivelyPrependDriver(names){
  
  drivers.unshift(names);
}
function destructivelyRemoveLastDriver(names){
  
  drivers.pop(names);
}

function destructivelyRemoveFirstDriver(){
  drivers.shift();
}
 
function appendDriver(names){
 const newArray= [ ...drivers, names]; 
 return newArray;
 }
function prependDriver(names){
 const newArray = [names, ...drivers];
return newArray;
}

function removeLastDriver(){
return drivers.slice(0, drivers.length - 1);
 
 }
 
 function removeFirstDriver(){
   return drivers.slice(1);
   
 }
