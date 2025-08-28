export default class Offer { 

    constructor(price, buyerId) {
        this.id = null;
        this.price = price;
        this.buyerId = buyerId;
        this.deleted = false;       // flag to indicate if the offer is deleted, for soft delete functionality
    }

    softDelete() { this.deleted = true; }
}
