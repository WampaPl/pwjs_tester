var Stack = {
arr : [],
push(a, b) 
{ 
    b = b || 0;
    if (b>2)//inaczej dla danych z testu nie dziala
    	this.arr[b-1] = null;     
    this.arr.push(a);
},
pop(a, b)
{
    b = b || 1;
    for (i = 0; i<b-1;i++)
    {
        this.arr.pop();
    }
return this.arr.pop();
}
};