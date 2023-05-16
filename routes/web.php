<?php

use App\Http\Controllers\PagesController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('Auth/Login', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});




Route::middleware(['admin'])->group(function(){


});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/meta-dash-fleet', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/getUserType',function(){
        $user_type = Auth()->user()->user_type ;
        return $user_type;
    });
    Route::get('/roads',[PagesController::class,'index'])->name('itineraires');
    Route::get('/create_itineraire',[PagesController::class,'create'])->name('itineraires.create');
    Route::post('elkrzfk',[PagesController::class,'store'])->name('itineraires.store');
    Route::get('/edit/{id}',[PagesController::class,'edit'])->name('itineraires.edit');
    Route::post('update',[PagesController::class,'update'])->name('itineraires.update');
    Route::delete('/delete/{id}',[PagesController::class,'destroy'])->name('itineraires.destroy');

});

require __DIR__.'/auth.php';
