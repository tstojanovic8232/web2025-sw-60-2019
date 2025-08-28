export default class userReport {
    constructor(reason, date, reporterId, reportedId) {
        this.id = null;
        this.reason = reason;
        this.date = date;
        this.reporterId = reporterId;
        this.reportedId = reportedId;
        this.status = "Pending";    // "Pending", "Rejected", "Accepted"
        this.deleted = false;       // flag to indicate if the report is deleted, for soft delete functionality
    }
    softDelete() { this.deleted = true; }

    
    reject() { this.status = "Rejected"; }
    
    accept() { this.status = "Accepted"; }
}
        