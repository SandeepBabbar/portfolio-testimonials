import React from 'react'
import './App.css';
import {Container, Content, Header} from './components'
import Image1 from './assets/image-daniel.jpg'
import Image2 from './assets/image-jonathan.jpg'
import Image3 from './assets/image-jeanette.jpg'
import Image4 from './assets/image-patrick.jpg'
import Image5 from './assets/image-kira.jpg'
import Quote from './assets/bg-pattern-quotation.svg'

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <div className="SubContainer1">
          <div className="Wrapper Big">
            <Container color="#733FC8" textColor1="#FFFFFF" textColor2="#CFCFCF">
              {(props)=>(
                <React.Fragment>
                  <Header
                    image={Image1}  
                    imageBorder="2px solid #A775F1"
                    name="Daniel Clifford"
                    label="Verified Graduate"
                    {...props}
                  />
                  <Content {...props}
                    heading="I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth."
                  >
                    “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the  best - and most grueling - time of my life. Since completing the course, I’ve  successfully switched careers, working as a Software Engineer at a VR startup. ”
                  </Content>
                  <div className="Quote">
                    <img src={Quote}/>
                  </div>
                </React.Fragment>
              )}
            </Container>
          </div>
          <div className="Wrapper Small">
            <Container color="#48556A" textColor1="#FFFFFF" textColor2="rgba(255,255,255,0.7)">
              {(props)=>(
                <React.Fragment>
                  <Header
                    image={Image2}  
                    name="Jonathan Walters"
                    label="Verified Graduate"
                    {...props}
                  />
                  <Content {...props}
                    heading="The team was very supportive and kept me motivated"
                  >
                  “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. “                  </Content>
                </React.Fragment>
              )}
            </Container>
          </div>
          <div className="Wrapper Small">
            <Container color="#FFFFFF" textColor1="#48556A" textColor2="#48556A">
              {(props)=>(
                <React.Fragment>
                  <Header
                    image={Image3}  
                    name="Jeanette Harmon"
                    label="Verified Graduate"
                    {...props}
                  />
                  <Content {...props}
                    heading="An overall wonderful and rewarding experience"
                  >
                    “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”                  
                  </Content>
                </React.Fragment>
              )}
            </Container>
          </div>
          <div className="Wrapper Big">
            <Container color="#19202D" textColor1="#FFFFFF" textColor2="rgba(255,255,255,0.7)">
              {(props)=>(
                <React.Fragment>
                  <Header
                    image={Image4}  
                    name="Patrick Abrams"
                    label="Verified Graduate"
                    {...props}
                  />
                  <Content {...props}
                    heading="Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy."
                  >
                    “ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.  ”                  
                  </Content>
                </React.Fragment>
              )}
            </Container>
          </div>
        </div>
        <div>
        <div style={{height:"100%", paddingBottom:24}} className="Last">
            <Container color="#FFFFFF" textColor1="#48556A" textColor2="#48556A">
              {(props)=>(
                <React.Fragment>
                  <Header
                    image={Image5}  
                    name="Kira Whittle"
                    label="Verified Graduate"
                    {...props}
                  />
                  <Content {...props}
                    heading="Such a life-changing experience. Highly recommended!"
                  >
                    “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!  ”                  
                  </Content>
                  
                </React.Fragment>
              )}
            </Container>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
