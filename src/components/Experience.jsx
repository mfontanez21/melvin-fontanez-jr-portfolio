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
              <h3>Crystal Travel and Tours</h3>
              <h5>Travel Management Sales Associate,  03/2018 - 12/2019</h5>
              <div className="text">
              Taking on the position of a Travel Management Sales Associate, my responsibilities encompassed the booking and maintenance of flight, hotel, car, and train reservations using the Amadeus GDS System. Within this role, I efficiently handled ticket-related tasks such as issuing, exchanging, and refunding for both leisure and corporate travelers. Furthermore, I collaborated closely with airlines to facilitate smooth arrangements for large group travel, ensuring the seamless coordination of 15 or more travelers.
              </div>
              <h3>Road Scholar</h3>
              <h5>Travel Services Advisor,  08/2016 - 02/2018</h5>
              <div className="text">
              In the capacity of a Travel Services Advisor, I undertook the essential duty of facilitating and managing flight, hotel, car, and train reservations using the Amadeus GDS system. Through collaborative consultations, I engaged with passengers to determine their unique needs and preferences, allowing me to arrange appropriate destinations, transportation modes, travel dates, costs, and accommodations. Furthermore, I provided valuable support to travelers by efficiently resolving emergency travel issues, addressing complaints, and facilitating timely refunds when required.
              </div>
              <h3>Grand Circle Travel</h3>
              <h5>Air Travel Consultant,  02/2014 - 06/2016</h5>
              <div className="text">
              As an Air Travel Consultant, my main responsibilities revolved around booking and managing flight reservations for passengers through the Amadeus GDS system. Additionally, I actively engaged with passengers to understand their preferences and requirements, providing guidance on suitable destinations, transportation options, travel dates, costs, and accommodations. In the event of travel issues, complaints, or refund requests, I efficiently addressed and resolved them, ensuring customer satisfaction throughout their journey.
              </div>
        </div>
      </div>
  );
};

export default Experience;
