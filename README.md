# PatchFuzz

Fuzzing for JavaScript Engine Incomplete Security Patches

## Supported Engines

| Engine | Alias | Source |
|--------|-------|--------|
| JerryScript | jerry | https://github.com/pando-project/jerryscript |
| SpiderMonkey | sm | https://github.com/mozilla-firefox/firefox |
| JavaScriptCore | jsc | https://github.com/WebKit/WebKit |
| V8 | v8 | https://github.com/v8/v8 |
| ChakraCore | chakra | https://github.com/chakra-core/ChakraCore |

## Usage

```sh
cd <engine_repo>
git log --date=short -m --name-status | python3 main.py <output_dir> <engine> <repo_dir>
```

### Examples

```sh
# JerryScript
cd /data/workspace/jerryscript
git log --date=short -m --name-status | python3 /data/workspace/patchfuzz/main.py /data/workspace/patchfuzz/output jerry /data/workspace/jerryscript

# SpiderMonkey
cd /data/workspace/firefox
git log --date=short -m --name-status | python3 /data/workspace/patchfuzz/main.py /data/workspace/patchfuzz/output sm /data/workspace/firefox

# JavaScriptCore
cd /data/workspace/WebKit
git log --date=short -m --name-status | python3 /data/workspace/patchfuzz/main.py /data/workspace/patchfuzz/output jsc /data/workspace/WebKit

# V8
cd /data/workspace/chromium
git log --date=short -m --name-status | python3 /data/workspace/patchfuzz/main.py /data/workspace/patchfuzz/output v8 /data/workspace/chromium

# ChakraCore
cd /data/workspace/ChakraCore
git log --date=short -m --name-status | python3 /data/workspace/patchfuzz/main.py /data/workspace/patchfuzz/output chakra /data/workspace/ChakraCore
```

## Output

```
output/<engine>/
├── <engine>_<date>.csv      # Extracted commit info
├── <engine>_allowlist.txt   # AFL instrumentation allowlist
├── test/<date>/             # Raw extracted JS files
└── poc/                     # Preprocessed POC files for fuzzing
```

## Fuzzing

```sh
./fuzzJSC.sh <poc_dir> <output_dir> <num_instances>
./fuzzV8.sh <poc_dir> <output_dir> <num_instances>
./fuzzSM.sh <poc_dir> <output_dir> <num_instances>
```
