function deepCopy(a)
{
    var b = JSON.parse(JSON.stringify(a));
    return b;
}