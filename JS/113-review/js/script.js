// Begin Literal Notation Example

var hotel = {}

hotel.name = "Quay";
hotel.rooms = 40;
hotel.booked = 25;
hotel.checkAvailability = function() {
    return this.rooms - this.booked;
};

// End Literal Notation Example

// Begin Object Constructor Example

var hotel = new Object();

hotel.name = "Quay";
hotel.rooms = 40;
hotel.rooms = 25;
hotel.checkAvailability = function() {
    return this.rooms - this.booked;
};

// End Object Constructor Example

// Begin Literal Notation Example

var hotel = {
    name: "Quay",
    rooms: 40,
    booked: 25,
    checkAvailability: function() {
        return this.rooms - this.booked;
    }
};

// End Literal Notation Exmaple

// Begin Object Construction Notation Example

function Hotel(name, room, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function() {
        return this.rooms - this.booked;
    };
}
var quayHotel = new Hotel("Quay", 40, 25);
var parkHotel = new Hotel("Park", 120, 77);

// End Object Construction Notation Example