var bubbleSort = function(arr){
  if (arr.length < 2) return arr;
  var hasSwapped=true;
  var swaps = 0;
  var comparisons = 0;
  var limbo;

  for (var n = 0; n < arr.length * arr.length; n++){
    for (var i = 0; i < arr.length-1; i++) {

      comparisons++;
      if (arr[i] > arr[i+1]){
        // swaps++;
        hasSwapped=true;
        limbo = arr[i];
        arr[i]= arr[i+1];
        arr[i+1] = limbo;
      }
    };
  }
  return arr;
}