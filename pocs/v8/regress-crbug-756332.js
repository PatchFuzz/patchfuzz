{
  let z = ({x: {y} = {y: 42}} = {}) => y;
  print(42, z());
}

{
  let z = ({x: [y] = [42]} = {}) => y;
  print(42, z());
}
