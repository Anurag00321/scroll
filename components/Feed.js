import Image from "next/image";
import React, { useEffect, useRef } from "react";
import bg from "../public/assets/user.png";
import { useState } from "react";
import { app, db } from "../firebase";
import {
  collection,
  query,
  doc,
  orderBy,
  onSnapshot,
  getDocs,
  QuerySnapshot,
  Timestamp,
} from "firebase/firestore";
import { data } from "autoprefixer";
import moment from "moment";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [dropdown, setDropdown] = useState(false)
 

  useEffect(() => {
    const collectionRef = collection(db, "posts");

    const q = query(collectionRef, orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      setPosts(
        QuerySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.data().timestamp?.toDate().getTime(),
        }))
      );
    });
    return unsubscribe;
  }, []);
 
 
 
  const Post = [
    {
      id: 1,
      name: "Anurag",
      desc: "asdfghjkl;lkjhvcxcvbnklkjhxfghjkjgxvhjkjvcxxcvbnk",
      image: "/assets/user.png",
      context: "Opportunity",
    },
    {
      id: 2,
      name: "Anurag",
      desc: "asdfghjkl;lkjhvcxcvbnklkjhxfghjkjgxvhjkjvcxxcvbnk",
      image: "/assets/user.png",
      context: "URL",
    },
    {
      id: 3,
      name: "Anurag",
      desc: "asdfghjkl;lkjhvcxcvbnklkjhxfghjkjgxvhjkjvcxxcvbnk",
      image: "/assets/user.png",
      context: "URL",
    },
    {
      id: 4,
      name: "Anurag",
      desc: "asdfghjkl;lkjhvcxcvbnklkjhxfghjkjgxvhjkjvcxxcvbnk",
      image: "/assets/user.png",
      context: "URL",
    },
  ];

  
  return (
    <div className="items-center">
      {posts.map((post) => (
        <div
          key={post.id} href="#"
          className="h-fit overflow-hidden cursor-pointer border-b border-gray-200"
        >
          <div className="px-4 z-50 p-4 md:p-8 h-fit cursor-pointer">
            <div className="flex items-center justify-between">
              <a className="items-center flex">
                <Image
                  className="rounded-2xl cursor-pointer border border-black"
                  src="/assets/user.png"
                  width={40}
                  height={40}
                />
                <h2 className="mx-2 flex flex-col text-black font-semibold">
                  Guest
                  <span className="font-light text-gray-500 text-sm">
                   Just now
                                    </span>
                </h2>
              </a>
              <div className="flex items-center">
                <div className="text-center text-sm h-fit font-semibold border items-end border-gray-500 w-fit px-2 rounded bg-gray-100 ">
                  Opportunity
                </div>
                <div>
                  <button onClick={() => setDropdown(!dropdown)} className="bg-white mx-2 p-1 hover:bg-gray-100 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler rounded-full icon-tabler-dots-vertical"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <desc>
                        Download more icon variants from
                        https://tabler-icons.io/i/dots-vertical
                      </desc>
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="12" cy="19" r="1"></circle>
                      <circle cx="12" cy="5" r="1"></circle>
                    </svg>
                  </button>
                  
                </div>
              </div>
            </div>
            <p className="my-4 mx-12">{post.text} </p>
            <a href={post.url} className="my-4 mx-12 text-green-500 hover:underline" >{post.url}</a>
          </div>
          <div>
            <a href={post.url}>
            <div className="rounded justify-between p-2 w-full lg:w-[580px] flex border bg-gray-100 h-fit lg:ml-16 border-gray-200 mx-6 ">
              <div className="items-start">
                <p className=" font-bold mr-24 w-24">
                  {post.title || post.event}</p>
                <p className="text-gray-700 text-sm">
                  {post.type }
                </p> {post.company}
              </div>
                <div>
                  <image src={post.image}/>
                </div>
              <div className="flex">
              <img src="data:image/png;base64,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" className="w-60 h-25"/>
            </div></div></a>
          </div>
          <div className="mx-16 flex gap-8 py-4 pb-12">
            <a className="hover:bg-green-300 rounded-2xl p-2 outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=""
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="2"
              >
                <path d="M13,11H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Zm4-4H7A1,1,0,0,0,7,9H17a1,1,0,0,0,0-2Zm2-5H5A3,3,0,0,0,2,5V15a3,3,0,0,0,3,3H16.59l3.7,3.71A1,1,0,0,0,21,22a.84.84,0,0,0,.38-.08A1,1,0,0,0,22,21V5A3,3,0,0,0,19,2Zm1,16.59-2.29-2.3A1,1,0,0,0,17,16H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z"></path>
              </svg>
            </a>
            <a className="hover:bg-green-200 rounded-2xl p-2 outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-thumb-up"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <desc>
                  Download more icon variants from
                  https://tabler-icons.io/i/thumb-up
                </desc>
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3"></path>
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feed;
