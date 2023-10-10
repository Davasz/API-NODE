class User {
     constructor(id, name, tel_number, password, confirmPassword) {
        this.id = id || null;
        this.name = name;
        this.tel_number = tel_number;
        this.password = password || null
        this.confirmPassword = confirmPassword || null
     }

}

module.exports = User