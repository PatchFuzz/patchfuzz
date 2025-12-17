const date = new Date("Wed Feb 15 2023 00:00:00 GMT+0100");
const localeString = date.toLocaleString("en-US");

print(-1, localeString.search('\u202f'));

print(/:\d\d:\d\d [AP]M$/, localeString);

const formatter = new Intl.DateTimeFormat('en', {timeStyle: "long"})
const formattedString = formatter.format(date)

print(-1, formattedString.search('\u202f'));

print(/:\d\d:\d\d [AP]M$/, localeString);
