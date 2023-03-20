# PocGetter
A script for extracting the latest security-related samples from  Webkit/V8/ChakraCore/SpiderMonkey/JerryScript stress test set
# Usage
## JavascriptCore
cd WebKit<br>
git log --date=short --name-status --before=2019-1-1 --after=2023-1-1 . | python  D:\workspace\patchFuzz\main.py  D:\workspace\patchFuzz\zxw jsc D:\workspace\Webkit <br>

## V8
cd v8<br>
git log --date=short --name-status --before=2019-1-1 --after=2023-1-1 . | python  D:\workspace\patchFuzz\main.py  D:\workspace\patchFuzz\zxw v8 D:\workspace\v8\v8

## Spidermonkey
cd gecko-dev/js
git log --date=short --name-status --before=2019-1-1 --after=2023-1-1 . | python  D:\workspace\patchFuzz\main.py  D:\workspace\patchFuzz\zxw sp D:\workspace\gecko-dev\

## ChaKraCore
cd ChaKraCore
git log --date=short --name-status --before=2019-1-1 --after=2023-1-1 . | python  D:\workspace\patchFuzz\main.py  D:\workspace\patchFuzz\zxw ch D:\workspace\ChaKraCore\

## jerryscript
cd jerryscript
git log --date=short --name-status --before=2019-1-1 --after=2023-1-1 . | python  D:\workspace\patchFuzz\main.py  D:\workspace\patchFuzz\zxw je D:\workspace\jerryscript\
