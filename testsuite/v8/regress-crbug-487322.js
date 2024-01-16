



if (this.Intl) {
  
  
  
  
  
  df1 = new Intl.DateTimeFormat('en-US', {'timeZone': 'Asia/Katmandu'})
  df2 = new Intl.DateTimeFormat('en-US', {'timeZone': 'Asia/Kathmandu'})
  assertEquals(df1.resolvedOptions().timeZone, df2.resolvedOptions().timeZone);

  
  
  df = new Intl.DateTimeFormat('en-US', {'timeZone': 'Asia/Ulaanbaatar'})
  assertEquals('Asia/Ulaanbaatar', df.resolvedOptions().timeZone);

  df = new Intl.DateTimeFormat('en-US', {'timeZone': 'Asia/Ulan_Bator'})
  assertEquals('Asia/Ulaanbaatar', df.resolvedOptions().timeZone);

  
  assertThrows(() => Intl.DateTimeFormat(undefined, {timeZone: 'Aurope/Paris'}));
}
