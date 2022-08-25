import argparse
from os.path import join as pjoin

import tarotmenu
from utils import TextRead


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--data", "-d", type=str, default="./data")
    args = parser.parse_args()

    info_data = TextRead(pjoin(args.data, "tarotinfo.txt"))
    list_data = TextRead(pjoin(args.data, "tarotlist.txt"))
    posi_data = TextRead(pjoin(args.data, "tarotposition.txt"))
    exp_data = TextRead(pjoin(args.data, "tarotexplain.txt"))

    if info_data == -1 or list_data == -1 or posi_data == -1 or exp_data == -1:
        print("\nファイルを確認してください")
        exit()

    text = {
        "info_data": info_data,
        "list_data": list_data,
        "posi_data": posi_data,
        "exp_data": exp_data,
    }

    tarotmenu.title(text)

    print("Bye!")


if __name__ == "__main__":
    main()

