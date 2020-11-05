function carry(a)
{
    return function foo(...manyMoreArgs)
    {
        if (manyMoreArgs.length == a.length)
        {
            return a(...manyMoreArgs);
        }
        else
        {
            return function(jedneArgument)
            {
                return foo (...manyMoreArgs.concat(jedneArgument));
            }
        }
    }
}