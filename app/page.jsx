import Feed from "@components/Feed";
import React from "react";

const Home = () => {
 return (
  <section className="w-full flex justify-center flex-col">
   <h1 className="head_text text-center">
    Discover & Share
    <br className="max-md" />
    <span className="orange_gradient text-center">AI powered Prompts</span>
   </h1>
   <p className="mt-5 text-xl text-center text-gray-600">Promptz is an open-source AI prompting tool for modern world to discover, create and share creative prompts</p>
   <Feed />
  </section>
 );
};

export default Home;
