













try {
  eval(`for (let i in {
            id_0: 1
        })

        (function() {
                i
        `);
  assert (false);
} catch (e) {
  assert (e instanceof SyntaxError);
}
