/*
 * @Author: HHC
 * @Date: 2024-08-07 23:27:30
 * @LastEditTime: 2024-08-13 03:12:08
 */

import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllBlogs, homeGetUser } from '../request/util.request';

import Circles from './Circles';

export default function Home() {

    const [user, setUser] = useState(null);
    const [blogs, setBlogs] = useState([]);
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

        //异步加载帖子数据
        getAllBlogs().then(ret => {
            setBlogs(ret)
        })
        console.log("前端加载后blogs", blogs)
    }, []);

    return (
        <div>
            {user ? (
                <div>
                    {/* <h1>现在的ID为{user.id}</h1>
                        <h1>现在的名字为{user.username}</h1> */}
                    <Head user={user} />
                    <Circles user={user} />
                    <Content blogs={blogs} user={user} />
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
    //TODO:完成主页页面设计
}

function Content({ blogs, user }) {

    return (
        <>
            <section className="grid min-h-screen p-8 place-items-center">
                <div className="container grid grid-cols-1 gap-8 my-auto lg:grid-cols-2">
                    {blogs.map((blog) => (
                        <div key={blog.id}>
                            <div className="relative flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none grid gap-2 item sm:grid-cols-2">
                                <div className="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg m-0"><img src={blog.blogImgURL} className="object-cover w-full h-full" /></div>
                                <div className="p-6 px-2 sm:pr-6 sm:pl-4">
                                    <p className
                                        ="block antialiased font-sans text-sm font-light leading-normal text-inherit mb-4">{blog.circle}</p>
                                    {/* <a href="#" className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case transition-colors hover:text-gray-700">{blog.title}</a */}
                                    <p className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-indigo-400 mb-2 normal-case transition-color">{blog.title}</p>
                                    <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">{blog.detail}</p>
                                    <div className="flex items-center gap-4"><img src={blog.userImgURL} className="inline-block relative object-cover object-center !rounded-full w-12 h-12" />
                                        <div>
                                            <p className="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 mb-0.5">{blog.name}</p>
                                            <p className="block antialiased font-sans text-sm leading-normal text-gray-700 font-normal">{blog.date}</p>
                                        </div>
                                    </div>
                                    <Link to={`/comment?uid=${user.id}&bid=${blog.id}`} className="text-indigo-400 hover:text-indigo-600 ">
                                        <br className="hidden md:block" />查看评论{">"}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}


function Head({ user }) {
    return (
        <div className="bg-blue-300 rounded-2xl">
            <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="relative flex  items-center grid-cols-2 lg:grid-cols-3">
                    <ul className="flex items-center  space-x-8 lg:flex">
                        <div className="flex items-center  space-x-2 lg:flex">
                            <img src={user.userImgURL} className="inline-block relative object-cover object-center !rounded-full w-12 h-12" />
                            {/*https://bucket.material-tailwind.com/magic-ai/6b1c5941d417a2a32baee89c2f3d1975d7d4fb81e486ed43dc1082ac54b0658b.jpg */}
                            <li>
                                <div
                                    className="font-bold tracking-wide text-gray-700 transition-colors duration-200"
                                >
                                    {user.username}
                                </div>
                            </li>
                        </div>
                        <li>
                            {/* {<a
                                href="/"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
                            >
                                所有兴趣圈
                            </a>} */}
                            探索未知 · 分享热爱 · 表达自我
                        </li>
                    </ul>
                    <span
                        class="inline-flex items-center lg:mx-auto ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        欢迎您，{user.username}
                    </span>
                    <ul className="flex items-center  ml-auto space-x-8 lg:flex">
                        <li>
                            <a
                                href="/"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-red-500"
                            >
                                退出登录
                            </a>
                        </li>
                        <li>
                            <a
                                href={`/createBlog?uid=${user.id}`}//特别注意使用飘号才能进行变量替换
                                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                            >
                                发帖
                            </a>
                        </li>
                    </ul>
                </div>
            </div >
        </div >
    );
};