#!/usr/bin/env python

import sys,re
import xlwt
import xlsxwriter
import pandas as pd
# array to store dict of commit data
commits = []

def parseCommit(commitLines):
    # dict to store commit data
    commit = {}
    # iterate lines and save
    for nextLine in commitLines:

        if nextLine == '' or nextLine == '\n':
            # ignore empty lines
            pass
        elif bool(re.match('commit', nextLine, re.IGNORECASE)):
            # commit xxxx
            if len(commit) != 0:		## new commit, so re-initialize
                commits.append(commit)
                commit = {}
            commit = {'hash' : re.match('commit (.*)', nextLine, re.IGNORECASE).group(1) }
            commit['bugzilla'] = "not mentioned"
            commit['fixtype'] = "other"
            commit['changedfiles'] = ""
            commit['poc'] = ""
        elif bool(re.match('merge:', nextLine, re.IGNORECASE)):
            # Merge: xxxx xxxx
            pass
        elif bool(re.match('author:', nextLine, re.IGNORECASE)):
            # Author: xxxx <xxxx@xxxx.com>
            m = re.compile('Author: (.*) <(.*)>').match(nextLine)
            commit['author'] = m.group(1)
            commit['email'] = m.group(2)
        elif bool(re.match('date:', nextLine, re.IGNORECASE)):
            t = re.compile('Date:   (.*)').match(nextLine)
            commit['date'] = t.group(1)
        elif bool(re.match('    ', nextLine, re.IGNORECASE)):
            # (4 empty spaces)
            if commit.get('message') is None:
                commit['message'] = nextLine.strip()

            elif bool(re.search('bugs.webkit.org',nextLine)):
                commit['bugzilla'] = nextLine.strip()
                commit['fixtype'] = "bug"


            elif bool(re.match('[*] ', nextLine[4:], re.IGNORECASE)):
                commit['changedfiles'] += nextLine[6:] + '\n'
                dir=re.compile('[*] (\w*)/').match(nextLine[4:])
                #print(dir)
                if dir is None :
                    pass
                elif dir.group(1) == 'JSTests':
                    commit['poc'] = nextLine[6:]
                else:
                    pass



        else:
            print ('ERROR: Unexpected Line: ' + nextLine)
    commits.append(commit)


def export_excel(export):
    #将字典列表转换为DataFrame
    pf = pd.DataFrame(list(export))
    #指定字段顺序
    order = ['date','hash','author','email','message','bugzilla','fixtype','poc','changedfiles']
    pf = pf[order]
    file_path = pd.ExcelWriter('gitlog.xlsx')
    #替换空单元格
    pf.fillna(' ',inplace = True)
    #输出
    pf.to_excel(file_path,encoding = 'utf-8',index = False,engine='xlsxwriter')
    #保存表格
    file_path.save()

def export_csv(export):
    #将字典列表转换为DataFrame
    pf = pd.DataFrame(list(export))
    #指定字段顺序
    order = ['date','hash','author','email','message','bugzilla','fixtype','poc','changedfiles']
    pf = pf[order]
    file_path = r"D:\workspace\WebKit\gitlog.csv"
    #替换空单元格
    pf.fillna(' ',inplace = True)
    #输出
    pf.to_csv(file_path)

if __name__ == '__main__':
    parseCommit(sys.stdin.readlines())
    # print(commits)
    # print('Author'.ljust(15) + '  ' + 'Email'.ljust(20) +'  ' + 'Hash'.ljust(8) + '  ' + 'Message'.ljust(20))
    # print("=================================================================================")
    # for commit in commits:
    #     print(commit['author'].ljust(15) + '  ' + commit['email'][:20].ljust(20) + '  ' +  commit['hash'][:7].ljust(8) + '  ' + commit['message'])
    export_csv(commits)