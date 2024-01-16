#!/bin/bash
python3 /data/gcovtemp/findbad.py /data/table2/testsuite/jsc_new/ /data/table2/testsuite/jsc_bad  /data/WebKit/WebKitBuild/Release/bin/jsc
python3 /data/gcovtemp/findbad.py /data/table2/testsuite/je_new/ /data/table2/testsuite/je_bad /data/jerryscript/gcov/bin/jerry
sudo docker exec 1aa python3 /home/data/gcovtemp/findbad.py /home/data/table2/testsuite/v8_new/ /home/data/table2/testsuite/v8_bad  /home/ubuntu/v8/v8/out/cov/d8
sudo docker exec 1aa python3 /home/data/gcovtemp/findbad.py /home/data/table2/testsuite/sp_new/ /home/data/table2/testsuite/sp_bad  /home/data/gecko-dev/obj-clang-x86_64-pc-linux-gnu/js/src/js
sudo docker exec 1aa python3 /home/data/gcovtemp/findbad.py /home/data/table2/testsuite/ch_new/ /home/data/table2/testsuite/ch_bad  /home/data/ChakraCore/out/Release/ch
