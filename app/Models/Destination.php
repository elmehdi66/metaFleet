<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Destination extends Model
{
    use HasFactory;
    public function itineraires(): HasMany
    {
        return $this->hasMany(Itineraire::class, 'id_destination');
    }
}
