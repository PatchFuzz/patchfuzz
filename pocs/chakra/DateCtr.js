var RESULTS = [
  "1970-01-10T00:00:01.000Z",
  "1974-01-01T00:00:00.000Z",
  "1970-01-01T00:00:01.974Z",
  "1974-10-01T07:00:00.000Z",
  "1974-10-24T07:00:00.000Z",
  "1974-10-24T07:00:00.000Z",
  "1974-10-24T07:20:00.000Z",
  "1974-10-24T07:20:30.000Z",
  "1974-10-24T07:20:30.040Z",
  "1974-10-24T07:20:30.040Z",
  "-098001-12-01T08:00:00.000Z",
  "1999-12-01T08:00:00.000Z",
  "Invalid Date",
  "Invalid Date",
  "Invalid Date" ];


var index = 0;
function CHECK(str)
{
    if (str != RESULTS[index])
    {
        print(str + " != " + RESULTS[index]);
        print("FAIL");
        return false;
    }
    index++;
    return true;
}

function Test()
{
    var d;

    d = new Date("Thu Jan 10 05:30:01 UTC+0530 1970"); if (!CHECK(d.toISOString())) return;
    d = new Date("1974"); if (!CHECK(d.toISOString())) return;
    d = new Date(1974); if (!CHECK(d.toISOString())) return;
    d = new Date(1974, 9); if (!CHECK(d.toISOString())) return;
    d = new Date(1974, 9, 24); if (!CHECK(d.toISOString())) return;
    d = new Date(1974, 9, 24, 0); if (!CHECK(d.toISOString())) return;
    d = new Date(1974, 9, 24, 0, 20); if (!CHECK(d.toISOString())) return;
    d = new Date(1974, 9, 24, 0, 20, 30); if (!CHECK(d.toISOString())) return;
    d = new Date(1974, 9, 24, 0, 20, 30, 40); if (!CHECK(d.toISOString())) return;
    d = new Date(1974, 9, 24, 0, 20, 30, 40, 50); if (!CHECK(d.toISOString())) return;

    if ("zxw" == "win32") {
        d = new Date(2000, -1200001); if (!CHECK(d.toISOString())) return; 
    } else {
        index++; 
    }

    d = new Date(2000, -1); if (!CHECK(d.toISOString())) return;  
    d = new Date("", 1e81); if (!CHECK(d + "")) return; 
    d = new Date(); d.setSeconds(Number.MAX_VALUE); if (!CHECK(d + "")) return;  
    d = new Date(); d.setSeconds(-Number.MAX_VALUE); if (!CHECK(d + "")) return; 

    
    d = new Date(-0);
    if (!Object.is(d.getTime(), 0)) throw new Error("Expected getTime() to return +0");

    print("PASS");
}

Test();
