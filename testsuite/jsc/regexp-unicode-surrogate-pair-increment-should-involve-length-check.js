


function testRegExpMatch(re, str)
{
    for (let i = 0; i < 100; ++i) {
        let match = re.exec(str);
        if (!match || match[0] != str) {
            print(match);
            throw "Expected " + re + " to match \"" + str + "\" but it didn't";
        }
    }
}

function testRegExpNotMatch(re, str)
{
    for (let i = 0; i < 100; ++i) {
        let match = re.exec(str);
        if (match) {
            print(match);
            throw "Expected " + re + " to match \"" + str + "\" but it didn't";
        }
    }
}

let testString = "\ud800\ud800\udc00";
let greedyRegExp = /([^x]+)[^]*\1([^])/u;

testRegExpNotMatch(greedyRegExp, testString);

let nonGreedyRegExp = /(.*[^x]+?)[^]*([^])/u;

testRegExpMatch(nonGreedyRegExp, testString);

let testString2 = "\ud800\ud800\udc00Test\udc00123";
let backtrackGreedyRegExp = /.*[\x20-\udffff].\w*.\d{3}/u;

testRegExpMatch(backtrackGreedyRegExp, testString2);

let nonGreedyRegExp2 = /(.*[^x]+?)[^]*([1])/u;

testRegExpNotMatch(nonGreedyRegExp2, testString);
