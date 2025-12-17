let obj = { ['\u{D83D}\u{DE0A}']: new Proxy([], {})};
print('{"\u{D83D}\u{DE0A}":[]}', JSON.stringify(obj));
