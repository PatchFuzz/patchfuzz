#!/bin/bash


SOURCE_DIR=$1
FUZZOUT_DIR=$2
PARALLE_NUMBER="$3"

if [[ -z "$1" || -z "$2" || -z "$3" ]]; then
    echo "Error: Missing required arguments."
    echo "Usage: ./fuzzJSC.sh SOURCE_DIR FUZZOUT_DIR PARALLE_NUMBER"
    echo "e.g:   ./fuzzJSC.sh /data/patchFuzz/0410/v8/poc/ /data/fuzzout/v8cout_0410/ 5"
    exit 1
fi
FUZZER_DIR="/home/crossover"
TARGET_PATH="/home/v8/out/patchfuzz/d8"
PARENT_DIR=$(dirname "${SOURCE_DIR}")
ARGS="--expose-gc --omit-quit --allow-natives-syntax --future --harmony"

export AFL_CUSTOM_MUTATOR_ONLY=1 AFL_DISABLE_TRIM=1 AFL_PYTHON_MODULE="example" PYTHONPATH="${FUZZER_DIR}/custom_mutators/examples/"

find ${SOURCE_DIR} -type f -size +10k -delete

# Create the destination DIRs for the X copies
for ((i=1; i<=PARALLE_NUMBER; i++)); do
    DEST_DIR="${PARENT_DIR}/copy_${i}"
    if [ -d "$DEST_DIR" ]; then
  	echo "Folder already exists!"
  	exit 1
    fi
    mkdir "${DEST_DIR}"
done

# Copy 100 files to each destination DIR
for ((i=1; i<=PARALLE_NUMBER; i++)); do
    DEST_DIR="${PARENT_DIR}/copy_${i}"
    FILES=$(ls "${SOURCE_DIR}" | shuf -n 99)
    for file in ${FILES}; do
        cp "${SOURCE_DIR}/${file}" "${DEST_DIR}"
    done
    if [ $i -eq 1 ];then
    	eval "nohup ${FUZZER_DIR}/afl-fuzz -S v8_1 -m 4G -t 800 -i ${PARENT_DIR}/copy_1 -o ${FUZZOUT_DIR} ${TARGET_PATH} ${ARGS} @@ > /dev/null 2>&1 &" 
    else
    	eval "nohup ${FUZZER_DIR}/afl-fuzz -S v8_${i} -m 4G -t 800+ -i ${PARENT_DIR}/copy_${i} -o ${FUZZOUT_DIR} ${TARGET_PATH} ${ARGS} @@ > /dev/null 2>&1 &"
    fi
done

while true; do
    sleep 3
    eval "${FUZZER_DIR}/afl-whatsup ${FUZZOUT_DIR}"
    sleep 180
done

