<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/




// Contact route
Route::get('/contact', 'App\Http\Controllers\ContactController@index');
Route::post('/contact-delete', 'App\Http\Controllers\ContactController@destroy');

// projects route
Route::get('/projects', 'App\Http\Controllers\ProjectsController@index');
Route::post('/projects-delete', 'App\Http\Controllers\ProjectsController@destroy');
Route::post('/add-project', 'App\Http\Controllers\ProjectsController@create');


// Services
Route::get('/services', 'App\Http\Controllers\ServiceController@index');
Route::post('/services-delete', 'App\Http\Controllers\ServiceController@destroy');

// summary
Route::get('/summary', 'App\Http\Controllers\HomeController@summary');

// Client Review
Route::get('/reviews', 'App\Http\Controllers\ClientReviewController@index');


//Log in system
Route::get('/login', 'App\Http\Controllers\AdminLoginController@loginPage');
Route::get('/onLogin/{username}/{password}', 'App\Http\Controllers\AdminLoginController@onLogin');
// logout
Route::get('/logout', 'App\Http\Controllers\AdminLoginController@onLogout');
// login page




//react scafolding
Route::get('/', function () {
    return view('index');
});

Route::get('{anyroute}', function () {
    return view('index');
})->where('anyroute', '.*');




