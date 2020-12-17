import * as passport from 'passport';
import * as LocalStrategy from 'passport-local';
import db from '../db';
import { comparePasswordToHash } from '../utils/passwords';

passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser((user, done) => done(null, user))
// these two lines create a req.user. They must go before you initialize your routes

passport.use(new LocalStrategy.Strategy({
    usernameField: 'email' // will accept an email by default
}, async (email, password, done) => { // done is a function used by passport to ask, when is this strategy done doing its job?
    try {
        const [author] = await db.authors.find('email', email);
        if (author && comparePasswordToHash(password, author.password)) {
            delete author.password
            done(null, author);
        } else {
            done(null, false); // false will default to 401 unauthorized 
        }
    } catch (error) {
        console.log(error);
        done(error);
    }
}))