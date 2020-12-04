// print a number in reverse order

var num=123;
var s="";
while(num!=0)
{
let digit=num%10;
s=s+String(digit);
num=Math.floor(num/10)

}
console.log(s)