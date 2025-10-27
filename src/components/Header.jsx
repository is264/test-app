/**
 * ヘッダー
 */
export const Header = () => {
  return (
    <header className="flex justify-between items-center h-[72px] p-6 bg-[#333] text-white font-bold">
      <h1>
        <a href="/">Blog</a>
      </h1>
      <nav className="flex items-center gap-4">
        <a href="/contact">お問い合わせ</a>
      </nav>
    </header>
  );
};
