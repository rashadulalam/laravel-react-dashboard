<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Projects extends Model
{
    use HasFactory;

    protected $table = 'Projects';
    protected $primaryKey = 'id';
    public $incrementing = true;
    protected $keyType = 'int';

}
