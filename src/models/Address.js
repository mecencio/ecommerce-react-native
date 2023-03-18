class Address {
    constructor(
        id,
        street,
        number,
        floor,
        city,
        province,
        country,
        additionalInformation,
        lat,
        lng
    ) {
        this.id = id
        this.street = street
        this.number = number
        this.floor = floor
        this.city = city
        this.province = province
        this.country = country
        this.additionalInformation = additionalInformation
        this.lat = lat
        this.lng = lng
    }
}

export default Address;