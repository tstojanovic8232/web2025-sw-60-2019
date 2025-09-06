import Image from "next/image";

export default function ProductCard() {
    return (
        <div className="bg-white shadow rounded-lg overflow-hidden">
            <Image
                src="/placeholder.png"
                alt="Product"
                className="w-full h-40 object-cover"
                width={400}
                height={400}
            />
            <div className="p-4">
                <h4 className="font-semibold text-gray-800">Product Name</h4>
                <p className="text-gray-600">$25.00</p>
                <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                    View
                </button>
            </div>
        </div>
    );
}
