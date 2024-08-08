import React from 'react';

function WelcomeAndLogin() {
    return (

        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: -1,
                maxWidth: "100%",
                maxHeight: "100%",
                backgroundImage: "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80)",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
            className="bg-image,"
        >
            <div className="relative bg-gray-900 bg-opacity-75 h-screen" >
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                欢迎使用<br className="hidden md:block" /><br className="hidden md:block" />
                                <span className="text-teal-accent-400">兴趣圈</span>
                            </h2>
                            <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                                <br className="hidden md:block" />探索未知 · 分享热爱 · 表达自我
                            </p>
                        </div>
                        <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                            <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                    登录账号
                                </h3>
                                <form>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="UserName"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            用户名
                                        </label>
                                        <input
                                            placeholder="UserName"
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="UserName"
                                            name="UserName"
                                        />
                                    </div>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="Password"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            密码
                                        </label>
                                        <input
                                            placeholder="Password"
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="Password"
                                            name="Password"
                                        />
                                    </div>
                                    <div className="mt-4 mb-2 sm:mb-4">
                                        <button className="flex items-center justify-center h-12 px-6 w-full bg-blue-600 mt-8 rounded font-semibold text-lg text-blue-100 hover:bg-blue-700" onClick={() => { }}>登录</button>
                                        <a className="text-blue-400 hover:text-blue-500" href="#">没有账号？立即注册</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
//TODO:完成欢迎以及登录界面


export default WelcomeAndLogin;

function BackgroundImage() {
    return (
        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: -1,
                maxWidth: "100%",
                maxHeight: "100%",
                backgroundImage: "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80)",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
            className="bg-image,"
        ></div>
    );
};