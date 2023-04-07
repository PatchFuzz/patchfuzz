import pandas as pd
import datetime,os
def export_excel(export):
    #将字典列表转换为DataFrame
    pf = pd.DataFrame(list(export))
    #指定字段顺序
    order = ['date','hash','author','email','message','urlofbug','ctype','component','poc','changedfiles']
    pf = pf[order]
    file_path = pd.ExcelWriter('gitlog.xlsx')
    #替换空单元格
    pf.fillna(' ',inplace = True)
    #输出
    pf.to_excel(file_path,encoding = 'utf-8',index = False,engine='xlsxwriter')
    #保存表格
    file_path.save()

def export_csv(export,target):
    date = datetime.date.today().strftime('%Y-%m-%d')
    #将字典列表转换为DataFrame
    pf = pd.DataFrame(list(export))
    #指定字段顺序
    order = ['date','hash','ctype','poc','changedfiles']
    pf = pf[order]
    file_path = r"D:\workspace" + "\\" + target + "-" + date + ".csv"
    #替换空单元格
    pf.fillna(' ',inplace = True)
    #输出
    pf.to_csv(file_path)
    
def mkDir(path):
 
	folder = os.path.exists(path)
 
	if not folder:                  
		os.makedirs(path)            
		print("---  new folder...  ---")
		print("---  OK  ---")
 
	else:
		print("---  There is this folder!  ---")