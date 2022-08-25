import React from 'react'
import { Button, Form } from 'react-bootstrap'

const Products = () => {
  return (
    <div className="container -fluid">
      <Form className="d-flex" id='search'>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
        
      </Form>
      <table class="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product</th>
            <th scope="col">Category</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Product 1</td>
            <td>Category 1</td>
            <td>---------</td>
            <td>500</td>
            <td>
              <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Edit Product
              </button>
              <button type="button" class="btn btn-success" style={{ marginLeft: 10 }} data-bs-toggle="modal" data-bs-target="#exampleModal1">
                Delete Product
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      {/* Order detail pop up */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header" id="exampleModalLabel">
              <h5 class="modal-title" id="exampleModalLabel">Edit Product</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder='Product Name' id='input' />
              </div>
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder='Price' id='input' />
                <select class="form-select" aria-label="Default select example" id='input'>
                  <option selected>Category</option>
                  <option value="1">Category 1</option>
                  <option value="2">Category 2</option>
                  <option value="3">Category 3</option>
                </select>
              </div>
              <div class="input-group mb-3">
                <textarea type="text" class="form-control" placeholder='Enter Description' id='input2' />
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Update</button>
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
          
        </div>
      </div>
      {/* Delete Order Pop up */}
      <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Are you sure you want to delete this Product?</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Yes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products