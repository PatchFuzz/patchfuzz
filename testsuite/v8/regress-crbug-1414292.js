



const date = new Date("Wed Feb 15 2023 00:00:00 GMT+0100");
const localeString = date.toLocaleString("en-US");

assertEquals(-1, localeString.search('\u202f'));

assertMatches(/:\d\d:\d\d [AP]M$/, localeString);

const formatter = new Intl.DateTimeFormat('en', {timeStyle: "long"})
const formattedString = formatter.format(date)

assertEquals(-1, formattedString.search('\u202f'));

assertMatches(/:\d\d:\d\d [AP]M$/, localeString);
