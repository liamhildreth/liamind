import React, { Component } from "react";

class interests extends Component {
  render() {
    return (
      <div className="pt-5">
        <br />
        <br />
        <br />
        <br />


        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 px-5 g-4">
          <div class="col">
            <div class="card h-100 border-primary">
              <div class="card-header bg-primary text-white">music</div>

              <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Kanye West</li>
                  <li class="list-group-item">Frank Sinatra</li>
                  <li class="list-group-item">Billy Joel</li>
                  <li class="list-group-item">The Beatles</li>
                  <li class="list-group-item">J. Cole</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 border-success">
              <div class="card-header bg-success text-white">sports</div>

              <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Soccer</li>
                  <li class="list-group-item">Cycling</li>
                  <li class="list-group-item">Tennis</li>
                  <li class="list-group-item">Rugby</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 border-danger">
              <div class="card-header bg-danger text-white">brands</div>

              <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Manchester United</li>
                  <li class="list-group-item">Costco</li>
                  <li class="list-group-item">Patagonia</li>
                  <li class="list-group-item">Lululemon</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 border-info">
              <div class="card-header text-white bg-info">podcasts</div>
              <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">The Lex Fridman Podcast</li>
                  <li class="list-group-item">The Portal</li>
                  <li class="list-group-item">The Making Sense Podcast</li>
                  <li class="list-group-item">The Huberman Lab Podcast</li>
                  <li class="list-group-item">The JBP Podcast</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 border-dark">
              <div class="card-header bg-dark text-white">other</div>
              <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Seeing the world</li>
                  <li class="list-group-item">Consciousness</li>
                  <li class="list-group-item">Economics</li>
                  <li class="list-group-item">Philosophy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default interests;
