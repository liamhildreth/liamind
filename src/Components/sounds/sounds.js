import React, { Component } from "react";
import { Accordion, ListGroup } from "react-bootstrap";
import ReactPlayer from "react-player";

class sounds extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-12 col-lg-6 ps-5">
            <h2>listen</h2>
            <div class="card h-60 border-white ps-5">
              <div class="card-header bg-info text-white">music</div>
              <Accordion flush defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Kanye West</Accordion.Header>
                  <Accordion.Body>
                    <ol class="list-group list-group-numbered list-group-flush">
                      <li class="list-group-item">Everything I am</li>
                      <li class="list-group-item">Devil In A New Dress </li>
                      <li class="list-group-item">Good Morning</li>
                      <li class="list-group-item">Hold My Liquor</li>
                      <li class="list-group-item">Violent Crimes</li>
                      <li class="list-group-item">Use This Gospel</li>
                      <li class="list-group-item">I wonder</li>
                    </ol>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Frank Sinatra</Accordion.Header>
                  <Accordion.Body>
                    <ol class="list-group list-group-numbered list-group-flush">
                      <li class="list-group-item">Strangers In the Night</li>
                      <li class="list-group-item">My Way</li>
                      <li class="list-group-item">That's Life</li>
                      <li class="list-group-item">Summer Wind</li>
                      <li class="list-group-item">Somethin' Stupid</li>
                    </ol>{" "}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Billy Joel</Accordion.Header>
                  <Accordion.Body>
                    <ol class="list-group list-group-numbered list-group-flush">
                      <li class="list-group-item">Vienna</li>
                      <li class="list-group-item">Everybody Has a Dream</li>
                      <li class="list-group-item">New York State of Mind</li>
                      <li class="list-group-item">She's Always a Woman</li>
                      <li class="list-group-item">Lullabye</li>
                    </ol>{" "}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>John Lennon</Accordion.Header>
                  <Accordion.Body>
                    <ol class="list-group list-group-numbered list-group-flush">
                      <li class="list-group-item">Oh My Love</li>
                      <li class="list-group-item">Give Peace a Chance</li>
                      <li class="list-group-item">Beautiful Boy</li>
                      <li class="list-group-item">Gimme Some Truth</li>
                      <li class="list-group-item">Hold On</li>
                    </ol>{" "}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>J. Cole</Accordion.Header>
                  <Accordion.Body>
                    <ol class="list-group list-group-numbered list-group-flush">
                      <li class="list-group-item">No Role Modelz</li>
                      <li class="list-group-item">A Tale of 2 Citiez</li>
                      <li class="list-group-item">BRACKETS</li>
                      <li class="list-group-item">Note to Self</li>
                      <li class="list-group-item">Apparently</li>
                    </ol>{" "}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>Eminem</Accordion.Header>
                  <Accordion.Body>
                    <ol class="list-group list-group-numbered list-group-flush">
                      <li class="list-group-item">Beautiful</li>
                      <li class="list-group-item">Not Afraid</li>
                      <li class="list-group-item">Mockingbird</li>
                      <li class="list-group-item">Stan</li>
                      <li class="list-group-item">Headlights</li>
                    </ol>{" "}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header>John Mayer</Accordion.Header>
                  <Accordion.Body>
                    <ol class="list-group list-group-numbered list-group-flush">
                      <li class="list-group-item">Slow Dancing in a Burning Room</li>
                      <li class="list-group-item">Stop This Train</li>
                      <li class="list-group-item">Heart of Life</li>
                      <li class="list-group-item">XO</li>
                      <li class="list-group-item">Waiting On the World to Change</li>
                    </ol>{" "}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <br />

            <div class="card h-60 border-white ps-5">
              <div class="card-header bg-info text-white">podcasts</div>
              <Accordion flush defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>The Lex Fridman Podcast</Accordion.Header>
                  <Accordion.Body>
                    <ol class="list-group list-group-flush">
                      <li class="list-group-item">#185 Sam Harris</li>
                      <li class="list-group-item">#127 Joe Rogan</li>
                      <li class="list-group-item">#134 Eric Weinstein</li>
                      <li class="list-group-item">#164 Andrew Huberman</li>
                      <li class="list-group-item">#16 Eric Weinstein</li>
                      <li class="list-group-item">#101 Joscha Bach</li>
                      <li class="list-group-item">#218 Jaron Lanier </li>
                      <li class="list-group-item">#54 Ray Dalio</li>
                    </ol>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>The Making Sense Podcast</Accordion.Header>
                  <Accordion.Body>
                    <ol class="list-group  list-group-flush">
                      <li class="list-group-item">
                        #234 The Divided Mind w Iain McGilchrist
                      </li>
                      <li class="list-group-item">
                        #41 Faith In Reason w Eric Weinstein
                      </li>
                      <li class="list-group-item">
                        #107 Is Life Actually Worth Living w David Benatar
                      </li>
                      <li class="list-group-item">
                        #152 The Trouble With Facebook w Roger Mcnamee
                      </li>
                      <li class="list-group-item">
                        #136 Digital Humanism w Jaron Lanier
                      </li>
                      <li class="list-group-item">
                        #112 The Intellectual Dark Web w Eric Weinstein & Ben
                        Shapiro
                      </li>
                      <li class="list-group-item">
                        #226 The Price of Distraction w Adam Gazzaley
                      </li>
                    </ol>{" "}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>The Portal</Accordion.Header>
                  <Accordion.Body>
                    <ol class="list-group list-group-flush">
                      <li class="list-group-item">
                        #24 Kai Lenny - To Play and Flirt with Giants
                      </li>
                      <li class="list-group-item">
                        #11 Sam Harris - Fighting with Friends
                      </li>
                      <li class="list-group-item">
                        #4 Timur Kuran - The Economics of Revolution & Mass
                        Deception
                      </li>
                      <li class="list-group-item">
                        #1 Peter Thiel - An Era of Stagnation & Universal
                        Institutional Failure.
                      </li>
                      <li class="list-group-item">
                        #33 Josh Wolfe - The Mind Financing the Future
                      </li>
                    </ol>{" "}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>The Huberman Lab Podcast</Accordion.Header>
                  <Accordion.Body>
                    <ol class="list-group list-group-flush">
                      <li class="list-group-item">Increase your Focus</li>
                      <li class="list-group-item">When to Eat & Exercise</li>
                      <li class="list-group-item">Dopamine Mindset & Drive</li>
                    </ol>{" "}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    The Jordan B. Peterson Podcast
                  </Accordion.Header>
                  <Accordion.Body>
                    <ol class="list-group  list-group-flush">
                      <li class="list-group-item">
                        Creativity, Cognition, and Consciousness w John Vervaeke
                      </li>
                      <li class="list-group-item">
                        A Brain Divided w Iain McGilchrist
                      </li>
                      <li class="list-group-item">The End of Universities?</li>
                      <li class="list-group-item">
                        Bitcoin: THe Future of Money?
                      </li>
                    </ol>{" "}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className="col-12 col-lg-6 ps-5 border-right border-md">
          <h2>speech</h2>
          <div class="card h-60 border-white ">
            <div class="col">
              <ReactPlayer url="https://www.youtube.com/watch?v=WLuPZiyE4Rk" />
            </div>
          </div>
          <br />

        </div>
      </div>
      </div>
    );
  }
}

export default sounds;
