



if (this.Intl) {
  

  
  
  df = new Intl.DateTimeFormat('en-US', {'timeZone': 'eUrope/isLe_OF_man'})
  assertEquals('Europe/Isle_of_Man', df.resolvedOptions().timeZone);

  df = new Intl.DateTimeFormat('en-US', {'timeZone': 'africa/Dar_eS_salaam'})
  assertEquals('Africa/Dar_es_Salaam', df.resolvedOptions().timeZone);

  df = new Intl.DateTimeFormat('en-US', {'timeZone': 'America/port_of_spain'})
  assertEquals('America/Port_of_Spain', df.resolvedOptions().timeZone);

  
  df = new Intl.DateTimeFormat('en-US', {'timeZone': 'America/north_Dakota/new_salem'})
  assertEquals('America/North_Dakota/New_Salem', df.resolvedOptions().timeZone);

  
  
  df1 = new Intl.DateTimeFormat('en-US', {'timeZone': 'America/aRgentina/buenos_aIres'})
  df2 = new Intl.DateTimeFormat('en-US', {'timeZone': 'America/Argentina/Buenos_Aires'})
  assertEquals(df1.resolvedOptions().timeZone, df2.resolvedOptions().timeZone);

  df2 = new Intl.DateTimeFormat('en-US', {'timeZone': 'America/Buenos_Aires'})
  assertEquals(df1.resolvedOptions().timeZone, df2.resolvedOptions().timeZone);

  df1 = new Intl.DateTimeFormat('en-US', {'timeZone': 'America/Indiana/Indianapolis'})
  df2 = new Intl.DateTimeFormat('en-US', {'timeZone': 'America/Indianapolis'})
  assertEquals(df1.resolvedOptions().timeZone, df2.resolvedOptions().timeZone);

  
  
  


  
  df = new Intl.DateTimeFormat('en-US', {'timeZone': 'America/port-aU-pRince'})
  assertEquals('America/Port-au-Prince', df.resolvedOptions().timeZone);

  
  df1 = new Intl.DateTimeFormat('en-US', {'timeZone': 'Asia/Ho_Chi_Minh'})
  df2 = new Intl.DateTimeFormat('en-US', {'timeZone': 'Asia/Saigon'})
  assertEquals(df1.resolvedOptions().timeZone, df2.resolvedOptions().timeZone);

  
  assertThrows(() => Intl.DateTimeFormat(undefined, {timeZone: 'Europe/_Paris'}));
  assertThrows(() => Intl.DateTimeFormat(undefined, {timeZone: 'America/New__York'}));
  assertThrows(() => Intl.DateTimeFormat(undefined, {timeZone: 'America
  assertThrows(() => Intl.DateTimeFormat(undefined, {timeZone: 'America/New_York_'}));
  assertThrows(() => Intl.DateTimeFormat(undefined, {timeZone: 'America/New_Y0rk'}));
}
