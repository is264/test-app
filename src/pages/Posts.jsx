import React from "react";
import { posts } from "../data/posts";

export default function Posts() {
  return (
    <ul className="flex flex-col gap-8 w-[800px] mx-auto my-10">
      {posts.map((post) => {
        return (
          <li key={post.id} className="border border-[#ccc] p-4">
            <a href={`/posts/${post.id}`}>
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
            </a>
          </li>
        );
      })}
    </ul>
  );
}
