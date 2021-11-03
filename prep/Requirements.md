# Software Requirements

## Vision

What if toys had feelings? What if cars had feelings? What if people had feelings?! Oh wait, they do.
The vision of our application is to provide users with suggestions of Pixar movies based on their current or selected emotions. Sometimes you’re in a “mood” and you don’t know what to watch - Maybe you want to watch something that matches your mood! Or maybe you’re in a bad mood and you want to change it. Our product offers suggestions based on the user’s input via two separate methods, and allows users to save suggestions to their personal account.

---

## Scope

### In - What will your product do?

* User will be able to input an emotion via facial recognition or by selecting an emotion
* App will render Pixar movie suggestions to user
* User will have their own account to save movies of their choosing
* User will be able to save selections from results

### Out - What will your product NOT do?

* Infringe upon copyrights
* Make us any money
* Won’t stream/play the movies
* No spoilers

### What will your MVP functionality be?

* User can log in - Auth0/Google/YouTube
* User can input emotion
* Pixar movie suggestion is returned
* User can save movie suggestions

### What are your stretch goals?

* Pixar movies “Watched” Tracker
* Movie Trailer plays on the app rather than a link to the trailer
* Tag movies to represent multiple emotions
* Include all Disney movies
* Send user to streaming services to watch movies
* Pixar movie data pages (data visualization)

### What stretch goals are you going to aim for?

* Pixar movies “Watched” Tracker
* Movie trailer plays on the app rather than just a link to the trailer
* “Score” movies to represent multiple emotions, to offer even more specific suggestions

## Functional Requirements

* A user can log in to their account
* A user can log out of their account
* A user can input an emotion one of two ways
  * Facial recognition can determine a user’s emotion
  * A user can select an emotion listed instead of facial recognition if they choose
* Emotion result will point to a movie category which we will create based on the emotional “score” of movies by running their scripts through emotional analysis
* An API call is made to fetch information about the suggested movies
* App will render the movies’ information
* A user can click a movie suggestion and see more details
* A user can save (or “bookmark”) movies to their list
* A user can delete movies from their list
  * If logged in via Google/YouTube, bookmarks are saved to user’s YouTube account

### Data Flow

* “Splash” Page - landing page when not logged in
  * Nav bar displays “log in” and “about us” links
* User Logs in → Auth0 → returns user information for User Model
* EVERYTHING AFTER THIS POINT IS ONLY ACCESSIBLE AFTER SUCCESSFUL LOG-IN
  * Nav bar displays “log out”, “about us”, “home page”, “saved movies”, & “user account”
* User inputs emotion:
  * Via facial recognition
    * App captures facial expression with webcam
    * Analyze expression and return an emotion
  * Via emotion selection from pre-selected options
    * User selects a character representative of emotion
  * Emotion result points to specific category with movies listed based on emotional “score”
  * 3-5 movies are selected as appropriate suggestion results
* API request to TMDB to procure the 3-5 movies’ details - Title, Image, Description
* API results returned
  * Display rendered results - title, image & clickable “see more” link
    * Link loads:
      * Additional movie details
      * Button to save movie to user’s list (or YouTube “liked” videos, if logged in with YouTube account)
      * Provide link to Youtube movie trailer

## Non-Functional Requirements

2 non-functional requirements we will address are performance/usability, and security. We will be prompting users to log in with Auth0 which provides the most extensive functionality of ensuring user authentication and authorization, and offering a variety of log-in platforms to select from. We want to ensure an enjoyable user experience, so we will be making sure to test edge cases where we may have to handle multiple API calls or return a large number of API results at once. We will build our code to handle an overload of information being requested and/or returned and handle it appropriately.
