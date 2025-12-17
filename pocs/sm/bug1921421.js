try {
  new RegExp("(?--");
} catch (e) {
  print(e.message, "multiple dashes in flag group");
}
