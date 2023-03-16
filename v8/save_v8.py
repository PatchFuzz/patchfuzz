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
    string = re.sub("assertEquals", "print",string)
    string = re.sub("assertThrows", "print",string)
    string = re.sub("assertTrue", "print",string)
    string = re.sub("assertTraps", "print",string)
    string = re.sub("assertUnreachable", "print",string)
    string = re.sub("assertOptimized", "print",string)
    string = re.sub("assertFalse", "print",string)
    string = re.sub("assertUnoptimized", "print",string)
    string = re.sub("assertInstanceof", "print",string)
    string = re.sub("assertSame", "print",string)
    string = re.sub("assertNotSame", "print",string)
    string = re.sub("assertNotEquals", "print",string)
    string = re.sub("assertMatches", "print",string)
    string = re.sub("assertArrayEquals", "print",string)
    string = re.sub("assertPromiseResult", "print",string)
    string = re.sub("assertDoesNotThrow", "print",string)
    string = re.sub("assertPromiseResult", "print",string)
    string = re.sub("externalizeString", "print",string)
    string = re.sub("d8[.]file[.]execute\\(.*\\);","",string)


    
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


def save_v8(path, dest, file_types):
    listfiles(path, dest, file_types)


if __name__ == '__main__':
    src = "/data/badpoc/v8"
    dest = "/data/badpoc/classify/jsc/vm_new/"
    save_v8(src, dest, file_type_list)
