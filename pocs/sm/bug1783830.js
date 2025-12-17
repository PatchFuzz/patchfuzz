print(/[^!]/u.exec('\u{1F4A9}')[0], "\u{1F4A9}");
print(/^[^!]/u.exec('\u{1F4A9}')[0], "\u{1F4A9}");
print(/[^!]$/u.exec('\u{1F4A9}')[0], "\u{1F4A9}");
print(/![^!]/u.exec('!\u{1F4A9}')[0], "!\u{1F4A9}");
print(/[^!]!/u.exec('\u{1F4A9}!')[0], "\u{1F4A9}!");
print(/![^!]/ui.exec('!\u{1F4A9}')[0], "!\u{1F4A9}");
print(/[^!]!/ui.exec('\u{1F4A9}!')[0], "\u{1F4A9}!");
