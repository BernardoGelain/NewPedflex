import React from "react";
import { useCalculateTest } from "@/hooks/useCalculateTest";
import { useFetchPost, useFetchPosts } from "@/services/posts";

export function Teste() {
  const [id, setId] = React.useState(null);

  const test = useCalculateTest();

  const { postsData } = useFetchPosts();
  const { postData } = useFetchPost(id);

  return (
    <div>
      {" "}
      <ul style={{ listStyleType: "circle", listStyle: "inside" }}>
        <li>
          <b>{postData?.title ?? ""}</b>
        </li>
        {postsData?.map((it) => (
          <li>{it.title}</li>
        ))}
      </ul>
    </div>
  );
}
