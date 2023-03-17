import os
import re
import signal


class TimeOutException(Exception):
    pass
def setTimeout(num):
    def wrape(func):
        def handle(signum, frame):
            raise TimeOutException("运行超时！")
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
    if "export" in string \
            or "Unexpected end" in string :
            os.remove(path)
            return

   
    string = re.sub(C_Rule, "", string)
    string = re.sub("assert\\(", "print(",string)
    string = re.sub("assert ", "print",string)


    
    # string = re.sub("test\\(", "print(", string)
    # fw = open(path, "w")
    fw = open(os.path.join(dest,filename), "w")
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
                updatefile(listpath, dest, file)


def save_je(path, dest, file_types):
    listfiles(path, dest, file_types)


if __name__ == '__main__':
    src = "/data/newpoc/je/poc"
    dest = "/data/badpoc/classify/jsc/vm_new/"
    save_je(src, dest, file_type_list)
