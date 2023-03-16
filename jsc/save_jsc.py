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

    if "export " in string \
            or "$vm.Element;" in string \
            or "$vm.Root;" in string \
            or "$vm.getElement;" in string :
            os.remove(path)
            return
    
    string = re.sub(C_Rule, "", string)
    string = re.sub("\\$vm[.]\w+", "print",string)
    string = re.sub("abort\\(", "print(",string)    
   
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
                updatefile(listpath, dest,file)


def save_jsc(path, dest, file_types):
    listfiles(path, dest, file_types)


if __name__ == '__main__':
    src = "/data/newpoc/webkit/bad"
    dest = "/data/badpoc/classify/jsc/vm_new/"
    save_jsc(src,file_type_list)

