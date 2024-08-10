/*
 * @Author: HHC
 * @Date: 2024-08-10 20:16:41
 * @LastEditTime: 2024-08-10 21:15:41
 */
export interface User {
    id: number;
    username: string;
    password: string;
    userImgURL: string;
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
    userImgURL: "",
}];
export const blogs: Blog[] = [];
export const interestCircles: InterestCircle[] = [];

