# -*- coding: utf-8 -*-
"""
Created on Tue Dec 17 15:58:10 2019

@author: 92938
"""

import tabula

df = tabula.read_pdf("base_table.pdf", pages='all')
df=df.to_string(index=False)
df=df.split('NaN\n')
a=[]
for i in df:
    a.append(i.strip())
print(a)