document.getElementById("btn_submit").onclick = function() {
    var signup = new UserRegister();
    signup.username = document.getElementById("name").value;
    signup.email = document.getElementById("email").value;
    signup.password = document.getElementById("password").value;
    console.log("signup",signup);
    var promise = axios({
        url: "https://shop.cyberlearn.vn/api/Users/signup",
        method: "POST",
        data: {
          email: signup.email,
          password: signup.password,
          name: signup.username,
        },
      });
      promise.then(function (res) {
        console.log(res.data.content);
       alert("Đăng ký thành công!");
        resetForm(signup);
      });
      promise.catch(function (err) {
        console.log(err.response.data.content);
        alert("Đăng ký thất bại!");
      });
}

function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("confirm-password").value = "";
}