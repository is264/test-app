import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../const";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch(`${API_BASE_URL}/posts`);
      const data = await res.json();
      setPosts(data.posts);
      setIsLoading(false);
    };
    fetcher();
  }, []);

  if (isLoading) {
    return (
      <div className="w-[800px] mx-auto my-10 text-center text-2xl">
        読込中...
      </div>
    );
  }

  return (
    <ul className="flex flex-col gap-8 w-[800px] mx-auto my-10">
      {posts.length > 0 ? (
        posts.map((post) => {
          return (
            <li key={post.id} className="border border-[#ccc] p-4">
              <Link to={`/posts/${post.id}`}>
                <div className="flex justify-between">
                  <div className="text-xs text-[#888888]">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </div>
                  <div className="flex justify-end gap-2">
                    {post.categories.map((category) => {
                      return (
                        <span
                          key={category}
                          className="text-xs text-[#0066cc] border border-[#0066cc] rounded-sm px-2 py-1"
                        >
                          {category}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div className="text-2xl mt-2 mb-4">{post.title}</div>
                <div
                  className="line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                ></div>
              </Link>
            </li>
          );
        })
      ) : (
        <div className="w-[800px] mx-auto my-10 text-center text-2xl">
          記事がありません
        </div>
      )}
    </ul>
  );
}
