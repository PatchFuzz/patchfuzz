import os
import re
import argparse

C_Rule = "(?<!:)\\/\\/.*|\\/\\*(\\s|.)*?\\*\\/"
file_type_list = ["js"]
N = 0

def updatefile(path,filename):
    global N
    string = ""
    fw = open(path, "r")
    try:
        string = fw.read()
    except UnicodeDecodeError:
        print("UnicodeDecodeError")
    fw.close()
    # spidermonkey
    # if "instantiate(" in string \
    #         or "wasmEvalText(" in string\
    #         or "wasmTextToBinary(" in string:
    #     N = N + 1
    #     return    
    # if re.search("assert\w*\\(",string)\
    #         or re.search("appendToActual\\(",string)\
    #         or re.search("load\\(.*\\)",string)\
    #         or re.search("crash\\(",string):
    #     N = N +1
    #     return
    # ChaKraCore
    # if "WScript" in string :
    #     N = N + 1
    #     return   
    # if re.search("assert[.]?\w* ?\\(",string)\
    #         or re.search("console.log\\(",string)\
    #         or re.search("testRunner.runTests.*;?",string):
    #     N = N +1
    #     return
    # jerryscript
    # if re.search("asserts?[.]?\w* ?\\(",string)\
    #     or re.search("export{? ?",string):
    #     N = N +1
    #     return
    # webkit 
    if re.search("asserts?[.]?\w* ?\\(",string)\
        or re.search("\\$vm[.]\w+",string)\
        or re.search("load\\(.*\\);?",string)\
        or re.search("export{? ?",string):
        N = N +1
        return



def listfiles(path,file_types):
    for file in os.listdir(path):
        listpath =os.path.join(path, file)
        #print(listpath)
        if os.path.isdir(listpath):
            listfiles(listpath,file_types)
        elif os.path.isfile(listpath):
            splitlist = listpath.split('.')
            m = len(splitlist)
            prefx = splitlist[m - 1]
            # print prefx
            if prefx in file_types:
                #print(listpath)
                updatefile(listpath,file)


def save_sp(path,file_types):

    listfiles(path,file_types)


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.description='findbadpoc'
    parser.add_argument("src", help="Path to seeds.", type=str)
    args = parser.parse_args()
    src_path = args.src
    # src = "/data/table2/testsuite/sp"
    # dest = "/data/table2/testsuite/sp_new"
    save_sp(src_path,file_type_list)
    print(N)
