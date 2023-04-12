# PocGetter
A script for extracting the latest security-related samples from  Webkit/V8/ChakraCore/SpiderMonkey/JerryScript stress test set
# Usage
```sh
cd $TargetDir
git log --date=short  -m --name-status --after=$DataYouWant | python3.10 $ToolDir/main.py $OutputDir jsc|v8|ch|sp|je $TargetDir
```

## JavascriptCore
cd WebKit<br>
git log --date=short  -m --name-status --after=2022-1-1 | python3.10 /data/patchFuzz/main.py /data/patchFuzz/0410/ jsc /data/WebKit/
/data/patchFuzz/fuzzJSC.sh /data/patchFuzz/0410/jsc/poc/ /data/fuzzout/jscout_0410/ 5
## V8
cd v8<br>
git log --date=short -m --name-status --after=2022-11-1 | python3.10 /data/patchFuzz/main.py /data/patchFuzz/0404/ v8 /data/v8/
/data/patchFuzz/fuzzV8.sh /data/patchFuzz/0410/v8/poc/ /data/fuzzout/v8out_0410 3
## Spidermonkey
cd spidermonkey/
git log --date=short -m --name-status --after=2023-1-1 | python3.10 /data/patchFuzz/main.py /data/patchFuzz/0404/ sp /data/spidermonkey/
/data/patchFuzz/fuzzSM.sh /data/patchFuzz/0410/sp/poc/ /data/fuzzout/smout_0410/ 3
## ChaKraCore
cd ChaKraCore
git log --date=short -m --name-status --after=2023-1-1 | python3.10 /data/patchFuzz/main.py /data/patchFuzz/0404/ ch /data/ChakraCore/

## jerryscript
cd jerryscript
git log --date=short -m --name-status --after=2023-1-1 | python3.10 /data/patchFuzz/main.py /data/patchFuzz/0404/ je /data/jerryscript/
