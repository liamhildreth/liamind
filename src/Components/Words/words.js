import React, { Component } from "react";
import breath from "../../whenbreathbecomesair.jpg";
import "./words.css";
import lecture from "../../lastlecture.jpg";
import gods from "../../againstthegods.jpg";
import icb from "../../icb.jpg";
import moth from "../../moth.jpg";
import hdt from "../../hdt.jpg";
import geb from "../../geb.jpg";
import themaster from "../../tmahe.jpg";
import msfm from "../../msfm.jpg";

class words extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="row">
          <div className="col-12 col-md-6 pe-4 border-right border-md">
            <h2>read</h2>
            <h5 className="titles text-center text-lg-start">
              favourite books
            </h5>
            <div class="row row-cols-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
              <div class="col">
                <div class="card h-100">
                  <img src={breath} class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    <h5 class="card-title">When Breath Becomes Air</h5>
                    <p class="body">By Dr. Paul Kalanithi</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <img src={lecture} class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    <h5 class="card-title">The Last Lecture</h5>
                    <p class="body">By Randy Pausch</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <img src={gods} class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    <h5 class="card-title">Against the Gods</h5>
                    <p class="body">By Peter L. Bernstein</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <img src={msfm} class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    <h5 class="card-title">Man's Search for Meaning</h5>
                    <p class="body">By Viktor E. Frankl</p>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <h5 className="titles text-center text-lg-start">
              favourite essays
            </h5>
            <div class="row row-cols-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-4">
              <div class="col">
                <div class="card h-100">
                  <img src={moth} class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    <h5 class="card-title">The Death of the Moth</h5>
                    <p class="body">By Virginia Woolf</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <img src={hdt} class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    <h5 class="card-title">
                      On the Duty of Civil Disobedience
                    </h5>
                    <p class="body">By Henry David Thoreau</p>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <h5 className="titles text-center text-lg-start">
              favourite poems 
            </h5>
            <div class="row row-cols-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
              <div class="col">
                <div class="card h-100">
                  <div class="card-body">
                    <h5 class="card-title">
                    <a
                        href="https://sanskritdocuments.org/doc_deities_misc/salutedawn.html"
                        rel="noreferrer"
                        target="_blank"
                      >
                        Salutation of the Dawn
                      </a></h5>
                    <p class="body">By Kalidasa</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <div class="card-body">
                    <h5 class="card-title">
                    <a
                        href="https://www.poetryfoundation.org/poems/51642/invictus"
                        rel="noreferrer"
                        target="_blank"
                      >
                        Invictus
                      </a></h5>
                    <p class="body">By William Ernest Henley</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <div class="card-body">
                    <h5 class="card-title">
                      <a
                        href="https://www.poetryfoundation.org/poems/45392/ulysses"
                        rel="noreferrer"
                        target="_blank"
                      >
                        Ulysses
                      </a>
                    </h5>
                    <p class="body">By Alfred Lord Tennyson</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <div class="card-body">
                    <h5 class="card-title">
                    <a
                        href="https://www.poetryfoundation.org/poems/46473/if---"
                        rel="noreferrer"
                        target="_blank"
                      >
                        If
                      </a></h5>
                    <p class="body">By Rudyard Kipling</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <div class="card-body">
                    <h5 class="card-title">
                    <a
                        href="https://kalliope.org/en/text/tennyson1999063013"
                        rel="noreferrer"
                        target="_blank"
                      >
                        To the Queen
                      </a></h5>
                    <p class="body">By Alfred Lord Tennyson</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <div class="card-body">
                    <h5 class="card-title">
                    <a
                        href="https://www.poetryfoundation.org/poems/57587/the-tower-56d23b4072cea"
                        rel="noreferrer"
                        target="_blank"
                      >
                        The Tower
                      </a></h5>
                    <p class="body">By W.B. Yeats</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <div class="card-body">
                    <h5 class="card-title">
                    <a
                        href="https://www.poetryfoundation.org/poems/50643/sonnet-1-from-fairest-creatures-we-desire-increase"
                        rel="noreferrer"
                        target="_blank"
                      >
                        Sonnet I
                      </a></h5>
                    <p class="body">By William Shakespeare</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <div class="card-body">
                    <h5 class="card-title">
                    <a
                        href="https://shakespeare.folger.edu/shakespeares-works/shakespeares-sonnets/sonnet-14/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        Sonnet XIV
                      </a></h5>
                    <p class="body">By William Shakespeare</p>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <h5 className="titles text-center text-lg-start">
              currently reading
            </h5>
            <div class="row row-cols-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-4">
              <div class="col">
                <div class="card h-100">
                  <img src={geb} class="card-img-top" alt="..."></img>
                  <div class="card-body">
                    <h5 class="card-title">GEB: an Eternal Golden Braid</h5>
                    <p class="body">By Douglas Hofstadter</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 ps-4 border-left">
            <h2>write</h2>
            <br />
            <div class="row row-cols-1  row-cols-lg-2  g-4">
              <div class="col">
                <div class="card h-100">
                  <div class="card-header">Capella</div>

                  <div class="card-body">
                    <h5 class="card-title">The Game of Ideas</h5>
                    <p class="body">
                      A blog post I wrote exploring some of the issues with
                      social media's current form as a game, while also
                      explaining Capella as mechanism.
                    </p>
                    <a
                      target="_blank"
                      href="https://drive.google.com/file/d/1xcfxPE_8R0T4Rh97Y9jxK3NutZAT61TO/view?usp=sharing"
                      class="btn btn-primary"
                    >
                      read
                    </a>
                    <p class="card-text">
                      <small class="text-muted">Edited: December 2021, original July 2021</small>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <div class="card-header">Capella</div>

                  <div class="card-body">
                    <h5 class="card-title">
                      A Case for a Decentralized Thought-Sharing Platform
                    </h5>
                    <p class="body">
                      A proposal Alex and I wrote exploring the idea of creating
                      an alternative monetization model for a twitter style
                      social network.
                    </p>

                    <a
                      target="_blank"
                      href="https://drive.google.com/file/d/1Eeck3dT3j1pRuk0S7GQvwuRkFlJ5FGp0/view?usp=sharing"
                      class="btn btn-primary"
                    >
                      read
                    </a>
                    <p class="card-text">
                      <small class="text-muted">May 2021</small>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <div class="card-header">Capella</div>

                  <div class="card-body">
                    <h5 class="card-title">Capella in a Page</h5>
                    <p class="body">
                      A one page explainer of the problem Capella is trying to
                      solve and our product.
                    </p>

                    <a
                      target="_blank"
                      href="https://drive.google.com/file/d/1O5OmdwM1lnHm8D7_XMxgb999FjfcFdH1/view?usp=sharing"
                      class="btn btn-primary"
                    >
                      read
                    </a>
                    <p class="card-text">
                      <small class="text-muted">May 2021</small>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <div class="card-header">fun</div>

                  <div class="card-body">
                    <h5 class="card-title">The Game of Fingers</h5>
                    <p class="body">
                      My attempt at modelling the economics of a drinking game I
                      play with friends. My goal was to figure out the best
                      strategy to win each time.
                    </p>

                    <a
                      target="_blank"
                      href="https://drive.google.com/file/d/1hhiwti2i3WohOn2cb2kq8lqUY00RkON6/view?usp=sharing"
                      class="btn btn-primary"
                    >
                      read
                    </a>
                    <p class="card-text">
                      <small class="text-muted"> January 2021</small>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <div class="card-header">university</div>
                  <div class="card-body">
                    <h5 class="card-title">
                      The Tumultuous Journey of Detroit's Big Three Automakers
                      Through the Great Recession and COVID-19 Pandemic
                    </h5>
                    <p class="body">
                      My final paper for an elective I took on the economics of
                      COVID-19.
                    </p>
                    <a
                      target="_blank"
                      href="https://drive.google.com/file/d/1t3b-voXs8QQvjW_HKpN6-ia1YWOTY-Dw/view?usp=sharing"
                      class="btn btn-primary"
                    >
                      read
                    </a>
                    <p class="card-text">
                      <small class="text-muted">August 2020</small>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <div class="card-header">high school</div>
                  <div class="card-body">
                    <h5 class="card-title">
                      Corruption Within FIFA: the Qatar 2022 ‘Winter’ World Cup
                    </h5>
                    <p class="body">
                      A paper I wrote in high school calling on FIFA to revoke
                      their decision to award Qatar the hosting rights for the
                      World Cup in 2022.
                    </p>
                    <a
                      target="_blank"
                      href="https://drive.google.com/file/d/19jZMAXso3YVrTOFe28RAhvKPLDLtKxXW/view?usp=sharing"
                      class="btn btn-primary"
                    >
                      read
                    </a>
                    <p class="card-text">
                      <small class="text-muted">May 2017</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default words;
