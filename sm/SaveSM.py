import os
import re
import signal,argparse


class TimeOutException(Exception):
    pass
def setTimeout(num):
    def wrape(func):
        def handle(signum, frame):
            raise TimeOutException("Timeout！")
        def toDo(*args, **kwargs):
            try:
                signal.signal(signal.SIGALRM, handle)
                signal.alarm(num)#开启闹钟信号
                rs = func(*args, **kwargs)
                signal.alarm(0)#关闭闹钟信号
                return rs
            except TimeOutException:
                print("out of time:",args[2])
            
        return toDo
    return wrape

def mkdir(path):
 
	folder = os.path.exists(path)
 
	if not folder:                  
		os.makedirs(path)            
	else:
		return
C_Rule = "(?<!:)\\/\\/.*|\\/\\*(\\s|.)*?\\*\\/"
file_type_list = ["js"]

@setTimeout(1)
def updatefile(path, dest,filename):
    parent_dir = os.path.abspath(os.path.join(dest, os.pardir))
    wasm = os.path.join(parent_dir, 'wasm_sp')
    #print(path)
    string = ""
    fw = open(path, "r")
    try:
        string = fw.read()
    except UnicodeDecodeError:
        print("UnicodeDecodeError")
    fw.close()
    if "instantiate(" in string \
            or "wasmEvalText(" in string\
            or "wasmTextToBinary(" in string:
        # fw = open(os.path.join(wasm,filename), "w")
        # fw.write(string)
        # fw.close()
        return    
    string = re.sub(C_Rule, "", string)
    string = re.sub("assert[.]?\w* ?\\(", "print(",string)
    string = re.sub("crash\\(", "print(",string)
    string = re.sub("appendToActual\\(", "print(",string)    
    string = re.sub("load\\(.*\\)","",string)


    
    # string = re.sub("test\\(", "print(", string)
    # fw = open(path, "w")
    fw = open(os.path.join(dest,filename), "w")
    fw.write(string.lstrip())
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
                updatefile(listpath, dest,file)


def saveSp(path, dest, file_types):
    parent_dir = os.path.abspath(os.path.join(dest, os.pardir))
    wasm = os.path.join(parent_dir, 'wasm_sp')
    mkdir(wasm)
    listfiles(path, dest, file_types)


if __name__ == '__main__':
    # parser = argparse.ArgumentParser()
    # parser.description='findbadpoc'
    # parser.add_argument("src", help="Path to seeds.", type=str)
    # parser.add_argument("out", help="Path to store bad seeds", type=str)
    # args = parser.parse_args()
    # src_path = args.src
    # out_path = args.out
    src_path = "/data/TempCorpus/testsuite5/sm_bad"
    out_path = "/data/TempCorpus/testsuite5/sm_bad"
    mkdir(out_path)
    saveSp(src_path, out_path, file_type_list)
