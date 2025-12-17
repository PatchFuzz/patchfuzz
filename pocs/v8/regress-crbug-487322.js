if (this.Intl) {
  
  
  
  
  
  df1 = new Intl.DateTimeFormat('en-US', {'timeZone': 'Asia/Katmandu'})
  df2 = new Intl.DateTimeFormat('en-US', {'timeZone': 'Asia/Kathmandu'})
  print(df1.resolvedOptions().timeZone, df2.resolvedOptions().timeZone);

  
  
  df = new Intl.DateTimeFormat('en-US', {'timeZone': 'Asia/Ulaanbaatar'})
  print('Asia/Ulaanbaatar', df.resolvedOptions().timeZone);

  df = new Intl.DateTimeFormat('en-US', {'timeZone': 'Asia/Ulan_Bator'})
  print('Asia/Ulaanbaatar', df.resolvedOptions().timeZone);

  
  print(() => Intl.DateTimeFormat(undefined, {timeZone: 'Aurope/Paris'}));
}
