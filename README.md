# PatchFuzz
PatchFuzz: Fuzzing for JavaScript Engine Incomplete Security Patches
## Usage
```sh
cd $TargetDir
# Update the repository of JS Engine.
git pull
# Get the latest processed security-related samples and whitelist for AFL instrumentation.
git log --date=short  -m --name-status --after=$DataYouWant  --before=$DataYouWant| python3.10 $ToolDir/main.py $OutputDir jsc|v8|chakra|sm|jerry $TargetDir
# Compile the JS Engine with crossover
...
# Adjust fuzzXXX.sh script as required and strat fuzzing.
$ToolDir/fuzzXXX.sh  --args
```

### JavascriptCore
```sh
cd WebKit
git pull
git log --date=short  -m --name-status --after=2022-1-1 | python3.10 /data/patchFuzz/main.py /data/patchFuzz/0410/ jsc /data/WebKit/
/data/patchFuzz/fuzzJSC.sh /data/patchFuzz/0410/jsc/poc/ /data/fuzzout/jscout_0410/ 5
```
### V8
```sh
cd v8
git pull
git log --date=short -m --name-status --after=2022-11-1 | python3.10 /data/patchFuzz/main.py /data/patchFuzz/0404/ v8 /data/v8/
/data/patchFuzz/fuzzV8.sh /data/patchFuzz/0410/v8/poc/ /data/fuzzout/v8out_0410 3
```
### Spidermonkey
```sh
cd spidermonkey/
git pull
git log --date=short -m --name-status --after=2023-1-1 | python3.10 /data/patchFuzz/main.py /data/patchFuzz/0404/ sp /data/spidermonkey/
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
