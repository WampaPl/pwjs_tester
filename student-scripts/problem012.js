function objectsDiff(a, b)
{
    var newArr = [];
    Arra = Object.keys(a);
    Arrb = Object.keys(b);
    for (i = 0; i < Arra.length; i++)
    {
        for (j = 0; j < Arrb.length; j++)
        {
            if (Arra[i] == Arrb[j])  newArr.push(Arra[i]);
        }
    }
    return newArr; 
}