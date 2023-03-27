class User {
    constructor (
        id,
        email,
        firstname,
        lastname,
        document,
        phone,
        image
    ) {
        this.id = id
        this.firstname = firstname? firstname : ""
        this.lastname = lastname? lastname: ""
        this.document = document ? document : ""
        this.phone = phone ? phone :"",
        this.email = email
        this.image = image ? image : ""
    }
}

export default User;