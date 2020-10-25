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
Route::get('/contact', 'App\Http\Controllers\ContactController@index')->middleware('loginCheck');
Route::post('/contact-delete', 'App\Http\Controllers\ContactController@destroy')->middleware('loginCheck');

// projects route
Route::get('/projects', 'App\Http\Controllers\ProjectsController@index')->middleware('loginCheck');
Route::post('/projects-delete', 'App\Http\Controllers\ProjectsController@destroy')->middleware('loginCheck');


// Services
Route::get('/services', 'App\Http\Controllers\ServiceController@index')->middleware('loginCheck');
Route::post('/services-delete', 'App\Http\Controllers\ServiceController@destroy')->middleware('loginCheck');

// summary
Route::get('/summary', 'App\Http\Controllers\HomeController@summary')->middleware('loginCheck');

// Client Review
Route::get('/reviews', 'App\Http\Controllers\ClientReviewController@index')->middleware('loginCheck');








Route::get('/', function () {
    return view('index');
})->middleware('loginCheck');


Route::get('{anyroute}', function () {
    return view('index');
})->where('anyroute', '.*')->middleware('loginCheck');



Route::get('/onLogin/{username}/{password}', 'App\Http\Controllers\AdminLoginController@onLogin');
// logout
Route::get('/logout', 'App\Http\Controllers\AdminLoginController@onLogout');
// login page
Route::get('/login', 'App\Http\Controllers\AdminLoginController@loginPage');
