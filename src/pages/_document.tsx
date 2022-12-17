import NextDocument, { Head, Html, Main, NextScript } from "next/document";

type Props = {};

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icon/apple-touch-icon.webp"
          />
          <link
            rel="icon"
            type="image/webp"
            sizes="32x32"
            href="/icon/favicon-32x32.webp"
          />
          <link
            rel="icon"
            type="image/webp"
            sizes="16x16"
            href="/icon/favicon-16x16.webp"
          />
          <meta
            name="description"
            content="岡山大学祭2021の特設サイトです！今年は「笑顔満祭岡大祭 〜心機一転しちゃいな祭〜」をテーマに、11/7（日）〜11/17（水）の期間中開催されます。岡山大学生が準備したコンテンツをふんだんに披露していきますので、是非この1週間お楽しみください！"
          />
          <meta name="og:image" content="https://oufes2021.com/ogp.webp" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
