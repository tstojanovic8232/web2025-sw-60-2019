export default class User {
    #password;

    constructor({
        id = null,
        firstName,
        lastName,
        username,
        email,
        phone,
        birthDate,
        profilePicture = null,
        description = "",
        role = "Buyer",
        blocked = false,
        products = [],
        reviews = [],
        averageRating = 0,
        deleted = false,
        password = null,
    }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.birthDate = birthDate;
        this.profilePicture = profilePicture;
        this.description = description;
        this.role = role;   // "Buyer", "Seller" or "Admin"
        this.blocked = blocked;
        this.products = products;
        this.reviews = reviews;
        this.averageRating = averageRating;
        this.deleted = deleted; // for soft delete functionality

        if (password) this.#password = password; // TODO: hashing?
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

    update(data) {
        const updatableFields = ["firstName", "lastName", "username", "email", "phone", "profilePicture", "description"];
        for (const field of updatableFields) {
            if (data[field] !== undefined) {
                this[field] = data[field];
            }
        }
    }

    toJSON() {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            username: this.username,
            email: this.email,
            phone: this.phone,
            birthDate: this.birthDate,
            profilePicture: this.profilePicture,
            description: this.description,
            role: this.role,
            blocked: this.blocked,
            products: this.products,
            reviews: this.reviews,
            averageRating: this.averageRating,
            deleted: this.deleted,
            password: this.#password, // TODO: hashing?
        };
    }

    static fromJSON(json) {
        return new User({
            ...json,
            password: json.password || null,
        });
    }

}
