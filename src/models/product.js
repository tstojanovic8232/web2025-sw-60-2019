export default class Product { 

    constructor({ name, description, price, image, category, type, location, sellerId }) {
        this.id = null;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
        this.category = category;
        this.type = type;
        this.location = location;
        this.date = new Date().toLocaleDateString("sr-RS");
        this.sellerId = sellerId;
        this.offers = [];           // array of Offer objects
        this.status = "In Progress";           // "In Progress", "Rejected", "Sold", "Cancelled"
        this.buyerReview = false;
        this.sellerReview = false;
        this.deleted = false;       // flag to indicate if the product is deleted, for soft delete functionality
    }

    addOffer(offer) { this.offers.push(offer); }

    changeStatus(newStatus) { this.status = newStatus; }
    
    markBuyerReviewed() { this.buyerReview = true; }
    
    markSellerReviewed() { this.sellerReview = true; }
    
    softDelete() { this.deleted = true; }

    changePrice(newPrice) { this.price = newPrice; }

    changeDescription(newDescription) { this.description = newDescription; }

    changeImage(newImage) { this.image = newImage; }

    
}
