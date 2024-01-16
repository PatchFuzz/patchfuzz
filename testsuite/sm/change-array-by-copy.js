

load(libdir + 'array-compare.js');
load(libdir + "asserts.js");

var sequence = [1, 2, 3];
let reversedSequence = sequence.toReversed();
assertEq(arraysEqual(sequence, [1, 2, 3]), true);
assertEq(arraysEqual(reversedSequence, [3, 2, 1]), true);

sequence = [87, 3, 5, 888, 321, 42];
var sortedSequence = sequence.toSorted((x, y) => (x >= y));
assertEq(arraysEqual(sequence, [87, 3, 5, 888, 321, 42]), true);
assertEq(arraysEqual(sortedSequence, [3, 5, 42, 87, 321, 888]), true);

sequence = ["the", "quick", "fox", "jumped", "over", "the", "lazy", "dog"];
sortedSequence = sequence.toSorted();
assertEq(arraysEqual(sequence, ["the", "quick", "fox", "jumped", "over", "the", "lazy", "dog"]), true);
assertEq(arraysEqual(sortedSequence, ["dog", "fox", "jumped", "lazy", "over", "quick", "the", "the"]), true);


assertThrowsInstanceOf(() => sequence.toSorted([1, 2, 3]), TypeError);




function unchanged(a) {
    assertEq(arraysEqual(a, ['angel', 'clown', 'mandarin', 'sturgeon']), true);
}


let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
var myFishSpliced = myFish.toSpliced(2, 0, 'drum')
unchanged(myFish);
assertEq(arraysEqual(myFishSpliced, ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']), true);



var myFishSpliced = myFish.toSpliced(2, 0, 'drum', 'guitar');
unchanged(myFish);
assertEq(arraysEqual(myFishSpliced, ['angel', 'clown', 'drum', 'guitar', 'mandarin', 'sturgeon']), true);


let myFish1 = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
myFishSpliced = myFish1.toSpliced(3, 1);
assertEq(arraysEqual(myFish1, ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']), true);
assertEq(arraysEqual(myFishSpliced, ['angel', 'clown', 'drum', 'sturgeon']), true);


let myFish2 = ['angel', 'clown', 'drum', 'sturgeon']
myFishSpliced = myFish2.toSpliced(2, 1, 'trumpet');
assertEq(arraysEqual(myFish2, ['angel', 'clown', 'drum', 'sturgeon']), true);
assertEq(arraysEqual(myFishSpliced, ['angel', 'clown', 'trumpet', 'sturgeon']), true);


let myFish3 = ['angel', 'clown', 'trumpet', 'sturgeon']
myFishSpliced = myFish3.toSpliced(0, 2, 'parrot', 'anemone', 'blue');
assertEq(arraysEqual(myFish3, ['angel', 'clown', 'trumpet', 'sturgeon']), true);
assertEq(arraysEqual(myFishSpliced, ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon']), true);


let myFish4 = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon']
myFishSpliced = myFish4.toSpliced(2, 2);
assertEq(arraysEqual(myFish4, ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon']), true);
assertEq(arraysEqual(myFishSpliced, ['parrot', 'anemone', 'sturgeon']), true);


myFishSpliced = myFish.toSpliced(-2, 1);
unchanged(myFish);
assertEq(arraysEqual(myFishSpliced, ['angel', 'clown', 'sturgeon']), true);


myFishSpliced = myFish.toSpliced(2);
unchanged(myFish);
assertEq(arraysEqual(myFishSpliced, ['angel', 'clown']), true);


sequence = [1, 2, 3];
let seq_with = sequence.with(1, 42);
assertEq(arraysEqual(sequence, [1, 2, 3]), true);
assertEq(arraysEqual(seq_with, [1, 42, 3]), true);
assertEq(arraysEqual(sequence.with(-0, 42), [42, 2, 3]), true);


assertEq(arraysEqual(sequence.with(false, 42), [42, 2, 3]), true);
assertEq(arraysEqual(sequence.with(true, 42), [1, 42, 3]), true);


assertEq(arraysEqual(sequence.with(null, 42), [42, 2, 3]), true);

assertEq(arraysEqual(sequence.with([], 42), [42, 2, 3]), true);

assertEq(arraysEqual(sequence.with("2", 42), [1, 2, 42]), true);


assertEq(arraysEqual(sequence.with("monkeys", 42), [42, 2, 3]), true);
assertEq(arraysEqual(sequence.with(undefined, 42), [42, 2, 3]), true);
assertEq(arraysEqual(sequence.with(function() {}, 42), [42, 2, 3]), true);

assertThrowsInstanceOf(() => sequence.with(3, 42), RangeError);
assertThrowsInstanceOf(() => sequence.with(5, 42), RangeError);
assertThrowsInstanceOf(() => sequence.with(-10, 42), RangeError);
assertThrowsInstanceOf(() => sequence.with(Infinity, 42), RangeError);

