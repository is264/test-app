import React from "react";
import { useParams } from "react-router-dom";
import { posts } from "../data/posts";

export default function Post() {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id));

  return (
    <div className="w-[800px] mx-auto my-10 p-4">
      <div>
        <img src={post.thumbnailUrl} alt={post.title} />
      </div>
      <div className="p-4">
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
        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </div>
    </div>
  );
}
