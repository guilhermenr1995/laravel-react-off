<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['name', 'description', 'brand', 'entry_date', 'expire_date', 'qty', 'value'];

    public function providers() 
    {
        return $this->hasMany(Provider::class);
    }
}
