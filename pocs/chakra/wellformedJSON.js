print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "Broken surrogate pairs should be escaped during JSON.stringify",
        body: function () {
            print(JSON.stringify("\uD834"), '"\\ud834"',
              'JSON.stringify("\\uD834")');
            print(JSON.stringify("\uDF06"), '"\\udf06"',
              'JSON.stringify("\\uDF06")');

            print(JSON.stringify("\uD834\uDF06"), '"𝌆"',
              'JSON.stringify("\\uD834\\uDF06")');
            print(JSON.stringify("\uD834\uD834\uDF06\uD834"), '"\\ud834𝌆\\ud834"',
              'JSON.stringify("\\uD834\\uD834\\uDF06\\uD834")');
            print(JSON.stringify("\uD834\uD834\uDF06\uDF06"), '"\\ud834𝌆\\udf06"',
              'JSON.stringify("\\uD834\\uD834\\uDF06\\uDF06")');
            print(JSON.stringify("\uDF06\uD834\uDF06\uD834"), '"\\udf06𝌆\\ud834"',
              'JSON.stringify("\\uDF06\\uD834\\uDF06\\uD834")');
            print(JSON.stringify("\uDF06\uD834\uDF06\uDF06"), '"\\udf06𝌆\\udf06"',
              'JSON.stringify("\\uDF06\\uD834\\uDF06\\uDF06")');

            print(JSON.stringify("\uDF06\uD834"), '"\\udf06\\ud834"',
              'JSON.stringify("\\uDF06\\uD834")');
            print(JSON.stringify("\uD834\uDF06\uD834\uD834"), '"𝌆\\ud834\\ud834"',
              'JSON.stringify("\\uD834\\uDF06\\uD834\\uD834")');
            print(JSON.stringify("\uD834\uDF06\uD834\uDF06"), '"𝌆𝌆"',
              'JSON.stringify("\\uD834\\uDF06\\uD834\\uDF06")');
            print(JSON.stringify("\uDF06\uDF06\uD834\uD834"), '"\\udf06\\udf06\\ud834\\ud834"',
              'JSON.stringify("\\uDF06\\uDF06\\uD834\\uD834")');
            print(JSON.stringify("\uDF06\uDF06\uD834\uDF06"), '"\\udf06\\udf06𝌆"',
              'JSON.stringify("\\uDF06\\uDF06\\uD834\\uDF06")');
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
