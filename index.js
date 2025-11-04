let automobiles= ['car','truck','motorcycle']

automobiles.push('airplane','skateboard');

automobiles.unshift('helicopter','bike');

let automobilesCopy= automobiles;

automobiles.pop();

automobiles.shift('bike');

document.getElementById("result").innerHTML = automobiles;

  ✓ should create a variable named automobiles that contains car, truck, motorcycle (924 ms)
      ✓ should add airplane and skateboard to the end of automobiles (211 ms)
      ✕ should add helicopter and bike to the front of the automobiles (139 ms)
      ✕ should define a new variable called automobilesCopy and set it equal to a string template that contains the variable automobiles (138 ms)
      ✓ should remove skateboard from the end of the the automobiles (138 ms)
      ✕ should remove bike from the front of the automobiles (132 ms)
      ✓ should assign the innerHTML of the HTML element with the id result to automobiles (133 ms)
















