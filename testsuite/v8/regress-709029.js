




function mutateObjectOnStringConversion(obj) {
  return { toString: () => { obj.x = 42;return "";}};
}

{
  const re = /./;
  re.exec(mutateObjectOnStringConversion(re));
}

{
  const re = /./;
  re.test(mutateObjectOnStringConversion(re));
}

{
  const re = /./;
  re[Symbol.match](mutateObjectOnStringConversion(re));
}

{
  const re = /./;
  re[Symbol.search](mutateObjectOnStringConversion(re));
}

{
  const re = /./;
  re[Symbol.split](mutateObjectOnStringConversion(re));
}

{
  const re = /./;
  re[Symbol.replace](mutateObjectOnStringConversion(re));
}
