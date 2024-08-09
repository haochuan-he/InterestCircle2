/*
 * @Author: HHC
 * @Date: 2024-08-07 23:27:30
 * @LastEditTime: 2024-08-09 21:40:18
 */

import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {


    return (
        <div>
            <Head />
            <Content />
        </div>
    );
    //TODO:完成主页页面设计
}

const blogs = [
    {
        circle: 'Technology',
        title: 'Revolutionizing Our Production Process',
        detail: 'Learn how our recent investment in new technology has revolutionized our production process, leading to improved efficiency and product quality.',
        blogImgURL: 'https://bucket.material-tailwind.com/magic-ai/06b38f84f9669f766048c469ce861b81880378273a11ae9badaedfc32868ef44.jpg',
        name: 'John Doe',
        date: '2022-08-15',
        userImgURL: 'https://bucket.material-tailwind.com/magic-ai/6b1c5941d417a2a32baee89c2f3d1975d7d4fb81e486ed43dc1082ac54b0658b.jpg',
    }, {
        circle: 'Sustainability',
        title: 'Sustainable Practices for a Greener Future',
        detail: 'Find out how our investment in sustainable practices is driving us towards a greener future, showcasing our commitment to environmental responsibility.',
        blogImgURL: 'https://bucket.material-tailwind.com/magic-ai/dc74a867f21afc734166a6d37c08beaba4ff040664ba8ccce918e054264ad68d.jpg',
        name: 'Alex Johnson',
        date: '2022-09-20',
        userImgURL: 'https://bucket.material-tailwind.com/magic-ai/2fadd7f00b6d08fc9dcacef52af357ec1213c0415ab97ace57ae0f17c7f6c2c8.jpg',
    }, {
        circle: 'Expansion',
        title: 'Expanding Our Service Network',
        detail: 'Discover how our expansion investment has allowed us to enhance our service network, providing better support and customer experience.',
        blogImgURL: 'https://bucket.material-tailwind.com/magic-ai/e7aa235a7bc5f504db1c66e27ece08f8118b1da6b21c013500391afcd572cf7d.jpg',
        name: 'Jane Smith',
        date: '2022-08-16',
        userImgURL: 'https://bucket.material-tailwind.com/magic-ai/16d71aaeda38d7aea4412875984357949ff12e7f2c502bb20c4c1bcf6c661607.jpg',
    }, {
        circle: 'Expansion',
        title: 'Expanding Our Service Network',
        detail: 'Discover how our expansion investment has allowed us to enhance our service network, providing better support and customer experience.',
        blogImgURL: 'https://bucket.material-tailwind.com/magic-ai/e7aa235a7bc5f504db1c66e27ece08f8118b1da6b21c013500391afcd572cf7d.jpg',
        name: 'Jane Smith',
        date: '2022-08-16',
        userImgURL: 'https://bucket.material-tailwind.com/magic-ai/16d71aaeda38d7aea4412875984357949ff12e7f2c502bb20c4c1bcf6c661607.jpg',
    }, {
        circle: 'Expansion',
        title: 'Expanding Our Service Network',
        detail: 'Discover how our expansion investment has allowed us to enhance our service network, providing better support and customer experience.',
        blogImgURL: 'https://bucket.material-tailwind.com/magic-ai/e7aa235a7bc5f504db1c66e27ece08f8118b1da6b21c013500391afcd572cf7d.jpg',
        name: 'Jane Smith',
        date: '2022-08-16',
        userImgURL: 'https://bucket.material-tailwind.com/magic-ai/16d71aaeda38d7aea4412875984357949ff12e7f2c502bb20c4c1bcf6c661607.jpg',
    }, {
        circle: 'Expansion',
        title: 'Expanding Our Service Network',
        detail: 'Discover how our expansion investment has allowed us to enhance our service network, providing better support and customer experience.',
        blogImgURL: 'https://bucket.material-tailwind.com/magic-ai/e7aa235a7bc5f504db1c66e27ece08f8118b1da6b21c013500391afcd572cf7d.jpg',
        name: 'Jane Smith',
        date: '2022-08-16',
        userImgURL: 'https://bucket.material-tailwind.com/magic-ai/16d71aaeda38d7aea4412875984357949ff12e7f2c502bb20c4c1bcf6c661607.jpg',
    }, {
        circle: 'Expansion',
        title: 'Expanding Our Service Network',
        detail: 'Discover how our expansion investment has allowed us to enhance our service network, providing better support and customer experience.',
        blogImgURL: 'https://bucket.material-tailwind.com/magic-ai/e7aa235a7bc5f504db1c66e27ece08f8118b1da6b21c013500391afcd572cf7d.jpg',
        name: 'Jane Smith',
        date: '2022-08-16',
        userImgURL: 'https://bucket.material-tailwind.com/magic-ai/16d71aaeda38d7aea4412875984357949ff12e7f2c502bb20c4c1bcf6c661607.jpg',
    },
]

function Content() {

    return (
        <>
            <section class="grid min-h-screen p-8 place-items-center">
                <div class="container grid grid-cols-1 gap-8 my-auto lg:grid-cols-2">
                    {blogs.map((blog) => (
                        <div class="relative flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none grid gap-2 item sm:grid-cols-2">
                            <div class="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg m-0"><img src={blog.blogImgURL} class="object-cover w-full h-full" /></div>
                            <div class="p-6 px-2 sm:pr-6 sm:pl-4">
                                <p class="block antialiased font-sans text-sm font-light leading-normal text-inherit mb-4 !font-semibold">{blog.circle}</p>
                                {/* <a href="#" class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case transition-colors hover:text-gray-700">{blog.title}</a */}
                                <p class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-indigo-400 mb-2 normal-case transition-color">{blog.title}</p>
                                <p class="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">{blog.detail}</p>
                                <div class="flex items-center gap-4"><img src={blog.userImgURL} class="inline-block relative object-cover object-center !rounded-full w-12 h-12" />
                                    <div>
                                        <p class="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 mb-0.5 !font-semibold">{blog.name}</p>
                                        <p class="block antialiased font-sans text-sm leading-normal text-gray-700 font-normal">{blog.date}</p>
                                    </div>

                                </div>
                                <Link to={`/blog/${blog.id}/comments`} className="text-indigo-400 hover:text-indigo-600 ">
                                    <br className="hidden md:block" />查看评论{">"}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}


function Head() {
    return (
        <div class="bg-blue-300 rounded-2xl">
            <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div class="relative flex  items-center grid-cols-2 lg:grid-cols-3">
                    <ul class="flex items-center  space-x-8 lg:flex">
                        <div class="flex items-center  space-x-2 lg:flex">
                            <img src="https://bucket.material-tailwind.com/magic-ai/6b1c5941d417a2a32baee89c2f3d1975d7d4fb81e486ed43dc1082ac54b0658b.jpg" class="inline-block relative object-cover object-center !rounded-full w-12 h-12" />
                            <li>
                                <a
                                    href="/"
                                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
                                >
                                    个人主页
                                </a>
                            </li>
                        </div>
                        <li>
                            <a
                                href="/"
                                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
                            >
                                所有兴趣圈
                            </a>
                        </li>
                    </ul>
                    <ul class="flex items-center  ml-auto space-x-8 lg:flex">
                        <li>
                            <a
                                href="/"
                                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-red-500"
                            >
                                退出登录
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
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