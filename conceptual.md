### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
A. Json Web Token.

- What is the signature portion of the JWT?  What does it do?
A. The third part part of the token, following the header and payload. It ensures the integrity of the token by verifying that the contents haven't been altered during transmission.

- If a JWT is intercepted, can the attacker see what's inside the payload?
A. Yes the attacker can decode the base64- encoded payload section and view contents.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
A. You can implement authentication by: user logins to the server validating their credentials if valid  the server creates a JWT with the ysers info, when the client includes the JWT in subsequent requests, server verfies the JWT,usinf token verfication allowing the server to identify the user and determine access rights and acesss control which the server checks the user's permissions and roles stored in the JWT to determine whether the user is authorized  to access the requested resources or perform specific actions.

- Compare and contrast unit, integration and end-to-end tests.
A. Unit tests focus on the testing of individual units or components of the software in isolation to test small indepedent parts of the code. Generally using mocks or stubs to stimualate the behavior of external dependencies and are faster than end-to-end tests or integration.

  Intergration  verifies that different parts of the system  work together correctly  while intergrated, by testing interactions between various components, modules or services. Actual external dependencies are used and real data is used in the testing process, is slower to unit testing due to having to involve multiple components requiring setup and teardown processes.

  End-to-end tests validate te entire application. They test the apps functionality, performance and behavior, full system dependencies are used, and is the slowest of the three.

- What is a mock? What are some things you would mock?
A. A mock is  a simulated object or componenet that mimics the behavior of real objects or componenets in the system. You could mock external dependencies, complex operations,. unit testing or unstable components. 

- What is continuous integration?
A. Continous intergration is a practice that involves frequently intergrating code changes from multiple developers into a shared respository.

- What is an environment variable and what are they used for?
A. A dynamic value that can affect tthe way processes behave on a computer system. They are used for configuration , security, system behavior and interprocess communication.
- What is TDD? What are some benefits and drawbacks?
A. Test driven development, an approach in which tests arwe written before the code.Benefits of it are high quality code, faster debugging, and better design. The drawbacks are its harder to do, its very time consuming and can lead to over testing.

- What is the value of using JSONSchema for validation?
A. It is benefical for data validation of the json data against the defined schema, provides a clear way to document the structure and properties of the data.

- What are some ways to decide which code to test?
A. You decide which code to test by prioritizing critical and complex components, if there are areas prone to bugs, to cover edge cases and boundary conditions, intergration points , if  the user interfaces need tests, if the code is frequently changing.
- What does `RETURNING` do in SQL? When would you use it?
A. Allows  you to obtain the values of columns affected by the data manipulation language. You use it when you need to retrive specific column values that have been affected by 'INSERT', 'UPDATE', or 'DELETE' operations.

- What are some differences between Web Sockets and HTTP?
A.  HTTP is more for traditional client side server communication while web sockets offer more efficient and persistent connection for real-time data transfer.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

I prefered express it seemed simplier to use and quicker to pick up.