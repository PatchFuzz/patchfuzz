#!/usr/bin/env python
import sys,re

# array to store dict of commit data



def parse_bug_commit(commitLines):
    # dict to store commit data
    flag = False
    string = ""
    temp = ""
    # iterate lines and save
    for nextLine in commitLines:
        temp = temp + nextLine
         
        if bool(re.match('commit', nextLine, re.IGNORECASE)):
            flag = False
            temp = ""
            temp = "----------------------------------" +"\n"+nextLine+temp
        elif bool(re.search('bugs.webkit.org',nextLine)):
            flag = True
            string = string + temp
        elif flag:
            string = string + nextLine
        else:
            pass
    f = open(r"D:\workspace\patchFuzz\data.txt","w")   #设置文件对象
    f.write(string)
    print(string)
    f.close() #关闭文件
def parse_other_commit(commitLines):
    # dict to store commit data
    flag = False
    string = ""
    temp = ""
    # iterate lines and save
    for nextLine in commitLines:
        
         
        if bool(re.match('commit', nextLine, re.IGNORECASE)):
            if not flag:
                string = string + temp
            flag = False
            temp = ""
            temp = "----------------------------------" +"\n"+nextLine+temp
        elif bool(re.search('bugs.webkit.org',nextLine)):
            flag = True
            temp = ""
        else:
            temp = temp + nextLine
    f = open(r"D:\workspace\patchFuzz\data2.txt","w")   #设置文件对象
    f.write(string)
    print(string)
    f.close() #关闭文件
if __name__ == '__main__':
    parse_other_commit(sys.stdin.readlines())

