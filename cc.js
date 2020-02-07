
let nL = [1,2,4,5,3,0]

let b = function(nL){
    var c = 0;
    
      while (nL > 1) {
      n = n % 2 ? 3 * n + 1 : n / 2;
      c++;
    }
  
      return c;
  }

console.log(b);
