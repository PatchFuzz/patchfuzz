function testDateGetTime() {
  var timeValues = [
    -1000,
    +1000,
    0,
    NaN,
  ];

  for (var i = 0; i < 250; ++i) {
    var t = timeValues[i & 3];
    var d = new Date(t);
    print(d.getTime(), t);
    print(d.valueOf(), t);
  }
}
testDateGetTime();

var dateValues = [
  
  [1970, 1-1, 1, 4],

  
  [2023, 12-1, 31, 0],

  
  [275760, 9-1, 13 - 1, 5],

  
  [-271821, 4-1, 20 + 1, 3],

  
  [NaN, NaN, NaN, NaN],
];

function testDateGetFullYear() {
  for (var i = 0; i < 250; ++i) {
    var [year, month, date] = dateValues[i % dateValues.length];

    
    var d = new Date(year, month, date);

    
    print(d.getFullYear(), year);

    
    print(d.getFullYear(), year);
  }
}
testDateGetFullYear();

function testDateGetMonth() {
  for (var i = 0; i < 250; ++i) {
    var [year, month, date] = dateValues[i % dateValues.length];

    
    var d = new Date(year, month, date);

    
    print(d.getMonth(), month);

    
    print(d.getMonth(), month);
  }
}
testDateGetMonth();

function testDateGetDate() {
  for (var i = 0; i < 250; ++i) {
    var [year, month, date] = dateValues[i % dateValues.length];

    
    var d = new Date(year, month, date);

    
    print(d.getDate(), date);

    
    print(d.getDate(), date);
  }
}
testDateGetDate();

function testDateGetDay() {
  for (var i = 0; i < 250; ++i) {
    var [year, month, date, day] = dateValues[i % dateValues.length];

    
    var d = new Date(year, month, date);

    
    print(d.getDay(), day);

    
    print(d.getDay(), day);
  }
}
testDateGetDay();

function testDateGetFullYearMonthDateDay() {
  for (var i = 0; i < 250; ++i) {
    var [year, month, date, day] = dateValues[i % dateValues.length];

    
    var d = new Date(year, month, date);

    
    print(d.getFullYear(), year);
    print(d.getMonth(), month);
    print(d.getDate(), date);
    print(d.getDay(), day);
  }
}
testDateGetFullYearMonthDateDay();

function testDateGetHours() {
  var timeValues = [
    0,
    12,
    23,
    NaN,
  ];

  for (var i = 0; i < 250; ++i) {
    var t = timeValues[i & 3];

    
    var d = new Date(2000, 0, 1, t);

    
    print(d.getHours(), t);

    
    print(d.getHours(), t);
  }
}
testDateGetHours();

function testDateGetMinutes() {
  var timeValues = [
    0,
    30,
    59,
    NaN,
  ];

  for (var i = 0; i < 250; ++i) {
    var t = timeValues[i & 3];

    
    var d = new Date(2000, 0, 1, 0, t);

    
    print(d.getMinutes(), t);

    
    print(d.getMinutes(), t);
  }
}
testDateGetMinutes();

function testDateGetSeconds() {
  var timeValues = [
    0,
    30,
    59,
    NaN,
  ];

  for (var i = 0; i < 250; ++i) {
    var t = timeValues[i & 3];

    
    var d = new Date(2000, 0, 1, 0, 0, t);

    
    print(d.getSeconds(), t);

    
    print(d.getSeconds(), t);
  }
}
testDateGetSeconds();
