import os

for subdir, dirs, files in os.walk(r'pages/faceRec/src/img/test/happy'):
    for filename in files:
        filepath = subdir + os.sep + filename

        if filepath.endswith(".jpg") or filepath.endswith(".png"):
            with open(filepath, 'rb') as file:
                content = file.read()
                print(filepath)

