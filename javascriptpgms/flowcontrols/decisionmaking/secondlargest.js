var num1=90;
var num2=67;
var num3=45;
if((num1>num2)&(num1>num3))
{
    if(num2>num3)
    {
        console.log(num2)
    }
    else
    {
        console.log(num3)
    }
}
else if((num2>num1)&(num2>num3))
{
    if(num1>num3)
    {
        console.log(num1)
    }
    else
    {
        console.log(num3)
    }
}
else if((num3>num2)&(num3>num1))
{
    if(num2>num1)
    {
        console.log(num2)
    }
    else
    {
        console.log(num1)
    }
}
else{
    console.log("All are equal numbers")
}