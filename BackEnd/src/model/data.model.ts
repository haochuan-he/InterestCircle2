/*
 * @Author: HHC
 * @Date: 2024-08-10 20:16:41
 * @LastEditTime: 2024-08-13 22:52:03
 */
export interface User {
    id: number;
    username: string;
    password: string;
    userImgURL: string;
}

export interface Comment {
    id: number;
    username: string;
    userImgURL: string;
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

export interface Circle {
    id: number;
    name: string;
    lovers: User[]
}

export const users: User[] = [{
    id: 12,
    username: "hhc",
    password: "1212",
    userImgURL: "/images/pig.jpg",
},
{
    id: 1,
    username: '铁蛋',
    password: "1212",
    userImgURL: '/images/user1.jpg',
}, {
    id: 2,
    username: '人狠话不多',
    password: "1212",
    userImgURL: '/images/user2.jpg',
}, {
    id: 3,
    username: '花开富贵',
    password: "1212",
    userImgURL: '/images/user3.jpg',
},
];

export const blogs: Blog[] = [
    {
        id: 1,
        circle: '越野',
        title: '瀚海残阳',
        detail: '夕阳下的越野车穿越沙丘，留下一道尘土飞扬的痕迹，象征着无畏探索的精神和对未知世界的渴望。',
        blogImgURL: '/images/blogImg1.jpg',
        name: '铁蛋',
        date: '2024-08-12',
        userImgURL: '/images/user1.jpg',
        allComments: [
            {
                id: 101,
                username: '铁蛋',
                userImgURL: '/images/user1.jpg',
                content: "我的车怎么样？不错吧",
            },
            {
                id: 102,
                username: '人狠话不多',
                userImgURL: '/images/user2.jpg',
                content: "6"
            }
        ],
    }, {
        id: 2,
        circle: '越野',
        title: '孤独之旅',
        detail: '如题',
        blogImgURL: '/images/blogImg2.jpg',
        name: '人狠话不多',
        date: '2024-08-12',
        userImgURL: '/images/user2.jpg',
        allComments: [
            {
                id: 93,
                username: '花开富贵',
                content: "你这天看起来要下雨了",
                userImgURL: '/images/user3.jpg',
            }
        ],

    }, {
        id: 3,
        circle: '越野',
        title: '爽了！',
        detail: '沙漠大回环，喔嚯！我正开车在这里狂飙突进。越野车在沙漠中疾驰，扬起漫天沙尘。话不能多说，因为嘴里会进沙子。',
        blogImgURL: '/images/blogImg3.jpg',
        name: '花开富贵',
        date: '2024-08-08',
        userImgURL: '/images/user3.jpg',
        allComments: [
            {
                id: 39,
                username: '人狠话不多',
                content: "嗯",
                userImgURL: '/images/user2.jpg',
            }
        ],

    },
    {
        id: 12,
        circle: '代码',
        title: 'WEB大作业终于写完了!!!',
        detail: '前端React+Vite+后端Midwayjs（Koa）+测试Jtest+Vitest+pkg打包=兴趣圈大作业',
        blogImgURL: '/images/sorry.jpg',
        name: 'hhc',
        date: '2024-08-13',
        userImgURL: '/images/pig.jpg',
        allComments: [{
            id: 66,
            username: '人狠话不多',
            userImgURL: '/images/user2.jpg',
            content: "是我的话肯定自学"
        }],
    }, {
        id: 1212,
        circle: '代码',
        title: '圣经每天一遍',
        detail: '网制焦，实不严，专毕业，零经验，面八家，四offer，22k，是外包，20k，有自研，明还有，面试多。说寒冬，年年有，计算机，月过万，现不学，没机会，趁红利，狠赚笔。',
        blogImgURL: '/images/fo.png',
        name: 'hhc',
        date: '2024-08-13',
        userImgURL: '/images/pig.jpg',
        allComments: [
            {
                id: 1266,
                username: '铁蛋',
                userImgURL: '/images/user1.jpg',
                content: "好啊，一听你这么一说我就不焦虑了！"
            }, {
                id: 12066,
                username: '花开富贵',
                userImgURL: '/images/user3.jpg',
                content: "前面忘了，后面忘了，总之狠狠赚一笔"
            }

        ],
    },
];
export const circles: Circle[] = [
    {
        id: 1,
        name: "越野",
        lovers: [{
            id: 1,
            username: '铁蛋',
            password: "1212",
            userImgURL: '/images/user1.jpg',
        }, {
            id: 2,
            username: '人狠话不多',
            password: "1212",
            userImgURL: '/images/user2.jpg',
        }, {
            id: 3,
            username: '花开富贵',
            password: "1212",
            userImgURL: '/images/user3.jpg',
        },
        ]
    }, {
        id: 2,
        name: "代码",
        lovers: [
            {
                id: 12,
                username: "hhc",
                password: "1212",
                userImgURL: "/images/pig.jpg",
            }
        ]
    }
];

