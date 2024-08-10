import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { checkLogin } from '../request/util.request';

//TODO:完成欢迎以及登录界面
//TODO:完成前后端链接

const usernameRef = React.createRef();
const passwordRef = React.createRef();


export default function WelcomeAndLogin() {

    const navigate = useNavigate();
    async function handleLogin() {
        // 获取表单数据
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        // console.log("前端输入", username);
        // console.log("前端输入", password);


        // TODO: 后端处理
        const result = await checkLogin({ UserName: username, Password: password });
        // console.log("前端得到结果", result);
        // console.log(result.data);

        // 跳转到首页
        if (result.data.success) {
            navigate('/home');
        } else {
            alert("登陆失败，请检查用户名和密码是否正确！");
        }

    }

    return (
        <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            // zIndex: -1,
            maxWidth: "100%",
            maxHeight: "100%",
            // backgroundImage: "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80)",
            backgroundPosition: "center",
            backgroundSize: "cover",
        }} className="relative">
            <img
                src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div style={{ zIndex: 1000 }} className="relative bg-gray-900 bg-opacity-75 h-screen " >
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                欢迎使用<br className="hidden md:block" /><br className="hidden md:block" />
                                <span className="text-teal-400">兴趣圈</span>
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
                                <form onSubmit={(e) => e.preventDefault()}>
                                    {/*修复逆天bug：表单存在自动提交机制，会在点击按钮的时候自动重定向到登录界面，出现home页面闪现的问题*/}
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="UserName"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            用户名
                                        </label>
                                        <input
                                            ref={usernameRef}
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
                                            ref={passwordRef}
                                            placeholder="Password"
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="Password"
                                            name="Password"
                                        />
                                    </div>
                                    <div className="mt-4 mb-2 sm:mb-4">
                                        {/* <button className="flex items-center justify-center h-12 px-6 w-full bg-blue-600 mt-8 rounded font-semibold text-lg text-blue-100 hover:bg-blue-700" onClick={() => { }}>登录</button> */}
                                        <button
                                            type="notsubmit"
                                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                                            onClick={handleLogin}
                                        >
                                            登录
                                        </button>
                                        {/* <a className="text-blue-400 hover:text-blue-500" href="/register">没有账号？立即注册</a> */}
                                        <Link to="/register" className="text-blue-400 hover:text-blue-500">没有账号？立即注册</Link>
                                        {/*Link可以不进行页面刷新，更加流畅自然*/}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};
