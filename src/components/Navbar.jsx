// import { useState } from 'react';
// import './navbar.css';

// function Navbar(){
//     const [currentComp,setCurrentcomp]=useState('Home')
//     const handleHome=()=>setCurrentcomp('Home')
//     const hanleAbout=()=>setCurrentcomp('About')
//     const handleProjects=()=>setCurrentcomp('Projects')
//     const handleSkills=()=>setCurrentcomp('Skills')
//     const handleContact=()=>setCurrentcomp('Contact')

//     let Comp;
//     switch (currentComp){
//         case 'Home':
//             Comp=Home;
//             break;
//         case 'About':
//             Comp=About;
//             break;
//         case 'Projects':
//             Comp=Projects;
//             break;
//         case 'Skills':
//             Comp=Skills;
//             break;
//         case 'Contact':
//             Comp=Contact;
//             break;
//         default:
//             Comp=Home;
//     }

//     return(
//         <>
//         <p>Sudharshan Baskar</p>
//         <div className='navelems'>
//             <button onClick={handleHome}>Home</button>
//             <button onClick={hanleAbout}>About Me</button>
//             <button onClick={handleProjects}>Projects</button>
//             <button onClick={handleSkills}>Skills</button>
//             <button onClick={handleContact}>Contact</button>

//         </div>
//         <div className='Content'>
//             <Comp/>
//         </div>
//         </>
//     )
// }

// export default Navbar;  