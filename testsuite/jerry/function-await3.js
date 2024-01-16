













var successCount = 0

async function f1()
{
  throw 1
}

async function f2()
{
  try {
    assert(await f1() && false)
  } catch (e) {
    assert(e === 1)
    return 2
  } finally {
    return 3
  }
}

async function f3()
{
  return await f2() + 1
}

async function f4()
{
  return await f1()
}

async function f5()
{
  var o = { a:f2, b:f2, c:f2, d:f2 }

  for (i in o) {
    var p1 = f3()
    var p2 = f4()

    assert(await o[i]() === 3)
    assert(await p1 === 4)

    try {
      assert(await p2 && false)
    } catch (e) {
      assert(e === 1)
    }

    successCount++
  }
}

f5()

function __checkAsync() {
  assert(successCount === 4)
}
