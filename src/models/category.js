export default class Category {
    constructor(name) { 
        this.id = null;
        this.name = name;
        this.deleted = false;       // flag to indicate if the category is deleted, for soft delete functionality
    }
    softDelete() { this.deleted = true; }
}
