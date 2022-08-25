import React from 'react'
import { Button, Form } from 'react-bootstrap'
import './Order.css'

const Orders = () => {
  return (
    <div className="container -fluid" >
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
            <th scope="col">Status</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Total</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>
              <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Order Details
              </button>
              <button type="button" class="btn btn-success" style={{ marginLeft: 10 }} data-bs-toggle="modal" data-bs-target="#exampleModal1">
                Delete Order
              </button>
              {/* Order detail pop up */}
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header" id="exampleModalLabel">
                      <h5 class="modal-title" id="exampleModalLabel">View Bill</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder='Order_ID' id='input' />
                        <input type="text" class="form-control" placeholder='Status' id='input' />
                      </div>
                      <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder='Customer Name' id='input' />
                        <input type="text" class="form-control" placeholder='Total Amount' id='input' />
                      </div>
                      <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder='Order Date' id='input2' />
                        <input type="text" class="form-control" placeholder='Order Time' id='input2' />
                        <input type="text" class="form-control" placeholder='Delievered Time' id='input2' />
                      </div>
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      {/* Delete Order Pop up */}
      <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Are you sure you want to delete this Order?</p>
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

export default Orders