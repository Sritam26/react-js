import React,{useState}from 'react'

export default function About() {

const[mystyle,setmystyle]=useState({
    color:'black',
    backgroundColor:'white'

});

const[btntext,SetBtntext]=useState("Enable dark mode")
const toggle=()=>{
    if(mystyle.color==='black'){
        setmystyle({
            color:'white',
            backgroundColor:'black'

        })
        SetBtntext("Enable light mode");

    }
    else{
        setmystyle({
            color:'black',
            backgroundColor:'white'

        })
        SetBtntext("Enable dark mode");
    }
}





  return (
    <div className='container'>
      <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About Sritam
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={mystyle}>
      

"My name is Sritam Panda, and I am a web developer passionate about creating efficient, user-friendly digital experiences. With a keen interest in both front-end and back-end development, I enjoy the creative challenge of designing intuitive interfaces and the problem-solving aspect of building robust backend systems. I strive to stay updated with the latest web technologies and best practices to deliver high-quality solutions that meet both user needs and business goals. Outside of coding, I enjoy exploring new technologies, collaborating with teams, and continuously learning to enhance my skills in the dynamic field of web development."
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       Educational Status
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={mystyle}>
      "I am currently pursuing my Master of Computer Applications (MCA) degree, focusing on advancing my skills in software development, database management, and system analysis. This program has equipped me with deep technical knowledge and practical experience through hands-on projects, preparing me to excel in web development and beyond."

      </div>
    </div>
  </div>
  <div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Hobbies
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={mystyle}>
      "Outside of my web development pursuits, I find joy in creating websites that blend functionality with creativity. Learning new concepts keeps my mind engaged and eager for fresh challenges. Badminton is my go-to for staying active and competitive, while traveling to new places satisfies my curiosity and broadens my perspective on the world. These hobbies not only balance my technical focus but also inspire me to approach both work and life with creativity and enthusiasm."




      </div>
    </div>
  </div>
  </div>
  <button className="btn btn-primary my-2" onClick={toggle}>{btntext}</button>
</div>
    </div>
  )
}
