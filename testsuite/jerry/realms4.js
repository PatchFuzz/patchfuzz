













var realm = createRealm()

function compare(a, b)
{
  assert (a === b)
  assert (typeof a === "symbol")
  assert (typeof b === "symbol")
}

compare(Symbol.asyncIterator, realm.Symbol.asyncIterator)
compare(Symbol.hasInstance, realm.Symbol.hasInstance)
compare(Symbol.isConcatSpreadable, realm.Symbol.isConcatSpreadable)
compare(Symbol.iterator, realm.Symbol.iterator)
compare(Symbol.match, realm.Symbol.match)
compare(Symbol.replace, realm.Symbol.replace)
compare(Symbol.search, realm.Symbol.search)
compare(Symbol.species, realm.Symbol.species)
compare(Symbol.split, realm.Symbol.split)
compare(Symbol.toPrimitive, realm.Symbol.toPrimitive)
compare(Symbol.toStringTag, realm.Symbol.toStringTag)
compare(Symbol.unscopables, realm.Symbol.unscopables)
