class landing {
    // property
    dataBase={
        "Milan":{username:"Milan",password:"milan 123"},
        "Manu":{username:"Manu",password:"manu123"},
        "Anu":{username:"Anu",password:"anu123"},
        "Manuel":{username:"Manuel",password:"manuel123"}
    }
    // method
    save(){
       if(this.dataBase){
        localStorage.setItem("dataBase",JSON.stringify(this.dataBase))
       }
    }
    // get data
    getData(){
        this.dataBase=JSON.parse(localStorage.getItem("dataBase"))
    }
    // method for registration
    register(){
      this.getData()
      console.log('inside the register function');
      let user= regUser.value
      let pswd=regPswd.value
      console.log(user,pswd); 
      if(user=="" || pswd==""){
        alert("please fill the form completely")
      }
      else{
        if(user in this.dataBase){
            alert("user already exist")
        }else{
            this.dataBase[user]={username:user,password:pswd}
            this.save()
            alert("user added successfully")
            // for navigation
            window.location="login.html"
        }
      }
    }
    // login
    login(){
      let luser=loginUser.value
      let lpswd=loginPswd.value
      console.log(luser,lpswd);
      this.getData()
      if(luser=="" || lpswd==""){
        alert("please fill the form completely")
      }
      else{
        if(luser in this.dataBase){
           if(this.dataBase[luser].password==lpswd){
              alert("Login successful")
              localStorage.setItem("user",luser)
              window.location="home.html"
           }else{
            alert("wrong username or password")
           }
        }
        else{
          alert("wrong username or password")
        }
      }
    }
} 
// object
const obj = new landing()
obj.getData()