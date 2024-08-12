import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getBlogByID } from '../request/util.request';
import { homeGetUser } from '../request/util.request';


export default function Comment() {

    const [user, setUser] = useState(null);
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        // 获取当前URL
        const url = new URL(window.location.href);

        // 获取查询参数
        const uid = url.searchParams.get('uid');
        const bid = url.searchParams.get('bid');
        console.log("bid", bid)

        // 异步加载用户数据
        homeGetUser(uid).then(response => {
            setUser(response);
        });
        console.log("Comment前端加载完user", user)

        //异步加载帖子数据
        console.log("Comment前端准备加载blog")

        getBlogByID(bid).then(ret => {
            setBlog(ret)
        })
        console.log("Comment前端加载后blog", blog)
    }, []);


    return (

        <>

            <section className="grid min-h-screen p-8 place-items-center">
                <div className="container grid grid-cols-1 gap-8 my-auto lg:grid-cols-2">


                    <div className="relative flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none grid gap-2 item sm:grid-cols-2">
                        <div className="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg m-0"><img src={blog.blogImgURL} className="object-cover w-full h-full" /></div>
                        <div className="p-6 px-2 sm:pr-6 sm:pl-4">
                            <p className
                                ="block antialiased font-sans text-sm font-light leading-normal text-inherit mb-4">{blog.circle}</p>
                            <p className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-indigo-400 mb-2 normal-case transition-color">{blog.title}</p>
                            <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">{blog.detail}</p>
                            <div className="flex items-center gap-4"><img src={blog.userImgURL} className="inline-block relative object-cover object-center !rounded-full w-12 h-12" />
                                <div>
                                    <p className="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 mb-0.5">{blog.name}</p>
                                    <p className="block antialiased font-sans text-sm leading-normal text-gray-700 font-normal">{blog.date}</p>
                                </div>
                            </div>
                        </div>
                    </div>




                    <AllComments />
                </div>
            </section>
        </>

    )

}

function AllComments() {
    return (


        <>


            <section class="py-1 bg-blueGray-50">
                <div class="w-screen xl:w-full mb-12 xl:mb-0 px-4 mx-auto mt-24">
                    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">

                        <div class="rounded-t mb-0 px-4 py-3 border-0">
                            <div class="flex flex-wrap items-center">
                                <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                                    <h3 class="font-semibold text-base text-blueGray-700">Page Visits</h3>
                                </div>
                                <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                    <button class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">See all</button>
                                </div>
                            </div>
                        </div>

                        <div class="block w-full overflow-x-auto">
                            <table class="items-center bg-transparent w-full border-collapse ">
                                <thead>
                                    <tr>
                                        <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Page name
                                        </th>
                                        <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Visitors
                                        </th>
                                        <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Unique users
                                        </th>
                                        <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Bounce rate
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                            /argon/
                                        </th>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                            4,569
                                        </td>
                                        <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            340
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>
                                            46,53%
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                            /argon/index.html
                                        </th>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            3,985
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            319
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <i class="fas fa-arrow-down text-orange-500 mr-4"></i>
                                            46,53%
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                            /argon/charts.html
                                        </th>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            3,513
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            294
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <i class="fas fa-arrow-down text-orange-500 mr-4"></i>
                                            36,49%
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                            /argon/tables.html
                                        </th>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            2,050
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            147
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>
                                            50,87%
                                        </td>
                                    </tr>
                                    <tr>
                                        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                            /argon/profile.html
                                        </th>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            1,795
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            190
                                        </td>
                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <i class="fas fa-arrow-down text-red-500 mr-4"></i>
                                            46,53%
                                        </td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
                {/* <footer class="relative pt-8 pb-6 mt-16">
                    <div class="container mx-auto px-4">
                        <div class="flex flex-wrap items-center md:justify-between justify-center">
                            <div class="w-full md:w-6/12 px-4 mx-auto text-center">
                                <div class="text-sm text-blueGray-500 font-semibold py-1">
                                    Made with <a href="https://www.creative-tim.com/product/notus-js" class="text-blueGray-500 hover:text-gray-800" target="_blank">Notus JS</a> by <a href="https://www.creative-tim.com" class="text-blueGray-500 hover:text-blueGray-800" target="_blank"> Creative Tim</a>.
                                </div>
                            </div>
                        </div>
                    </div>
                </footer> */}
            </section>

        </>



    )

}