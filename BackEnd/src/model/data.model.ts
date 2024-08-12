/*
 * @Author: HHC
 * @Date: 2024-08-10 20:16:41
 * @LastEditTime: 2024-08-12 21:38:23
 */
export interface User {
    id: number;
    username: string;
    password: string;
    userImgURL: string;
}

export interface Comment {
    id: number;
    uid: number;
    content: string;
}

export interface Blog {
    id: number,
    circle: string,
    title: string,
    detail: string,
    blogImgURL: string,
    name: string,
    date: string,
    userImgURL: string,
    allComments: Comment[],
}

export interface InterestCircle {
    id: number;
    name: string;
    title: string;
    description: string;
    circleImgURL: string;
}

export const users: User[] = [{
    id: 12,
    username: "hhc",
    password: "1212",
    userImgURL: "/images/defaultUser.jpg",
}];

export const blogs: Blog[] = [
    {
        id: 1,
        circle: '越野',
        title: '引擎轰鸣',
        detail: '我正在沙漠狂奔',
        blogImgURL: '/images/blogImg1.jpg',
        name: '铁蛋',
        date: '2024-08-12',
        userImgURL: '/images/user1.jpg',
        allComments: [],
    }, {
        id: 2,
        circle: '越野',
        title: '冲破',
        detail: '如题',
        blogImgURL: '/images/blogImg2.jpg',
        name: '人狠话不多',
        date: '2024-08-12',
        userImgURL: '/images/user2.jpg',
        allComments: [],

    }, {
        id: 3,
        circle: '越野',
        title: '爽了！',
        detail: '沙漠大回环',
        blogImgURL: '/images/blogImg3.jpg',
        name: '花开富贵',
        date: '2024-08-08',
        userImgURL: '/images/user3.jpg',
        allComments: [],

    },
];
export const interestCircles: InterestCircle[] = [];

