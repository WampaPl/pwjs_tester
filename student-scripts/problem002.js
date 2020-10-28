function stringRotate(a, b)
{
if (b<0 || isNaN(b))
    return '';
  
  for (i = 0; i < b; i++) 
  {
    char = a.charAt(0);
    a = a.substring(1) + char;
  }

return a;
}