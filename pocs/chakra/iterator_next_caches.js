print("..\\UnitTestFramework\\UnitTestFramework.js");

const iter = {
	[Symbol.iterator]() {
		return {
			i : 0,
			next() {
				this.next = function () { throw new Error("next should be cached so this should not be called")}
				return {
					value : this.i++,
					done : this.i > 3
				}
			}
		}
	}
}


var tests = [
    {
		name : "for...of cache's next method",
		body : function () {
			let i = 0;
			for (const bar of iter)
			{
				++i;
			}
			print(3, i, "Loop should run 3 times");
		}
	},
	{
		name : "yield* cache's next method",
		body : function () {
			function* genFun() { yield * iter; }
			const gen = genFun();
			print(0, gen.next().value);
			print(1, gen.next().value);
			print(2, gen.next().value);
		}
	},
	{
		name : "Spread operator cache's next method",
		body : function () {
			print([0, 1, 2], [...iter], )
		}
	},
	{
		name : "Destructuring cache's next method",
		body : function () {
			const [a, b, c] = iter;
			print(0, a);
			print(1, b);
			print(2, c);
		}
	}
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
	verbose : WScript.Arguments[0] != "summary"
});
