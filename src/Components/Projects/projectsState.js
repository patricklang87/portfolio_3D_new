
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
            title: 'Nadja\'s Bookshop and Cafe',
            modelPath: coffeeBook,
            code_url: 'https://github.com/patricklang87/nadjas-books',
            deployment_url: 'https://patricklang87.github.io/nadjas-books/',
            description: 'A frontend landing page for an imaginary coffeeshop & bookstore. Designed to experiment with CSS and responsive web design.',
            technologies: ['JavaScript', 'HTML5', 'CSS3', 'React'],
            screenshots: ['nbc_1', 'nbc_2', 'nbc_3', 'nbc_4'],
            scale: 55,
            deploymentLinkDisabled: false
        },
        {
            title: 'LegisTracker',
            modelPath: capitol,
            code_url: 'https://github.com/patricklang87/congress_data',
            deployment_url: null,
            description: 'A fullstack webapp designed to help track the actions of federal legislators. I wrote it to practice the creation of individual user profiles and to experiment with Express.js, Passport.js, and MongoDB.',
            technologies: ['JavaScript', 'HTML5', 'CSS3', 'React', 'Redux', 'React-Router', 'Axios', 'Node.js', 'NPM', 'Passport.js', 'Express.js', 'Mongoose.js', 'MongoDB', 'Dotenv', 'Bcrypt'],
            screenshots: ['lt_login', 'lt_find_legislators', 'lt_bills_nav','lt_login_mobile', 'lt_bills_mobile', 'lt_legislators_mobile' ],
            scale: 0.15,
            deploymentLinkDisabled: true
        },
        {
            title: 'Learn Your Flags',
            modelPath: flags,
            code_url: 'https://github.com/patricklang87/flagflashcards',
            deployment_url: 'https://patricklang87.github.io/flagflashcards/#/',
            description: 'A frontend webapp designed to help the user learn the flags of the countries of the world. Written to practice React-Redux. Please note: Recent issues with the restcountries API have been hampering this project\'s rendering.',
            technologies: ['JavaScript', 'HTML5', 'CSS3', 'React', 'Redux', 'React-Router', 'Axios', 'Node.js', 'NPM'],
            screenshots: ['lyf_home', 'lyf_flashcards', 'lyf_quiz', 'lyf_quiz_results'],
            scale: 1.5,
            deploymentLinkDisabled: false
        },
        {
            title: 'TicTacToe 3D',
            modelPath: tictactoe,
            code_url: 'https://github.com/patricklang87/tictactoe-3d-mp',
            deployment_url: 'https://ttt-3d.onrender.com/',
            description: 'A fullstack 3-Dimentional two-player tictactoe game. The 3-dimensionality was achieved in CSS and Vanilla JavaScript. Written to experiment with Express.JS and Socket.io.',
            technologies: ['JavaScript', 'HTML5', 'CSS3', 'React', 'Redux', 'Node', 'NPM', 'Axios', 'Express', 'Socket.io', 'Mongoose', 'MongoDB', 'Heroku'],
            screenshots: ['ttt_awaiting', 'ttt_gameplay_desktop', 'ttt_gameplay_mobile', 'ttt_completed_mobile'],
            scale: 50,
            deploymentLinkDisabled: false
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
            deploymentLinkDisabled: false
        },
        {
            title: 'Sentence Grader',
            modelPath: notepad,
            code_url: 'https://github.com/patricklang87/SentenceGrader',
            deployment_url: 'https://patricklang87.github.io/SentenceGrader/',
            description: 'A grading tool designed to measure the edit distance between an expected student response and a given response. Inspired by Sakai grading tools and the concept of Levenshtein distance.',
            technologies: ['JavaScript', 'HTML5', 'CSS3'],
            screenshots: ['sg_1', 'sg_2'],
            scale: 60,
            deploymentLinkDisabled: false
        },
        {
            title: '3D-Portfolio',
            modelPath: laptop,
            code_url: 'https://github.com/patricklang87/portfolio_3D',
            deployment_url: null,
            description: 'The site you are currently visiting. Taken as an opportunity to experiment with Three.js and React Three Fiber, as well as to play around in Blender.',
            technologies: ['JavaScript', 'HTML5', 'CSS3', 'React', 'React Three Fiber', 'Three.js'],
            screenshots: ['sg_1', 'sg_2'],
            scale: 30,
            deploymentLinkDisabled: true
        },
    ];

