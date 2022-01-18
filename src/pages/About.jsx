import { Outlet } from "react-router";

 function About() {
   return(
     <div style={{backgroundColor: 'blue'}}>
      <h2>About</h2>
      <p>Woah cool React Router Application</p>
      <Outlet />
     </div>
   )
 }

 export default About;
