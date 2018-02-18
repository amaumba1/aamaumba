import React from 'react';


const ProfileHeader = () => {
    return (
        
        <div className="profileHeader">
           
            <section className="features">
            
                <div className="feature">
                    <h4 className="heading-4 heading-4--dark">UI | Mobile Development</h4>
                    <p className="feature__text">
                        Using sketch to create UI / UX design and ReactJS, Redux and SCSS to develop Responsive User Interface. 
                        Using React Native for both IOS and Android plus Swift and Kotlin for developing Native Apps.  
                    </p>
                </div>
                <div className="feature">
                    
                    <h4 className="heading-4 heading-4--dark">Back-End Developement</h4>
                    <p className="feature__text">
                        Develop Microservices and MVC architecture using GraphQL for API management, NodeJS, GoLang, Django and Spring Cloud & Spring Boot
                    Framework for the different backend systems. Works with MongoDB, MySQL and Cassandra for Database Management.
                    </p>
                </div>
                <div className="feature">
                    
                    <h4 className="heading-4 heading-4--dark">ML | AI Developement</h4>
                    <p className="feature__text">
                        Design Recomendation Systems using TensorFlow, Keras and Theno and using Hadoop 3.0 and Spark to design, store
                        and manage dataflow pipeline. 
                    </p>
                </div>
            </section> 
        </div>
    );
}

export default ProfileHeader; 