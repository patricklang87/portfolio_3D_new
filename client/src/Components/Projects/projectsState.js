
import capitol from '../../assets/models/capitol.glb';
import coffeeBook from '../../assets/models/coffee_book.glb';
import flags from '../../assets/models/flags.glb';
import notepad from '../../assets/models/notepad.glb';
import tictactoe from '../../assets/models/tictactoe.glb';
import ufo from '../../assets/models/ufo.glb';
import laptop from '../../assets/models/laptop.glb';
import trafficCone from '../../assets/models/trafficcone2.glb';

export const radius = 70;
export const projects = [
        {
            title: 'LegisTracker',
            modelPath: capitol,
            code_url: 'https://github.com/patricklang87/congress_data',
            deployment_url: 'https://legistracker.herokuapp.com/#/',
            description: '***Not redeployed*** A fullstack webapp designed to help track the actions of federal legislators. I wrote it to practice the creation of individual user profiles and to experiment with Express.js, Passport.js, and MongoDB. Uses the ProPublica, Google Civics, and MapQuest API.',
            technologies: ['JavaScript', 'HTML5', 'CSS3', 'React', 'Redux', 'React-Router', 'Axios', 'Node.js', 'NPM', 'Passport.js', 'Express.js', 'Mongoose.js', 'MongoDB', 'Dotenv', 'Bcrypt'],
            screenshots: ['lt_login', 'lt_find_legislators', 'lt_bills_nav','lt_login_mobile', 'lt_bills_mobile', 'lt_legislators_mobile' ],
            scale: 0.15,
            height: 5,
            deploymentLinkDisabled: true,
        },
                {
            title: 'Learn Your Flags',
            modelPath: flags,
            code_url: 'https://github.com/patricklang87/flagflashcards',
            deployment_url: 'https://patricklang87.github.io/flagflashcards/#/',
            description: 'A full stack webapp designed to help the user learn the flags of the countries of the world. Front end built in React-Redux. Uses JSON Web Tokens to enable users to individually track the flags they have memorized. Flag and country info provided via the restcountries.com API.',
            technologies: ['JavaScript', 'HTML5', 'CSS3', 'React', 'Redux', 'React-Router', 'Axios', 'Express', 'JSON Web Token', 'Node.js', 'NPM'],
            screenshots: ['lyf_home', 'lyf_flashcards', 'lyf_quiz', 'lyf_quiz_results'],
            scale: 1.5,
            height: 0,
            deploymentLinkDisabled: false,
        },
        {
            title: 'Nadja\'s Bookshop',
            modelPath: coffeeBook,
            code_url: 'https://github.com/patricklang87/nadjas-books',
            deployment_url: 'https://patricklang87.github.io/nadjas-books/',
            description: 'A frontend landing page for an imaginary coffeeshop & bookstore. Designed to experiment with CSS and responsive web design.',
            technologies: ['JavaScript', 'HTML5', 'CSS3', 'React'],
            screenshots: ['nbc_1', 'nbc_2', 'nbc_3', 'nbc_4'],
            scale: 55,
            height: 0,
            deploymentLinkDisabled: false,
        },
        {
            title: 'TicTacToe 3D',
            modelPath: tictactoe,
            code_url: 'https://github.com/patricklang87/tictactoe-3d-mp',
            deployment_url: 'https://ttt-3d.onrender.com/',
            description: 'A fullstack 3-Dimentional two-player tictactoe game. The 3-dimensionality was achieved in CSS and Vanilla JavaScript. Written to experiment with Express.JS and Socket.io.',
            technologies: ['JavaScript', 'HTML5', 'CSS3', 'React', 'Redux', 'Node', 'NPM', 'Axios', 'Express', 'Socket.io', 'Mongoose', 'MongoDB', 'Heroku'],
            screenshots: ['ttt_awaiting', 'ttt_gameplay_desktop', 'ttt_gameplay_mobile', 'ttt_completed_mobile'],
            scale: 60,
            height: 2,
            deploymentLinkDisabled: false,
        },
        {
            title: 'Meteor Jumper',
            modelPath: ufo,
            code_url: 'https://github.com/patricklang87/meteor_jumper',
            deployment_url: 'https://patricklang87.github.io/meteor_jumper/',
            description: 'Survive the asteroid field and devour the human astronaut. A one-player game written in vanilla JS written to experiment with the HTML DOM.',
            technologies: ['JavaScript', 'HTML5', 'CSS3'],
            screenshots: ['mj_startscreen', 'mj_gamestart', 'mj_gameplay', 'mj_victory'],
            scale: 3,
            height: 0,
            deploymentLinkDisabled: false,
        },
        {
            title: 'Lecturna Quizbuilder',
            modelPath: notepad,
            code_url: 'https://github.com/patricklang87/quizbuilder',
            deployment_url: 'https://lecturna.herokuapp.com',
            description: '***Not redeployed*** Write and take quizzes, saving data to a PostgreSQL database hosted on Heroku. I am also still optimizing the mobile layout for the app.',
            technologies: ['JavaScript', 'HTML5', 'SASS', 'React', 'Redux', 'Axios', 'Express', 'PostgreSQL', 'Heroku'],
            screenshots: ['lec_login', 'lec_quizlist', 'lec_quizupdate', 'lec_takequiz', 'lec_quizresults'],
            scale: 60,
            height: 0,
            deploymentLinkDisabled: true,
        },
        {
            title: '3D-Portfolio',
            modelPath: laptop,
            code_url: 'https://github.com/patricklang87/portfolio_3D',
            deployment_url: 'https://patricklangcoding.onrender.com',
            description: 'The site you are currently visiting. Taken as an opportunity to experiment with Three.js and React Three Fiber, as well as to play around in Blender. Includes a small backend to enable an email contact form.',
            technologies: ['JavaScript', 'HTML5', 'CSS3', 'React', 'React Three Fiber', 'Three.js', 'Nodemailer'],
            screenshots: ['portfolio_projects', 'portfolio_projects_mobile'],
            scale: 40,
            height: 0.5,
            deploymentLinkDisabled: true,
        },
    ];

