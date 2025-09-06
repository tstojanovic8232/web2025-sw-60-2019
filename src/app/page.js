import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ProductCarousel from "@/components/product/ProductCarousel";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />

      <section className="flex flex-col items-center justify-center text-center py-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to MyApp
        </h2>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl">
          Discover amazing products, participate in auctions, and connect with sellers.
        </p>
        <div className="flex gap-4">
          <Link
            href="/register"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
          <Link
            href="/products"
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
          >
            Browse Products
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Featured Products
        </h3>
        <ProductCarousel />
      </section>

      <Footer />
    </main>
  );
}
