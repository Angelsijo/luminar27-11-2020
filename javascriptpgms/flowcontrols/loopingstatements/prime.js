// check number is prime or not

// 7(2,3,4,5,6) divide

var num=9;
var flag=0;
for(let i=2;i<num;i++)
{
    if(num%i==0)
    {
flag+=1;
break;
    }
    else{
        flag=0;
    }
}
if(flag>0)
{
    console.log("not prime")
}
else{
    console.log("prime")
}