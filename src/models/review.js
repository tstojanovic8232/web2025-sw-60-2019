export default class Review {
    constructor(rating, comment, date, reviewerId) {
        this.id = null;
        this.rating = rating;
        this.comment = comment;
        this.date = date;
        this.reviewerId = reviewerId;
        this.deleted = false;       // flag to indicate if the review is deleted, for soft delete functionality
    }
    softDelete() { this.deleted = true; }
}
