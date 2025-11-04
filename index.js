let automobiles= ['car', 'truck', 'motorcycle'];

automobiles.push('airplane', 'skateboard');


automobiles.pop();


automobiles.unshift('helicopter', 'bike');


automobiles.shift();


let automobilesCopy= automobiles;

document.getElementById("result").innerHTML = automobiles;

    ✕ should create a variable named automobiles that contains car, truck, motorcycle (1000 ms)
      ✕ should add airplane and skateboard to the end of automobiles (139 ms)
      ✕ should add helicopter and bike to the front of the automobiles (168 ms)
      ✕ should define a new variable called automobilesCopy and set it equal to a string template that contains the variable automobiles (155 ms)









