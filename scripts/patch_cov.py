#!/usr/bin/env python
import sys,re,shutil,os,argparse

# array to store dict of commit data



def parse_lcov(info_path,list_path,target):

    whitelist = ""
    fl = open(list_path,"r")
    try:
        whitelist = fl.read()
    except UnicodeDecodeError:
        print("UnicodeDecodeError")
    fl.close()

    fi = open(info_path, "r")

    commits = []
    commit = {}
    sum_LF = 0
    sum_LH = 0
    inlist = False
    for nextLine in fi.readlines():

        if nextLine == '' or nextLine == '\n':
            # ignore empty lines
            pass
        elif bool(re.match('SF:', nextLine, re.IGNORECASE)):
            # commit xxxx
            if len(commit) != 0:		## new file, so re-initialize
                commits.append(commit)
                commit = {}
                inlist = False
            match target:
                case "jsc": filename = re.match('SF:/data/WebKit/(.*)', nextLine, re.IGNORECASE)       # modify regexp according to target root. e.g. 'SF:$ROOT_PATH(.*)' 
                case "v8":  filename = re.match('SF:/home/ubuntu/v8/v8/(.*)', nextLine, re.IGNORECASE) 
                case "sp":  filename = re.match('SF:/home/data/gecko-dev/(.*)', nextLine, re.IGNORECASE)
                case "je":  filename = re.match('SF:/data/jerryscript/(.*)', nextLine, re.IGNORECASE)
                case "ch":  filename = re.match('SF:/home/data/ChakraCore/(.*)', nextLine, re.IGNORECASE)
            if filename:
                commit = {'file' : filename.group(1) }
                commit['LF'] = 0
                commit['LH'] = 0
                if commit['file'] in whitelist: inlist = True
        elif bool(re.match('LF:', nextLine, re.IGNORECASE)) and inlist:
            commit['LF'] = int(nextLine[3:])
            sum_LF += commit['LF']
        elif bool(re.match('LH:', nextLine, re.IGNORECASE)) and inlist:
            commit['LH'] = int(nextLine[3:])
            sum_LH += commit['LH']      
        else:
            pass
    commits.append(commit)
    fi.close()
    print('Line Coverage: {:.2f}%'.format(sum_LH/sum_LF*100))
    #print(whitelist)
    return commits


                    



if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.description='calculate patch coverage'
    parser.add_argument("info", help="Path to trace_info.", type=str)
    parser.add_argument("list", help="Path to whitelist.", type=str)
    parser.add_argument("target", help="Choose a JS engine.", choices=["jsc","v8","ch","sp","je"], type=str)
    args = parser.parse_args()
    src_path = args.info
    list_path = args.list
    target = args.target
    parse_lcov(src_path,list_path,target)
