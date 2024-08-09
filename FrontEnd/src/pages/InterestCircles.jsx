/*
 * @Author: HHC
 * @Date: 2024-08-07 23:28:18
 * @LastEditTime: 2024-08-09 20:53:22
 */
import React from 'react';

function originalInterests() {
    return (
        <div>
            <h1>兴趣列表</h1>
            <ul>
                <li><Link to="/interest/1">兴趣1</Link></li>
                <li><Link to="/interest/2">兴趣2</Link></li>
                {/* 更多兴趣... */}
            </ul>
        </div>
    );
    //TODO:完成所有兴趣圈类别展示
}

const circles = [
    {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',//可以更改为简介
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    }, {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',//可以更改为简介
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    }, {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',//可以更改为简介
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    }, {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',//可以更改为简介
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    // More people...
]

export default function InterestCircles() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
                        suspendisse.
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {circles.map((circle) => (
                        <li key={circle.name}>
                            <div className="flex items-center gap-x-6">
                                <img alt="" src={circle.imageUrl} className="h-16 w-16 rounded-full" />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{circle.name}</h3>
                                    <p className="text-sm font-semibold leading-6 text-indigo-600">{circle.role}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}