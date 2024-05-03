"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { signIn, signOut, getProviders, useSession } from "next-auth/react";

const Nav = () => {
 const { data: session } = useSession();
 const [providers, setProviders] = useState(null);
 const [toggleDropDown, setToggleDropDown] = useState(false);
 useEffect(() => {
  const setUpProviders = async () => {
   const res = await getProviders();
   setProviders(res);
  };
  setUpProviders();
 }, []);

 return (
  <nav className="flex justify-between w-full mb-16 pt-3">
   <Link href="/" className="flex gap-2 justify-center">
    <Image src="/assets/images/logo.svg" alt="logo" width={30} height={30} className="object-contain" />
    <p className="logo_text">Promptz</p>
   </Link>

   {/* desktop nav */}
   <div className="sm:flex hidden">
    {session?.user ? (
     <div className="flex gap-3 md:gap-5">
      <Link href="/create-prompt" className="black_btn">
       Create Post
      </Link>
      <button type="button" onClick={signOut} className="outline_btn">
       Sign Out
      </button>
      <Link href="/profile">
       <Image src={session?.user.image} width={35} height={35} className="rounded-full" alt="profile" />
      </Link>
     </div>
    ) : (
     <>
      {providers &&
       Object.values(providers).map((provider) => (
        <button type="button" key={provider.name} onClick={() => signIn(provider.id)} className="black_btn">
         Sign In
        </button>
       ))}
     </>
    )}
   </div>
   {/* mob nav */}
   <div className="flex sm:hidden relative">
    {session?.user ? (
     <div className="flex">
      <Image src={session?.user.image} width={35} height={35} className="rounded-full" alt="profile" onClick={() => setToggleDropDown((prev) => !prev)} />
      {toggleDropDown && (
       <div className="dropdown">
        <Link href="/profile" className="dropdown_link" onClick={() => setToggleDropDown(false)}>
         My Profile
        </Link>
        <Link href="/create-prompt" className="dropdown_link" onClick={() => setToggleDropDown(false)}>
         Create Prompt
        </Link>
        <button
         type="buttton"
         onClick={() => {
          setToggleDropDown(false);
          signOut();
         }}
         className="mt-5 w-full black_btn"
        >
         Sign Out
        </button>
       </div>
      )}
     </div>
    ) : (
     <>
      {providers &&
       Object.values(providers).map((provider) => (
        <button type="button" key={provider.name} onClick={() => signIn(provider.id)} className="black_btn">
         Sign In
        </button>
       ))}
     </>
    )}
   </div>
  </nav>
 );
};

export default Nav;
