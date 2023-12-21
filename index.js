var student=[3,9,18,3,28,6,17,9,3];
let i,j;
let temp;
for(i=0; i<length-1; i++)
{
for(j=0; j<length-1; j++)
    if(student[i]==student[j])
    {
        temp=student[i];
    }
}
console.log(temp);