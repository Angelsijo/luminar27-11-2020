function add(n1,n2)
{
    return n1+n2;
}
let res=add(3,4);
console.log(res)

// arrow ftn, lambda ftn
//nameless ftn
let ad= (n1,n2)=> n1+n2;
console.log(ad(5,6))


let sub=(n1,n2)=>n1-n2;
console.log(sub(7,6))

let fact=(n1)=>{
    let f=1;
    for(let i=1;i<=n1;i++)
    {
        f=f*i;
    }
    console.log(f)
}
fact(6)