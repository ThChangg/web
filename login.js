document.getElementById("control").onclick = function () {
    var signin = new UserLogin();
    signin.email = document.getElementById("email").value;
    signin.password = document.getElementById("password").value;
    console.log(signin.email);
    console.log(signin.password);
    var promise = axios({
      url: "https://shop.cyberlearn.vn/api/Users/signin",
      method: "POST",
      data: {
        email: signin.email,
        password: signin.password,
      },
    });
    promise.then(function (res) {
      console.log(res.data.content);
      alert("Đăng nhập thành công ");
    });
    promise.catch(function (err) {
      console.log(err.response.data);
      alert("Đăng nhập thất  bại rồi ");
    });
  };