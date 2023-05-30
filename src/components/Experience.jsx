import { Link } from "react-router-dom";




const Experience = () => {
  return (
      <div className="experience">
        <Link id="experience"/>
        <h1>Experience</h1>
        <div className="prompt">
          {" "}
          <h3>General Assembly</h3>
              <h5>Software Engineering Immersive, 03/2023 - 06/2023</h5>
              <div className="text">
              In March 2023, I participated in a comprehensive 420+ hour program in full-stack software engineering that centered on the fundamentals of product development, object-oriented programming, MVC frameworks, data modeling, and effective team collaboration strategies.
              </div>
              <h3>Forrester Research</h3>
              <h5>Customer Success Specialist, 11/2021 - 01/2023</h5>
              <div className="text">
              As a Customer Success Specialist at Forrester, I was responsible for handling various service requests for my assigned clients. This included tasks such as addressing research inquiries, handling analyst inquiries, coordinating briefings, troubleshooting basic website support, and managing webinar registrations. I skillfully navigated multiple internal systems and processes to ensure that I delivered information to clients and internal stakeholders in a well-organized, focused, and clear manner. Collaboration was key, as I closely collaborated with other specialists, account teams, and analysts to provide timely responses to client questions 
              </div>
              <h3>Lola.com</h3>
              <h5>Air Specialist,  12/2019 - 09/2021</h5>
              <div className="text">
              In my role as Air Specialist at Lola.com, I was responsible for booking and managing flight reservations for passengers, utilizing both the Amadeus GDS system and the Lola.com web app. Additionally, I tackled complex corporate travel issues, employing innovative solutions to address recurring problems. I actively collaborated with customers and team members to troubleshoot and resolve issues, consistently striving to achieve a high level of customer satisfaction. Furthermore, I had the opportunity to closely collaborate with software engineers, contributing my insights and expertise to help develop new technologies.
              </div>
        </div>
      </div>
  );
};

export default Experience;
