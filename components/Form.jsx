import Link from "next/link";
import React from "react";

export const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
 return (
  <section className="w-full max-w-full flex-start flex-col">
   <h1 className="head_text text-left">
    <span className="blue_gradient">{type} Post</span>
   </h1>
   <p className="desc text-left max-w-md">{type} and share unlimited prompts with your friends and co-workers, unleash your imagination with AI powered platform</p>
   <form onSubmit={handleSubmit} className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
    <label>
     <span className="font-satoshi font-extrabold text-base text-blue-700">Your AI Prompt</span>
     <textarea value={post.prompt} placeholder="Write your prompt here..." className="form_textarea" onChange={(e) => setPost({ ...post, prompt: e.target.value })} required />
    </label>
    <label>
     <span className="font-satoshi font-extrabold text-base text-gray-700">
      TAG
      <span className="font-extralight">(#idea #innovative #developer)</span>
     </span>
     <input value={post.tag} placeholder="#tag" className="form_input" onChange={(e) => setPost({ ...post, tag: e.target.value })} required />
    </label>
    <div className="flex-end mx-3 mb-5 gap-4">
     <Link href="/" className="text-gray-500 text-sm">
      Cancel
     </Link>
     <button type="submit" disabled={submitting} className="px-5 py-1 text-sm bg-purple-600 rounded-full text-white">
      {submitting ? `${type}...` : type}
     </button>
    </div>
   </form>
  </section>
 );
};
