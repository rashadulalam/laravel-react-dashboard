<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ClientReview;

class ClientReviewController extends Controller
{
    /**
     * client review listing
     */
    public function index()
    {
        $results = ClientReview::all();
        return $results;
    }
}
