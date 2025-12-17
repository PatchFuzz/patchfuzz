var arr = ['this', 'works', 'for', 'me'];
for (var i = 0; i < arr.length; ++i) {
    var result = arr[i];
    switch (i) {
      case 0: print('this', result); break;
      case 1: print('works', result); break;
      case 2: print('for', result); break;
      case 3: print('me', result); break;
    }
}


