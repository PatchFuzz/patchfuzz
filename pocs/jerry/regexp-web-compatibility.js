function test_match(re, input, expected)
{
  var result = re.exec(input);

  if (expected === null)
  {
    assert (result === null);
    return;
  }

  assert (result !== null);
  assert (result.length === expected.length);

  for (var idx = 0; idx < result.length; idx++)
  {
    assert (result[idx] === expected[idx]);
  }
}

test_match (new RegExp ("A{1,2}"), "B", null);
test_match (new RegExp ("A{1,2}"), "", null);
test_match (new RegExp ("A{1,2}"), "A", ["A"]);
test_match (new RegExp ("A{1,2}"), "AA", ["AA"]);
test_match (new RegExp ("A{1,2}"), "AAA", ["AA"]);

test_match (new RegExp ("A{1,}"), "B", null);
test_match (new RegExp ("A{1,}"), "GA", ["A"]);
test_match (new RegExp ("A{1,}"), "FAAAW", ["AAA"]);
test_match (new RegExp ("A{1,}"), "FAdAAW", ["A"]);



test_match (new RegExp ("A{1,2"), "A", null);
test_match (new RegExp ("A{1,2"), "AA", null);
test_match (new RegExp ("A{1,2"), "A{1,2", ["A{1,2"]);
test_match (new RegExp ("A{1,2"), "AA{1,2", ["A{1,2"]);

test_match (new RegExp ("A{1,"), "A", null);
test_match (new RegExp ("A{1,"), "AA", null);
test_match (new RegExp ("A{1,"), "A{1,", ["A{1,"]);
test_match (new RegExp ("A{1,"), "A{1,2", ["A{1,"]);
test_match (new RegExp ("A{1,"), "AA{1,2", ["A{1,"]);

test_match (new RegExp ("A{1"), "A", null);
test_match (new RegExp ("A{1"), "AA", null);
test_match (new RegExp ("A{1"), "A{1,", ["A{1"]);
test_match (new RegExp ("A{1"), "A{1,2", ["A{1"]);
test_match (new RegExp ("A{1"), "AA{1,2", ["A{1"]);

test_match (new RegExp ("A{"), "A", null);
test_match (new RegExp ("A{"), "AA", null);
test_match (new RegExp ("A{"), "A{,", ["A{"]);
test_match (new RegExp ("A{"), "A{1,", ["A{"]);
test_match (new RegExp ("A{"), "A{1,2", ["A{"]);
test_match (new RegExp ("A{"), "AA{1,2", ["A{"]);

test_match (new RegExp ("{"), "", null);
test_match (new RegExp ("{"), "AA", null);
test_match (new RegExp ("{"), "{,", ["{"]);
test_match (new RegExp ("{"), "{1,", ["{"]);
test_match (new RegExp ("{"), "{1,2", ["{"]);
test_match (new RegExp ("{"), "A{1,2", ["{"]);

test_match (new RegExp ("{{2,3}"), "", null);
test_match (new RegExp ("{{2,3}"), "AA", null);
test_match (new RegExp ("{{2,3}"), "{{,", ["{{"]);
test_match (new RegExp ("{{2,3}"), "{{{,", ["{{{"]);
test_match (new RegExp ("{{2,3}"), "{{{{,", ["{{{"]);

test_match (new RegExp ("{{2,3"), "{{{{,", null);
test_match (new RegExp ("{{2,3"), "{{2,3,", ["{{2,3"]);

test_match (/A{1,2/, "A", null);
test_match (/A{1,2/, "AA", null);
test_match (/A{1,2/, "A{1,2", ["A{1,2"]);
test_match (/A{1,2/, "AA{1,2", ["A{1,2"]);

test_match (/A{1,/, "A", null);
test_match (/A{1,/, "AA", null);
test_match (/A{1,/, "A{1,", ["A{1,"]);
test_match (/A{1,/, "A{1,2", ["A{1,"]);
test_match (/A{1,/, "AA{1,2", ["A{1,"]);

test_match (/A{1/, "A", null);
test_match (/A{1/, "AA", null);
test_match (/A{1/, "A{1,", ["A{1"]);
test_match (/A{1/, "A{1,2", ["A{1"]);
test_match (/A{1/, "AA{1,2", ["A{1"]);

test_match (/A{/, "A", null);
test_match (/A{/, "AA", null);
test_match (/A{/, "A{,", ["A{"]);
test_match (/A{/, "A{1,", ["A{"]);
test_match (/A{/, "A{1,2", ["A{"]);
test_match (/A{/, "AA{1,2", ["A{"]);

test_match (/{/, "", null);
test_match (/{/, "AA", null);
test_match (/{/, "{,", ["{"]);
test_match (/{/, "{1,", ["{"]);
test_match (/{/, "{1,2", ["{"]);
test_match (/{/, "A{1,2", ["{"]);

test_match (/{{2,3}/, "", null);
test_match (/{{2,3}/, "AA", null);
test_match (/{{2,3}/, "{{,", ["{{"]);
test_match (/{{2,3}/, "{{{,", ["{{{"]);
test_match (/{{2,3}/, "{{{{,", ["{{{"]);

test_match (/{{2,3/, "{{{{,", null);
test_match (/{{2,3/, "{{2,3,", ["{{2,3"]);

try {
    new RegExp ("[");
    assert (false);
} catch (ex) {
    assert (ex instanceof SyntaxError);
}

try {
    eval ("/[/");
    assert (false);
} catch (ex) {
    assert (ex instanceof SyntaxError);
}

try {
    new RegExp ("(");
    assert (false);
} catch (ex) {
    assert (ex instanceof SyntaxError);
}

try {
    eval ("/(/");
    assert (false);
} catch (ex) {
    assert (ex instanceof SyntaxError);
}

test_match (new RegExp("\s+{3,4"), "s+{3,4", null);
test_match (new RegExp("\s+{3,4"), "s{3,4", ["s{3,4"]);
test_match (new RegExp("\s+{3,4"), "ss{3,4", ["ss{3,4"]);
test_match (new RegExp("\\s+{3,4"), "    {3,4", ["    {3,4"]);
test_match (new RegExp("\\s+{3,4"), "   d{3,4", null);

test_match (/s+{3,4/, "s+{3,4", null);
test_match (/s+{3,4/, "s{3,4", ["s{3,4"]);
test_match (/s+{3,4/, "ss{3,4", ["ss{3,4"]);
test_match (/\s+{3,4/, "    {3,4", ["    {3,4"]);
test_match (/\s+{3,4/, "   d{3,4", null);

try {
    new RegExp ("\s+{3,4}");
    assert (false);
} catch (ex) {
    assert (ex instanceof SyntaxError);
}

try {
    eval ("/\\s+{3,4}/");
    assert (false);
} catch (ex) {
    assert (ex instanceof SyntaxError);
}

try {
    new RegExp ("a{2,3}{2,3}");
    assert (false);
} catch (ex) {
    assert (ex instanceof SyntaxError);
}

try {
    eval ("/a{2,3}{2,3}/");
    assert (false);
} catch (ex) {
    assert (ex instanceof SyntaxError);
}
