let i;

for(i=1;i<5;i++)
{
    console.log('Value of i is:'+i);
}

let fruits=['Apple','Banana','Grapes']
let x;
for (x in fruits)
{
    //console.log(x)
    console.log(fruits[x]);
}
for(x of fruits)
{
    console.log(x)
}