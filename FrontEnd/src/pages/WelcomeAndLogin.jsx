import React from 'react';

function WelcomeAndLogin() {
    return (
        <>

            {/* <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}> */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: -1,
                    backgroundImage: "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80')",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
                className="bg-image"
            ></div>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }} className="bg-image"></div>
            <div className="relative z-10 max-w-md mx-auto">
                <div className="flex flex-col items-center justify-center w-screen h-screen bg-transparent text-gray-700">
                    < div className="relative z-10 max-w-md mx-auto" >
                        {/* <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-gray-700"> */}
                        <form className="flex flex-col bg-white rounded shadow-lg p-12 mt-12" action="">
                            <label className="font-semibold text-xs" htmlFor="usernameField">Username</label>
                            <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" />
                            <label className="font-semibold text-xs mt-3" htmlFor="passwordField">Password</label>
                            <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="password" />
                            <button className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700" onClick={() => { }}>Login</button>
                            <div className="flex mt-6 justify-center text-xs">
                                <a className="text-blue-400 hover:text-blue-500" href="#">Forgot Password</a>
                                <span className="mx-2 text-gray-300">/</span>
                                <a className="text-blue-400 hover:text-blue-500" href="#">Sign Up</a>
                            </div>
                        </form>
                    </div>
                </div>
                {/* </div> */}
            </div>
            {/* </div > */}
        </>
    );
    //TODO:完成欢迎以及登录界面
}

export default WelcomeAndLogin;


// return (
//     <div className="flex flex-col items-center justify-center w-screen h-screen bg-transparent text-gray-700">
//         < div className="relative z-10 max-w-md mx-auto" >
//             <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-gray-700">
//                 <form className="flex flex-col bg-white rounded shadow-lg p-12 mt-12" action="">
//                     <label className="font-semibold text-xs" htmlFor="usernameField">Username</label>
//                     <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" />
//                     <label className="font-semibold text-xs mt-3" htmlFor="passwordField">Password</label>
//                     <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="password" />
//                     <button className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700" onClick={() => { }}>Login</button>
//                     <div className="flex mt-6 justify-center text-xs">
//                         <a className="text-blue-400 hover:text-blue-500" href="#">Forgot Password</a>
//                         <span className="mx-2 text-gray-300">/</span>
//                         <a className="text-blue-400 hover:text-blue-500" href="#">Sign Up</a>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     </div>
// );