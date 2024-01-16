import glob
import os
import re
import uuid

C_Rule = "(?<!:)\\/\\/.*|\\/\\*(\\s|.)*?\\*\\/"
file_type_list = ["js"]


def js2txt(path, dest,filename):
    #print(path)
    string = ""
    fw = open(path, "r")
    try:
        string = fw.read()
    except UnicodeDecodeError:
        print("UnicodeDecodeError")
    fw.close()
    string = string + "\n" + "---------------------------------------------------------" +"\n"
    fw = open(dest, "a")
    fw.write(string)
    fw.close()


def listfiles(path, dest, file_types):
    for file in os.listdir(path):
        listpath =os.path.join(path, file)
        #print(listpath)
        if os.path.isdir(listpath):
            listfiles(listpath, dest, file_types)
        elif os.path.isfile(listpath):
            splitlist = listpath.split('.')
            m = len(splitlist)
            prefx = splitlist[m - 1]
            # print prefx
            if prefx in file_types:
                #print(listpath)
                js2txt(listpath, dest,file)


def main(path, dest, file_types):
    listfiles(path, dest, file_types)


if __name__ == '__main__':
    main("/data/js-vuln-db/rand100","/data/patchFuzz/data4.txt", file_type_list)
    main("/data/Test262/rand100","/data/patchFuzz/data3.txt", file_type_list)