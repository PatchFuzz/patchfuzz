function sameValue(actual, expected) {
  if (actual !== expected)
    throw new Error(`Expected ${expected} but got ${actual}`);
}

{
  
  const duration = {
    seconds: 9,
    milliseconds: 123,
    microseconds: 456,
    nanoseconds: 789,
  };

  const df = new Intl.DurationFormat('en', { style: "digital" });
  sameValue(df.format(duration), "0:00:09.123456789");
}

{
  
  const duration = {
    seconds: 10_000_000,
    nanoseconds: 1,
  };

  const df = new Intl.DurationFormat('en', { style: "digital" });
  sameValue(df.format(duration), "0:00:10000000.000000001");
}

{
  
  const duration = {
    
    milliseconds: 4503599627370497_000,
    
    microseconds: 4503599627370495_000000,
  };

  const df = new Intl.DurationFormat('en', { style: 'digital' });
  sameValue(df.format(duration), '0:00:9007199254740991.975424');
}
