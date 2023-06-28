import os
import re
import signal


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
    #print(path)
    string = ""
    fw = open(path, "r")
    try:
        string = fw.read()
    except UnicodeDecodeError:
        print("UnicodeDecodeError")
    fw.close()
    if "export " in string \
            or "export{" in string :
            return

   
    string = re.sub(C_Rule, "", string)
    #string = re.sub("asserts?[.]?\w* ?\\(", "print(",string)


    
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
                updatefile(listpath, dest, file)


def saveJe(path, dest, file_types):
    #mkdir(os.path.join(dest, "wasm"))
    listfiles(path, dest, file_types)


if __name__ == '__main__':
    src = "/data/tableV/testsuite/je_bad"
    dest = "/data/tableV/testsuite/je_new"
    mkdir(dest)
    saveJe(src, dest, file_type_list)
