var b = 50;
console.log(b);
document.writeln(b)
document.getElementById("hello").innerHTML = "hello world";
for (var i = 10; i<=50; i+=2){
    document.writeln(i)
    
}
//sum of all numbers 
const  sum=[10 ,12, 14,16 ,18 ,20 ,22 ,24 ,26 ,28 ,30 ,32 ,34 ,36 ,38 ,40 ,42 ,44 ,46 ,48 ,50].reduce(function(result,item){
    return result+item;},0)
    document.writeln(sum)
