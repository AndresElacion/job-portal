import { Link } from "@inertiajs/react";


export default function MainNav() {
    return (
        <>
            <div className="flex gap-4">
                <Link
                    href={route('dashboard')}
                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                >
                    Job search
                </Link>
                <Link
                    href={route('dashboard')}
                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                >
                    Job search
                </Link>
                <Link
                    href={route('dashboard')}
                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                >
                    Job search
                </Link>
                <Link
                    href={route('dashboard')}
                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                >
                    Job search
                </Link>
            </div>
        </>
    )
}