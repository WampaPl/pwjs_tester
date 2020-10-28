function deepFindAndCount(a, b)
{
    var f = a.flat(Infinity);
    var suma = 0;

    for (i = 0; i < f.length; i++)
    {
        if (f[i] == b)
        suma++;
    }

    return suma;
}
