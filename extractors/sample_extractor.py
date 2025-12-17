"""
通用样本提取器

从 CSV 文件中读取 POC 路径，从引擎源码目录复制到输出目录。
"""

import os
import re
import shutil
import datetime
from typing import Optional

import pandas as pd

from config import EngineConfig


class SampleExtractor:
    """通用样本提取器"""

    RE_JS_PATH = re.compile(r'([\w/-]+\.js)')
    RE_JS_NAME = re.compile(r'[\w-]+(?=\.js)')

    def __init__(self, config: EngineConfig):
        self.config = config

    def extract(self, csv_path: str, source_root: str, out_dir: str) -> str:
        """
        从 CSV 中提取 POC 文件
        
        Args:
            csv_path: CSV 文件路径
            source_root: 引擎源码根目录
            out_dir: 输出目录
            
        Returns:
            提取后的 test 目录路径
        """
        if not os.path.exists(source_root):
            raise FileNotFoundError(f"Source root not found: {source_root}")

        # 创建输出目录
        date_str = datetime.date.today().strftime('%Y-%m-%d')
        test_path = os.path.join(out_dir, 'test', date_str)
        os.makedirs(test_path, exist_ok=True)

        # 读取 CSV
        df = pd.read_csv(csv_path, usecols=['hash', 'poc', 'date'])
        data = df.dropna().values.tolist()

        stats = {
            'total': 0,
            'first_date': '',
            'last_date': '',
        }

        for row in data:
            date, commit_hash, poc_str = row[0], row[1], row[2]
            self._extract_pocs(poc_str, source_root, test_path, date, stats)

        print(f"The date of first poc: {stats['first_date']}")
        print(f"The date of last poc: {stats['last_date']}")
        print(f"Number of poc: {stats['total']}")

        return test_path

    def _extract_pocs(self, poc_str: str, source_root: str, test_path: str, 
                      date: str, stats: dict):
        """提取单个 commit 的 POC 文件"""
        poc_paths = self.RE_JS_PATH.findall(poc_str)
        
        for poc_path in poc_paths:
            filename_match = self.RE_JS_NAME.search(poc_path)
            if not filename_match:
                continue

            # V8 特殊处理：只提取 regress-*.js
            if self.config.name == 'v8':
                if not filename_match.group(0).lower().startswith('regress'):
                    continue

            filename = filename_match.group(0) + '.js'
            src = os.path.join(source_root, poc_path)
            dst = os.path.join(test_path, filename)

            try:
                shutil.copy(src, dst)
                stats['total'] += 1
                stats['last_date'] = date
                if stats['total'] == 1:
                    stats['first_date'] = date
            except (FileNotFoundError, PermissionError):
                pass
