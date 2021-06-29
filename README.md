<h1 align="center">:dog2:  DogTrax  :poodle:</h1>

<p align="center">DogTrax is an app that helps professional dog walkers to manage their clients'information, including adding new dog clients, and writing reports once a dog walk is complete. Inspired by my own dog walking gigs, this app aims to provide dog walkers with an intuitive, easy-to-use customer management system and walk-report-generating capabilities.</p>

Check it out:  [Backend Repo](https://github.com/ejgann/dogtrax-backend) ||  [Demo](https://www.youtube.com/watch?v=xfgP-6XFiCY)

## Built With

### Frontend  
* JavaScript
* React.js v17.0.2
* Redux
* React Router - Declarative Routing
* Custom CSS3 styling

### Backend  
* Ruby v2.6.1
* Rails v6.1.3 - MVC web framework used as an API
* Active Model Serializers - Serializing API routes to JSON
* PostgreSQL v11 - Database

## Installing

### Backend Installation:
* Clone [backend repo](https://github.com/ejgann/dogtrax-backend) to your local machine -- `git clone <backend-repo-url>`
* Run `bundle install` to install required dependencies
* Ensure you have PostgreSQL installed and running
* Run `rails db:create` to create a local database
* Run `rails db:migrate` to add tables to the database
* Run `rails db:seed` to create seed data
* Run `rails s` to start the rails server

### Frontend Installation:
* Clone this repo to your local machine -- `git clone <this-repo-url>`
* Ensure the backend API is running at `http://localhost:3000/`
* Run `npm install` to install all dependencies
* Run `npm start` to start frontend server
* When prompted, ensure frontend server is running at `http://localhost:3001/`

## Features
On the homepage, a user can click the link to "Dog Clients" to see a full list of the dogs they currently walk.

Clicking on a dog's name will take the user to that dog's individual page where they can view details about the dog and see the list of walk reports that have previously been logged for that dog. 

The user is able to edit the dog's basic information and also write a new report that will be added to the collection below.

If a user has a new dog client that needs to be added, they can click on the link "Add New Dog" where they will be taken to a form to input the new dog's information.

## Challenges
Getting the hang of React and Redux was a big challenge for me. Understanding how to implement and manage state and determining where to do that (which class components) was challenging. I also struggled with keeping my project manageable and not letting myself run away with all of the ideas I had initially wanted to implement.

## Future Implementations
I have several ideas for this application that I want to implement in the future. I have grand visions for other features and other user stories to weave into the current implementation. I would also like to refactor this project using React hooks.
