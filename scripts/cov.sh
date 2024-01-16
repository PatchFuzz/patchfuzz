export AFL_SKIP_CPUFREQ=0
timeout 2  /home/marckwei/AFLplusplus/afl-fuzz -i /data/table2/testsuite/v8/ -o /data/gcovtemp/v8/v8_out -t 2000 /data/WebKit/0926/fuzz/Debug/bin/jsc @@
timeout 2  /home/marckwei/AFLplusplus/afl-fuzz -i /data/table2/testsuite/jsc/ -o /data/gcovtemp/jsc/jsc_out -t 2000 /data/WebKit/0926/fuzz/Debug/bin/jsc @@
timeout 2  /home/marckwei/AFLplusplus/afl-fuzz -i /data/table2/testsuite/sp/ -o /data/gcovtemp/sp/sp_out -t 2000 /data/WebKit/0926/fuzz/Debug/bin/jsc @@
timeout 2  /home/marckwei/AFLplusplus/afl-fuzz -i /data/table2/testsuite/ch/ -o /data/gcovtemp/ch/ch_out -t 2000 /data/WebKit/0926/fuzz/Debug/bin/jsc @@
timeout 2  /home/marckwei/AFLplusplus/afl-fuzz -i /data/table2/testsuite/je/ -o /data/gcovtemp/je/je_out -t 2000 /data/WebKit/0926/fuzz/Debug/bin/jsc @@

/data/afl-cov/afl-cov --overwrite -d /data/gcovtemp/je/je_out/default --cover-corpus  --enable-branch-coverage --disable-gcov-check DISABLE_GCOV_CHECK  -e "timeout 10 /data/jerryscript/gcov/bin/jerry  AFL_FILE" -c /data/jerryscript/

/data/afl-cov/afl-cov --overwrite -d /data/gcovtemp/jsc/jsc_out/default --cover-corpus  --enable-branch-coverage -e "timeout 10 /data/WebKit/cov/Debug/bin/jsc AFL_FILE" -c /data/WebKit/

sudo docker exec 1aa /home/data/afl-cov/afl_cov_llvm --overwrite -d /home/data/gcovtemp/sp/sp_out/default/ --cover-corpus  --enable-branch-coverage  -e "timeout 10  /home/data/gecko-dev/obj-clang-x86_64-pc-linux-gnu/js/src/js AFL_FILE" -c /home/data/gecko-dev/

sudo docker exec 1aa /home/data/afl-cov/afl-cov --overwrite -d /home/data/gcovtemp/v8/v8_out/default/ --cover-corpus  --enable-branch-coverage -e "timeout 10 /home/ubuntu/v8/v8/out/cov/d8 --allow-natives-syntax --expose-gc AFL_FILE" -c /home/ubuntu/v8/v8/

sudo docker exec 1aa /home/data/afl-cov/afl_cov_llvm --overwrite -d /home/data/gcovtemp/ch/ch_out/default/ --cover-corpus  --enable-branch-coverage -e "timeout 10 /home/data/ChakraCore/out/Release/ch AFL_FILE" -c /home/data/ChakraCore/
