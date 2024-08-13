import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getBlogByID } from '../request/util.request';
import { homeGetUser } from '../request/util.request';
import { createComment } from '../request/util.request';
const commentRef = React.createRef();

export default function Comment() {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [userEach, setUserEach] = useState(null);//对于每个已有评论的作者

    const [blog, setBlog] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {

        const hash = window.location.hash;
        const hashParams = new URLSearchParams(hash.substring(10));
        // 获取 uid 
        const uid = hashParams.get('uid');
        const bid = hashParams.get('bid');
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
            setComments(ret.allComments);

        })
        console.log("Comment前端加载后blog", blog)

    }, []);

    function handleGoBack() {
        navigate('/home?uid=' + user.id);
    }

    async function handleCreateComment() {
        const content = commentRef.current.value;

        // TODO: 后端处理
        const result = await createComment({
            bid: blog.id, username: user.username, userImgURL: user.userImgURL, content: content
        });
        console.log("前端handleCreateComment得到结果", result);

        // TODO:反馈
        if (result) {
            console.log("完成评论发布");
            console.log("当前用户头像路径", user.userImgURL)
            window.location.reload();

        } else {
            alert("发布失败，服务器故障！");
        }

    }

    return (
        <>
            <section className="grid min-h-screen p-8 place-items-center">
                <div className="container grid grid-cols-1 gap-8 my-auto lg:grid-col">{/**评论更适合竖向排版 */}
                    <ShowBlog blog={blog} />
                    <AllComments comments={comments} user={user} handleGoBack={handleGoBack} handleCreateComment={handleCreateComment}
                    />
                </div >
            </section >
        </>
    )

}

function ShowBlog({ blog }) {
    return (
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
    );
}

function AllComments({ comments, handleGoBack, handleCreateComment }) {
    return (
        <>
            <section className="py-3 bg-blueGray-50">
                <div className="w-full xl:w-full mb-12 xl:mb-0 px-4 mx-auto mt-24">
                    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">

                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                            <div className="flex flex-wrap items-center">
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                    <h3 className="font-semibold text-base text-blueGray-700">评论</h3>
                                </div>

                                <input
                                    ref={commentRef}
                                    placeholder="输入您的评论"
                                    required
                                    type="text"
                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                    id="Password"
                                    name="Password"
                                />

                                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                    <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                                        onClick={handleCreateComment}>
                                        发布评论
                                    </button>
                                    <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                                        onClick={handleGoBack}
                                    >
                                        回到主页
                                    </button>

                                </div>
                            </div>
                        </div>

                        <div className="block w-full overflow-x-hidden">{/**hidden is better than auto */}
                            <table className="items-center bg-transparent w-full border-collapse ">
                                <tbody>
                                    {
                                        comments.map((comment) => {
                                            return (

                                                <tr key={comment.id}>
                                                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                                        <div className="flex items-center space-x-2 ">
                                                            <img src={comment.userImgURL} className="inline-block relative object-cover object-center !rounded-full w-12 h-12" />
                                                            <h className="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 mb-0.5">{comment.username}</h>
                                                        </div>
                                                    </th>
                                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">{comment.content}</p>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                            <span
                                class="inline-flex items-center lg:mx-auto ml-2 text-xl font-bold tracking-wide text-indigo-500 uppercase">
                                更多精彩评论等你发布！
                            </span>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )

}