function reverse(foo)
{
    return function (...manyMoreArgs)
    {
        a = [];
        for (i = manyMoreArgs.length - 1; i >= 0; i--)
        {
            a.push(manyMoreArgs[i]);
        }
        return foo(...a);
    }
}