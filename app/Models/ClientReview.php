<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClientReview extends Model
{
    use HasFactory;


    protected $table = 'reviews';
    protected $primaryKey = 'id';
    public $incrementing = true;
    protected $keyType = 'int';



}
