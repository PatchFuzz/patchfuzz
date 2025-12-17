const props = [ "input", "$_"
              , "lastMatch", "$&"
              , "lastParen", "$+"
              , "leftContext", "$`"
              , "rightContext", "$'"
              , "$1", "$2", "$3", "$4", "$5", "$6", "$7", "$8", "$9"
              ];

for (let i = 0; i < props.length; i++) {
  const prop = props[i];
  const desc = Object.getOwnPropertyDescriptor(RegExp, prop);
  print(desc.configurable, prop);
  print(desc.enumerable, prop);
  print(desc.get !== undefined, prop);

  
  
  
  print(desc.set !== undefined, prop);
}
