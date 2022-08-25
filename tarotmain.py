from selfmade import TextRead
import tarotmenu

info_data = TextRead("tarotinfo.txt")
list_data = TextRead("tarotlist.txt")
posi_data = TextRead("tarotposition.txt")
exp_data = TextRead("tarotexplain.txt")

if info_data == -1 or list_data == -1 or posi_data == -1 or exp_data == -1:
    print("\nファイルを確認してください")
    exit()

text = {"info_data" : info_data, "list_data" : list_data, "posi_data" : posi_data, "exp_data" : exp_data}
tarotmenu.title(text)

print("Bye!")