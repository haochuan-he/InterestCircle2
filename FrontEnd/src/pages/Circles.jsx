/*
 * @Author: HHC
 * @Date: 2024-08-07 23:28:18
 * @LastEditTime: 2024-08-13 03:54:11
 */
import React, { useState, useEffect } from 'react';
import { homeGetUser } from '../request/util.request';
import { getAllCircles } from '../request/util.request';
import { createCircle } from '../request/util.request';

const circleRef = React.createRef();


export default function Circles({ user }) {

    const [circles, setCircles] = useState([]);
    // const [lovers, setLovers] = useState([]);

    async function handleCreateCircle() {
        const name = circleRef.current.value;
        let have = false;
        circles.map((circle) => {
            if (name == circle.name) {
                have = true;
            }
        })

        if (have) {
            alert("创建失败，兴趣圈已经存在！")
            return;
        }

        createCircle({ name: name, user: user }).then(() => {
            alert("创建成功！您是这个兴趣圈的第一位活跃用户！");
            window.location.reload();
        })
    }

    useEffect(() => {
        // 获取当前URL
        const url = new URL(window.location.href);

        // 获取查询参数
        const uid = url.searchParams.get('uid');

        // // 异步加载用户数据
        // homeGetUser(uid).then(response => {
        //     setUser(response);
        // }).catch(error => {
        //     console.error("Error fetching user:", error);
        // });


        //异步加载圈子数据
        getAllCircles().then(ret => {
            setCircles(ret)
        })
        console.log("前端加载后circles", circles)

        // setChosenCircle("未选择")
    }, []);
    return (

        <>
            <Main circles={circles} handleCreateCircle={handleCreateCircle} />
        </>

    )
}

function Main({ circles, handleCreateCircle }) {

    return (
        <>
            <section className="relative py-16 bg-blueGray-50 ">
                <div className="w-full mb-12 px-4">{/**改动px- */}
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-md bg-indigo-700 text-white">
                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                            <div className="flex flex-wrap items-center">
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1 ">
                                    <h3 className="font-semibold text-lg text-white">兴趣圈活跃情况详情（在对应兴趣圈类型中发帖，即可成为兴趣圈活跃用户）</h3>
                                </div>
                            </div>
                        </div>
                        <div className="block w-full overflow-x-hidden ">
                            <table className="items-center w-full bg-transparent border-collapse">{/**w-full */}
                                <thead>
                                    <tr>
                                        <th className="px-48 align-middle border border-solid py-2 text-xs uppercase border-l-0 border-r-0 
                                        whitespace-nowrap font-bold text-left bg-indigo-500 text-purple-300 border-indigo-500">
                                            <input
                                                ref={circleRef}
                                                placeholder="为您的兴趣圈取名"
                                                required
                                                type="text"
                                                className="flex-grow w-full h-12 px-3 mb-2 transition duration-200 bg-indigo-400 rounded shadow-gray-400 appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                id="Password"
                                                name="Password"
                                            />
                                            <button className="bg-blue-500 text-white active:bg-blue-600 text-xs font-bold uppercase px-3 py-4 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                                                onClick={handleCreateCircle}
                                            >
                                                创建兴趣圈
                                            </button>


                                        </th>{/**改动px- */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        circles.map((circle) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                                            <span className="ml-3 font-bold text-white"> {circle.name} </span></th>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        </td>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                            <div className="flex">
                                                                {circle.lovers.map((lover) => {
                                                                    return (
                                                                        <img src={lover.userImgURL} className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow" />
                                                                        // {/** -ml-4 */ }
                                                                    )
                                                                })}
                                                            </div>
                                                        </td>
                                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                                            <a href="#pablo" className="text-blueGray-500 block py-1 px-3" >
                                                                <i className="fas fa-ellipsis-v"></i></a>
                                                        </td>
                                                    </tr>

                                                </>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}