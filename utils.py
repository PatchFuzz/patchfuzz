"""
PatchFuzz 工具函数
"""

import os
import datetime

import pandas as pd


def ensure_dir(path: str) -> None:
    """确保目录存在"""
    os.makedirs(path, exist_ok=True)


def export_csv(commits: list, engine_name: str, out_dir: str) -> str:
    """
    导出 commits 到 CSV 文件
    
    Args:
        commits: commit 字典列表
        engine_name: 引擎名称
        out_dir: 输出目录
        
    Returns:
        CSV 文件路径
    """
    date_str = datetime.date.today().strftime('%Y_%m_%d')
    
    df = pd.DataFrame(commits)
    
    # 确保列顺序
    columns = ['date', 'hash', 'ctype', 'poc', 'changedfiles', 'urlofbug']
    for col in columns:
        if col not in df.columns:
            df[col] = ''
    df = df[columns]
    
    df.fillna(' ', inplace=True)
    
    csv_path = os.path.join(out_dir, f"{engine_name}_{date_str}.csv")
    df.to_csv(csv_path, index=False)
    
    return csv_path
