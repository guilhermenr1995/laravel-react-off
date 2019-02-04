<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use App\Http\Resources\ProductResource;

class ProductController extends Controller
{
    public function index()
    {
      return ProductResource::collection(Product::all());
    }

    public function store(Request $request)
    {
        $user = Product::create([
            'name' => $request->name,
            'description' => $request->description,
            'brand' => $request->brand,
            'entry_date' => $request->entry_date,
            'expire_date' => $request->expire_date,
            'qty' => $request->qty,
            'value' => $request->value
        ]);

        return new ProductResource($user);
    }

    public function show(Product $user)
    {
        return new ProductResource($user);
    }

    public function update(Request $request, Product $user)
    {
        $user->update($request);

        return new ProductResource($user);
    }

    public function destroy(Product $user)
    {
        $user->delete();

        return response()->json(null, 204);
    }
}
