//sumof odd numbers upto 50

var i=1;
var sum=0;
while(i<=50)
{
    if((i%2)!=0)
    {
    sum=sum+i;
    }
    i++;
}
console.log(sum)