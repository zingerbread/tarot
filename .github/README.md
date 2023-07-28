# Tarot Card
## Tarot React アプリ
### GitHub Pages
URL: https://zingerbread.github.io/tarot/

## 概要
タロットカードを React と Python で実装したものです。

## ディレクトリ構成
```
tarot/
├── .github/  # GitHub Actions 用のディレクトリ
│   ├── workflows/
│   │   ├── app-ci.yaml
│   │   └── static.yml
│   └── README.md
├── python/  # Python 実装の対話式 Tarot
│   ├── app/  # 実行ファイル
│   │   ├── main.py
│   │   ├── tarotmenu.py
│   │   └── utils.py
│   ├── data/  # タロットカードの情報
│   │   ├── tarotexplain.txt
│   │   ├── tarotinfo.txt
│   │   ├── tarotlist.txt
│   │   └── tarotposition.txt
│   ├── img/  # README.md 用の画像
│   │   ├── README_python_drow.png
│   │   └── README_python_info.png
│   └── README.md
├── react/  # React 実装のウェブアプリ Tarot
│   ├── img/  # README.md 用の画像
│   │   ├── README_GalleryPage.png
│   │   └── README_HomePage.png
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src/
│   │   ├── components/
│   │   │   ├── atoms/
│   │   │   │   ├── CardNumberChanger.tsx
│   │   │   │   ├── DeckOrder.tsx
│   │   │   │   ├── DeckPosition.tsx
│   │   │   │   └── TarotInfomation.tsx
│   │   │   ├── molecules/
│   │   │   │   ├── DeckShuffle.tsx
│   │   │   │   └── TarotCardImageViewer.tsx
│   │   │   ├── organisms/
│   │   │   │   └── Header.tsx
│   │   │   └── pages/
│   │   │       ├── Gallery.tsx
│   │   │       └── Home.tsx
│   │   ├── tarot_temp_image/  # ウェブアプリ用のタロットカードの画像
│   │   │   ├── Blank.png
│   │   │   ├── I.png
│   │   │   ├── II.png
│   │   │        :
│   │   │        :
│   │   │   └── XXI.png
│   │   ├── App.css
│   │   ├── App.test.tsx
│   │   ├── App.tsx
│   │   ├── index.css
│   │   ├── index.tsx
│   │   ├── logo.svg
│   │   ├── react-app-env.d.ts
│   │   ├── reportWebVitals.ts
│   │   └── setupTests.ts
│   ├── 404.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   ├── tsconfig.json
│   └── yarn.lock
└── .gitignore
```