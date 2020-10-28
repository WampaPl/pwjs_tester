function isLeapYear(a)  
{
    if (isNaN(a)) 
        return false;
    else if (a % 400 == 0 || (a % 4 == 0 && a % 100 != 0)) 
        return true;
    else  
        return false;
}
function getTotalNumberOfNewYaersEveSundays(a, b) 
{
    suma = 0; dzien_tygodnia = 5; //1 styczen 1 to sobota, mam nadzieje
    for (i = 0; i<a; i++)
    {
        if (isLeapYear(i))
        {
            dzien_tygodnia+=2;
        }
        else
        {
            dzien_tygodnia++;
        }

        if (dzien_tygodnia>=7)
            dzien_tygodnia-=7;
    }
//////////
    for (i = a; i<=b; i++)
    {
        if (dzien_tygodnia == 6)
          {
            suma++;
          }
            
        if (isLeapYear(i))
        {
            dzien_tygodnia+=2;
        }
        else
        {
            dzien_tygodnia++;
        }

        if (dzien_tygodnia>=7)
            dzien_tygodnia-=7;
    }
    return suma;
}