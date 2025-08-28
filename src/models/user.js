export default class User {
    #password;

    constructor({ firstName, lastName, username, email, phone, birthDate }) {
        this.id = null;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.birthDate = birthDate;
        this.profilePicture = null;
        this.description = "";
        this.role = "Buyer";        // default role, can be "Buyer", "Seller" or "Admin"
        this.blocked = false;
        this.products = [];         // if Seller, products listed for sale; if Buyer, products purchased
        this.reviews = [];
        this.averageRating = 0;
        this.deleted = false;       // flag to indicate if the user is deleted, for soft delete functionality
    }

    setPassword(password) {
        this.#password = password;
    }

    checkPassword(password) {
        return this.#password === password;
    }

    block() { this.blocked = true; }

    unblock() { this.blocked = false; }

    softDelete() { this.deleted = true; }

    changeProfilePicture(url) { this.profilePicture = url; }

    updateDescription(desc) { this.description = desc; }

    addProduct(product) { this.products.push(product); }

    addReview(review) {
        this.reviews.push(review);
        this.updateAverageRating();
    }

    updateAverageRating() {
        if (this.reviews.length === 0) {
            this.averageRating = 0;
            return;
        }
        const total = this.reviews.reduce((sum, r) => sum + r.rating, 0);
        this.averageRating = total / this.reviews.length;
    }

}
