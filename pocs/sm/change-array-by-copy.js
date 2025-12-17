;
;

var sequence = [1, 2, 3];
let reversedSequence = sequence.toReversed();
print(arraysEqual(sequence, [1, 2, 3]), true);
print(arraysEqual(reversedSequence, [3, 2, 1]), true);

sequence = [87, 3, 5, 888, 321, 42];
var sortedSequence = sequence.toSorted((x, y) => (x >= y));
print(arraysEqual(sequence, [87, 3, 5, 888, 321, 42]), true);
print(arraysEqual(sortedSequence, [3, 5, 42, 87, 321, 888]), true);

sequence = ["the", "quick", "fox", "jumped", "over", "the", "lazy", "dog"];
sortedSequence = sequence.toSorted();
print(arraysEqual(sequence, ["the", "quick", "fox", "jumped", "over", "the", "lazy", "dog"]), true);
print(arraysEqual(sortedSequence, ["dog", "fox", "jumped", "lazy", "over", "quick", "the", "the"]), true);


print(() => sequence.toSorted([1, 2, 3]), TypeError);




function unchanged(a) {
    print(arraysEqual(a, ['angel', 'clown', 'mandarin', 'sturgeon']), true);
}


let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
var myFishSpliced = myFish.toSpliced(2, 0, 'drum')
unchanged(myFish);
print(arraysEqual(myFishSpliced, ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']), true);



var myFishSpliced = myFish.toSpliced(2, 0, 'drum', 'guitar');
unchanged(myFish);
print(arraysEqual(myFishSpliced, ['angel', 'clown', 'drum', 'guitar', 'mandarin', 'sturgeon']), true);


let myFish1 = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
myFishSpliced = myFish1.toSpliced(3, 1);
print(arraysEqual(myFish1, ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']), true);
print(arraysEqual(myFishSpliced, ['angel', 'clown', 'drum', 'sturgeon']), true);


let myFish2 = ['angel', 'clown', 'drum', 'sturgeon']
myFishSpliced = myFish2.toSpliced(2, 1, 'trumpet');
print(arraysEqual(myFish2, ['angel', 'clown', 'drum', 'sturgeon']), true);
print(arraysEqual(myFishSpliced, ['angel', 'clown', 'trumpet', 'sturgeon']), true);


let myFish3 = ['angel', 'clown', 'trumpet', 'sturgeon']
myFishSpliced = myFish3.toSpliced(0, 2, 'parrot', 'anemone', 'blue');
print(arraysEqual(myFish3, ['angel', 'clown', 'trumpet', 'sturgeon']), true);
print(arraysEqual(myFishSpliced, ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon']), true);


let myFish4 = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon']
myFishSpliced = myFish4.toSpliced(2, 2);
print(arraysEqual(myFish4, ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon']), true);
print(arraysEqual(myFishSpliced, ['parrot', 'anemone', 'sturgeon']), true);


myFishSpliced = myFish.toSpliced(-2, 1);
unchanged(myFish);
print(arraysEqual(myFishSpliced, ['angel', 'clown', 'sturgeon']), true);


myFishSpliced = myFish.toSpliced(2);
unchanged(myFish);
print(arraysEqual(myFishSpliced, ['angel', 'clown']), true);


sequence = [1, 2, 3];
let seq_with = sequence.with(1, 42);
print(arraysEqual(sequence, [1, 2, 3]), true);
print(arraysEqual(seq_with, [1, 42, 3]), true);
print(arraysEqual(sequence.with(-0, 42), [42, 2, 3]), true);


print(arraysEqual(sequence.with(false, 42), [42, 2, 3]), true);
print(arraysEqual(sequence.with(true, 42), [1, 42, 3]), true);


print(arraysEqual(sequence.with(null, 42), [42, 2, 3]), true);

print(arraysEqual(sequence.with([], 42), [42, 2, 3]), true);

print(arraysEqual(sequence.with("2", 42), [1, 2, 42]), true);


print(arraysEqual(sequence.with("monkeys", 42), [42, 2, 3]), true);
print(arraysEqual(sequence.with(undefined, 42), [42, 2, 3]), true);
print(arraysEqual(sequence.with(function() {}, 42), [42, 2, 3]), true);

print(() => sequence.with(3, 42), RangeError);
print(() => sequence.with(5, 42), RangeError);
print(() => sequence.with(-10, 42), RangeError);
print(() => sequence.with(Infinity, 42), RangeError);

