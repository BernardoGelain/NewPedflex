import React from "react";
import { useCalculateTest } from "@/hooks/useCalculateTest";
import { useFetchPosts } from "@/services/posts";

export function Teste() {
  const test = useCalculateTest();

  const { postsData } = useFetchPosts();

  return (
    <div>
      {" "}
      <ul style={{ listStyleType: "circle", listStyle: "inside" }}>
        {postsData?.map((it) => (
          <li>{it.title}</li>
        ))}
      </ul>
    </div>
  );
}
