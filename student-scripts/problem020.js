function Square(a)
{
    var Square =
    {
       bok: a,
    
       getArea: function() {return a*a;},
       getPerimeter: function() {return 4*a;}
    }
    return Square
}