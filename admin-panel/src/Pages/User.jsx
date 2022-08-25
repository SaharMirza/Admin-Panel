import React from 'react'
import { Button, Form } from 'react-bootstrap'
import './User.css'

const User = () => {
  return (
    <div className="container -fluid" id='Users'>
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
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Address</th>
            <th scope="col">Status</th>
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
                Address Detail
              </button>
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header" id="exampleModalLabel">
                      <h5 class="modal-title" id="exampleModalLabel">Address</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <input type="text" placeholder='Customer Name' disabled />
                      <br /><br />
                      <input type="text" placeholder='Address 1' id='Address' disabled />
                      <br /><br />
                      <input type="text" placeholder='Address 2' id='Address' disabled />
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <td>Active</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default User