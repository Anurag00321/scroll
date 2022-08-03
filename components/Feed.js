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
            <div className="rounded  p-2 w-fit lg:w-[580px] flex border bg-gray-100 h-fit border-gray-200 mx-6 ml-16">
              <div className="items-start">
                <p className=" font-bold mr-24 w-24">
                  {post.title || post.event}</p>
                <p className="text-gray-700 text-sm">
                  {post.type }
                </p> {post.company}
              </div>
            
              <div className="flex ml-80">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQTdM7mKf1vzRR3GEuU7CDlS7V_JT3m1ob9WXOpmfpv2dSo56W8NILorjELjKczOxpmQw&usqp=CAU" className="w-60 h-20"/>
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
