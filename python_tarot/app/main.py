import random
import argparse
from dataclasses import dataclass
from enum import Enum
from os.path import join as pjoin
from typing import Generator, List, Optional

from utils import TextRead


@dataclass
class TarotCard:
    """カード情報を定義"""

    title: str
    explain: str
    position: Optional[str]  # shuffle 時に position が入る

    def __str__(self):
        """
        NOTE:
            このクラスが str 型に変換された場合に呼び出される
            例
            >>> card = TarotCard('hoge', 'fuga', None)
            >>> print(card)
            hoge (fuga)
            >>> str(card)
            hoge (fuga)
        """
        return f"{self.title} ({self.explain}) {self.position}"


class TarotCardDeck:
    """カードのデッキとその操作"""

    def __init__(self, list_data: List[str], exp_data: List[str], posi_data: List[str]):
        # 手軽にデータチェックなど行いたい時に assert が便利
        assert len(list_data) == len(exp_data)
        self.cards = [
            TarotCard(title, explain, None)
            for title, explain in zip(list_data, exp_data)
        ]
        self.positions = posi_data

    def __str__(self):
        return "\n".join([f"{x}" for x in self.cards])

    def card_generator(self) -> Generator[TarotCard, None, None]:
        """
        NOTE:
            今回のようなループ処理は Python のジェネレータを使うと簡潔に書ける
            最初は理解しづらいと思うが、ぜひ習得してほしい
        TODO:
            シャッフル機能を追加    -完了
                こんなんでいけるはず
                >>> shuffled_card = random.shuffle(self.cards)

            ランダムに position を入れる    -完了
                本クラスに position の候補も入れる必要がある
        """

        for card in self.cards:
            card.position = random.choice(self.positions)
            yield card


class GameState(Enum):
    TITLE = 0
    DRAWING = 1
    FINISHED = 2
    EXITED = 3
    INFORMATION = 4


class GameManager:
    def __init__(self, deck: TarotCardDeck, info):
        """
        NOTE:
            Global 的に使いたかった変数は、クラスのプロパティとして定義するとよさそう
            今回は GameState 型の self.state にて宣言
        """
        self.info = info
        self.deck = deck
        self.state: GameState = GameState.TITLE
        pass

    def run(self):
        while True:
            if self.state == GameState.TITLE:
                self.handle_title()
            elif self.state == GameState.DRAWING:
                self.handle_drawing()
            elif self.state == GameState.FINISHED:
                pass
            elif self.state == GameState.INFORMATION:
                self.handle_information()
            else:
                break
        print("Bye!")

    def handle_title(self):
        """
        NOTE:
            選択肢の使い回しが少ない場合は Enum を使わなくてもいい気がしてきた
            簡潔かつ直感的な理解のしやすさを優先
        """
        print("1枚引く…1\t終了…2\nタロットとは…0")
        choise = input("> ")
        if choise == "1":
            self.state = GameState.DRAWING
            return
        elif choise == "2":
            self.state = GameState.EXITED
            return
        elif choise == "0":
            # TODO: 要実装    -完了
            self.state = GameState.INFORMATION
            return
        else:
            print("無効な入力")

    def handle_drawing(self):
        drawed_cards: List[TarotCard] = []
        for card in self.deck.card_generator():
            print(f"{card.title}{card.position}")
            drawed_cards.append(card)
            while True:
                if len(drawed_cards) < 22:
                    print("次の1枚…1\t終了…2\n最初から…3\t解説…4\n一覧…5")
                else:
                    print("<<22種済>>\t終了…2\n最初から…3\t解説…4\n一覧…5")
                choise = input("> ")
                if choise == "1" and len(drawed_cards) < 22:
                    break
                elif choise == "2":
                    self.state = GameState.EXITED
                    return
                elif choise == "3":
                    self.state = GameState.TITLE
                    return
                elif choise == "4":
                    # NOTE: リストで -1 を指定すると末尾のものを返せる
                    print(drawed_cards[-1].explain)
                    pass
                elif choise == "5":
                    print(
                        "\n".join([f"{i:02d}: {x}" for i, x in enumerate(drawed_cards)])
                    )
                else:
                    print("無効な入力")

    def handle_information(self):
        print()
        for line in self.info:
            print(line)
        print()
        while True:
            print("それぞれのカードの意味を\n見る場合…1\t見ない場合…2")
            choise = input("> ")
            if choise == "1":
                print(f"\n{self.deck}\n")
                break
            elif choise == "2":
                break
            else:
                print("無効な入力")

        self.state = GameState.TITLE


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

    info = info_data
    deck = TarotCardDeck(list_data, exp_data, posi_data)
    game = GameManager(deck, info)
    try:
        game.run()
    except KeyboardInterrupt:
        print("Bye!")
    except EOFError:
        print("Bye!")
    return


if __name__ == "__main__":
    main()
