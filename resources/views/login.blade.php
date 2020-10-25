<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
</head>
<body>
    <div class="container mt-5">
        <div class="row justify-content-center h-100 align-items-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h1>Admin Login</h1>

                            <div class="form-group">
                                <label for="uname">Username</label>
                                <input type="text" id="uname" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="text" id="password" class="form-control">
                            </div>
                            <button onclick="adminLogin()" class="btn btn-success btn-block">Sign in</button>

                    </div>
                </div>
            </div>
        </div>
    </div>


    <script type="text/javascript">
        function adminLogin() {
            var username = document.getElementById('uname').value;
            var password = document.getElementById('password').value;
            // alert("username: " + uname + " password: " + password);

            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                if(this.status == 200 && this.readyState == 4) {
                   if(this.responseText == '1') {
                       window.location.href ='/';
                   }else {
                       alert('Worng username or password');
                   }

                }
            }
            xhttp.open("GET", "/onLogin/"+username+"/"+password, true);

            xhttp.send();

        }
    </script>
</body>
</html>
