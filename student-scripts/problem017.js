function compose( ...manyMoreArgs)
{
    return function (wejscie)
    {
        for (i = manyMoreArgs.length - 1; i >= 0; i--)
        {
            foo = manyMoreArgs[i];
            wejscie = foo(wejscie);
        }
        return wejscie;
    }
}