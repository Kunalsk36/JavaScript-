let Data = "This is the Data."
class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log(this.name);
        console.log(this.email);
        console.log("Data : "+ Data);
    }
}

let studentObj = new User("kunal", "kunalsk369@gmail.com");
console.log(studentObj);
console.log(studentObj.viewData());

class Admin extends User{
    constructor(name, email){
        super(name, email);
    }
    
    editData(){
        Data = "This is updated data";
        console.log("Data : " + Data)
    }
}

let adminObj = new Admin("Tanvi", "tanvimane322@gmail.com");
console.log(adminObj);
console.log(adminObj.viewData());
console.log(adminObj.editData());