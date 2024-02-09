const date= new Date();
const today= date.getDay()
console.log("Today is " + getToDay())
function getToDay(){
switch(today){
    case 1:
        return "Monday"
        break;
    case  2:
    return "Tuesday"
    case 3:
    return "    Wednesday"
    case  4:
    return "Thursday"
    case 5:
    return "Friday"
    case  6:
    return "Saturday"
    case 7:
    return "Sunday"
default:
    return false;
}
}


function areaTriangle(base,height){
const area= base * height /2
return area;
}
console.log(areaTriangle(5,6))

function findfLargest(a,b,c){
    if(a >= b && a >= c) {
        largest = a;
    }
    else if (b >= a && b >= c) {
        largest = b;
    }
    else {
        largest = c;
    }

return largest
}
console.log(findfLargest(9,4,5))


function findLargest(a,b,c){
    array=[];
    array.push(a)
    array.push(b)
    array.push(c) 
  const largest= Math.max(...array)
  return largest;
}
console.log(findLargest(2,4,5))