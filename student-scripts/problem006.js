function divisible(a)
{
    if (arguments.length <= 1)
        return true;
    for (i = 1; i < arguments.length; i++)
    {
        if (a % arguments[i] !== 0)
            return false;
    }
    return true;
}