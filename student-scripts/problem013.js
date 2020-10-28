function parametricSort(a, b)
{
    if (b != "asc" && b != "desc")
        return false;
    a.sort();
    if (b ==  "desc")
        a.reverse();
    return a;
}
