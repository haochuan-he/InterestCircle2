/*
 * @Author: HHC
 * @Date: 2024-08-11 20:28:25
 * @LastEditTime: 2024-08-12 00:57:53
 */
import React from "react";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { homeGetUser } from "../request/util.request";

import ImageDropzone from "../util/ImageDropZone";


const titleRef = React.createRef();
const detailRef = React.createRef();



export default function CreateBlog() {
    const [user, setUser] = useState(null);
    const [circles, setCircles] = useState(null);
    const [chosenCircle, setChosenCircle] = useState(null);

    const [imageUrl, setImageUrl] = useState('');

    const handleImageUploaded = (url) => {
        alert("我有反应")

        setImageUrl(url);
    };

    return (
        <div>
            <ImageDropzone onImageUploaded={handleImageUploaded} />
            {imageUrl && <img src={imageUrl} alt="Uploaded Image" />}
        </div>
    );



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

        //加载circles列表
        setCircles([{ name: 'iKun' }, { name: '码农' }])
        setChosenCircle("待选择")

    }, []);

    return (
        <div>
            {user ? (
                <div>
                    {/* <h1>现在的ID为{user.id}</h1>
                        <h1>现在的名字为{user.username}</h1> */}
                    <Main user={user} circles={circles} chosenCircle={chosenCircle} setChosenCircle={setChosenCircle} />
                    {/* <DropDown circles={circles} /> */}
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    )
}

function DropDown({ circles, chosenCircle, setChosenCircle }) {

    return (<>
        <div class="inline-flex" id="main_menu">
            <ul class="flex flex-wrap p-1 md:p-2 sm: bg-teal-300 sm:rounded-full text-sm md:text-base" id="menu_nav">
                <li class="relative mx-1 px-1 py-2 group  bg-teal-300 rounded-full mb-1 md:mb-0" id="button_home">
                </li>
                <li class="relative mx-1 px-1 py-2 group bg-teal-300 rounded-full mb-1 md:mb-0" id="button_admin">
                    <h class="font-semibold whitespace-no-wrap text-gray-600 hover:text-blue-800" >
                        <span class="firstlevel">选择兴趣圈为：{chosenCircle}</span>
                    </h>
                    <ul class="absolute left-0 top-0 mt-10 p-2 rounded-lg shadow-lg bg-white z-10 hidden group-hover:block">
                        {circles.map((circle) => (
                            <li key={circle.name}>
                                <li class="p-1 whitespace-no-wrap rounded-full text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-100">
                                    <button class="px-2 py-1"
                                        onClick={() => {
                                            setChosenCircle(circle.name)
                                            // alert(chosenCircle)
                                        }}
                                    >
                                        <span class="">{circle.name}</span>
                                    </button>
                                </li>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul >
        </div >
        {/* <span className="px-4 py-11 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8" >
            {chosenCircle}
        </span> */}

    </>)
}

function Main({ user, circles, chosenCircle, setChosenCircle }) {
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
                            <DropDown circles={circles} chosenCircle={chosenCircle} setChosenCircle={setChosenCircle} />


                            <div className="mt-4 mb-2 sm:mb-4">
                                <button
                                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                                // onClick={handleLogin}
                                >
                                    发布
                                </button>
                                {/* <a className="text-blue-400 hover:text-blue-500" href="/">返回登录界面</a> */}
                                <Link to={`/home?uid=${user.id}`} className="justify-center text-blue-400 hover:text-blue-500">{"< "}返回主页</Link>
                                {/*Link可以不进行页面刷新，更加流畅自然*/}
                            </div>
                        </form>


                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img src="https://dummyimage.com/720x600" />
                    </div>
                </div>
            </section>
        </>
    )
}
