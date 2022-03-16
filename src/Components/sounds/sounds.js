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
          <div className="col-12">
            <h2>listen</h2>
            <div class="card h-60 border-white ">
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
                        #41 Douglas Murray - Heroism 2020: Defense of Our Own
                        Civilization
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
                <Accordion.Item eventKey="6">
                  <Accordion.Header>The Joe Rogan Experience</Accordion.Header>
                  <Accordion.Body>
                    <ol class="list-group list-group-flush">
                      <li class="list-group-item">
                        [Netflix Special] Joe Rogan: Triggered
                      </li>
                      <li class="list-group-item">
                        [Netflix Special] Joe Rogan: Strange Times
                      </li>

                      <li class="list-group-item">#1628 - Eric Weinstein</li>
                      <li class="list-group-item">#1554 - Kanye West</li>
                      <li class="list-group-item">#1070 - Jordan Peterson</li>
                      <li class="list-group-item">#1558 - Tristan Harris</li>
                      <li class="list-group-item">#1609 - Elon Musk</li>
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
                        Bitcoin: The Future of Money?
                      </li>
                    </ol>{" "}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>

            <div class="card h-60 border-white ">
              <div class="card-header bg-info text-white">music</div>
              <Accordion flush defaultActiveKey="0">
              <Accordion.Item eventKey="27">
                  <Accordion.Header>Jimi Hendrix</Accordion.Header>
                  <Accordion.Body>
                    <ol class="list-group list-group-numbered list-group-flush">
                      <li class="list-group-item">One Rainy Wish</li>
                      <li class="list-group-item">Power of Soul</li>
                      <li class="list-group-item">Georgia Blues</li>
                      <li class="list-group-item">1983...(A Merman I Should Turn To Be)</li>
                      <li class="list-group-item">Bold as Love</li>
                    </ol>{" "}
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
                      <li class="list-group-item">Beautiful Boy</li>
                      <li class="list-group-item">Mind Games</li>
                      <li class="list-group-item">Intuition</li>

                      <li class="list-group-item">Give Peace a Chance</li>
                      <li class="list-group-item">Gimme Some Truth</li>
                      <li class="list-group-item">Hold On</li>
                      <li class="list-group-item">Oh My Love</li>
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
                <Accordion.Item eventKey="18">
                  <Accordion.Header>Yo Yo Ma</Accordion.Header>
                  <Accordion.Body>
                    <ol class="list-group list-group-numbered list-group-flush">
                      <li class="list-group-item">Carnival of The Animals</li>
                      <li class="list-group-item">Ave Maria</li>
                      <li class="list-group-item">
                        Cello Suite No. 1 in G Major
                      </li>
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
                      <li class="list-group-item">
                        Slow Dancing in a Burning Room
                      </li>
                      <li class="list-group-item">Stop This Train</li>
                      <li class="list-group-item">Heart of Life</li>
                      <li class="list-group-item">XO</li>
                      <li class="list-group-item">
                        Waiting On the World to Change
                      </li>
                    </ol>{" "}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                  <Accordion.Header>Jay Z</Accordion.Header>
                  <Accordion.Body>
                    <ol class="list-group list-group-numbered list-group-flush">
                      <li class="list-group-item">Empire State of Mind</li>
                      <li class="list-group-item">Young Forever</li>
                      <li class="list-group-item">Brooklyn's Finest</li>
                      <li class="list-group-item">Song Cry</li>
                      <li class="list-group-item">Mr. Carter</li>
                    </ol>{" "}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="25">
                  <Accordion.Header>Pink Floyd</Accordion.Header>
                  <Accordion.Body>
                    <ol class="list-group list-group-numbered list-group-flush">
                    <li class="list-group-item">Fearless</li>

                    <li class="list-group-item">Breath (In the Air)</li>
                    <li class="list-group-item">Shine On You Crazy Diamonds (Pts. 1-5)</li>

                      <li class="list-group-item">Wish You Were Here</li>
                      <li class="list-group-item">Us And Them</li>
                    </ol>{" "}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="10">
                  <Accordion.Header>The Weekend</Accordion.Header>
                  <Accordion.Body>
                    <ol class="list-group list-group-numbered list-group-flush">
                      <li class="list-group-item">Die For You</li>
                      <li class="list-group-item">Losers</li>
                      <li class="list-group-item">Secrets</li>
                      <li class="list-group-item">House of Balloons</li>
                      <li class="list-group-item">In the Night</li>
                      <li class="list-group-item">Twenty Eight</li>
                    </ol>{" "}
                  </Accordion.Body>
                </Accordion.Item>
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
                <Accordion.Item eventKey="26">
                  <Accordion.Header>Adele</Accordion.Header>
                  <Accordion.Body>
                    <ol class="list-group list-group-numbered list-group-flush">
                      <li class="list-group-item">Remedy</li>
                      <li class="list-group-item">I Drink Wine</li>
                      <li class="list-group-item">Daydreamer</li>
                      <li class="list-group-item">Million Years Ago</li>
                      <li class="list-group-item">Someone Like You</li>
                    </ol>{" "}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="9">
                  <Accordion.Header>Journey</Accordion.Header>
                  <Accordion.Body>
                    <ol class="list-group list-group-numbered list-group-flush">
                      <li class="list-group-item">Faithfully</li>
                      <li class="list-group-item">
                        Lovin', Touchin', Squeezin'
                      </li>
                      <li class="list-group-item">Seperate Ways</li>
                      <li class="list-group-item">When You Love a Woman</li>
                      <li class="list-group-item">
                        I'll Be Alright Without You
                      </li>
                    </ol>{" "}
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="11">
                  <Accordion.Header>Khalid</Accordion.Header>
                  <Accordion.Body>
                    <ol class="list-group list-group-numbered list-group-flush">
                      <li class="list-group-item">Another Sad Love Song</li>
                      <li class="list-group-item">Therapy</li>
                      <li class="list-group-item">American Teen</li>
                      <li class="list-group-item">Angels</li>
                      <li class="list-group-item">Saved</li>
                    </ol>{" "}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="12">
                  <Accordion.Header>Luke Combs</Accordion.Header>
                  <Accordion.Body>
                    <ol class="list-group list-group-numbered list-group-flush">
                      <li class="list-group-item">Dear Today</li>
                      <li class="list-group-item">Reasons</li>
                      <li class="list-group-item">Better Together</li>
                      <li class="list-group-item">Beautiful Crazy</li>
                      <li class="list-group-item">When It Rains It Pours</li>
                    </ol>{" "}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="13">
                  <Accordion.Header>Post Malone</Accordion.Header>
                  <Accordion.Body>
                    <ol class="list-group list-group-numbered list-group-flush">
                      <li class="list-group-item">Stay</li>
                      <li class="list-group-item">I fall Apart</li>
                      <li class="list-group-item">Feeling Whitney</li>
                      <li class="list-group-item">Broken Whiskey Glasses</li>
                      <li class="list-group-item">Staring At The Sun</li>
                    </ol>{" "}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="14">
                  <Accordion.Header>Nat King Cole</Accordion.Header>
                  <Accordion.Body>
                    <ol class="list-group list-group-numbered list-group-flush">
                      <li class="list-group-item">Smile</li>
                      <li class="list-group-item">Unforgettable</li>
                      <li class="list-group-item">Stardust</li>
                      <li class="list-group-item">Fascination</li>
                      <li class="list-group-item">Pretend</li>
                    </ol>{" "}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="15">
                  <Accordion.Header>Patsy Cline</Accordion.Header>
                  <Accordion.Body>
                    <ol class="list-group list-group-numbered list-group-flush">
                      <li class="list-group-item">Leavin' On Your Mind</li>
                      <li class="list-group-item">She's Got You</li>
                      <li class="list-group-item">Your Cheatin' Heart</li>
                      <li class="list-group-item">
                        Three Cigarettes In An Ashtray
                      </li>
                    </ol>{" "}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="16">
                  <Accordion.Header>Pentatonix</Accordion.Header>
                  <Accordion.Body>
                    <ol class="list-group list-group-numbered list-group-flush">
                      <li class="list-group-item">The Sound of Silence</li>
                      <li class="list-group-item">Hallelujah</li>
                    </ol>{" "}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="17">
                  <Accordion.Header>Roger Miller</Accordion.Header>
                  <Accordion.Body>
                    <ol class="list-group list-group-numbered list-group-flush">
                      <li class="list-group-item">A World So Full of Love</li>
                      <li class="list-group-item">Footprints In The Snow</li>
                      <li class="list-group-item">Walkin' In the Sunshine</li>
                      <li class="list-group-item">
                        I Get Up Early In The Morning
                      </li>
                    </ol>{" "}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="27">
                  <Accordion.Header>P!nk</Accordion.Header>
                  <Accordion.Body>
                    <ol class="list-group list-group-numbered list-group-flush">
                      <li class="list-group-item">Just Give Me a Reason</li>
                      <li class="list-group-item">F**kin' Perfect</li>
                      <li class="list-group-item">Try</li>
                      <li class="list-group-item">True Love</li>
                      <li class="list-group-item">Raise Your Glass</li>
                    </ol>{" "}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="19">
                  <Accordion.Header>RUFUS DU SOL</Accordion.Header>
                  <Accordion.Body>
                    <ol class="list-group list-group-numbered list-group-flush">
                      <li class="list-group-item">Innerbloom</li>
                      <li class="list-group-item">Next To You</li>
                      <li class="list-group-item">You Were Right</li>
                    </ol>{" "}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="20">
                  <Accordion.Header>The Game</Accordion.Header>
                  <Accordion.Body>
                    <ol class="list-group list-group-numbered list-group-flush">
                      <li class="list-group-item">From Adam</li>
                      <li class="list-group-item">Red Nation</li>
                      <li class="list-group-item">From Adam</li>
                      <li class="list-group-item">My Life</li>
                      <li class="list-group-item">Hate It Or Love It</li>
                    </ol>{" "}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="21">
                  <Accordion.Header>The Rolling Stones</Accordion.Header>
                  <Accordion.Body>
                    <ol class="list-group list-group-numbered list-group-flush">
                      <li class="list-group-item">Angie</li>
                      <li class="list-group-item">Wild Horses</li>
                      <li class="list-group-item">Beast of Buden</li>
                      <li class="list-group-item">Miss You</li>
                      <li class="list-group-item">Sympathy For The Devil</li>
                    </ol>{" "}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="22">
                  <Accordion.Header>The Beatles</Accordion.Header>
                  <Accordion.Body>
                    <ol class="list-group list-group-numbered list-group-flush">
                      <li class="list-group-item">Blackbird</li>
                      <li class="list-group-item">In My Life</li>
                      <li class="list-group-item">Norwegian Wood</li>
                      <li class="list-group-item">Something</li>
                      <li class="list-group-item">Nowhere Man</li>
                      <li class="list-group-item">Paperback Writer</li>
                      <li class="list-group-item">
                        While My Guitar Gently Weeps
                      </li>
                    </ol>{" "}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="23">
                  <Accordion.Header>Louis Armstrong</Accordion.Header>
                  <Accordion.Body>
                    <ol class="list-group list-group-numbered list-group-flush">
                      <li class="list-group-item">La Vie En Rose</li>
                      <li class="list-group-item">What A Wonderful World</li>
                    </ol>{" "}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="24">
                  <Accordion.Header>Tupac</Accordion.Header>
                  <Accordion.Body>
                    <ol class="list-group list-group-numbered list-group-flush">
                      <li class="list-group-item">Life Goes On</li>
                      <li class="list-group-item">To Live And Die in L.A</li>
                      <li class="list-group-item">I Ain't Mad At Cha</li>
                      <li class="list-group-item">Dear Mama</li>
                    </ol>{" "}
                  </Accordion.Body>
                </Accordion.Item>

              </Accordion>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default sounds;
