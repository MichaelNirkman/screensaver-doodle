from os import listdir
from os.path import isfile, join
onlyfiles = [f for f in listdir("./imgs") if isfile(join("./imgs/", f))]

with open("imgs.txt", "w") as file:
    filestring = f"['imgs/{onlyfiles[0]}'"
    for i in range(1,len(onlyfiles)):
        filestring = filestring + f", 'imgs/{onlyfiles[i]}'"
    filestring = filestring + "]"
    file.write(filestring)
    