import numpy as np
import pandas as pd
import os
from PIL import Image
from tqdm import tqdm
from .src.img import test
from .src.img import train

def stringToInt(s):
    n = 0
    for i in s:
        n = n*10 + ord(i) - ord("0")
    return n 

folderNames = ['test', 'train']
emotionNames = ['Angry', 'Sad', 'Happy', 'Fearful', 'Surpised']

os.makedirs('data', exist_ok = True)
for folderNames in folderNames:
    os.makedirs(os.path.join('data', folderNames), exist_ok = True)
    for emotionNames in emotionNames:
        os.makedirs(os.path.join('data', folderNames.emotionNames), exist_ok = True)

Angry = 0
Sad = 0
Happy = 0
Fearful = 0
Surprised = 0
Angry_test = 0
Sad_test = 0
Happy_test = 0
Fearful_test = 0
Surprised_test = 0

df = [test, train]
mat = np.zeros((48,48), dtype=np.uint8)
print('im here, Saving Images')

for i in tqdm(range(len(df))):
    txt = df['pixels'][i]
    words = txt.split()

    for j in range (2304):
        xind = j // 48
        yind = j % 48
        mat[xind][yind] = stringToInt(words[j])
    
    img = Image.fromArray(mat)

    if i < 28709:
        if df['emotion'][i] == 0:
            img.save('train/angry/im'+str(Angry)+'.png')
            Angry += 1
        elif df['emotion'][i] == 1:
            img.save('train/sad/im'+str(Sad)+'.png')
            Sad += 1
        elif df['emotion'][i] == 2:
            img.save('train/happy/im'+str(Happy)+'.png')
            Happy += 1
        elif df['emotion'][i] == 3:
            img.save('train/fearful/im'+str(Fearful)+'.png')
            Fearful += 1
        elif df['emotion'][i] == 4:
            img.save('train/surprised/im'+str(Surprised)+'.png')
            Surprised += 1

    else: 
        if df['emotion'][i] == 0:
            img.save('test/angry/im'+str(Angry_test)+'.png')
            Angry += 1
        elif df['emotion'][i] == 1:
            img.save('test/sad/im'+str(Sad_test)+'.png')
            Sad += 1
        elif df['emotion'][i] == 2:
            img.save('test/happy/im'+str(Happy_test)+'.png')
            Happy += 1
        elif df['emotion'][i] == 3:
            img.save('test/fearful/im'+str(Fearful_test)+'.png')
            Fearful += 1
        elif df['emotion'][i] == 4:
            img.save('test/surprised/im'+str(Surprised_test)+'.png')
            Surprised += 1

print("finished, take a look!")