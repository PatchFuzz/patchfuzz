writeLine("--- Standard Time (ST) conversions ---");
writeLine("");

writeLine("January 31, 2006 - UTC to local - ST");
var t = new Date(Date.UTC(2006, 0, 31, 18, 0));
writeLine(t.toUTCString());
writeLine(t.toLocaleString());
writeLine("");

writeLine("January 31, 2006 - local to UTC - ST");
var t = new Date(Date.parse("January 31, 2006 11:00 AM"));
writeLine(t.toLocaleString());
writeLine(t.toUTCString());
writeLine("");

writeLine("January 31, 2007 - UTC to local - ST");
var t = new Date(Date.UTC(2007, 0, 31, 18, 0));
writeLine(t.toUTCString());
writeLine(t.toLocaleString());
writeLine("");

writeLine("January 31, 2007 - local to UTC - ST");
var t = new Date(Date.parse("January 31, 2007 11:00 AM"));
writeLine(t.toLocaleString());
writeLine(t.toUTCString());
writeLine("");



writeLine("--- Daylight Time (DT) conversions ---");
writeLine("");

writeLine("July 15, 2006 - UTC to local - DT");
var t = new Date(Date.UTC(2006, 6, 31, 18, 0));
writeLine(t.toUTCString());
writeLine(t.toLocaleString());
writeLine("");

writeLine("July 15, 2006 - local to UTC - DT");
var t = new Date(Date.parse("July 15, 2006 11:00 AM"));
writeLine(t.toLocaleString());
writeLine(t.toUTCString());
writeLine("");

writeLine("July 15, 2007 - UTC to local - DT");
var t = new Date(Date.UTC(2007, 6, 31, 18, 0));
writeLine(t.toUTCString());
writeLine(t.toLocaleString());
writeLine("");

writeLine("July 15, 2007 - local to UTC - DT");
var t = new Date(Date.parse("July 15, 2007 11:00 AM"));
writeLine(t.toLocaleString());
writeLine(t.toUTCString());
writeLine("");



writeLine("--- Boundary conversions between old and new rules ---");
writeLine("");







writeLine("March 31, 2006 - UTC to local - ST in 2006 rules");
var t = new Date(Date.UTC(2006, 2, 31, 18, 0));
writeLine(t.toUTCString());
writeLine(t.toLocaleString());
writeLine("");

writeLine("March 31, 2006 - local to UTC - ST in 2006 rules");
var t = new Date(Date.parse("March 31, 2006 11:00 AM"));
writeLine(t.toLocaleString());
writeLine(t.toUTCString());
writeLine("");

writeLine("March 31, 2007 - UTC to local - DT in 2007 rules");
var t = new Date(Date.UTC(2007, 2, 31, 18, 0));
writeLine(t.toUTCString());
writeLine(t.toLocaleString());
writeLine("");

writeLine("March 31, 2007 - local to UTC - DT in 2007 rules");
var t = new Date(Date.parse("March 31, 2007 11:00 AM"));
writeLine(t.toLocaleString());
writeLine(t.toUTCString());
writeLine("");

writeLine("October 31, 2006 - UTC to local - ST in 2006 rules");
var t = new Date(Date.UTC(2006, 9, 31, 18, 0));
writeLine(t.toUTCString());
writeLine(t.toLocaleString());
writeLine("");

writeLine("October 31, 2006 - local to UTC - ST in 2006 rules");
var t = new Date(Date.parse("October 31, 2006 11:00 AM"));
writeLine(t.toLocaleString());
writeLine(t.toUTCString());
writeLine("");

writeLine("October 31, 2007 - UTC to local - DT in 2007 rules");
var t = new Date(Date.UTC(2007, 9, 31, 18, 0));
writeLine(t.toUTCString());
writeLine(t.toLocaleString());
writeLine("");

writeLine("October 31, 2007 - local to UTC - DT in 2007 rules");
var t = new Date(Date.parse("October 31, 2007 11:00 AM"));
writeLine(t.toLocaleString());
writeLine(t.toUTCString());
writeLine("");



writeLine("--- Boundary conversions when transitioning into DT ---");
writeLine("");

writeLine("March 11, 2007 2:00 AM transition - UTC to local");
var t = new Date(Date.UTC(2007, 2, 11, 9, 30));
writeLine(t.toUTCString());
writeLine(t.toLocaleString());
var t = new Date(Date.UTC(2007, 2, 11, 10, 30));
writeLine(t.toUTCString());
writeLine(t.toLocaleString());
var t = new Date(Date.UTC(2007, 2, 11, 11, 30));
writeLine(t.toUTCString());
writeLine(t.toLocaleString());
writeLine("");

writeLine("March 11, 2007 2:00 AM transition - local to UTC");
var t = new Date(Date.parse("March 11, 2007 1:30 AM"));
writeLine(t.toLocaleString());
writeLine(t.toUTCString());
var t = new Date(Date.parse("March 11, 2007 2:30 AM"));
writeLine(t.toLocaleString());
writeLine(t.toUTCString());
var t = new Date(Date.parse("March 11, 2007 3:30 AM"));
writeLine(t.toLocaleString());
writeLine(t.toUTCString());
writeLine("");



writeLine("--- Boundary conversions when transitioning into ST ---");
writeLine("");

writeLine("November 4, 2007 2:00 AM transition - UTC to local");
var t = new Date(Date.UTC(2007, 10, 4, 8, 30));
writeLine(t.toUTCString());
writeLine(t.toLocaleString());
var t = new Date(Date.UTC(2007, 10, 4, 9, 30));
writeLine(t.toUTCString());
writeLine(t.toLocaleString());
var t = new Date(Date.UTC(2007, 10, 4, 10, 30));
writeLine(t.toUTCString());
writeLine(t.toLocaleString());
writeLine("");

writeLine("November 4, 2007 2:00 AM transition - local to UTC");
var t = new Date(Date.parse("November 4, 2007 12:30 AM"));
writeLine(t.toLocaleString());
writeLine(t.toUTCString());
var t = new Date(Date.parse("November 4, 2007 1:30 AM"));
writeLine(t.toLocaleString());
writeLine(t.toUTCString());
var t = new Date(Date.parse("November 4, 2007 2:30 AM"));
writeLine(t.toLocaleString());
writeLine(t.toUTCString());
writeLine("");




function writeLine(str)
{
    print("" + str);
}
