<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;

class ApiController extends ResourceController
{
    public function index()
    {
        return $this->respond([
            'message' => 'Hello from CodeIgniter API!'
        ]);
    }

    public function store()
    {
        $data = $this->request->getPost();
        return $this->respondCreated(['status' => 'Data received successfully']);
    }
}