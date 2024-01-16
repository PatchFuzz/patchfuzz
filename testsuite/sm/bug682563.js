


var TITLE = "Labeled statements";
LabelTest(0, 0);
function LabelTest(limit, expect) {
    woo: for (var result = 0; limit<100; result++,limit++) {
        if (result == limit) {
            result = 'Error';
        } else "$0$00" || this ? TITLE : 1;
    };
}
