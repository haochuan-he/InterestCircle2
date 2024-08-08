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
            <div className="relative bg-gray-900 bg-opacity-75">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                The quick, brown fox <br className="hidden md:block" />
                                jumps over a{' '}
                                <span className="text-teal-accent-400">lazy dog</span>
                            </h2>
                            <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                                quae.
                            </p>
                            <a
                                href="/"
                                aria-label=""
                                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
                            >
                                Learn more
                                <svg
                                    className="inline-block w-3 ml-2"
                                    fill="currentColor"
                                    viewBox="0 0 12 12"
                                >
                                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                </svg>
                            </a>
                        </div>
                        <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                            <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                    Sign up for updates
                                </h3>
                                <form>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="firstName"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            First name
                                        </label>
                                        <input
                                            placeholder="John"
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="firstName"
                                            name="firstName"
                                        />
                                    </div>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="lastName"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            Last name
                                        </label>
                                        <input
                                            placeholder="Doe"
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="lastName"
                                            name="lastName"
                                        />
                                    </div>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="email"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            E-mail
                                        </label>
                                        <input
                                            placeholder="john.doe@example.org"
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="email"
                                            name="email"
                                        />
                                    </div>
                                    <div className="mt-4 mb-2 sm:mb-4">
                                        <button
                                            type="submit"
                                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                        >
                                            Subscribe
                                        </button>
                                    </div>
                                    <p className="text-xs text-gray-600 sm:text-sm">
                                        We respect your privacy. Unsubscribe at any time.
                                    </p>
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


// return (
//     <>
//         <div style={{ display: "flex", alignItems: "center", justifyContent: "center", maxWidth: "100%", maxHeight: "100%", }} className="min-h-screen">
//             <BackgroundImage />
//             <div className="relative  z-10 max-w-md mx-auto">
//                 <div className="flex flex-col  items-center justify-center  bg-transparent text-gray-700">
//                     <form className="flex flex-col  bg-white rounded shadow-lg p-12 mt-12" action="">
//                         <label className="font-semibold text-xs" htmlFor="usernameField">Username</label>
//                         <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" />
//                         <label className="font-semibold text-xs mt-3" htmlFor="passwordField">Password</label>
//                         <input className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="password" />
//                         <button className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700" onClick={() => { }}>Login</button>
//                         <div className="flex mt-6 justify-center text-xs">
//                             <a className="text-blue-400 hover:text-blue-500" href="#">Forgot Password</a>
//                             <span className="mx-2 text-gray-300">/</span>
//                             <a className="text-blue-400 hover:text-blue-500" href="#">Sign Up</a>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>

//     </>
// );


// return (
//     <>
//         {/* <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}> */}
//         <div
//             style={{
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 bottom: 0,
//                 zIndex: -1,
//                 backgroundImage: "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80')",
//                 backgroundPosition: "center",
//                 backgroundSize: "cover",
//             }}
//             className="bg-image"
//         ></div>
//         <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }} className="bg-image"></div>
//         <div className="relative z-10 max-w-md mx-auto">
//             <div className="flex flex-col items-center justify-center w-screen h-screen bg-transparent text-gray-700">
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
//         {/* </div > */}
//     </>
// );





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