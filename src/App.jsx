import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import Contact from "./pages/Contact";
import Post from "./pages/Post";
import Posts from "./pages/Posts";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
