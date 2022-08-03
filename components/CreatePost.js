import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";




function Post() {
  const [count, setCount] = useState(0);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [details, setDetails] = useState(false);
  const [context, setContext] = useState("Add context");
  const [image, setImage] = useState(null);
  const prevContext = useRef("Add context");
  const filepickerRef = useRef(null);
  const inputRef = useRef(null);
  const urlRef = useRef(null);
  const btnRef = useRef();

  const addImage = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImage(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImage(null);
  };

  const [post, setPost] = useState({
    text: "",
    category: "",
    url: "",
    title: "",
    type: "",
    company: "",
    apply: "",
    event: "",
    image: "",
  });
  const onSubmit = async () => {
    const collectionRef = collection(db, "posts");
    const docRef = await addDoc(collectionRef, {
      ...post,
      timestamp: serverTimestamp(),
    });
    setPost({
      text: "",
      category: "",
      url: "",
      title: "",
      type: "",
      company: "",
      apply: "",
    });
  };

  useEffect(() => {
    const closeDropdown = (e) => {
      if (e.path[0] !== btnRef.current) {
        setShow2(false);
      }
    };

    document.body.addEventListener("click", closeDropdown);

    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  const Context = [
    {
      id: 1,
      name: "Opportunity",
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-briefcase"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <rect x="3" y="7" width="18" height="13" rx="2"></rect>
          <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>
          <line x1="12" y1="12" x2="12" y2="12.01"></line>
          <path d="M3 13a20 20 0 0 0 18 0"></path>
        </svg>
      ),
      desc: "Let everyone know if you or someone is hiring",
    },
    {
      id: 2,
      name: "URL",
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-link"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokewidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"></path>
          <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"></path>
        </svg>
      ),
      desc: "Share URL of your project,article,profile,etc",
    },
    {
      id: 3,
      name: "Event",
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-calendar-event"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <rect x="4" y="5" width="16" height="16" rx="2"></rect>
          <line x1="16" y1="3" x2="16" y2="7"></line>
          <line x1="8" y1="3" x2="8" y2="7"></line>
          <line x1="4" y1="11" x2="20" y2="11"></line>
          <rect x="8" y="15" width="2" height="2"></rect>
        </svg>
      ),
      desc: "Hosting an event? Share with Peerlist community!",
    },
    {
      id: 4,
      name: "Book",
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-book"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
          <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
          <line x1="3" y1="6" x2="3" y2="19"></line>
          <line x1="12" y1="6" x2="12" y2="19"></line>
          <line x1="21" y1="6" x2="21" y2="19"></line>
        </svg>
      ),
      desc: "What are you reading? Any book recommendations?",
    },
  ];

  function onCancel() {
    setShow1(false);
    setHidden(true);
    setCount(0);
    removeImage();
    post.text = "";
    post.url = "";
  }

  function somefunc() {
    setHidden(false);
    setShow2(false);
  }

  return (
    <div className="lg:mt-16 mt-16 rounded">
      <div className="bg-gray-100 p-6 border-b border-gray-200">
        <div className="border rounded-lg border-gray-200 ">
          <div>
            <div className=" rounded-lg border border-gray-100 focus-within:border-gray-100 relative rounded-t-lg lg:max-w-[630px] h-fit">
              <div className="flex flex-1 flex-col">
                <div className="rounded-lg bg-white min-h-12 max-h-[620px] p-2 font-semibold text-gray-900 text-sm h-fit  resize-none placeholder:text-xs outline-none">
                  <form onChange={(e) => setCount(e.target.value.length)}>
                    <label className="font-light text-sm mb-0.5 mx-2">
                      Write a post...
                    </label>
                    <textarea
                      id="textarea"
                      ref={inputRef}
                      type="text"
                      value={post.text}
                      onChange={(e) =>
                        setPost({ ...post, text: e.target.value })
                      }
                      onFocus={() => setShow1(true)}
                      maxLength={280}
                      rows="4"
                      className=" w-full h-fit px-2 text-sm font-normal outline-none resize-none"
                    ></textarea>
                  </form>
                  <input
                    hidden={context != "URL"}
                    ref={urlRef}
                    required
                    value={post.url}
                    onChange={(e) => setPost({ ...post, url: e.target.value })}
                    className="border border-gray-500 px-2 mx-2 outline-none rounded w-[600px] h-12"
                    placeholder="Enter url..."
                  />
                  <form hidden={context != "Opportunity"}>
                    <input
                      required
                      value={post.title}
                      onChange={(e) =>
                        setPost({ ...post, title: e.target.value })
                      }
                      className="w-72 px-2 h-12 placeholder:text-sm border-gray-500 rounded outline-none border mx-4"
                      placeholder="Opportunity title"
                    />
                    <input
                      required
                      value={post.type}
                      onChange={(e) =>
                        setPost({ ...post, type: e.target.value })
                      }
                      placeholder="Opportunity type"
                      className=" w-72 placeholder:text-sm px-2 h-12 border-gray-500 rounded outline-none border"
                    />
                    <div className="my-2">
                      {details ? (
                        <button
                          onClick={() => setDetails(!details)}
                          className=" flex px-64 text-green-700 duration-200"
                        >
                          <span>less details</span>
                          <img
                            className="py-1.5 mx-1"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuT3onCpon-iJNIyNBS6NVOeLiNvRAnh_t_w&usqp=CAU"
                            width={10}
                            height={8}
                          />
                        </button>
                      ) : (
                        <button
                          onClick={() => setDetails(!details)}
                          className=" flex px-64 text-green-700"
                        >
                          <span>more details</span>
                          <img
                            className="py-1.5 mx-1"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJEAAACRCAMAAAD0BqoRAAAAWlBMVEX///8AAAD5+flHR0fq6urW1tZCQkLR0dHa2tru7u5KSkr19fU/Pz/x8fEwMDAsLCwfHx8KCgoaGhonJyfAwMBnZ2eSkpKZmZk1NTUUFBRWVlarq6vj4+OAgIDmRZahAAAC8klEQVR4nO2Y3XaqMBBGCxKIQEW0tcfavv9rHtFlmy8/EJJJ7MXsW2gz60vYE+flhWEYhmEYhmEYhmEYhmEYhvlLvL0P/anKvGh16of3N/uzj2KiFlkL+mpvq57cBV3JWZJ8LPpheTg+Hu6afAX1j0VHy8Pil1wpyfPvmtJ4KpSKjnlSkv9mUyiVp8UhR0pfR3XJ0nzhG0pKn5IY1AW/LW9sN+obR3NfaZE7dbn21fZOWavvFGlTEgd1rdqyZxNVr761S5kSHOqidzaKsoWU0h1vCeu0joQmtrBxu1QlCUio3s69+4oppdk4LSHroVZKgpSGFMe7ga+sXijounGQ0pk+JQlfWTu7ZXc6SIm8oTRg6rrz+ZsKS6JNSWJBnvdDVOWZMqXmDAXNfPZIMlVi63CL0aSEHkemSgH/deOd0ESVQpUCP/uVvzE6elVqYvT6ylTwckJw90Yxbjw8NF/SGJuSHGMLum4clBTZUFCMm8XWYaeCkvYxKck9FBT8w7kEL+3DU2qgl/WrPnsEVTmEpoStY40YTbS7d5iXGvgf/q3DDoEq8WfQWjGa4BcXoEqtdawWo0mkKuPFaCkppqForYOkoOvdO1yVNGI0wY07+Kck4IJGs2V3AlXZgKljxGhShYwpBG4Z8cwVUxp9UkIx0iY0oalyOSVqMZqsvHvH3Kl9qdaoUhNjorn9ijHFumFDONowx51Sg2eI0ENGSZDS6DpLAu7UVK3DTgcScIwpNDESdPs5NFXaUhJEd2pfFlXZwJbRi9Fk4e4t4VDH3al90VSJKWHrSCNGk5m7d9ywIZzONffG1rF+2BCOQ5X5xGgpCVV5P95aQlkLsk50Q6awlGhjCpFdjCba3fuS8E7tC6oSyCNGE02VypY9JaEJR0rPSmhCU+WdnGI0QVXeyCtGS0l6SrnFaIJjCsJhQzigymeI0USZVcbOGKn4kcAzP3uk/LwV9PlHEproLu2xvTzVQwzDMAzDMAzDMAzDMAzDMAwh/wHQaBcK24S2SgAAAABJRU5ErkJggg=="
                            width={10}
                            height={8}
                          />
                        </button>
                      )}
                      {details ? (
                        <div className="my-2">
                          <div className="flex gap-4 mx-4">
                            <input
                              placeholder="Company name"
                              value={post.company}
                              onChange={(e) =>
                                setPost({ ...post, company: e.target.value })
                              }
                              className="w-72 px-2 h-12 placeholder:text-sm border border-gray-500 outline-none rounded"
                            />
                            <input
                              placeholder="Company website"
                              value={post.url}
                              onChange={(e) =>
                                setPost({ ...post, url: e.target.value })
                              }
                              className="w-72 px-2 h-12 placeholder:text-sm border border-gray-500 outline-none rounded"
                            />
                          </div>
                          <div className="flex my-4">
                            <input
                              placeholder="Apply link"
                              value={post.apply}
                              onChange={(e) =>
                                setPost({ ...post, apply: e.target.value })
                              }
                              className="w-72 px-2 h-12 placeholder:text-sm border border-gray-500 outline-none rounded mx-4"
                            />
                            <input
                              placeholder="Country"
                              className="w-36 px-2 h-12 placeholder:text-sm border border-gray-500 rounded outline-none mx-1"
                            />
                            <input
                              placeholder="City"
                              className="w-36 px-2 h-12 placeholder:text-sm border border-gray-500 rounded outline-none"
                            />
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </form>
                  <form hidden={context != "Event"}>
                    <input
                      required
                      placeholder="Event name"
                      value={post.event}
                      onChange={(e) =>
                        setPost({ ...post, event: e.target.value })
                      }
                      className="w-72 px-2 h-12 placeholder:text-sm border border-gray-500 outline-none rounded mx-2"
                    />
                    <input
                      placeholder="Enter URL"
                      value={post.url}
                      onChange={(e) =>
                        setPost({ ...post, url: e.target.value })
                      }
                      className="w-72 px-2 h-12 placeholder:text-sm border border-gray-500 outline-none rounded mx-2"
                    />
                    <input
                      required
                      placeholder="Event date and time"
                      className="w-72 my-4 px-2 h-12 placeholder:text-sm border border-gray-500 outline-none rounded mx-2"
                    />
                    <button
                      onClick={() => filepickerRef.current.click()}
                      onChange={(e) =>
                        setPost({ ...post, image: e.target.value })
                      }
                      className="w-36 flex gap-2 mx-2 px-2 h-8 items-center justify-center border border-gray-500 rounded outline-none "
                    >
                      <Image src="/assets/image.png" width={20} height={20} />
                      <span>Add image</span>
                      <input
                        ref={filepickerRef}
                        value={post.image}
                        onChange={addImage}
                        type="file"
                        hidden
                      />
                    </button>
                    {image && (
                      <div onClick={removeImage} className="">
                        <Image src={image} width={50} height={50} />
                        <p className="text-red-500">delete</p>
                      </div>
                    )}
                  </form>
                  <form hidden={context != "Book"}>
                    <input
                      required
                      placeholder="Book name"
                      className="w-[600px] h-12 px-2 border border-gray-500 rounded outline-none mx-2"
                    />
                  </form>
                </div>
                <p className="absolute text-xs font-light right-2 top-2 px-2 justify-self-end text-right ml-auto block">
                  {count}/280
                </p>
                {show1 ? (
                  <div
                    hidden
                    className="bg-gray-100 border-t border-gray-200 flex h-12 w-full items-center flex-row-reverse sm:flex-row justify-between rounded-b-lg"
                  >
                    <div className="flex items-center flex-row-reverse sm:flex-row">
                      <button
                        className="focus:outline-none mx-0 rounded-sm text-green-600 hover:text-green-700 text-xs flex items-center font-semibold"
                        type="button"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-question-mark"
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
                            https://tabler-icons.io/i/question-mark
                          </desc>
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4"></path>
                          <line x1="12" y1="19" x2="12" y2="19.01"></line>
                        </svg>
                        <span className="ml-1 hidden sm:block">
                          Scroll guidelines
                        </span>
                      </button>
                      <div onClick={() => setContext("Add Context")}>
                        <button
                          type="button"
                          onClick={() => setShow2(false)}
                          className="text-xs text-gray-500 cursor-pointer disabled:cursor-not-allowed mx-4"
                        >
                          <a onClick={() => onCancel()}>
                            <span className="font-serif focus:outline-none hover:text-normal hover:underline ">
                              Cancel
                            </span>
                          </a>
                        </button>
                      </div>
                    </div>
                    <div className="flex gap-2  font-semibold items-center">
                      <div onClick={() => setShow2(!show2)}>
                        <button onChange={() => setPost({...post, category: e.target.value})}
                           ref={btnRef}
                          className="flex bg-white h-8 w-auto justify-center items-center px-2 py-1 border border-gray-200 rounded"
                        >
                          {context}
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADm5uZOTk7q6upQUFDl5eVKSkpSUlJLS0tGRkZhYWFBQUE1NTXs7OwZGRkmJiadnZ2CgoLFxcURERG3t7cLCwtqamrCwsJWVlba2tqPj4+WlpZeXl6lpaV1dXUU3MJPAAAD+UlEQVR4nO3d61LjMAwF4ARaChQobZfL3uD933IrQjZJ7aixY1tS5nw/0zITzZEtN9ChqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMWu23D4/rw1H6PpI4HtaPD9v9qndpta2//XgRu69UXl7bYrZP7bVj3fMmeXcJbPvFfPfkez1wL3uHM90Pi3mna6v6zFr6LmdYnxdDjXp9frHeSN9ntI1Ty8+q+uVcrOtr6TuN5IZV1zfVb8/V+k76XqPc+Ur54wnWaoneAk9t+uq9brBRfS16sqv81+1tN/5ePKl2Y6/YStEZE12Gf8deMjX670er2FYfo68ZSnFkDZIP90jTY2Utjq7B+utQ88m8bGNo+MdE40BvYF43kSKX4O7rHTe2S+QKrK+a97Alam9UrkVPh9JvV3ZTnJIgYVPUPDSYMdFLkHAzQ/HoHx/0J6vhe9lG1boW2TV4df5ugymGJEjMpRiWIGFT1LejsruoJ0FiKsXwBAlboq6hwY6J0QINNWpMizaMpBibIDExNELHxJCBFOckSNSvxfg12FKe4twECZui9Fxk5+CkBIni0R836F1siZK/X0zRog2lKc7fZDrsp36pFNMlSBQOjXmD3qUuxbQJEmVDI+UabKlKcfTXZ9EJEkWnG7ZFIxMkakpMvwZbSkZ/nhZtqBj9ac6iY9jt5jbF/V+UM0EiPvpzjIkh4RRzJ0jYFHPvqHnXYEswxRIJErGhkWvQu4RKzDfoXWyJuRq1VIs2BA5wZTaZTvHtpmyCpPDnxfyD3lU0xdviCZKCo7/cmBgqlqJMgqTQXGQ3mYwJkiIllt9F+wqMfrkWbWQf/VKbTCfzdiOdIMn6qV9i0LsypqghQZLtACe/BluZHvhrSZBk2VElB70rQ4myg96V/HSjqUUbiR/469lkOkmHhr4EScLRr2PQu5KlqDNBkmj0l36qFiLJt220jYmhBDuqxl20b3aJJR/dx5l5utHdoo1ZX+7TOiaGZnzSsJAgif4L/9R/jJdPZIpWEiRRBzgba7AVsaPqHxNDwTuq5qOaX2CJU7+FrUnQ6SbV1wrKCkjR1ibTmZyitU2mM3H02xn0rklDw9Kgd0341G9vTAxdfI6q95nMVGyKt3yBBhIkbIksIwVeaFSGiRZtxKVoJkESk6KhBEl4iqYSJKEpGkuQhKVoLkESkqLBBMn0FE0mSKamaDRBMq1EwwVOa1SzLdq4nKLpBMmlFI0nSPgUzSdIuBQXkCAZT3ERCZKxFBeSIPGXuJgEia/ERRXoK3FBLdo4324WliB5eu7V9/x0+QcM2v8vcC99K9m8vG0eN5/2/2sWAAAAAAAAAAAAAAAAAAAAAAAAAAAAQD7/AD33Iwpcu22+AAAAAElFTkSuQmCC"
                            className="w-3 h-3 mx-2"
                          />
                        </button>

                        {show2 ? (
                          <div className="bg-white font-normal absolute mt-2 w-fit z-20 flex flex-col rounded-xl border-t-2 border-l-2 border-b-[6px] border-r-[6px] border-black">
                            <div className="w-fit mx-2 overflow-hidden relative justify-center items-center h-[194px] mb-2">
                              {Context.map(({ name, image, desc, style }) => (
                                <div
                                  key={name}
                                  className="py-2 bg-transparent h-12"
                                >
                                  <li
                                    className={`flex cursor-pointer h-10`}
                                    onClick={() => somefunc()}
                                  ><a className="py-2">
                                    {image}
                                    </a>
                                    <div
                                      className="flex flex-col h-8"
                                      value={post.category}
                                      onClick={() => setContext(`${name}`)}
                                    >
                                      <a className="font-semibold mx-2">
                                        {name}
                                      </a>
                                      <p className="px-2 font-light text-sm">
                                        {desc}
                                      </p>
                                    </div>
                                  </li>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : null}
                      </div>
                      <div>
                        <button
                          disabled={hidden}
                          type="submit"
                          onClick={onSubmit}
                          className="bg-green-600 hover:bg-green-700 disabled:cursor-not-allowed flex items-center leading-120 select-none h-8 px-4 ml-2 mx-2 py-0.5 text-center tracking-wide transition-all ease-in duration-75 outline-0 focus:outline-0 disabled:opacity-40 font-normal rounded w-20 border border-green-700 text-white text-md"
                        >
                          Share
                        </button>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
