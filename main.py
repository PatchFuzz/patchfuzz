import argparse
import pandas as pd
import sys,os,datetime

from process_jsc import parse_jsc_commit
from process_v8 import parse_v8_commit
from process_ch import parse_ch_commit
from process_sp import parse_sp_commit
from process_je import parse_je_commit
from utils import mkdir
from extract import extract_jsc_test,extract_v8_test,extract_ch_test,extract_sp_test,extract_je_test
from jsc.save_jsc import save_jsc
from v8.save_v8 import save_v8
from ch.save_ch import save_ch
from sp.save_sp import save_sp
from je.save_je import save_je



def export_csv(export,target,dir_path):
    date = datetime.date.today().strftime('%Y-%m-%d')
    pf = pd.DataFrame(list(export))
    order = ['date','hash','message','ctype','poc','changedfiles']
    pf = pf[order]
    file_path = os.path.join(dir_path,target + "-" + date + ".csv")
    pf.fillna(' ',inplace = True)
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

    # Start 
    match target:
        case "jsc":
            dir_path = os.path.join(out_path, "jsc")
            poc_path = os.path.join(dir_path,"poc")
            mkdir(dir_path)
            mkdir(poc_path)
            commits = parse_jsc_commit(sys.stdin.readlines())
            csv_path = export_csv(commits,"jsc",dir_path)
            test_path = extract_jsc_test(csv_path,target_root,dir_path)
            save_jsc(test_path,poc_path,file_type_list)

            sys.exit("Finished!")

        case "v8":
            dir_path = os.path.join(out_path, "v8")
            poc_path = os.path.join(dir_path,"poc")
            mkdir(dir_path)
            mkdir(poc_path)
            commits = parse_v8_commit(sys.stdin.readlines())
            csv_path = export_csv(commits,"v8",dir_path)
            test_path = extract_v8_test(csv_path,target_root,dir_path)
            save_v8(test_path,poc_path,file_type_list)

            sys.exit("Finished!")

        case "ch":
            dir_path = os.path.join(out_path, "ch")
            poc_path = os.path.join(dir_path,"poc")
            mkdir(dir_path)
            mkdir(poc_path)
            commits = parse_ch_commit(sys.stdin.readlines())
            csv_path = export_csv(commits,"ch",dir_path)
            test_path = extract_ch_test(csv_path,target_root,dir_path)
            save_ch(test_path,poc_path,file_type_list)

            sys.exit("Finished!")

        case "sp":
            dir_path = os.path.join(out_path, "sp")
            poc_path = os.path.join(dir_path,"poc")
            mkdir(dir_path)
            mkdir(poc_path)
            commits = parse_sp_commit(sys.stdin.readlines())
            csv_path = export_csv(commits,"sp",dir_path)
            test_path = extract_sp_test(csv_path,target_root,dir_path)
            save_sp(test_path,poc_path,file_type_list)

            sys.exit("Finished!")

        case "je":
            dir_path = os.path.join(out_path, "je")
            poc_path = os.path.join(dir_path,"poc")
            mkdir(dir_path)
            mkdir(poc_path)
            commits = parse_je_commit(sys.stdin.readlines())
            csv_path = export_csv(commits,"je",dir_path)
            test_path = extract_je_test(csv_path,target_root,dir_path)
            save_je(test_path,poc_path,file_type_list)

            sys.exit("Finished!")

        case _:
            return sys.exit("bad target")

if __name__ == '__main__':
    main()
