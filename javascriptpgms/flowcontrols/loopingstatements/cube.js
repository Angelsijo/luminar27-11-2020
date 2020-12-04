// 123 
//1^3+2^3+#^3
var num=123;
var cube=0;
var res=0;

while(num!=0)
{
    let digit=num%10;
    cube=digit*digit*digit;
    //console.log(cube)
    num=Math.floor(num/10);
    res=res+cube;
 

}
console.log(res)