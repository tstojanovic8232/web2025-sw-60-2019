export default class Product {

    constructor({
        id = null,
        name,
        description,
        price,
        image = null,
        category,
        type,
        location = null,
        sellerId,
        offers = [],
        status = "In Progress",
        buyerReview = false,
        sellerReview = false,
        deleted = false,
        date = new Date().toLocaleDateString("sr-RS"),
    }) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
        this.category = category;
        this.type = type; // "fixed" or "auction"
        this.location = location;
        this.sellerId = sellerId;
        this.offers = offers;
        this.status = status; // "In Progress", "Rejected", "Sold", "Cancelled"
        this.buyerReview = buyerReview;
        this.sellerReview = sellerReview;
        this.deleted = deleted; // for soft delete functionality
        this.date = date;
    }

    addOffer(offer) { this.offers.push(offer); }

    changeStatus(newStatus) { this.status = newStatus; }

    markBuyerReviewed() { this.buyerReview = true; }

    markSellerReviewed() { this.sellerReview = true; }

    softDelete() { this.deleted = true; }

    changePrice(newPrice) { this.price = newPrice; }

    changeDescription(newDescription) { this.description = newDescription; }

    changeImage(newImage) { this.image = newImage; }

    update(data) {
        const updatableFields = [
            "name", "description", "price", "image", "category",
            "type", "location", "status"
        ];
        for (const key of updatableFields) {
            if (data[key] !== undefined) {
                this[key] = data[key];
            }
        }
    }

    static fromJSON(json) {
        return new Product(json);
    }

    toJSON() {
        return { ...this };
    }
}
