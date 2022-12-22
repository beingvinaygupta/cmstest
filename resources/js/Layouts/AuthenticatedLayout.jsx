import React, { useState } from "react";
// import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
// import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/inertia-react";

export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="flex min-h-screen bg-gray-200">
            <div className="w-64 shrink-0 bg-gradient-to-b from-gray-800 to-gray-700">
                <a href="/app">
                    <div className="flex items-center h-16 px-4 text-xl font-medium text-white bg-gray-900">
                        <svg
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-12 h-12">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4.345 9h10.55L9.618 20 4.345 9zm21.099 0h10.55l-5.276 11-5.274-11z"
                                fill="#E9F9FD"
                                fillOpacity=".1"
                            ></path>
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.62 20h10.549l-5.275 11L9.62 20z"
                                fill="#25C4F2"
                                fillOpacity=".22"
                            ></path>
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M20.169 20h10.55l-5.275 11-5.275-11z"
                                fill="#25C4F2"
                                fillOpacity=".2"></path>
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M20.169 20H9.619l5.275-11 5.275 11z"
                                fill="#25C4F2"
                                fillOpacity=".4"></path>
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M30.718 20h-10.55l5.276-11 5.274 11z"
                                fill="#25C4F2"
                                fillOpacity=".4"></path>
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M25.444 31h-10.55l5.275-11 5.275 11z"
                                fill="#25C4F2"
                                fillOpacity=".5"></path>
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.494 8.467A1 1 0 0 1 4.34 8h10.55a1 1 0 0 1 .902.568l4.373 9.12 4.373-9.12A1 1 0 0 1 25.44 8h10.55a1 1 0 0 1 .902 1.432L26.345 31.424a1.001 1.001 0 0 1-.905.576H14.89a1 1 0 0 1-.902-.568l-10.55-22a1 1 0 0 1 .056-.965zm21.95 2.846L29.13 19h-7.372l3.686-7.687zM5.934 10l3.686 7.687L13.306 10H5.933zm8.96 1.313L18.58 19h-7.372l3.686-7.687zM27.032 10l3.686 7.687L34.405 10h-7.373zm-1.588 18.687L21.758 21h7.372l-3.686 7.687zM23.855 30l-3.686-7.687L16.483 30h7.372zm-8.96-1.313L11.207 21h7.372l-3.686 7.687z"
                                fill="#25C4F2"></path>
                        </svg>
                        <div className="ml-2">
                            SEEKWARE
                        </div>
                    </div>
                </a>
                <div>

                    <div className="py-6 pl-2 text-white">
                        <Link
                            href={route("dashboard")} className={route().current("dashboard") ? 'flex items-center w-full py-2 pl-4 pr-6 bg-gray-700 border-r-4 border-blue-500 rounded-l-full gap-x-4 hover:bg-gray-700 hover:rounded-l-full' : 'flex items-center w-full py-2 pl-4 pr-6 gap-x-4 hover:bg-gray-700 hover:rounded-l-full'}>
                            <svg fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                            </svg>
                            Dashboard
                        </Link>
                    </div>
                    <div className="py-6 border-t border-gray-700">
                        <h4 className="px-6 text-sm font-bold tracking-widest text-gray-600 uppercase">
                            Resources
                        </h4>
                        <ul className="pl-2 mt-3 text-white">
                            <li className="mt-1">
                                <Link href={route("page")} className={route().current("page") ? 'flex items-center w-full py-2 pl-4 pr-6 bg-gray-700 border-r-4 border-blue-500 rounded-l-full gap-x-4 hover:bg-gray-700 hover:rounded-l-full' : 'flex items-center w-full py-2 pl-4 pr-6 gap-x-4 hover:bg-gray-700 hover:rounded-l-full'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                    </svg>
                                    Pages
                                </Link>
                            </li>
                            <li className="mt-1">
                                <Link
                                    className="flex items-center w-full py-2 pl-4 pr-6 gap-x-4 hover:bg-gray-700 hover:rounded-l-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 19.5v-.75a7.5 7.5 0 00-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>
                                    Blogs
                                </Link>
                            </li>
                            <li className="mt-1">
                                <Link
                                    className="flex items-center w-full py-2 pl-4 pr-6 gap-x-4 hover:bg-gray-700 hover:rounded-l-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
                                    </svg>
                                    Form & Component
                                </Link>
                            </li>
                            <li className="mt-1">
                                <Link
                                    className="flex items-center w-full py-2 pl-4 pr-6 gap-x-4 hover:bg-gray-700 hover:rounded-l-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    Settings
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* <div className="px-6 py-6 border-t border-gray-700">
                        <h4 className="text-sm font-bold tracking-widest text-gray-600 uppercase">
                            What's New
                        </h4>
                        <ul className="mt-3 text-sm text-white">
                            <li className="mt-3">
                                <a
                                    target="_blank"
                                    href="https://blog.laravel.com/vapor-github-integration">
                                    GitHub Integration
                                </a>
                            </li>
                            <li className="mt-3">
                                <a target="_blank"
                                    href="https://blog.laravel.com/vapor-improvements-to-postgres">
                                    Postgres Improvements
                                </a>
                            </li>
                            <li className="mt-3">
                                <a target="_blank"
                                    href="https://blog.laravel.com/vapor-understanding-concurrency">
                                    Understanding Concurrency
                                </a>
                            </li>
                            <li className="mt-3">
                                <a
                                    target="_blank"
                                    href="https://blog.laravel.com/vapor-unlimited-assets-uploads-10x-faster">
                                    Unlimited Assets
                                </a>
                            </li>
                            <li className="mt-3">
                                <a
                                    target="_blank"
                                    href="https://blog.laravel.com/vapor-aurora-serverless-v2-is-now-available">
                                    Aurora Serverless v2
                                </a>
                            </li>
                            <li className="mt-3 text-gray-600">
                                <a
                                    target="_blank"
                                    href="https://blog.laravel.com/vapor">
                                    See more →
                                </a>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </div>
            <div className="flex flex-col grow">
                <nav className="bg-white border-b border-gray-100">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                {/* <div className="flex items-center shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                </div> */}

                                {/* <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                    <NavLink
                                        href={route("dashboard")}
                                        active={route().current("dashboard")}
                                    >
                                        Dashboard
                                    </NavLink>
                                </div> */}
                            </div>

                            <div className="hidden sm:flex sm:items-center sm:ml-6">
                                <div className="relative ml-3">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-gray-700 focus:outline-none">
                                                    {auth.user.name}

                                                    <svg
                                                        className="ml-2 -mr-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor">
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"/>
                                                    </svg>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link
                                                href={route("profile.edit")}>
                                                Profile
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route("logout")}
                                                method="post"
                                                as="button">
                                                Log Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>

                            <div className="flex items-center -mr-2 sm:hidden">
                                <button
                                    onClick={() =>
                                        setShowingNavigationDropdown(
                                            (previousState) => !previousState
                                        )
                                    }
                                    className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500">
                                    <svg
                                        className="w-6 h-6"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 24 24">
                                        <path
                                            className={
                                                !showingNavigationDropdown
                                                    ? "inline-flex"
                                                    : "hidden"
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"/>
                                        <path
                                            className={
                                                showingNavigationDropdown
                                                    ? "inline-flex"
                                                    : "hidden"
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div
                        className={
                            (showingNavigationDropdown ? "block" : "hidden") +
                            " sm:hidden"
                        }>
                        <div className="pt-2 pb-3 space-y-1">
                            <ResponsiveNavLink
                                href={route("dashboard")}
                                active={route().current("dashboard").toString()}>
                                Dashboard
                            </ResponsiveNavLink>
                        </div>

                        <div className="pt-4 pb-1 border-t border-gray-200">
                            <div className="px-4">
                                <div className="text-base font-medium text-gray-800">
                                    {auth.user.name}
                                </div>
                                <div className="text-sm font-medium text-gray-500">
                                    {auth.user.email}
                                </div>
                            </div>

                            <div className="mt-3 space-y-1">
                                <ResponsiveNavLink href={route("profile.edit")}>
                                    Profile
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    method="post"
                                    href={route("logout")}
                                    as="button">
                                    Log Out
                                </ResponsiveNavLink>
                            </div>
                        </div>
                    </div>
                </nav>

                {header && (
                    <header className="bg-white shadow">
                        <div className="flex justify-between px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
                            {header}
                        </div>
                    </header>
                )}

                <main className="flex flex-col grow">{children}</main>
            </div>
        </div>
    );
}
