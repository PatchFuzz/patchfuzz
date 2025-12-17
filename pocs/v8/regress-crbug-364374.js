if (this.Intl) {
  

  
  
  df = new Intl.DateTimeFormat('en-US', {'timeZone': 'eUrope/isLe_OF_man'})
  print('Europe/Isle_of_Man', df.resolvedOptions().timeZone);

  df = new Intl.DateTimeFormat('en-US', {'timeZone': 'africa/Dar_eS_salaam'})
  print('Africa/Dar_es_Salaam', df.resolvedOptions().timeZone);

  df = new Intl.DateTimeFormat('en-US', {'timeZone': 'America/port_of_spain'})
  print('America/Port_of_Spain', df.resolvedOptions().timeZone);

  
  df = new Intl.DateTimeFormat('en-US', {'timeZone': 'America/north_Dakota/new_salem'})
  print('America/North_Dakota/New_Salem', df.resolvedOptions().timeZone);

  
  
  df1 = new Intl.DateTimeFormat('en-US', {'timeZone': 'America/aRgentina/buenos_aIres'})
  df2 = new Intl.DateTimeFormat('en-US', {'timeZone': 'America/Argentina/Buenos_Aires'})
  print(df1.resolvedOptions().timeZone, df2.resolvedOptions().timeZone);

  df2 = new Intl.DateTimeFormat('en-US', {'timeZone': 'America/Buenos_Aires'})
  print(df1.resolvedOptions().timeZone, df2.resolvedOptions().timeZone);

  df1 = new Intl.DateTimeFormat('en-US', {'timeZone': 'America/Indiana/Indianapolis'})
  df2 = new Intl.DateTimeFormat('en-US', {'timeZone': 'America/Indianapolis'})
  print(df1.resolvedOptions().timeZone, df2.resolvedOptions().timeZone);

  
  
  


  
  df = new Intl.DateTimeFormat('en-US', {'timeZone': 'America/port-aU-pRince'})
  print('America/Port-au-Prince', df.resolvedOptions().timeZone);

  
  df1 = new Intl.DateTimeFormat('en-US', {'timeZone': 'Asia/Ho_Chi_Minh'})
  df2 = new Intl.DateTimeFormat('en-US', {'timeZone': 'Asia/Saigon'})
  print(df1.resolvedOptions().timeZone, df2.resolvedOptions().timeZone);

  
  print(() => Intl.DateTimeFormat(undefined, {timeZone: 'Europe/_Paris'}));
  print(() => Intl.DateTimeFormat(undefined, {timeZone: 'America/New__York'}));
  print(() => Intl.DateTimeFormat(undefined, {timeZone: 'America
  print(() => Intl.DateTimeFormat(undefined, {timeZone: 'America/New_York_'}));
  print(() => Intl.DateTimeFormat(undefined, {timeZone: 'America/New_Y0rk'}));
}
