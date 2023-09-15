# Rhythmix
#### Full-Stack React Appication - Toby Chantharasy

Rhythmix is your ultimate destination for exploring the complete discographies of your favorite music artists. 
Whether you're a dedicated music enthusiast or just looking to discover new sounds, our platform offers a comprehensive and user-friendly experience to satisfy your musical curiosity.
Whether you're a die-hard music connoisseur or just getting a peek into the world of an artist, Rhythmix is your go-to platform for discovering, exploring, and connecting with your favorite artists and their music. 

[Background Image Source: Artwork by Christina 'Astronuggie'](https://astronuggie.gumroad.com/)

## Contents
- [Features](#features)
- [Technical Aspects](#tech-aspects)
- [Screenshots](#screenshots)
- [Technology](#tech-used)
- [Reviews](#review)

<a name="features"></a>
### Features
* Log in/out, create an account
* Search any artist and view their entire discography
* Open albums to play in Spotify, or view artist profiles
* Play songs from any album directly in the browser
* Add albums to the recommendations page for other users to discover
* Clean, simple and user-friendly design makes Rhythmix easy to use


<a name="tech-aspects"></a>
### Technical Aspects
* Built with JavaScript, CSS and HTML using the Express framework
* Connects to Spotify Web API in order to retrieve 
* Code uses efficient MVC design philosophy
* Demonstrates user CRUD operations using RESTful routing
* Utilises authentication to lock logged-out users from functions
* Both Tailwind/DaisyUI and self-written CSS for UI
* Pushed to GitHub
* Deployed via Heroku


<a name="tech-used"></a>
### Technologies Used
* JavaScript
* CSS
* JSX
* Mongoose
* Express
* MongoDB
* Git


<a name="screenshots"></a>
### Screenshots

![Sign Up Page](/readme_assets/signupform.png) <br>
![Home Page](/readme_assets/homepage.png) <br>
![Search Page](/readme_assets/albumsearch.png) <br>
![Detail Page](/readme_assets/detailpage.png) <br>
![Recommendation Page](/readme_assets/recommendations.png) <br>


<a name="review"></a>
## Personal Review
I thoroughly enjoyed this project using React and Express, despite being quite anxious going into it. I had to restart my project a few times due to the Spotify Web API not being implemented properly, which meant that through this repetition, I was able to build upon my knowledge of the React framework and find a solution that fit me best. This experience proved to be immensely valuable, as it not only allowed me to optimize my workflow but also fostered my learning of the technologies involved.

As a musician myself and avid Spotify user, I was determined to produce a finished product that did justice to hugely successful streaming platforms and music library sites. Through employing different approaches and problem solving from a different angle, I was able to produce something that I am proud of and which evolved as the week progressed, alongside my knowledge of the React framework. Despite this, there are some icebox extra features that I was either not able to implement or did not have the time to in just a week of working on this project, such as database-stored recommended albums and playlist CRUD functionality.

In addition to this, I chose to implement the user model manually through the MERN stack rather than using the Spotify API log in, as I wanted to practice the MERN infrastructure and did not want the API to overshadow my own abilities. In hindsight, this restricted the information retrieved by the API, meaning I was not able to do as much with album information once the fetch call had been made, but this just meant that I needed to become creative with how I utilised the object that was returned. For example, I was able to cut and stitch the embed link from the API object so that it rendered an embeded music player on each album's detail page dynamically.

Overall this project has been extremely useful in my development as a software engineer and I can definitely see myself using the React framework in the future, for either work or passion projects as the ease of use far improves on the Node framework.




----
