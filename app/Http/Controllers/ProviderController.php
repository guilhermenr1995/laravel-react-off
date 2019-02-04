<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Provider;
use App\Http\Resources\ProviderResource;

class ProviderController extends Controller
{
    public function index()
    {
        return ProviderResource::collection(Provider::all());
    }

    public function store(Request $request)
    {
        $user = Provider::create([
            'fullname' => $request->fullname,
            'cpf' => $request->cpf,
            'phone' => $request->phone,
            'address' => $request->address
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
