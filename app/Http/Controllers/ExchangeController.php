<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Exchange;
use App\Http\Resources\ExchangeResource;

class ExchangeController extends Controller
{
    public function index()
    {
        return ProviderResource::collection(Provider::all());
    }

    public function store(Request $request)
    {
        $user = Provider::create([
            'product_id' => $request->fullname,
            'type' => $request->type,
            'date' => new Date(),
            'qty' => $request->qty
        ]);

        return new ProviderResource($user);
    }

    public function show(Provider $user)
    {
        return new ProviderResource($user);
    }

    public function update(Request $request, Provider $user)
    {
        $user->update($request->only(['fullname', 'phone', 'address']));

        return new ProviderResource($user);
    }

    public function destroy(Provider $user)
    {
        $user->delete();

        return response()->json(null, 204);
    }
}
