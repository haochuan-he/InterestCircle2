/*
 * @Author: HHC
 * @Date: 2024-08-07 23:28:18
 * @LastEditTime: 2024-08-13 02:48:12
 */
import React from 'react';

export default function Circles() {

    // return (<h1>ok</h1>)
    return (

        <>

            <section className="relative py-16 bg-blueGray-50">
                <div className="w-full mb-12 px-4">{/**改动px- */}
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-indigo-700 text-white">

                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                            <div className="flex flex-wrap items-center">
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1 ">
                                    <h3 className="font-semibold text-lg text-white">兴趣圈活跃情况详情</h3>
                                </div>
                            </div>
                        </div>

                        <div className="block w-full overflow-x-hidden ">
                            <table className="items-center w-full bg-transparent border-collapse">{/**w-full */}
                                <thead>
                                    <tr>
                                        <th className="px-96 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 
                                        whitespace-nowrap font-bold text-left bg-indigo-500 text-purple-300 border-indigo-500">兴趣圈</th>{/**改动px- */}
                                    </tr>
                                </thead>

                                <tbody>

                                    <tr>
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                            <span className="ml-3 font-bold text-white"> Argon Design System </span></th>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex">
                                                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow" />
                                                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                                                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-3-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                                                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-4-470x470.png" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <div className="relative w-full">
                                                    <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                                                        <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                            <a href="#pablo" className="text-blueGray-500 block py-1 px-3" >
                                                <i className="fas fa-ellipsis-v"></i></a>

                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}