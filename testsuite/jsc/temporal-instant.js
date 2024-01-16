

function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error(`expected ${expected} but got ${actual}`);
}

function shouldNotBe(actual, expected) {
    if (actual === expected)
        throw new Error(`expected a value to be different from ${expected}`);
}

function shouldThrow(func, errorType, message) {
    let error;
    try {
        func();
    } catch (e) {
        error = e;
    }

    if (!(error instanceof errorType))
        throw new Error(`Expected ${errorType.name}!`);
    if (message !== undefined) {
        if (Object.prototype.toString.call(message) === '[object RegExp]') {
            if (!message.test(String(error)))
                throw new Error(`expected '${String(error)}' to match ${message}!`);
        } else {
            shouldBe(String(error), message);
        }
    }
}


{
    const instants = [
        new Temporal.Instant(0n),
        Temporal.Instant.fromEpochSeconds(0),
        Temporal.Instant.fromEpochMilliseconds(0),
        Temporal.Instant.fromEpochMicroseconds(0n),
        Temporal.Instant.fromEpochNanoseconds(0n),
        Temporal.Instant.from('1970-01-01T00:00:00Z'),
    ];
    instants.forEach((instant) => {
        shouldBe(instant.epochSeconds, 0);
        shouldBe(instant.epochMilliseconds, 0);
        shouldBe(instant.epochMicroseconds, 0n);
        shouldBe(instant.epochNanoseconds, 0n);
        shouldBe(instant.toString(), '1970-01-01T00:00:00Z');
        shouldBe(instant.toJSON(), '1970-01-01T00:00:00Z');
    });
}


{
    const instants = [
        new Temporal.Instant(1_000_000_000_000_000_000n),
        Temporal.Instant.fromEpochSeconds(1_000_000_000),
        Temporal.Instant.fromEpochMilliseconds(1_000_000_000_000),
        Temporal.Instant.fromEpochMicroseconds(1_000_000_000_000_000n),
        Temporal.Instant.fromEpochNanoseconds(1_000_000_000_000_000_000n),
        Temporal.Instant.from('2001-09-09T01:46:40Z'),
    ];
    instants.forEach((instant) => {
        shouldBe(instant.epochSeconds, 1_000_000_000);
        shouldBe(instant.epochMilliseconds, 1_000_000_000_000);
        shouldBe(instant.epochMicroseconds, 1_000_000_000_000_000n);
        shouldBe(instant.epochNanoseconds, 1_000_000_000_000_000_000n);
        shouldBe(instant.toString(), '2001-09-09T01:46:40Z');
        shouldBe(instant.toJSON(), '2001-09-09T01:46:40Z');
    });
}


{
    const instants = [
        new Temporal.Instant(-1_000_000_000_000_000_000n),
        Temporal.Instant.fromEpochSeconds(-1_000_000_000),
        Temporal.Instant.fromEpochMilliseconds(-1_000_000_000_000),
        Temporal.Instant.fromEpochMicroseconds(-1_000_000_000_000_000n),
        Temporal.Instant.fromEpochNanoseconds(-1_000_000_000_000_000_000n),
        Temporal.Instant.from('1938-04-24T22:13:20Z'),
    ];
    instants.forEach((instant) => {
        shouldBe(instant.epochSeconds, -1_000_000_000);
        shouldBe(instant.epochMilliseconds, -1_000_000_000_000);
        shouldBe(instant.epochMicroseconds, -1_000_000_000_000_000n);
        shouldBe(instant.epochNanoseconds, -1_000_000_000_000_000_000n);
        shouldBe(instant.toString(), '1938-04-24T22:13:20Z');
        shouldBe(instant.toJSON(), '1938-04-24T22:13:20Z');
    });
}


{
    const instants = [
        new Temporal.Instant(9223372036854775807n),
        Temporal.Instant.fromEpochNanoseconds(9223372036854775807n),
        Temporal.Instant.from('2262-04-11T23:47:16.854775807Z'),
    ];
    instants.forEach((instant) => {
        shouldBe(instant.epochSeconds, 9223372036);
        shouldBe(instant.epochMilliseconds, 9223372036854);
        shouldBe(instant.epochMicroseconds, 9223372036854775n);
        shouldBe(instant.epochNanoseconds, 9223372036854775807n);
        shouldBe(instant.toString(), '2262-04-11T23:47:16.854775807Z');
        shouldBe(instant.toJSON(), '2262-04-11T23:47:16.854775807Z');
    });
}


{
    const instants = [
        new Temporal.Instant(-9223372036854775808n),
        Temporal.Instant.fromEpochNanoseconds(-9223372036854775808n),
        Temporal.Instant.from('1677-09-21T00:12:43.145224192Z'),
    ];
    instants.forEach((instant) => {
        shouldBe(instant.epochSeconds, -9223372036);
        shouldBe(instant.epochMilliseconds, -9223372036854);
        shouldBe(instant.epochMicroseconds, -9223372036854775n);
        shouldBe(instant.epochNanoseconds, -9223372036854775808n);
        shouldBe(instant.toString(), '1677-09-21T00:12:43.145224192Z');
        shouldBe(instant.toJSON(), '1677-09-21T00:12:43.145224192Z');
    });
}


{
    const instants = [
        new Temporal.Instant(86400_0000_0000_000_000_000n),
        Temporal.Instant.fromEpochSeconds(86400_0000_0000),
        Temporal.Instant.fromEpochMilliseconds(86400_0000_0000_000),
        Temporal.Instant.fromEpochMicroseconds(86400_0000_0000_000_000n),
        Temporal.Instant.fromEpochNanoseconds(86400_0000_0000_000_000_000n),
        Temporal.Instant.from('+275760-09-13T00:00:00Z'),
    ];
    instants.forEach((instant) => {
        shouldBe(instant.epochSeconds, 86400_0000_0000);
        shouldBe(instant.epochMilliseconds, 86400_0000_0000_000);
        shouldBe(instant.epochMicroseconds, 86400_0000_0000_000_000n);
        shouldBe(instant.epochNanoseconds, 86400_0000_0000_000_000_000n);
        shouldBe(instant.toString(), '+275760-09-13T00:00:00Z');
        shouldBe(instant.toJSON(), '+275760-09-13T00:00:00Z');
    });
}


{
    const instants = [
        new Temporal.Instant(-86400_0000_0000_000_000_000n),
        Temporal.Instant.fromEpochSeconds(-86400_0000_0000),
        Temporal.Instant.fromEpochMilliseconds(-86400_0000_0000_000),
        Temporal.Instant.fromEpochMicroseconds(-86400_0000_0000_000_000n),
        Temporal.Instant.fromEpochNanoseconds(-86400_0000_0000_000_000_000n),
        Temporal.Instant.from('-271821-04-20T00:00:00Z'),
    ];
    instants.forEach((instant) => {
        shouldBe(instant.epochSeconds, -86400_0000_0000);
        shouldBe(instant.epochMilliseconds, -86400_0000_0000_000);
        shouldBe(instant.epochMicroseconds, -86400_0000_0000_000_000n);
        shouldBe(instant.epochNanoseconds, -86400_0000_0000_000_000_000n);
        shouldBe(instant.toString(), '-271821-04-20T00:00:00Z');
        shouldBe(instant.toJSON(), '-271821-04-20T00:00:00Z');
    });
}

[
    
    [86400_0000_0000_000_000_001n, /\b8640000000000000000001\b/],
    
    [-86400_0000_0000_000_000_001n, /-8640000000000000000001\b/],
    
    [1n << 128n, /\b340282366920938463463374607431768211456\b/],
    
    [1n << 129n, /\b680564733841876926926749214863536422912\b/],
    
    [-1n << 129n, /-680564733841876926926749214863536422912\b/],
    
    [BigInt('9'.repeat(1000))],
].forEach(([ns, messageMatch = undefined]) => {
    shouldThrow(() => new Temporal.Instant(ns), RangeError, messageMatch);
    shouldThrow(() => Temporal.Instant.fromEpochNanoseconds(ns), RangeError, messageMatch);
});

[
    
    [86400_0000_0000_000_001n, /\b8640000000000000001\b/],
    
    [-86400_0000_0000_000_001n, /-8640000000000000001\b/],
    
    [1n << 64n, /\b18446744073709551616\b/],
    
    [1n << 128n, /\b340282366920938463463374607431768211456\b/],
    
    [1n << 129n, /\b680564733841876926926749214863536422912\b/],
    
    [-1n << 129n, /-680564733841876926926749214863536422912\b/],
    
    [BigInt('9'.repeat(1000))],
].forEach(([µs, messageMatch = undefined]) => {
    shouldThrow(() => Temporal.Instant.fromEpochMicroseconds(µs), RangeError, messageMatch);
});


shouldBe(new Temporal.Instant('0').epochNanoseconds, 0n);

shouldThrow(() => new Temporal.Instant(0), TypeError);

shouldThrow(() => new Temporal.Instant('abc123'), SyntaxError);


{
    const inst = Temporal.Instant.from('2020-02-12T11:42+01:00[Europe/Amsterdam]');
    shouldNotBe(Temporal.Instant.from(inst), inst);
}



{
    const i1 = Temporal.Instant.from('1976-11-18T15:23Z');
    const i2 = Temporal.Instant.from('1976-11-18T15:23:30Z');
    const i3 = Temporal.Instant.from('1976-11-18T15:23:30.1234Z');

    
    shouldBe(i1.toString(), '1976-11-18T15:23:00Z');
    shouldBe(i2.toString(), '1976-11-18T15:23:30Z');
    shouldBe(i3.toString(), '1976-11-18T15:23:30.1234Z');

    
    [i1, i2, i3].forEach((i) => shouldBe(i.toString({ smallestUnit: 'minute' }), '1976-11-18T15:23Z'));

    
    shouldBe(i3.round('minute').toString(), '1976-11-18T15:24:00Z');
    shouldBe(i3.round({ smallestUnit: 'minute' }).toString(), '1976-11-18T15:24:00Z');

    
    shouldBe(i3.toString({ smallestUnit: 'second' }), i3.toString({ fractionalSecondDigits: 0 }));
    shouldBe(i3.toString({ smallestUnit: 'millisecond' }), i3.toString({ fractionalSecondDigits: 3 }));
    shouldBe(i3.toString({ smallestUnit: 'microsecond' }), i3.toString({ fractionalSecondDigits: 6 }));
    shouldBe(i3.toString({ smallestUnit: 'nanosecond' }), i3.toString({ fractionalSecondDigits: 9 }));

    
    {
        const options = { fractionalSecondDigits: 2 };
        shouldBe(i1.toString(options), '1976-11-18T15:23:00.00Z');
        shouldBe(i2.toString(options), '1976-11-18T15:23:30.00Z');
        shouldBe(i3.toString(options), '1976-11-18T15:23:30.12Z');
    }
    
    {
        const options = { fractionalSecondDigits: 7 };
        shouldBe(i1.toString(options), '1976-11-18T15:23:00.0000000Z');
        shouldBe(i2.toString(options), '1976-11-18T15:23:30.0000000Z');
        shouldBe(i3.toString(options), '1976-11-18T15:23:30.1234000Z');
    }

    
    shouldBe(i2.toString({ smallestUnit: 'minute', roundingMode: 'halfExpand' }), '1976-11-18T15:24Z');
    shouldBe(i3.toString({ fractionalSecondDigits: 3, roundingMode: 'halfExpand' }), '1976-11-18T15:23:30.123Z');
    
    shouldBe(i2.toString({ smallestUnit: 'minute', roundingMode: 'ceil' }), '1976-11-18T15:24Z');
    shouldBe(i3.toString({ fractionalSecondDigits: 3, roundingMode: 'ceil' }), '1976-11-18T15:23:30.124Z');
    
    ['floor', 'trunc'].forEach((roundingMode) => {
        shouldBe(i2.toString({ smallestUnit: 'minute', roundingMode }), '1976-11-18T15:23Z');
        shouldBe(i3.toString({ fractionalSecondDigits: 3, roundingMode }), '1976-11-18T15:23:30.123Z');
    });

    {
        
        const i4 = Temporal.Instant.from('-000099-12-15T12:00:00.5Z');
        shouldBe(i4.toString({ smallestUnit: 'second', roundingMode: 'floor' }), '-000099-12-15T12:00:00Z');

        
        const i5 = Temporal.Instant.from('1999-12-31T23:59:59.999999999Z');
        shouldBe(i5.toString({ fractionalSecondDigits: 8, roundingMode: 'halfExpand' }), '2000-01-01T00:00:00.00000000Z');
    }
}


shouldBe(`${Temporal.Instant.from('2016-12-31T23:59:60Z')}`, '2016-12-31T23:59:59Z');

shouldBe(`${Temporal.Instant.from('1976-11-18 15:23Z')}`, '1976-11-18T15:23:00Z');
shouldBe(`${Temporal.Instant.from('1976-11-18t15:23Z')}`, '1976-11-18T15:23:00Z');

shouldBe(`${Temporal.Instant.from('1976-11-18T15:23z')}`, '1976-11-18T15:23:00Z');

shouldBe(`${Temporal.Instant.from('1976-11-18T15:23:30.1Z')}`, '1976-11-18T15:23:30.1Z');
shouldBe(`${Temporal.Instant.from('1976-11-18T15:23:30.12Z')}`, '1976-11-18T15:23:30.12Z');
shouldBe(`${Temporal.Instant.from('1976-11-18T15:23:30.123Z')}`, '1976-11-18T15:23:30.123Z');
shouldBe(`${Temporal.Instant.from('1976-11-18T15:23:30.1234Z')}`, '1976-11-18T15:23:30.1234Z');
shouldBe(`${Temporal.Instant.from('1976-11-18T15:23:30.12345Z')}`, '1976-11-18T15:23:30.12345Z');
shouldBe(`${Temporal.Instant.from('1976-11-18T15:23:30.123456Z')}`, '1976-11-18T15:23:30.123456Z');
shouldBe(`${Temporal.Instant.from('1976-11-18T15:23:30.1234567Z')}`, '1976-11-18T15:23:30.1234567Z');
shouldBe(`${Temporal.Instant.from('1976-11-18T15:23:30.12345678Z')}`, '1976-11-18T15:23:30.12345678Z');
shouldBe(`${Temporal.Instant.from('1976-11-18T15:23:30.123456789Z')}`, '1976-11-18T15:23:30.123456789Z');

shouldBe(`${Temporal.Instant.from('1976-11-18T15:23:30,12Z')}`, '1976-11-18T15:23:30.12Z');

shouldBe(`${Temporal.Instant.from('1976-11-18T15:23:30.12\u221202:00')}`, '1976-11-18T17:23:30.12Z');
shouldBe(`${Temporal.Instant.from('\u2212009999-11-18T15:23:30.12Z')}`, '-009999-11-18T15:23:30.12Z');

shouldBe(`${Temporal.Instant.from('19761118T15:23:30.1+00:00')}`, '1976-11-18T15:23:30.1Z');
shouldBe(`${Temporal.Instant.from('1976-11-18T152330.1+00:00')}`, '1976-11-18T15:23:30.1Z');
shouldBe(`${Temporal.Instant.from('1976-11-18T15:23:30.1+0000')}`, '1976-11-18T15:23:30.1Z');
shouldBe(`${Temporal.Instant.from('1976-11-18T152330.1+0000')}`, '1976-11-18T15:23:30.1Z');
shouldBe(`${Temporal.Instant.from('19761118T15:23:30.1+0000')}`, '1976-11-18T15:23:30.1Z');
shouldBe(`${Temporal.Instant.from('19761118T152330.1+00:00')}`, '1976-11-18T15:23:30.1Z');
shouldBe(`${Temporal.Instant.from('+0019761118T15:23:30.1+00:00')}`, '1976-11-18T15:23:30.1Z');
shouldBe(`${Temporal.Instant.from('+001976-11-18T152330.1+00:00')}`, '1976-11-18T15:23:30.1Z');
shouldBe(`${Temporal.Instant.from('+001976-11-18T15:23:30.1+0000')}`, '1976-11-18T15:23:30.1Z');
shouldBe(`${Temporal.Instant.from('+001976-11-18T152330.1+0000')}`, '1976-11-18T15:23:30.1Z');
shouldBe(`${Temporal.Instant.from('+0019761118T15:23:30.1+0000')}`, '1976-11-18T15:23:30.1Z');
shouldBe(`${Temporal.Instant.from('+0019761118T152330.1+00:00')}`, '1976-11-18T15:23:30.1Z');
shouldBe(`${Temporal.Instant.from('+0019761118T152330.1+0000')}`, '1976-11-18T15:23:30.1Z');

shouldBe(`${Temporal.Instant.from('1976-11-18T15:23:30+00')}`, '1976-11-18T15:23:30Z');
shouldBe(`${Temporal.Instant.from('1976-11-18T15Z')}`, '1976-11-18T15:00:00Z');

shouldBe(`${Temporal.Instant.from('1976-11-18T15:23:30.123456789Z[u-ca=discord]')}`, '1976-11-18T15:23:30.123456789Z');

shouldThrow(() => Temporal.Instant.from('1976-11-18T15:23:30.123456789Zjunk'), RangeError);


const epoch = new Temporal.Instant(0n);
const minValue = new Temporal.Instant(-86400_0000_0000_000_000_000n);
const maxValue = new Temporal.Instant(86400_0000_0000_000_000_000n);



{
    shouldBe(epoch.add({ hours: 1 }).epochNanoseconds, 3600_000_000_000n);
    shouldBe(epoch.add({ hours: -1 }).epochNanoseconds, -3600_000_000_000n);
    shouldBe(epoch.add({ minutes: 1 }).epochNanoseconds, 60_000_000_000n);
    shouldBe(epoch.add({ minutes: -1 }).epochNanoseconds, -60_000_000_000n);
    shouldBe(epoch.add({ seconds: 1 }).epochNanoseconds, 1_000_000_000n);
    shouldBe(epoch.add({ seconds: -1 }).epochNanoseconds, -1_000_000_000n);
    shouldBe(epoch.add({ milliseconds: 1 }).epochNanoseconds, 1_000_000n);
    shouldBe(epoch.add({ milliseconds: -1 }).epochNanoseconds, -1_000_000n);
    shouldBe(epoch.add({ microseconds: 1 }).epochNanoseconds, 1_000n);
    shouldBe(epoch.add({ microseconds: -1 }).epochNanoseconds, -1_000n);
    shouldBe(epoch.add({ nanoseconds: 1 }).epochNanoseconds, 1n);
    shouldBe(epoch.add({ nanoseconds: -1 }).epochNanoseconds, -1n);
}

{
    
    shouldBe(minValue.add({ hours: 48_0000_0000 }).epochNanoseconds, maxValue.epochNanoseconds);
    shouldBe(maxValue.add({ hours: -48_0000_0000 }).epochNanoseconds, minValue.epochNanoseconds);
    shouldBe(minValue.add({ minutes: 2880_0000_0000 }).epochNanoseconds, maxValue.epochNanoseconds);
    shouldBe(maxValue.add({ minutes: -2880_0000_0000 }).epochNanoseconds, minValue.epochNanoseconds);
    shouldBe(minValue.add({ seconds: 172800_0000_0000 }).epochNanoseconds, maxValue.epochNanoseconds);
    shouldBe(maxValue.add({ seconds: -172800_0000_0000 }).epochNanoseconds, minValue.epochNanoseconds);
    
    
    
    shouldBe(minValue.add({ milliseconds: 172800_0000_0000_000 }).epochNanoseconds, maxValue.epochNanoseconds);
    shouldBe(maxValue.add({ milliseconds: -172800_0000_0000_000 }).epochNanoseconds, minValue.epochNanoseconds);
    shouldBe(minValue.add({ microseconds: 172800_0000_0000_000_000 }).epochNanoseconds, maxValue.epochNanoseconds);
    shouldBe(maxValue.add({ microseconds: -172800_0000_0000_000_000 }).epochNanoseconds, minValue.epochNanoseconds);
    shouldBe(minValue.add({ nanoseconds: 172800_0000_0000_000_000_000 }).epochNanoseconds, maxValue.epochNanoseconds);
    shouldBe(maxValue.add({ nanoseconds: -172800_0000_0000_000_000_000 }).epochNanoseconds, minValue.epochNanoseconds);
}

{
    
    const exp64 = 2 ** 64;
    ['hours', 'minutes', 'seconds', 'milliseconds', 'microseconds'].forEach((unit) => {
        shouldThrow(() => epoch.add({ [unit]: exp64 }), RangeError);
        shouldThrow(() => epoch.add({ [unit]: -exp64 }), RangeError);
    });
    shouldBe(epoch.add({ nanoseconds: exp64 }).epochNanoseconds, 18446744073709551616n);
    shouldBe(epoch.add({ nanoseconds: -exp64 }).epochNanoseconds, -18446744073709551616n);
}

{
    
    ['hours', 'minutes', 'seconds', 'milliseconds', 'microseconds', 'nanoseconds'].forEach((unit) => {
        shouldThrow(() => epoch.add({ [unit]: Number.MAX_VALUE }), RangeError);
        shouldThrow(() => epoch.add({ [unit]: -Number.MAX_VALUE }), RangeError);
    });
}



{
    shouldBe(epoch.subtract({ hours: 1 }).epochNanoseconds, -3600_000_000_000n);
    shouldBe(epoch.subtract({ hours: -1 }).epochNanoseconds, 3600_000_000_000n);
    shouldBe(epoch.subtract({ minutes: 1 }).epochNanoseconds, -60_000_000_000n);
    shouldBe(epoch.subtract({ minutes: -1 }).epochNanoseconds, 60_000_000_000n);
    shouldBe(epoch.subtract({ seconds: 1 }).epochNanoseconds, -1_000_000_000n);
    shouldBe(epoch.subtract({ seconds: -1 }).epochNanoseconds, 1_000_000_000n);
    shouldBe(epoch.subtract({ milliseconds: 1 }).epochNanoseconds, -1_000_000n);
    shouldBe(epoch.subtract({ milliseconds: -1 }).epochNanoseconds, 1_000_000n);
    shouldBe(epoch.subtract({ microseconds: 1 }).epochNanoseconds, -1_000n);
    shouldBe(epoch.subtract({ microseconds: -1 }).epochNanoseconds, 1_000n);
    shouldBe(epoch.subtract({ nanoseconds: 1 }).epochNanoseconds, -1n);
    shouldBe(epoch.subtract({ nanoseconds: -1 }).epochNanoseconds, 1n);
}

{
    
    shouldBe(maxValue.subtract({ hours: 48_0000_0000 }).epochNanoseconds, minValue.epochNanoseconds);
    shouldBe(minValue.subtract({ hours: -48_0000_0000 }).epochNanoseconds, maxValue.epochNanoseconds);
    shouldBe(maxValue.subtract({ minutes: 2880_0000_0000 }).epochNanoseconds, minValue.epochNanoseconds);
    shouldBe(minValue.subtract({ minutes: -2880_0000_0000 }).epochNanoseconds, maxValue.epochNanoseconds);
    shouldBe(maxValue.subtract({ seconds: 172800_0000_0000 }).epochNanoseconds, minValue.epochNanoseconds);
    shouldBe(minValue.subtract({ seconds: -172800_0000_0000 }).epochNanoseconds, maxValue.epochNanoseconds);
    
    
    
    shouldBe(maxValue.subtract({ milliseconds: 172800_0000_0000_000 }).epochNanoseconds, minValue.epochNanoseconds);
    shouldBe(minValue.subtract({ milliseconds: -172800_0000_0000_000 }).epochNanoseconds, maxValue.epochNanoseconds);
    shouldBe(maxValue.subtract({ microseconds: 172800_0000_0000_000_000 }).epochNanoseconds, minValue.epochNanoseconds);
    shouldBe(minValue.subtract({ microseconds: -172800_0000_0000_000_000 }).epochNanoseconds, maxValue.epochNanoseconds);
    shouldBe(maxValue.subtract({ nanoseconds: 172800_0000_0000_000_000_000 }).epochNanoseconds, minValue.epochNanoseconds);
    shouldBe(minValue.subtract({ nanoseconds: -172800_0000_0000_000_000_000 }).epochNanoseconds, maxValue.epochNanoseconds);
}

{
    
    const exp64 = 2 ** 64;
    ['hours', 'minutes', 'seconds', 'milliseconds', 'microseconds'].forEach((unit) => {
        shouldThrow(() => epoch.subtract({ [unit]: exp64 }), RangeError);
        shouldThrow(() => epoch.subtract({ [unit]: -exp64 }), RangeError);
    });
    shouldBe(epoch.subtract({ nanoseconds: exp64 }).epochNanoseconds, -18446744073709551616n);
    shouldBe(epoch.subtract({ nanoseconds: -exp64 }).epochNanoseconds, 18446744073709551616n);
}

{
    
    ['hours', 'minutes', 'seconds', 'milliseconds', 'microseconds', 'nanoseconds'].forEach((unit) => {
        shouldThrow(() => epoch.subtract({ [unit]: Number.MAX_VALUE }), RangeError);
        shouldThrow(() => epoch.subtract({ [unit]: -Number.MAX_VALUE }), RangeError);
    });
}
