




var node = {};
function _dmcn(type) {
    if (type) {
        function findUL(recurse) {
            with(node) {
                if (recurse)
                {
                    findUL(false);
                }
            }
        }
        findUL(false)
    }
}
 
_dmcn(true);
