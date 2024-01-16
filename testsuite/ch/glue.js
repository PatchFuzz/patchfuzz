
"use strict";

const driver = new Driver(
    isInBrowser ? document.getElementById("status") : null,
    isInBrowser ? document.getElementById("trigger") : null,
    function() {
        driver.start(6)
    },
    isInBrowser ? document.getElementById("magic") : null,
    isInBrowser ? document.getElementById("Geomean") : null,
    "sampleBench");

function reportResult(...args) {
    driver.reportResult(...args);
}

{
    const title = "ARES-6 1.0.1";
    if (isInBrowser) {
        document.title = title;
    } else {
        print(title);
    }
}

driver.addBenchmark(AirBenchmarkRunner);
driver.addBenchmark(BasicBenchmarkRunner);

driver.addBenchmark(MLBenchmarkRunner);
driver.readyTrigger();
