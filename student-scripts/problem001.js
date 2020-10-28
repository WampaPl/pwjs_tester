function triangleArea(a, b, c)
{
if (a+b<=c || a+c<=b || b+c<=a || a<=0 || b<=0 ||c<=0)
    return -1;

var S = Math.sqrt((a+b+c)*(a+b-c)*(a-b+c)*(-a+b+c))/4;

return S.toFixed(2);
}
