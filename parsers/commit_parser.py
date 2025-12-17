"""
通用 Git Commit 解析器

根据引擎配置解析 git log 输出，识别 bug fix commits 和 POC 文件。
"""

import re
import os
from typing import List, Dict, TextIO
from dataclasses import dataclass, field

from config import EngineConfig


@dataclass
class Commit:
    """Git Commit 数据"""
    hash: str = ''
    date: str = ''
    author: str = ''
    email: str = ''
    ctype: str = 'other'  # 'bug' or 'other'
    poc: List[str] = field(default_factory=list)
    changedfiles: List[str] = field(default_factory=list)
    urlofbug: str = ''

    def to_dict(self) -> Dict:
        return {
            'date': self.date,
            'hash': self.hash,
            'ctype': self.ctype,
            'poc': self.poc,
            'changedfiles': self.changedfiles,
            'urlofbug': self.urlofbug,
        }


class CommitParser:
    """通用 Commit 解析器"""

    # 预编译的通用正则
    RE_COMMIT = re.compile(r'^commit (\w+)', re.IGNORECASE)
    RE_AUTHOR = re.compile(r'^Author: (.*) <(.*)>')
    RE_DATE = re.compile(r'^Date:\s+(.*)')
    RE_FILE_CHANGE = re.compile(r'^[MA]\t(.+)')
    RE_FILE_STATUS = re.compile(r'^[MADCRT]\d{0,3}\t')
    RE_SOURCE_FILE = re.compile(r'[\w-]+(?=[.](c|h|cpp|cc)\s)')

    def __init__(self, config: EngineConfig):
        self.config = config
        self.bp = config.bug_patterns

    def parse(self, lines: List[str], out_dir: str) -> List[Dict]:
        """解析 git log 输出"""
        commits = []
        current = Commit()

        for line in lines:
            if not line or line == '\n':
                continue

            # 新 commit
            match = self.RE_COMMIT.match(line)
            if match:
                new_hash = match.group(1)
                if new_hash != current.hash:
                    if current.hash:
                        commits.append(current)
                    current = Commit(hash=new_hash)
                continue

            # Merge 行跳过
            if line.lower().startswith('merge:'):
                continue

            # Author
            match = self.RE_AUTHOR.match(line)
            if match:
                current.author = match.group(1)
                current.email = match.group(2)
                continue

            # Date
            match = self.RE_DATE.match(line)
            if match:
                current.date = match.group(1)
                continue

            # Commit message (以 4 空格开头)
            if line.startswith('    '):
                self._parse_message(line.strip(), current)
                continue

            # 文件变更
            match = self.RE_FILE_CHANGE.match(line)
            if match:
                filepath = match.group(1)
                self._parse_file_change(filepath, current)
                continue

        # 添加最后一个 commit
        if current.hash:
            commits.append(current)

        # 生成 allowlist
        self._generate_allowlist(commits, out_dir)

        return [c.to_dict() for c in commits]

    def _parse_message(self, msg: str, commit: Commit):
        """解析 commit message"""
        # 检查排除模式
        for pattern in self.bp.exclude_patterns:
            if pattern.match(msg):
                return

        # 检查 bug 关键词
        for pattern in self.bp.message_patterns:
            if pattern.search(msg):
                commit.ctype = 'bug'
                break

        # 检查 bug URL
        for pattern in self.bp.url_patterns:
            if pattern.search(msg):
                commit.urlofbug = msg
                commit.ctype = 'bug'
                break

    def _parse_file_change(self, filepath: str, commit: Commit):
        """解析文件变更"""
        # 检查是否是 POC 文件
        if self.bp.poc_path_pattern.match(filepath):
            commit.ctype = 'bug'
            commit.poc.append(filepath)

        # 如果是 bug commit，记录所有变更文件
        if commit.ctype == 'bug':
            commit.changedfiles.append(filepath)

    def _generate_allowlist(self, commits: List[Commit], out_dir: str):
        """生成 allowlist 文件"""
        table = {}
        af = self.config.allowlist_filter

        for commit in commits:
            for filepath in commit.changedfiles:
                # 检查是否是源码文件
                if not self.RE_SOURCE_FILE.search(filepath):
                    continue

                # 检查路径前缀
                if af.path_prefix and not filepath.startswith(af.path_prefix):
                    continue

                table[filepath] = table.get(filepath, 0) + 1

        # 写入 allowlist
        allowlist_path = os.path.join(out_dir, f"{self.config.name}_allowlist.txt")
        with open(allowlist_path, 'w') as f:
            for filepath, _ in sorted(table.items(), key=lambda x: x[1], reverse=True):
                # 去掉末尾换行符
                f.write(filepath.rstrip() + '\n')
