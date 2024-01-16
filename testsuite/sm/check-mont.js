

var x = [9385, 32112, 25383, 16317, 30138, 14565, 17812, 24500, 2719, 30174, 3546, 9096, 15352, 19120, 20648, 14334, 7426, 0, 0, 0];
var n = [27875, 25925, 30422, 12227, 27798, 32170, 10873, 21748, 30629, 26296, 20697, 5125, 4815, 2221, 14392, 23369, 5560, 2, 0, 0];
var np = 18229;
var expected = [18770, 31456, 17999, 32635, 27508, 29131, 2856, 16233, 5439, 27580, 7093, 18192, 30804, 5472, 8529, 28649, 14852, 0, 0, 0];


bpe=0;         
mask=0;        


for (bpe=0; (1<<(bpe+1)) > (1<<bpe); bpe++);  
bpe>>=1;                   
mask=(1<<bpe)-1;           




sa = new Array(0); 


function copy_(x,y) {
  var i;
  var k=x.length<y.length ? x.length : y.length;
  for (i=0;i<k;i++)
    x[i]=y[i];
  for (i=k;i<x.length;i++)
    x[i]=0;
}


function copyInt_(x,n) {
  var i,c;
  for (c=n,i=0;i<x.length;i++) {
    x[i]=c & mask;
    c>>=bpe;
  }
}


function greater(x,y) {
  var i;
  var k=(x.length<y.length) ? x.length : y.length;

  for (i=x.length;i<y.length;i++)
    if (y[i])
      return 0;  

  for (i=y.length;i<x.length;i++)
    if (x[i])
      return 1;  

  for (i=k-1;i>=0;i--)
    if (x[i]>y[i])
      return 1;
    else if (x[i]<y[i])
      return 0;
  return 0;
}












function mont_(x,y,n,np) {
  var i,j,c,ui,t;
  var kn=n.length;
  var ky=y.length;

  if (sa.length!=kn)
    sa=new Array(kn);

  for (;kn>0 && n[kn-1]==0;kn--); 
  for (;ky>0 && y[ky-1]==0;ky--); 

  copyInt_(sa,0);

  
  for (i=0; i<kn; i++) {
    t=sa[0]+x[i]*y[0];
    ui=((t & mask) * np) & mask;  
    c=(t+ui*n[0]) >> bpe;
    t=x[i];

    
    for (j=1;j<ky;j++) {
      c+=sa[j]+t*y[j]+ui*n[j];
      sa[j-1]=c & mask;
      c>>=bpe;
    }
    for (;j<kn;j++) {
      c+=sa[j]+ui*n[j];
      sa[j-1]=c & mask;
      c>>=bpe;
    }
    sa[j-1]=c & mask;
  }

  if (!greater(n,sa))
    sub_(sa,n);
  copy_(x,sa);
}

mont_(x, x, n, np);

var passed = expected.length == x.length;
for (var i = 0; i < expected.length; i++) {
  if (passed)
    passed = expected[i] == x[i];
}
assertEq(passed, true);
