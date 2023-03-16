# PocGetter
A script for extracting the latest security-related samples from  Webkit stress test set
# Usage
## JavascriptCore
cd WebKit<br>
git log --date=short --name-status --before=2023-3-16 --after=2023-1-1 . | python  D:\workspace\patchFuzz\main.py  D:\workspace\patchFuzz\zxw jsc D:\workspace\Webkit <br>

## V8
cd v8<br>
git log --date=short --name-status  | python ..\pocgetter\process_v8.py

## Spidermonkey
cd gecko-dev/js
git log --date=short --name-status --before=2023-3-1 --after=2019-1-1 . | python ../../pocgetter/process_sp.py