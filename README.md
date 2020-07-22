# inhouse-marketing-site

To use this repo, please fork and clone it, and then cd into `inhouse-marketing`, then run `npm install` and then `gatsby develop`.
Once you run all of the above commands, you should be able to go to `localhost:8000` to check it out.

All the information are similar to the previous one. The main difference lies in `signUpV2` in `pages`. So once you go to `localhost:8000/signUpV2`, you can follow the form and create a document in `onboarding_form_submission`collection in the database. 

When that's done, you will see the form to create users. You can choose to create through email and password, google and facebook. However, right now the facebook loggin has some security issue that needs to be figured out.

All of the methods used to handle authentication and database connection are in `src/firebase/firebaseService.js`, including for logging in, signning out and different providers sign in.

