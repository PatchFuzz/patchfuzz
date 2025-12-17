var a = "internalized dummy";
a = createExternalizableString(
    'abcdefghijklmnopqrstuvqxy' +
    'z 🤓');
externalizeString(a);
print('b', a.substring(1).charAt(0));
