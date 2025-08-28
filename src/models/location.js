export default class Location {
    constructor(latitude, longitude, street, city, postalNumber) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.address = { street, city, postalNumber };
    }

    get street() { return this.address.street; }
    get city() { return this.address.city; }
    get postalNumber() { return this.address.postalNumber; }

    coordinatesString() {
        return `${this.latitude}, ${this.longitude}`;
    }

    addressString() {
        return `${this.address.street}, ${this.address.city}, ${this.address.postalNumber}`;
    }

}
