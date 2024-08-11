/*
 * @Author: HHC
 * @Date: 2024-08-11 20:28:25
 * @LastEditTime: 2024-08-11 21:24:00
 */
import React from "react";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { homeGetUser } from "../request/util.request";


const titleRef = React.createRef();
const detailRef = React.createRef();
// const passwordConfirmRef = React.createRef();


export default function CreateBlog() {


    const [user, setUser] = useState(null);
    useEffect(() => {
        // 获取当前URL
        const url = new URL(window.location.href);

        // 获取查询参数
        const uid = url.searchParams.get('uid');

        // 异步加载用户数据
        homeGetUser(uid).then(response => {
            setUser(response);
        }).catch(error => {
            console.error("Error fetching user:", error);
        });
    }, []);

    return (
        <div>
            {user ? (
                <div>
                    {/* <h1>现在的ID为{user.id}</h1>
                        <h1>现在的名字为{user.username}</h1> */}
                    <Main user={user} />
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    )
}


function Main({ user }) {
    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">发布您的帖子</h1>
                        <p class="mb-8 leading-relaxed">探索未知 · 分享热爱 · 表达自我</p>


                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="mb-1 sm:mb-2">
                                <label
                                    className="inline-block mb-1 font-medium"
                                >
                                    标题
                                </label>
                                <input
                                    ref={titleRef}
                                    placeholder="输入您的标题"
                                    required
                                    type="text"
                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                    id="UserName"
                                    name="UserName"
                                />
                            </div>
                            <div className="mb-1 sm:mb-2">
                                <label
                                    className="inline-block mb-1 font-medium"
                                >
                                    内容
                                </label>
                                <input
                                    ref={detailRef}
                                    placeholder="输入您的内容"
                                    required
                                    type="text"
                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                    id="Password"
                                    name="Password"
                                />
                            </div>

                            <div className="mt-4 mb-2 sm:mb-4">
                                <button
                                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                                // onClick={handleLogin}
                                >
                                    提交
                                </button>
                                {/* <a className="text-blue-400 hover:text-blue-500" href="/">返回登录界面</a> */}
                                <Link to={`/home?uid=${user.id}`} className="text-blue-400 hover:text-blue-500">返回主页</Link>
                                {/*Link可以不进行页面刷新，更加流畅自然*/}

                            </div>
                        </form>


                        {/* <div class="flex w-full md:justify-start justify-center items-end">
                            <div class="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                                <label for="hero-field" class="leading-7 text-sm text-gray-600">Placeholder</label>
                                <input type="text" id="hero-field" name="hero-field" class="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        </div>
                        <p class="text-sm mt-2 text-gray-500 mb-8 w-full">Neutra shabby chic ramps, viral fixie.</p>
                        <div class="flex lg:flex-row md:flex-col">
                            <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 512 512">
                                    <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                                </svg>
                                <span class="ml-4 flex items-start flex-col leading-none">
                                    <span class="text-xs text-gray-600 mb-1">GET IT ON</span>
                                    <span class="title-font font-medium">Google Play</span>
                                </span>
                            </button>
                            <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 305 305">
                                    <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                                    <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                                </svg>
                                <span class="ml-4 flex items-start flex-col leading-none">
                                    <span class="text-xs text-gray-600 mb-1">Download on the</span>
                                    <span class="title-font font-medium">App Store</span>
                                </span>
                            </button>
                        </div> */}
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                    </div>
                </div>
            </section>
        </>


    )
}
