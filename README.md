# PatchFuzz
PatchFuzz: Fuzzing for JavaScript Engine Incomplete Security Patches
## Usage
```sh
cd $TargetDir
git pull
git log --date=short  -m --name-status --after=$DataYouWant  --before=$DataYouWant| python3.10 $ToolDir/main.py $OutputDir jsc|v8|chakra|sm|jerry $TargetDir
$ToolDir/fuzzXXX.sh  --args
```

### JavascriptCore
```sh
cd WebKit<br>
git pull<br>
git log --date=short  -m --name-status --after=2022-1-1 | python3.10 /data/patchFuzz/main.py /data/patchFuzz/0410/ jsc /data/WebKit/<br>
/data/patchFuzz/fuzzJSC.sh /data/patchFuzz/0410/jsc/poc/ /data/fuzzout/jscout_0410/ 5
```
### V8
```sh
cd v8<br>
git pull<br>
git log --date=short -m --name-status --after=2022-11-1 | python3.10 /data/patchFuzz/main.py /data/patchFuzz/0404/ v8 /data/v8/<br>
/data/patchFuzz/fuzzV8.sh /data/patchFuzz/0410/v8/poc/ /data/fuzzout/v8out_0410 3
```
### Spidermonkey
```sh
cd spidermonkey/
git pull<br>
git log --date=short -m --name-status --after=2023-1-1 | python3.10 /data/patchFuzz/main.py /data/patchFuzz/0404/ sp /data/spidermonkey/<br>
/data/patchFuzz/fuzzSM.sh /data/patchFuzz/0410/sp/poc/ /data/fuzzout/smout_0410/ 3
```
### ChaKraCore
```sh
cd ChaKraCore
git log --date=short -m --name-status --after=2023-1-1 | python3.10 /data/patchFuzz/main.py /data/patchFuzz/0404/ ch /data/ChakraCore/
```
### jerryscript
```sh
cd jerryscript
git log --date=short -m --name-status --after=2023-1-1 | python3.10 /data/patchFuzz/main.py /data/patchFuzz/0404/ je /data/jerryscript/
```