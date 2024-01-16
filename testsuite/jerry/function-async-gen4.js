













var successCount = 0

function check_fulfilled(p, value, done)
{
  assert(p instanceof Promise)

  p.then(function(v) {
    assert(v.value === value)
    assert(v.done === done)
    successCount++
  }, function() {
    assert(false)
  })
}

function check_rejected(p, value)
{
  assert(p instanceof Promise)

  p.then(function(v) {
    assert(false)
  }, function(v) {
    assert(v === value)
    successCount++
  })
}



var o1 = {}
var state1 = 0
var async1 = {
  [Symbol.asyncIterator]() {
    return {
      get next() {
        assert(++state1 === 2)
        return function () {
          return { value:"Res", done:false }
        }
      },
      get throw() {
        ++state1
        assert(state1 === 5 || state1 === 7 || state1 == 9)
        return function (v) {
          assert(v === "Input")
          return { value:o1, done:false }
        }
      },
      get return() {
        ++state1
        assert(state1 === 6 || state1 === 8 || state1 == 10)
        return function (v) {
          assert(v === o1)
          return { value:4.5, done:false }
        }
      }
    }
  }
}

async function *f1() {
  assert(++state1 === 1)
  yield *async1
  assert(false)
}

var gen = f1()
check_fulfilled(gen.next(), "Res", false)
assert(++state1 === 3)
check_fulfilled(gen.throw("Input"), o1, false)
check_fulfilled(gen.return(o1), 4.5, false)

check_fulfilled(gen.next(), "Res", false)
check_fulfilled(gen.throw("Input"), o1, false)
check_fulfilled(gen.return(o1), 4.5, false)

check_fulfilled(gen.next(), "Res", false)
check_fulfilled(gen.throw("Input"), o1, false)
check_fulfilled(gen.return(o1), 4.5, false)
assert(++state1 === 4)



var state2 = 0
var async2 = {
  [Symbol.asyncIterator]() {
    return {
      get next() {
        assert(++state2 === 2)
        return "Not callable"
      }
    }
  }
}

async function *f2() {
  assert(++state2 === 1)
  try {
    yield *async2
    assert(false)
  } catch (e) {
    assert(e instanceof TypeError)
  }
  return "End"
}

gen = f2()
check_fulfilled(gen.next(), "End", true)



function __checkAsync() {
  assert(state1 == 10)
  assert(state2 == 2)
  assert(successCount == 10)
}
