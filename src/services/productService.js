import { readJson } from "@/lib/fileUtils";
import Product from "@/models/product";

// Product data wrapper

const FILENAME = "products.json";

async function loadProducts() {
    const data = (await readJson(FILENAME)) || [];
    return data.map(p => Product.fromJSON(p));
}

async function saveProducts(products) {
    await writeJson(FILENAME, products.map(p => p.toJSON()));
}

// Service functions

export async function getAllProducts() {
    return await loadProducts();
}

export async function getProductById(id) {
    const products = await loadProducts();
    return products.find(p => p.id === id) || null;
}

export async function addProduct(newProduct) {
    const products = await loadProducts();
    
    products.push(newProduct);
    await saveProducts(products);
}

export async function deleteProduct(id) {
    const products = await loadProducts();
    const product = products.find(p => p.id === id);
    if (!product) {
        return false;
    }
    product.softDelete();
    await saveProducts(products);
}  

export async function updateProduct(id, updatedData) {
    const products = await loadProducts();
    const product = products.find(p => p.id === id);
    if (!product) {
        return false;
    }
    product.update(updatedData);
    await saveProducts(products);
}
