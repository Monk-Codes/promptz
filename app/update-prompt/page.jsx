"use client";
import { Form } from "@components/Form";
import { useRouter } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";

const EditPrompt = () => {
 const router = useRouter();
 const [submitting, setSubmitting] = useState(false);
 const [post, setPost] = useState({ prompt: "", tag: "" });

 useEffect(() => {
  const getPromptDetails = async () => {
   const searchParams = await import("next/router").then((router) => router.useSearchParams());
   const promptId = searchParams.get("id");
   if (!promptId) return;

   try {
    const response = await fetch(`/api/prompt/${promptId}`);
    if (!response.ok) {
     throw new Error("Failed to fetch prompt details");
    }
    const data = await response.json();
    setPost({
     prompt: data.prompt,
     tag: data.tag,
    });
   } catch (error) {
    console.error(error);
   }
  };

  getPromptDetails();
 }, []);

 const updatePrompt = async (e) => {
  e.preventDefault();
  setSubmitting(true);
  const promptId = router.query.id;
  if (!promptId) return alert("Prompt not found");

  try {
   const res = await fetch(`/api/prompt/${promptId}`, { method: "PATCH", body: JSON.stringify({ prompt: post.prompt, tag: post.tag }) });
   if (res.ok) {
    router.push("/profile");
   }
  } catch (error) {
   console.error(error);
  } finally {
   setSubmitting(false);
  }
 };

 return (
  <Suspense fallback={<div>Loading...</div>}>
   <Form type="Edit" post={post} setPost={setPost} submitting={submitting} handleSubmit={updatePrompt} />
  </Suspense>
 );
};

export default EditPrompt;
