













var d = 1
function f(a = function () { return d })
{
  var d = 2
  assert(d === 2)
  assert(a() === 1)
}
f()

var g = (a = () => d) => {
  var d = 2
  assert(d === 2)
  assert(a() === 1)
}
g()

var h = ([{a}] = [{a: function () { return d }}]) => {
  var d = 2
  assert(d === 2)
  assert(a() === 1)
}
h()

function i(a = ((eval))("(function () { return d })"))
{
  var d = 2
  assert(d === 2)
  assert(a() === 1)
}
i()

function j(a = (([1, ((() => d))])[1]))
{
  var d = 2
  assert(d === 2)
  assert(a() === 1)
}
j()

var m = 0
function l(a)
{
  m = a
  return m
}

function k(a = l(() => d))
{
  var d = 2
  assert(d === 2)
  assert(a() === 1)
  assert(m() === 1)
}
k()
