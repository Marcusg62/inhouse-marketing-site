# inhouse-marketing-site

All the information are similar to the previous one. The main difference lies in `signUpV2` in `pages`. So once you go to `localhost:8000/signUpV2`, you can follow the form and create a document in `onboarding_form_submission`collection in the database. 

When that's done, you will see the form to create users. You can choose to create through email and password, google and facebook. However, right now the facebook loggin has some security issue that needs to be figured out.

All of the methods used to handle authentication and database connection are in `src/firebase/firebaseService.js`, including for logging in, signning out and different providers sign in.

