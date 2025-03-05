import MainNav from '@/components/main-nav';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col bg-[#FDFDFC] text-[#1b1b18] mt-8 dark:bg-[#0a0a0a]">
                <header className="mb-6 w-full max-w-7xl mx-auto px-4 text-sm">
                    <nav className="flex justify-between items-center gap-4 py-4">
                        <div className="flex-1">
                            <MainNav />
                        </div>
                        <div className="flex items-center space-x-4">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </nav>
                </header>
                <div>
                    <div className="h-1/3 p-5 bg-orange-800 text-white flex flex-col justify-center items-center">
                        <div className="container mx-auto flex items-center justify-center p-24">
                            <div className="flex justify-between space-x-10">
                                <h1 className="text-5xl md:text-6xl font-bold mb-4">Ready to start?</h1>
                                    <div>
                                        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
                                        Maximize your potential with our cutting-edge technology.
                                    </p>
                                    <button className="px-6 py-3 text-white bg-gray-900 rounded-lg shadow-lg hover:bg-gray-950 transform hover:scale-105 transition duration-300 text-base font-semibold">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
