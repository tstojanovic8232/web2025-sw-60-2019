import Link from "next/link";

export default function Navbar() {
    return (
        <header className="w-full bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-blue-600">MyApp</h1>
                <nav className="flex gap-6">
                <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
                <Link href="/products" className="text-gray-700 hover:text-blue-600">Products</Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
                <Link href="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
                </nav>
            </div>
        </header>
    );
}
