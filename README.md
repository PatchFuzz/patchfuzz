# PocGetter
A script for extracting the latest security-related samples from  Webkit stress test set
# Usage
cd WebKit<br>
git log --date=short -60000 | python main.py<br>
python extract.py