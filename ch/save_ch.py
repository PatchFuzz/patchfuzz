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
    print("zxw")
    string = re.sub(C_Rule, "", string)
    print("zxw")
    string = re.sub("this.WScript.LoadScriptFile", "print",string)
    string = re.sub("this.WScript", "print",string)
    string = re.sub("WScript ", "print",string)
    string = re.sub("WScript.Platform.OS", "\"zxw\"",string)
    string = re.sub("WScript.Platform.INTL_LIBRARY", "\"zxw\"",string)

    string = re.sub("WScript.Platform.LINK_TYPE", "\"zxw\"",string)
    string = re.sub("WScript.Platform.ICU_VERSION", "\"zxw\"",string)
    string = re.sub("WScript.LoadScriptFile\\(", "print(",string)
    string = re.sub("WScript.LoadModule\\(", "print(",string)
    string = re.sub("WScript.Arguments\\[0\\]", "\"zxw\"",string)
    string = re.sub("\\(WScript.Arguments", "\(\"zxw\"",string)
    string = re.sub("WScript.Echo", "print",string)
    string = re.sub("WScript.Attach\\(", "Run(",string)
    string = re.sub("WScript.Detach\\(", "Run(",string)
    string = re.sub("WScript.LoadScript\\(", "print(",string)
    string = re.sub("WScript.LoadScript\\)", "print)",string)
    string = re.sub("WScript.Flag\\(", "print(",string)
    string = re.sub("WScript.RegisterModuleSource\\(", "print(",string)
    string = re.sub("WScript.SetTimeout\\(", "Run(",string)
    string = re.sub("WScript.Platform", "\"zxw\"",string)
    string = re.sub("WScript.monotonicNow", "print",string)
    string = re.sub("console.log\\(", "print(",string)
    string = re.sub("assert[.]?\w* ?\\(", "print(",string)
    string = re.sub("testRunner.runTests.*;", "for (var i = 0; i < tests.length; i ++) {tests[i].body()}",string)


    
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


def save_ch(path, dest, file_types):
    listfiles(path, dest, file_types)


if __name__ == '__main__':
    src = "/data/badpoc/ch"
    dest = "/data/badpoc/classify/jsc/vm_new/"
    save_ch(src, dest, file_type_list)
