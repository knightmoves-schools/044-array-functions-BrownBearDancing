let automobiles= ['car', 'truck', 'motorcycle']

automobiles.push('airplane', 'skateboard');
document.getElementById("push").innerHTML = automobiles;

automobiles.pop();
document.getElementById("pop").innerHTML = automobiles;

automobiles.unshift('helicopter');
document.getElementById("unshift").innerHTML = automobiles;

automobiles.shift();
document.getElementById("shift").innerHTML = automobiles;

let automobilesCopy= automobiles;

document.getElementById("result").innerHTML = automobiles;








