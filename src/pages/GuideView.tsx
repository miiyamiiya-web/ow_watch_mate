import { Link } from "react-router-dom";
import { useGuide } from "../context/GuideContext.tsx";

function GuideView() {
  const { guide } = useGuide();

  return (
    <div className="min-h-screen bg-white text-[#202B3C]">
      <header className="flex items-center justify-between border-b border-gray-200 px-6 py-5 md:px-16">
        <Link to="/" className="text-lg font-bold">
          OW Watch Mate
        </Link>

        <Link to="/about" className="text-sm">
          ガイド作成に戻る
        </Link>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12 md:px-16">
        <p className="text-sm font-bold text-[#F06414]">YOUR WATCH GUIDE</p>

        <h1 className="mt-3 text-3xl font-bold">
          {guide.title.trim() || "初めてのOverwatch観戦ガイド"}
        </h1>

        <p className="mt-4 whitespace-pre-wrap leading-7 text-slate-600">
          {guide.intro || "友達と一緒に試合を楽しむためのガイドです。"}
        </p>

        <section className="mt-8 space-y-5">
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-bold">① 試合の基本ルール</h2>
            <p className="mt-4 whitespace-pre-wrap leading-7 text-slate-600">
              {guide.rules || "ここに試合の基本ルールが表示されます。"}
            </p>
          </article>

          <article className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-bold">② 注目ポイント</h2>
            <p className="mt-4 whitespace-pre-wrap leading-7 text-slate-600">
              {guide.points || "ここに試合の注目ポイントが表示されます。"}
            </p>
          </article>
        </section>

        <Link
          to="/about"
          className="mt-8 inline-block rounded-md bg-[#F06414] px-6 py-3 font-bold text-white transition hover:opacity-80"
        >
          ガイドを編集する
        </Link>
      </main>
    </div>
  );
}

export default GuideView;
