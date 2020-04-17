# -*- coding: utf-8 -*-
"""
Created on Tue Dec 17 15:58:10 2019

@author: 92938
"""

import tabula
import numpy as np
df = tabula.read_pdf("C:/Users/92938/mern-exercise-tracker/backend/routes/base_table_v2.pdf", pages='all')
df=np.array(df)
#df=df.to_string(index=False)
#df=df.split('NaN')
a=[]
for i in range(len(df)):
    print(df[i][0].strip())
# print(a)