var arr = [11,10,9,8,7,6,5,4,3,2,1];

for (var j = 0; j < arr.length ; j++){
  for(var i = 0; i < arr.length - 1; i++){ 
  
    if(arr[i] > arr[i+1]){
      var temp = arr[i]; 
      arr[i] = arr[i+1]; // 2
      arr[i+1] = temp; // 11
    
  }
}
  console.log(arr);
  
}

