export default function Projects() {
	return(
		<section id="projects">
      <div class="container">
        <div class="project-wrapper">
          <h2 class="section-title dark-blue-text">
            Projects
          </h2>

          
          <div class="row">
            <div class="col-lg-4 col-sm-12">
              <div class="project-wrapper__text">
                <h3 class="project-wrapper__text-title">Butchered Website</h3>
                <div>
                  <p class="mb-4">
                    A react website created for a local Chicago act. Website was created as an easy to send electronic press kit in order to apply to gigs and inform fans of upcoming events.
                  </p>
                </div>
                <a target="_blank" class="cta-btn cta-btn--hero" href="https://www.butchered.net/">
                  See Live
                </a>
                <a target="_blank" class="cta-btn text-color-main" href="https://github.com/lhsthree/butchered-react">
                  Source Code
                </a>
              </div>
            </div>
            <div class="col-lg-8 col-sm-12">
              <div class="project-wrapper__image">
                <a href="#!" target="_blank">
                  <div data-tilt class="thumbnail rounded">
                    <img class="img-fluid" src="./assets/butchered.jpg" />
                  </div>
                </a>
              </div>
            </div>
          </div>
         

          
          <div class="row">
            <div class="col-lg-4 col-sm-12">
              <div class="project-wrapper__text">
                <h3 class="project-wrapper__text-title">Smart Brain</h3>
                <div>
                  <p class="mb-4">
                  Udemy final project in which an app was built using React. App connects a server, api, and database with front end. App registers guests with a name, email and encrypted password. Users are able to select an image of a face and enter in to input field and appp will return picture with a box locating where face is located in picture. App tracks number of entries from each user and logs it within the database.
                  </p>
                </div>
                <a target="_blank" class="cta-btn cta-btn--hero" href="https://smart-brain-lhsthree.herokuapp.com/">
                  See Live
                </a>
                <a target="_blank" class="cta-btn text-color-main" href="https://github.com/lhsthree/smart-brain-api">
                  Source Code For Server
                </a>
                <a target="_blank" class="cta-btn text-color-main" href="https://github.com/lhsthree/facerecognition">
                  Source Code For Front end
                </a>
              </div>
            </div>
            <div class="col-lg-8 col-sm-12">
              <div class="project-wrapper__image">
                <a href="#!" target="_blank">
                  <div data-tilt class="thumbnail rounded">
                    <img class="img-fluid" src="./assets/smart-brain.png" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          

      
          <div class="row">
            <div class="col-lg-4 col-sm-12">
              <div class="project-wrapper__text">
                <h3 class="project-wrapper__text-title">RoboFriends</h3>
                <div>
                  <p class="mb-4">
                    A responsive website that uses an api to create multiple cards with different pictures created randomly. Input field allows user to search through available card by name. 
                  </p>
                </div>
                <a target="_blank" class="cta-btn cta-btn--hero" href="https://5fad8e7b0b1080899b7bdbf4--nervous-mestorf-b5cf51.netlify.app/">
                  See Live
                </a>
                <a target="_blank" class="cta-btn text-color-main" href="https://github.com/lhsthree/RoboFriends">
                  Source Code
                </a>
              </div>
            </div>
            <div class="col-lg-8 col-sm-12">
              <div class="project-wrapper__image">
                <a href="#!" target="_blank">
                  <div data-tilt class="thumbnail rounded">
                    <img class="img-fluid" src="./assets/RoboFriends.png" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          

         
          <div class="row">
            <div class="col-lg-4 col-sm-12">
              <div class="project-wrapper__text">
                <h3 class="project-wrapper__text-title">Netflix Clone</h3>
                <div>
                  <p class="mb-4">
                    Netflix clone that allows users to sign in and scroll there certain titles in movies and shows.
                  </p>
                </div>
                <a target="_blank" class="cta-btn cta-btn--hero" href="https://practical-bohr-551f7d.netlify.app/">
                  See Live
                </a>
                <a target="_blank" class="cta-btn text-color-main" href="https://github.com/lhsthree/netflix-clone">
                  Source Code
                </a>
              </div>
            </div>
            <div class="col-lg-8 col-sm-12">
              <div class="project-wrapper__image">
                <a href="#!" target="_blank">
                  <div data-tilt class="thumbnail rounded">
                    <img class="img-fluid" src="./assets/netflix.svg" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
	)
}