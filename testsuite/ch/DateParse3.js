






runTest("2011-11-08 19:48:43:", "2011-11-08T19:48:43.000");  
runTest("2011-11-08 19:48:43:1", null);
runTest("2011-11-08 19:48:43:10", null);
runTest("2011-11-08 19:48:43:100", null);


runTest("2011-11-08 19:48:43.", "2011-11-08T19:48:43.000");
runTest("2011-11-08 19:48:43.1", "2011-11-08T19:48:43.100");
runTest("2011-11-08 19:48:43.1 ", "2011-11-08T19:48:43.100");
runTest("2011-11-08 19:48:43. 1", "2011-11-08T19:48:43.100");
runTest("2011-11-08 19:48:43.01", "2011-11-08T19:48:43.010");
runTest("2011-11-08 19:48:43.001", "2011-11-08T19:48:43.001");
runTest("2011-11-08 19:48:43.0001", "2011-11-08T19:48:43.000");
runTest("2011-11-08 19:48:43.00000001", null);  
runTest("2011-11-08 19:48:43.10", "2011-11-08T19:48:43.100");
runTest("2011-11-08 19:48:43.100", "2011-11-08T19:48:43.100");
runTest("2011-11-08 19:48:43.1000", "2011-11-08T19:48:43.100");
runTest("2011-11-08 19:48:43.12345", "2011-11-08T19:48:43.123");


runTest("2011-11-08+01:00", null);
runTest("2011-11-08-01:00", null);

function runTest(dateToTest, isoDate)
{
    if (isoDate === null) {
        if (isNaN(Date.parse(dateToTest))) {
            console.log("PASS");
        } else {
            console.log("Wrong date parsing result: Date.parse(\"" + dateToTest + "\") should return NaN");
        }        
    } else {
        if (Date.parse(dateToTest) === Date.parse(isoDate)) {
            console.log("PASS");            
        } else {
            console.log("Wrong date parsing result: Date.parse(\"" + dateToTest + "\") should equal Date.parse(\"" + isoDate + "\")");
        }
    }
}
