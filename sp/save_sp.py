import glob
import os
import re
import uuid

C_Rule = "(?<!:)\\/\\/.*|\\/\\*(\\s|.)*?\\*\\/"
file_type_list = ["js"]


def updatefile(path, dest,filename):
    print(path)
    string = ""
    fw = open(path, "r")
    try:
        string = fw.read()
    except UnicodeDecodeError:
        print("UnicodeDecodeError")
    fw.close()
   
    string = re.sub(C_Rule, "", string)
    string = re.sub("assertEq", "print",string)
    string = re.sub("assertErrorMessage", "print",string)
    string = re.sub("wasmEvalText", "print",string)
    string = re.sub("wasmFailValidateText", "print",string)
    string = re.sub("wasmAssert", "print",string)
    string = re.sub("wasmTextToBinary", "print",string)
    string = re.sub("wasmFullPass", "print",string)
    string = re.sub("assertFunc", "print",string)
    string = re.sub("assertSegmentFitError", "print",string)
    string = re.sub("assertDeepEq", "print",string)
    string = re.sub("assertNoWarning", "print",string)
    string = re.sub("assertDerefenceNull", "print",string)
    string = re.sub("assertAsmTypeFail", "print",string)
    string = re.sub("assertOffsetColumns", "print",string)
    string = re.sub("wasmValidateText", "print",string)
    string = re.sub("crash", "print",string)
    string = re.sub("load\\(.*\\)","",string)


    
    # string = re.sub("test\\(", "print(", string)
    # fw = open(path, "w")
    fw = open(os.path.join(dest,filename), "w")
    fw.write(string)
    fw.close()


def listfiles(path, dest, file_types):
    for file in os.listdir(path):
        listpath =os.path.join(path, file)
        print(listpath)
        if os.path.isdir(listpath):
            listfiles(listpath, dest, file_types)
        elif os.path.isfile(listpath):
            splitlist = listpath.split('.')
            m = len(splitlist)
            prefx = splitlist[m - 1]
            # print prefx
            if prefx in file_types:
                print(listpath)
                updatefile(listpath, dest,file)


def save_sp(path, dest, file_types):
    listfiles(path, dest, file_types)


if __name__ == '__main__':
    src = "/data/patchFuzz/sp/poc"
    dest = "/data/badpoc/classify/jsc/vm_new/"
    save_sp(src, dest, file_type_list)
