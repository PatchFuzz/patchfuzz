function testsort(n) {
  var numbers=new Array(n);
  for (var i=0;i<n;i++) numbers[i]=i;
  delete numbers[50];
  delete numbers[150];
  delete numbers[25000];
  delete numbers[n-1];
  delete numbers[n-2];
  delete numbers[30];
  delete numbers[2];
  delete numbers[1];
  delete numbers[0];
  numbers.sort();
}

testsort(100000)
