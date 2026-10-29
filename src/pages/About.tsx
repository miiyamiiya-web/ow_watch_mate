import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGuide } from "../context/GuideContext.tsx";

function About() {
  const { guide, setGuide } = useGuide();
  const navigate = useNavigate();

  const [titleError, setTitleError] = useState("");

  const [title, setTitle] = useState(guide.title);
  const [intro, setIntro] = useState(guide.intro);
  const [rules, setRules] = useState(guide.rules);
  const [points, setPoints] = useState(guide.points);
  const [isPreview, setIsPreview] = useState(false);

  useEffect(() => {
    setTitle(guide.title);
    setIntro(guide.intro);
    setRules(guide.rules);
    setPoints(guide.points);
  }, [guide]);

  // 閲覧画面
  if (isPreview) {
    return (
      <div className="min-h-screen bg-white text-[#202B3C]">
        <header className="flex items-center justify-between border-b border-gray-200 px-6 py-5 md:px-16">
          <Link to="/" className="text-lg font-bold">
            OW Watch Mate
          </Link>
          <Link to="/" className="text-sm">
            ホーム
          </Link>
        </header>

        <main className="mx-auto max-w-4xl px-6 py-12 md:px-16">
          <p className="text-sm font-bold text-[#F06414]">YOUR WATCH GUIDE</p>

          <h1 className="mt-3 text-3xl font-bold">
            {title.trim() || "初めてのOverwatch観戦ガイド"}
          </h1>

          <p className="mt-4 whitespace-pre-wrap leading-7 text-slate-600">
            {intro || "友達と一緒に試合を楽しむためのガイドです。"}
          </p>

          <section className="mt-8 space-y-5">
            <article className="rounded-lg border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-xl font-bold">① 試合の基本ルール</h2>
              <p className="mt-4 whitespace-pre-wrap leading-7 text-slate-600">
                {rules || "ここに試合の基本ルールが表示されます。"}
              </p>
            </article>

            <article className="rounded-lg border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-xl font-bold">② 注目ポイント</h2>
              <p className="mt-4 whitespace-pre-wrap leading-7 text-slate-600">
                {points || "ここに試合の注目ポイントが表示されます。"}
              </p>
            </article>
          </section>

          <button
            type="button"
            onClick={() => setIsPreview(false)}
            className="mt-8 rounded-md border border-slate-300 px-6 py-3 font-bold transition hover:bg-slate-50"
          >
            ← 編集に戻る
          </button>
        </main>
      </div>
    );
  }

  // 作成画面
  return (
    <div className="min-h-screen bg-white text-[#202B3C]">
      <header className="flex items-center justify-between border-b border-gray-200 px-6 py-5 md:px-16">
        <Link to="/" className="text-lg font-bold">
          OW Watch Mate
        </Link>

        <nav className="flex gap-5 text-sm">
          <Link to="/">ホーム</Link>
          <span>ガイド作成</span>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-12 md:px-16">
        <p className="text-sm font-bold text-[#F06414]">CREATE YOUR GUIDE</p>

        <h1 className="mt-3 text-3xl font-bold">観戦ガイドを作ろう</h1>

        <p className="mt-4 text-sm leading-7 text-slate-600">
          友達や家族がOverwatchの試合を楽しめるように、ガイドを作成しよう。
        </p>

        <div className="mt-8 space-y-6 rounded-lg border border-slate-200 p-5 md:p-8">
          <div>
            <label className="mb-2 block text-sm font-bold">
              ① ガイドのタイトル
            </label>
            <input
              className="w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#F06414]"
              type="text"
              placeholder="例：初めてのOverwatch観戦ガイド"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                if (e.target.value.trim()) {
                  setTitleError("");
                }
              }}
            />

            {titleError && (
              <p className="mt-2 text-sm text-red-600" role="alert">
                {titleError}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">② はじめに</label>
            <textarea
              className="w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#F06414]"
              rows={3}
              placeholder="誰と、どんな試合を見るのか紹介しよう"
              value={intro}
              onChange={(e) => setIntro(e.target.value)}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">
              ③ 試合の基本ルール
            </label>
            <textarea
              className="w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#F06414]"
              rows={4}
              placeholder="勝利条件や試合の進み方を説明しよう"
              value={rules}
              onChange={(e) => setRules(e.target.value)}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold">
              ④ 注目ポイント
            </label>
            <textarea
              className="w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-[#F06414]"
              rows={3}
              placeholder="ヒーローやチームの連携など、注目してほしい点を書こう"
              value={points}
              onChange={(e) => setPoints(e.target.value)}
            />
          </div>

          <button
            type="button"
            onClick={() => {
              if (!title.trim()) {
                setTitleError("ガイドのタイトルを入力してください。");
                return;
              }

              setTitleError("");

              setGuide({
                title,
                intro,
                rules,
                points,
              });

              navigate("/guide");
            }}
            className="w-full rounded-md bg-[#F06414] px-6 py-4 font-bold text-white transition hover:opacity-80"
          >
            プレビューを確認する →
          </button>
        </div>
      </main>
    </div>
  );
}

export default About;
