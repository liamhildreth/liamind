import React, { Component } from "react";
import breath from "../../whenbreathbecomesair.jpg";
import logo from "../../lh.png";
import lecture from "../../lastlecture.jpg";
import gods from "../../againstthegods.jpg"
import icb from "../../icb.jpg"
import moth from "../../moth.jpg"
import hdt from "../../hdt.jpg"
import geb from "../../geb.jpg"
import detroit from "../../detroitbigthree.pdf"
import fifa from "../../fifa.pdf"

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
          <div className="col-6 pe-4 border-right border-md">
            <h2>read</h2>
              <h5 className="titles text-center text-lg-start">favourite books</h5>
              <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                <div class="col">
                  <div class="card h-100">
                    <img src={breath} class="card-img-top" alt="..."></img>
                    <div class="card-body">
                      <h5 class="card-title">When Breath Becomes Air</h5>
                      <p class="body">
                            By Dr. Paul Kalanithi
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card h-100">
                    <img src={lecture} class="card-img-top" alt="..."></img>
                    <div class="card-body">
                      <h5 class="card-title">The Last Lecture</h5>
                      <p class="body">
                            By Randy Pausch
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card h-100">
                    <img src={gods} class="card-img-top" alt="..."></img>
                    <div class="card-body">
                      <h5 class="card-title">Against the Gods</h5>
                      <p class="body">
                            By Peter L. Bernstein
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card h-100">
                    <img src={icb} class="card-img-top" alt="..."></img>
                    <div class="card-body">
                      <h5 class="card-title">In Cold Blood</h5>
                      <p class="body">
                            By Truman Capote
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <h5 className="titles text-center text-lg-start">favourite essays</h5>
              <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-4">
                <div class="col">
                  <div class="card h-100">
                    <img src={moth} class="card-img-top" alt="..."></img>
                    <div class="card-body">
                      <h5 class="card-title">The Death of the Moth</h5>
                      <p class="body">
                            By Virginia Woolf
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card h-100">
                    <img src={hdt} class="card-img-top" alt="..."></img>
                    <div class="card-body">
                      <h5 class="card-title">On the Duty of Civil Disobedience</h5>
                      <p class="body">
                            By Henry David Thoreau
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <h5 className="titles text-center text-lg-start">favourite poems</h5>
              <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-4">
                <div class="col">
                  <div class="card h-100">
                    <div class="card-body">
                      <h5 class="card-title">Salutation to the Dawn</h5>
                      <p class="body">
                            By Kalidasa
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card h-100">
                    <div class="card-body">
                      <h5 class="card-title">Invictus</h5>
                      <p class="body">
                            By William Ernest Henley
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <h5 className="titles text-center text-lg-start">currently reading</h5>
              <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                <div class="col">
                  <div class="card h-100">
                    <img src={geb} class="card-img-top" alt="..."></img>
                    <div class="card-body">
                      <h5 class="card-title">GEB: an Eternal Golden Braid</h5>
                      <p class="body">
                            By Douglas Hofstadter
                      </p>
                    </div>
                  </div>
                </div>
                </div>
          </div>
          <div className="col-6 ps-4 border-left">
            <h2>write</h2>
            <br />
              <div class="row row-cols-1  row-cols-lg-2  g-4">
                <div class="col">
                  <div class="card h-100">
                  <div class="card-header">Capella</div>

                    <div class="card-body">
                      <h5 class="card-title">The Game of Ideas</h5>
                      <p class="body">
                            A blog post I wrote exploring some of the issues with social media's current form as a game, while also explaining Capella as mechanism.
                      </p>
                      <a  target="_blank" href="https://www.feedbackmarket.ca/post/the-game-of-ideas" class="btn btn-primary">read</a>
                      <p class="card-text"><small class="text-muted">July 2021</small></p>

                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card h-100">
                  <div class="card-header">Capella</div>

                    <div class="card-body">
                      <h5 class="card-title">Capella in a Page</h5>
                      <p class="body">
                            A one page explainer of the problem Capella is trying to solve and our product.
                      </p>
                      <a target="_blank" href="https://www.feedbackmarket.ca/post/capella-in-a-page" class="btn btn-primary">read</a>
                      <p class="card-text"><small class="text-muted">May 2021</small></p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card h-100">
                  <div class="card-header">university</div>
                    <div class="card-body">
                      <h5 class="card-title">The Tumultuous Journey of Detroit's Big Three Automakers Through the Great
Recession and COVID-19 Pandemic
                        </h5>
                      <p class="body">
                            My final paper for an elective I took on the economics of COVID-19.
                      </p>
                      <a target="_blank" href={detroit} class="btn btn-primary">read</a>
                      <p class="card-text"><small class="text-muted">August 2020</small></p>
          
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card h-100">
                  <div class="card-header">high school</div>
                    <div class="card-body">
                      <h5 class="card-title">Corruption Within FIFA: the Qatar 2022 ‘Winter’ World Cup</h5>
                      <p class="body">
                            A paper I wrote in high school calling on FIFA to revoke their decision to award Qatar the hosting rights for the World Cup in 2022.
                      </p>
                      <a target="_blank" href={fifa} class="btn btn-primary">read</a>
                      <p class="card-text"><small class="text-muted">May 2017</small></p>
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
