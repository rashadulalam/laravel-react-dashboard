<?php

namespace App\Http\Controllers;

use App\Models\Home;
use Illuminate\Http\Request;
use App\Models\Contact;
use App\Models\Projects;
use App\Models\Service;
class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function summary()
    {
        $total = array(
            'contacts' => Contact::count(),
            'projects' => Projects::count(),
            'services' => Service::count(),
        );
        return json_encode( $total );
    }


}
