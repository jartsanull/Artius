"use client";
import Link from "next/link";

const NaviBar = () => {
    return (
        <nav className="text-orange-300 bg-cyan-600 p-4 rounded-4xl mt-2">
            <div className="container mx-auto flex justify-between items-center">
                <Link className="text-xl font-bold" href="/">Artius</Link>

                <ul className="flex space-x-4">
                    <li>
                        <Link href="/e-manga" className="hover:text-cyan-900">E-Manga</Link>
                    </li>
                    <li>
                        <Link href="/groups" className="hover:text-cyan-900">Visual Novel</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NaviBar;