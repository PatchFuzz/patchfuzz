













var obj = {}, obj_l;
obj_l = obj;

for (var k = 0; k < 1500; k++)
{
  obj_l.prop = {};
  obj_l = obj_l.prop;
}

function f (o, i) {
  if (--i > 0) {
    f ({a:o, b:o}, i);
  }
}

for (var i = 0; i < 100; i++)
{
  ({} + f ({}, 12));
}
