import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-auto bg-gray-800 text-gray-200 py-6">
            <div className="max-w-7xl mx-auto px-4 flex justify-between">
            <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
            <div className="flex gap-4">
                <Link href="#" className="hover:text-white">Privacy</Link>
                <Link href="#" className="hover:text-white">Terms</Link>
                <Link href="#" className="hover:text-white">Contact</Link>
            </div>
            </div>
        </footer>
    );
 }
