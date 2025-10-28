import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="flex justify-between items-center h-[72px] p-6 bg-[#333] text-white font-bold">
      <h1>
        <Link to="/">Blog</Link>
      </h1>
      <nav className="flex items-center gap-4">
        <Link to="/contact">お問い合わせ</Link>
      </nav>
    </header>
  );
};
