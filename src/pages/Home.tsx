import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-white text-[#202B3C]">
      {/* ヘッダー */}
      <header className="flex items-center justify-between border-b border-gray-200 px-6 py-5 md:px-16">
        <Link to="/" className="text-lg font-bold">
          OW Watch Mate
        </Link>

        <nav className="flex gap-5 text-sm">
          <Link to="/">ホーム</Link>
          <Link to="/about">ガイド作成</Link>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 md:px-16">
        {/* メインビジュアル */}
        <section className="py-16 md:py-20">
          <p className="mb-4 font-bold text-[#F06414]">FOR BEGINNERS</p>

          <h1 className="text-3xl font-bold leading-relaxed md:text-5xl">
            eスポーツ観戦を、
            <br />
            <span className="text-[#F06414]">もっと楽しく。</span>
          </h1>

          <p className="mt-5 leading-8 text-slate-600">
            初めてでも大丈夫。Overwatchの試合を楽しむための
            <br className="hidden md:block" />
            観戦ガイドを作ろう。
          </p>

          <Link
            to="/about"
            className="mt-8 inline-block rounded-md bg-[#F06414] px-6 py-3 font-bold text-white transition hover:opacity-80"
          >
            観戦ガイドを作る →
          </Link>
        </section>

        {/* アプリの特徴 */}
        <section className="pb-16">
          <h2 className="text-xl font-bold">OW Watch Mateでできること</h2>

          <p className="mt-3 text-sm text-slate-600">
            知識がなくても、観戦をもっと楽しめる3つのポイント。
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            <article className="rounded-lg border border-slate-200 p-6">
              <h3 className="font-bold">① ルールを知る</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                試合の基本ルールや勝利条件を、初心者向けにわかりやすく解説。
              </p>
            </article>

            <article className="rounded-lg border border-slate-200 p-6">
              <h3 className="font-bold">② 試合を楽しむ</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                ヒーローや試合中の注目ポイントを知って、観戦をもっと面白く。
              </p>
            </article>

            <article className="rounded-lg border border-slate-200 p-6">
              <h3 className="font-bold">③ 誰かと楽しむ</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                観戦ガイドを作って、ゲームに詳しくない友達や家族にも共有。
              </p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
