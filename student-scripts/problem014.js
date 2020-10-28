var Vectors = {
sum : function(a, b)
{
if (Number.isNaN(a[0]) || Number.isNaN(b[0]) ||  (Number.isNaN(a[1]) && !Number.isNaN(b[1]))  ||  (!Number.isNaN(a[1]) && Number.isNaN(b[1])))
	return false;
var n = []
n[0]=a[0]+b[0];
if (!Number.isNaN(a[1]))
	n[1]=a[1]+b[1];
return n;
},
mulByScalar : function(a, b) 
{
if (Number.isNaN(a[0]) || Number.isNaN(b[0]) ||  Number.isNaN(b))
	return false;
var n = []
n[0]=a[0]*b;
if (Number.isNaN(a[1]))
	n[1]=a[1]*b;
return n;
}
};