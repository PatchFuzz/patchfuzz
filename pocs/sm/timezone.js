let tzRE = /\(([^\)]+)\)/;

const SPOOFED_TZ_NAME = "Atlantic/Reykjavik";
const SPOOFED_TZ_GENERIC = "Greenwich Mean Time";


let original = new Date(0);
print(tzRE.exec(original.toString())[1], "Pacific Standard Time");

let originalDT = Intl.DateTimeFormat("en-US", {
  dateStyle: "full",
  timeStyle: "full",
});
print(originalDT.format(original).endsWith("Pacific Standard Time"), true);
print(originalDT.resolvedOptions().timeZone, "America/Los_Angeles");

let global = newGlobal({timeZone: SPOOFED_TZ_NAME});

let date = new global.Date();
print(tzRE.exec(date.toString())[1], SPOOFED_TZ_GENERIC);
print(tzRE.exec(date.toTimeString())[1], SPOOFED_TZ_GENERIC);
print(date.getFullYear(), date.getUTCFullYear());
print(date.getMonth(), date.getUTCMonth());
print(date.getDate(), date.getUTCDate());
print(date.getDay(), date.getUTCDay());
print(date.getHours(),date.getUTCHours());
print(date.getTimezoneOffset(), 0);

let dt = global.Intl.DateTimeFormat("en-US", {
  dateStyle: "full",
  timeStyle: "full",
});
print(dt.format(date).endsWith(SPOOFED_TZ_GENERIC), true);
print(dt.resolvedOptions().timeZone, SPOOFED_TZ_NAME);
