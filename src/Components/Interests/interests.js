import React, { Component } from "react";
import { Accordion, ListGroup } from "react-bootstrap";

class interests extends Component {
  render() {
    return (
      <div className="justify-content-center pt-5">
        <br />
        <br />
        <br />
        <br />
        <div class="row justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3 px-lg-5 mx-5 g-4">
          <div class="col">
            <div class="card h-100 border-white">
              <div class="card-header bg-info text-white">sports/exercise</div>
              <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Soccer</li>
                  <li class="list-group-item">Cycling</li>
                  <li class="list-group-item">Tennis</li>
                  <li class="list-group-item">Rugby</li>
                  <li class="list-group-item">Hiking</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 border-white">
              <div class="card-header bg-info text-white">brands</div>

              <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Manchester United</li>
                  <li class="list-group-item">Costco</li>
                  <li class="list-group-item">Patagonia</li>
                  <li class="list-group-item">Lululemon</li>
                  <li class="list-group-item">Electric Juice Factory</li>
                </ul>
              </div>
            </div>
            <div class="col">
            <div class="card h-100 border-white">
              <div class="card-header bg-info text-white">other</div>
              <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Seeing the world</li>
                  <li class="list-group-item">Consciousness</li>
                  <li class="list-group-item">Economics</li>
                  <li class="list-group-item">Philosophy</li>
                  <li class="list-group-item">Data</li>
                </ul>
              </div>
            </div>
          </div>

          </div>
        </div>
      </div>
    );
  }
}

export default interests;
