















a: a = 1;

str = '';

a: for (j = 0; j < 10; j++)
{
  str += 'A';

  b: for (i = 0; i < 10; i++)
  {
    str += 'B';

    break a;

    str += 'C';
  }

  str += 'D';
}

assert (str === 'AB');


str = '';

a: for (j = 0; j < 5; j++)
{
  str += 'A';

  b: for (i = 0; i < 5; i++)
  {
    str += 'B';

    switch (1)
    {
      case 1:
        continue b;
      default:
        break b;
    }

    str += 'C';
  }

  str += 'D';
}

assert (str === 'ABBBBBDABBBBBDABBBBBDABBBBBDABBBBBD');


str = '';

a: for (j = 0; j < 5; j++)
{
  str += 'A';

  b: for (i = 0; i < 5; i++)
  {
    str += 'B';

    switch (1)
    {
      case 1:
        continue a;
    }

    str += 'C';
  }

  str += 'D';
}

assert (str === 'ABABABABAB');


str = '';

a: for (j = 0; j < 5; j++)
{
  str += 'A';

  b: for (i = 0; i < 5; i++)
  {
    str += 'B';

    switch (1)
    {
      case 1:
        break b;
    }

    str += 'C';
  }

  str += 'D';
}

assert (str === 'ABDABDABDABDABD');


str = '';

a: for (j = 0; j < 5; j++)
{
  str += 'A';

  b: for (i = 0; i < 5; i++)
  {
    str += 'B';

    switch (1)
    {
      case 1:
        break a;
    }

    str += 'C';
  }

  str += 'D';
}

assert (str === 'AB');



str = '';

a: for (j = 0; j < 5; j++)
{
  str += 'A';

  b: for (i = 0; i < 5; i++)
  {
    str += 'B';

    with ({})
    {
      break b;
    }

    str += 'C';
  }

  str += 'D';
}

assert (str === 'ABDABDABDABDABD');


str = '';

a: for (j = 0; j < 5; j++)
{
  c:
  {
    str += 'A';

    b: for (i = 0; i < 5; i++)
    {
      str += 'B';

      with ({})
      {
        break c;
      }

      str += 'C';
    }

    str += 'D';
  }
}

assert (str === 'ABABABABAB');



a: {
 function f ()
 {
      str = '';

   a: for (i = 0; i < 5; i++)
      {
        str += 'A';

        for (j = 0; j < 5; j++)
        {
          str += 'B';

          continue a;

          str += 'C';
        }
        str += 'D';
      }

    assert (str === 'ABABABABAB');
 }
}

f ();



str = '';

for (i = 0; i < 5; i++)
{
  str += 'A';

  switch (i)
  {
    case 0:
    {
      str += '0';
      break;
    }
    case 1:
    {
      str += '1';
      break;
    }
    case 2:
    {
      str += '2';
      break;
    }
    case 3:
    {
      str += '3';
      break;
    }
    case 4:
    {
      str += '4';
      break;
    }
  }

  str += 'B';
}

assert (str === 'A0BA1BA2BA3BA4B');



str = '';

for (i = 0; i < 2; i++)
{
  str += '[A]';

  a:
  for (j = 0; j < 5; j++)
  {
    str += '[B]';

    switch (j)
    {
      case 0:
      {
        str += '[0]';
        break;
      }
      case 1:
      {
        str += '[1]';
        if (i % 2 == 0)
        {
          str += '[1.1]';
          break a;
        }
        else
        {
          str += '[1.2]';
        }
      }
      case 2:
      {
        str += '[2]';
        continue a;
      }
      case 3:
      {
        str += '[3]';
        break;
      }
      case 4:
      {
        str += '[4]';
        continue a;
      }
    }

    str += '[C]';
  }

  str += '[D]';
}

assert (str === '[A][B][0][C][B][1][1.1][D]' +
                '[A][B][0][C][B][1][1.2][2][B][2][B][3][C][B][4][D]');
