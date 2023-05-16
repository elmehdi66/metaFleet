<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Itineraire extends Model
{
    use HasFactory;
    public function vehicule()
    {
        return $this->belongsTo(Vehicule::class, 'id_vehicule');
    }
    public function destination()
    {
        return $this->belongsTo(Destination::class, 'id_destination');
    }
    public function conducteur()
    {
        return $this->belongsTo(Conducteur::class, 'id_conducteur');
    }
}
