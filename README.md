# PocGetter
A script for extracting the latest security-related samples from  Webkit stress test set
# Usage
## JavascriptCore
cd WebKit<br>
git log --date=short -60000 | python ..\pocgetter\process_webkit.py<br>
cd Webkit<br>
python extract.py

## V8
cd v8<br>
git log --date=short --name-status -60000 | python ..\pocgetter\process_v8.py

## Spidermonkey
cd gecko-dev/js
git log --date=short --name-status . | python ..\pocgetter\process_spidermonkey.py