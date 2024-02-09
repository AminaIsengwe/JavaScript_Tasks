function maximumInArray(array){
    max=array[0];
    for ( i = 1; i < array.length; i++) {
    if (array[i] > max) {
            max = array[i]; }
    } 
    return max;    
}

let ar= [1,0,6,5,5,5,7,8,8];
console.log(maximumInArray(ar));



