print("./resources/v8-mjsunit.js", "caller relative");

var lipsum = "lorem ipsum per se esse fugiendum. itaque aiunt hanc quasi "
    + "naturalem atque insitam in animis nostris inesse notionem, ut "
    + "alterum esse appetendum, alterum aspernandum sentiamus. Alii autem,"
    + " quibus ego assentior, cum a philosophis compluribus permulta "
    + "dicantur, cur nec voluptas in bonis sit numeranda nec in malis "
    + "dolor, non existimant oportere nimium nos causae confidere, sed et"
    + " argumentandum et accurate disserendum et rationibus conquisitis de"
    + " voluptate et dolore disputandum putant.\n"
    + "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem "
    + "accusantium doloremque laudantium, totam rem aperiam eaque ipsa,"
    + "quae ab illo inventore veritatis et quasi architecto beatae vitae "
    + "dicta sunt, explicabo. nemo enim ipsam voluptatem, quia voluptas"
    + "sit, aspernatur aut odit aut fugit, sed quia consequuntur magni"
    + " dolores eos, qui ratione voluptatem sequi nesciunt, neque porro"
    + " quisquam est, qui dolorem ipsum, quia dolor sit, amet, "
    + "consectetur, adipisci velit, sed quia non numquam eius modi"
    + " tempora incidunt, ut labore et dolore magnam aliquam quaerat "
    + "voluptatem. ut enim ad minima veniam, quis nostrum exercitationem "
    + "ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi "
    + "consequatur? quis autem vel eum iure reprehenderit, qui in ea "
    + "voluptate velit esse, quam nihil molestiae consequatur, vel illum, "
    + "qui dolorem eum fugiat, quo voluptas nulla pariatur?\n";

print(893, lipsum.indexOf("lorem ipsum, quia dolor sit, amet"),
        "Lipsum");

for(var i = 0; i < lipsum.length; i += 3) {
  for(var len = 1; i + len < lipsum.length; len += 7) {
    var substring = lipsum.substring(i, i + len);
    var index = -1;
    do {
      index = lipsum.indexOf(substring, index + 1);
      print(index != -1,
                 "Lipsum substring " + i + ".." + (i + len-1) + " not found");
      print(lipsum.substring(index, index + len), substring,
          "Wrong lipsum substring found: " + i + ".." + (i + len - 1) + "/" +
              index + ".." + (index + len - 1));
    } while (index >= 0 && index < i);
    print(i, index, "Lipsum match at " + i + ".." + (i + len - 1));
  }
}
