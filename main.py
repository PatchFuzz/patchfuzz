import argparse
import pandas as pd
import sys,os,datetime
from .process_jsc import parse_jsc_commit
from .utils import mkdir
from .extract import extrac_jsc_test
from jsc.save_jsc import remove_something
def export_csv(export,target,dir_path):
    date = datetime.date.today().strftime('%Y-%m-%d')
    #将字典列表转换为DataFrame
    pf = pd.DataFrame(list(export))
    #指定字段顺序
    order = ['date','hash','author','email','message','urlofbug','ctype','component','poc','changedfiles']
    pf = pf[order]
    file_path = os.path.join(dir_path,target + "-" + date + ".csv")
    #替换空单元格
    pf.fillna(' ',inplace = True)
    #输出
    pf.to_csv(file_path)
    return file_path



def main():
    # Parse Input
    parser = argparse.ArgumentParser()
    parser.description='PatchFuzz'
    parser.add_argument("out_path", help="Set where to store data.", type=str)
    parser.add_argument("target", help="Choose a JS engine.", choices=["jsc","v8","ch","sp","je"], type=str)
    parser.add_argument("target_root", help="The root directory of the JS engine source code. e.g. /home/WebKit/ (Be careful ! The right path is essential.)", type=str)
    args = parser.parse_args()
    

    # Varibles
    out_path = args.out_path
    target = args.target
    target_root = args.target_root
    file_type_list = ["js"]
    if not os.path.exists(target_root) : sys.exit("Bad target_root !")
    match target:
        case "jsc":
            dir_path = os.path.join(out_path, "jsc")
            poc_path = os.path.join(dir_path,"poc")
            mkdir(dir_path)
            mkdir(poc_path)
            commits = parse_jsc_commit(sys.stdin.readlines())
            csv_path = export_csv(commits,"jsc",dir_path)
            test_path = extrac_jsc_test(csv_path,target_root,dir_path)
            remove_something(test_path,poc_path,file_type_list)
            return "Bad request"
        case "v8":
            return "Unauthorized"
        case "ch":
            return "Forbidden"
        case "sp":
            return "Not found"
        case "je":
            return "I'm a teapot"
        case _:
            return sys.exit("bad target")
if __name__ == '__main__':
    main()
