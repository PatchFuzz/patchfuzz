




﻿function deferredWithRegex() {
    return /[\uD800\uDC00\uFFFF]/.test("\uFFFF");
}

if (deferredWithRegex()) {
    WScript.Echo("Pass");
}
