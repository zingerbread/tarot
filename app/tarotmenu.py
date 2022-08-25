from typing import Dict, List

import utils
from utils import Userc

# 引数の内容
# text = ["リスト名" : Textファイルの読み込み内容, ...]    tarotmain.pyにて宣言
# draw_log = 数値(0~22現在何枚目かの記録)
# turn = ["リスト名" : 順番のリスト, ...]    title()にて宣言


def title(text: Dict[str, List[str]]):
    print("\n[[タロット]]\n")

    # タロットの順番と位置を抽選
    junbanlist = utils.junban(22, 0, 21)
    posijunlist = utils.posijun(22, 0, 1)
    turn = {"junbanlist": junbanlist, "posijunlist": posijunlist}
    draw_log = 0

    # ちゃんと機能しているか確認用
    # print(junbanlist)
    # print(posijunlist)

    u_choice = Userc.RESET
    # while u_choice != Userc.DRAW and u_choice != Userc.END and u_choice != Userc.INFO:
    # onose: この方が簡潔かつ挙動がわかりやすい
    while u_choice not in [Userc.DRAW, Userc.END, Userc.INFO]:
        print("1枚引く…1\t終了…2\nタロットとは…0")
        u_choice = utils.SuziJudge()

    if u_choice == Userc.INFO:
        tarot_info(turn, draw_log, text)
    elif u_choice == Userc.DRAW:
        tarot_draw(turn, draw_log, text)
        draw_log += 1
        select(turn, draw_log, text)
    elif u_choice == Userc.END:
        pass


def select(turn, draw_log, text):
    # draw_logが22の場合次の1枚を引けないようにする(今回のタロットカードが22枚のため)
    if draw_log != 22:
        u_choice = Userc.RESET
        while (
            u_choice != Userc.DRAW
            and u_choice != Userc.END
            and u_choice != Userc.RESTART
            and u_choice != Userc.EXPLAIN
            and u_choice != Userc.LIST
        ):
            print("次の1枚…1\t終了…2\n最初から…3\t解説…4\n一覧…5")
            u_choice = utils.SuziJudge()
    elif draw_log == 22:
        u_choice = Userc.RESET
        while (
            u_choice != Userc.END
            and u_choice != Userc.RESTART
            and u_choice != Userc.EXPLAIN
            and u_choice != Userc.LIST
        ):
            print("\n\t<<22種済み>>\n\n終了…2\n最初から…3\t解説…4\n一覧…5")
            u_choice = utils.SuziJudge()

    if u_choice == Userc.DRAW:
        tarot_draw(turn, draw_log, text)
        draw_log += 1
    elif u_choice == Userc.END:
        return
    elif u_choice == Userc.RESTART:
        title(text)
        return
    elif u_choice == Userc.EXPLAIN:
        tarot_exp(turn, draw_log, text)
    elif u_choice == Userc.LIST:
        tarot_list(turn, draw_log, text)

    select(turn, draw_log, text)


def tarot_info(turn, draw_log, text):
    info_data = text["info_data"]
    list_data = text["list_data"]
    exp_data = text["exp_data"]

    [print(info) for info in info_data]

    u_choice = Userc.RESET
    while u_choice != Userc.LOOK_Y and u_choice != Userc.LOOK_N:
        print("それぞれのカードの意味を\n見る場合…1\t見ない場合…2")
        u_choice = utils.SuziJudge()

    if u_choice == Userc.LOOK_Y:
        for l_data, e_data in zip(list_data, exp_data):
            print(f"\n{l_data}\n   {e_data}")
    elif u_choice == Userc.LOOK_N:
        pass

    u_choice = Userc.RESET
    while u_choice != Userc.DRAW and u_choice != Userc.END:
        print("1枚引く…1\t終了…2")
        u_choice = utils.SuziJudge()

    if u_choice == Userc.DRAW:
        tarot_draw(turn, draw_log, text)
        draw_log += 1
        select(turn, draw_log, text)
        return
    elif u_choice == Userc.END:
        return


def tarot_draw(turn, draw_log, text):
    junbanlist = turn["junbanlist"]
    posijunlist = turn["posijunlist"]
    list_data = text["list_data"]
    posi_data = text["posi_data"]

    print(
        "\n[["
        + list_data[junbanlist[draw_log]]
        + posi_data[posijunlist[draw_log]]
        + "]]\n"
    )


def tarot_exp(turn, draw_log, text):
    junbanlist = turn["junbanlist"]
    list_data = text["list_data"]
    exp_data = text["exp_data"]

    print("\n" + list_data[junbanlist[draw_log - 1]])
    print("   " + exp_data[junbanlist[draw_log - 1]])


def tarot_list(turn, draw_log, text):
    junbanlist = turn["junbanlist"]
    posijunlist = turn["posijunlist"]
    list_data = text["list_data"]
    posi_data = text["posi_data"]

    for count in range(draw_log):
        print(
            "<<"
            + str(count + 1)
            + "枚目>>\n   "
            + list_data[junbanlist[count]]
            + posi_data[posijunlist[count]]
            + "\n"
        )
        count += 1
