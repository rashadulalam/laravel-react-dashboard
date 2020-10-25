<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AdminLogin;

class AdminLoginController extends Controller
{


    public function loginPage() {
        return view('login');
    }

    public function onLogin(Request $request) {
        $username = $request->username;
        $password = $request->password;
        $result = AdminLogin::where('username', $username)->where('password', $password)->count();

        if($result == 1) {
            $request->session()->put('userNameKey', $username);
            return "1";
        } else {
            return "0";
        }
    }

    public function onLogout(Request $request) {
        $request->session()->flash('userNameKey');
        return redirect('/login');
    }
}
