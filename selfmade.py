import random
from enum import Enum


def junban(number, min_num, max_num):
    junbanlist = []
    random.seed()
    junbanlist.clear()
    junbanlist.append(random.randint(min_num, max_num))
    no = 1
    while no < number:
        junbanlist.append(random.randint(min_num, max_num))
        judge = 1
        result = 0
        while judge <= no:
            if junbanlist[no] == junbanlist[judge - 1]:
                result += 1
            judge += 1
        if result == 0:
            no += 1
        else:
            del junbanlist[no]

    return junbanlist

def posijun(number, min_num, max_num):
    posijunlist = []
    posijunlist.clear()
    no = 0
    while no < number:
        posijunlist.append(random.randint(min_num, max_num))
        no += 1
    
    return posijunlist

class Userc(Enum):
    RESET = -1
    INFO = 0
    DRAW = 1
    END = 2
    RESTART = 3
    EXPLAIN = 4
    LIST = 5
    LOOK_Y = 1
    LOOK_N = 2

def SuziJudge():
    input_data = input("入力>> ")
    if input_data.isdecimal():
        input_number = int(input_data)
    else:
        return SuziJudge()
    
    if input_number == -1:
        return Userc.RESET
    elif input_number == 0:
        return Userc.INFO
    elif input_number == 1:
        return Userc.DRAW
    elif input_number == 2:
        return Userc.END
    elif input_number == 3:
        return Userc.RESTART
    elif input_number == 4:
        return Userc.EXPLAIN
    elif input_number == 5:
        return Userc.LIST
    elif input_number == 1:
        return Userc.LOOK_Y
    elif input_number == 2:
        return Userc.LOOK_N

def TextRead(file_name):
    text_data = []
    try:
        with open(f"{file_name}", "r", encoding = "UTF-8") as f:
            data_raw = f.readlines()
    except FileNotFoundError:
        print(f"{file_name}ファイルがありません")
        return -1

    text_data += [x.rstrip("\n") for x in data_raw]
        
    return text_data