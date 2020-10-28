function findMax(a)
{
    var max = a;
    for (i = 1; i < arguments.length; i++)
    {
        if (max < arguments[i])
            max = arguments[i];
    }
    return max;
}