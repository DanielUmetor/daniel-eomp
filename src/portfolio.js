// --- 🎨 Site Styling ---

// Colors (recommendation: choose a color suitable for dark and light modes)
// Should be inputted as a hex value. Use https://g.co/kgs/XCcs7T for choosing colors with hex.
const colors = {
    buttonColor: "#4305ba",
    LinkHighlightColor: "#4305ba"
}

// Transitions
const transitions = {
    active: true, // activate for all sections
    onlyLanding: false, // activate only for initial load of landing page
    showOnce: true, // transition only once
    thresholdOption: 0.2 // indicates at what percentage of the sections visibility the transition should start
}

// Splash Screen
const splashScreen = true // recommended: for best behavior after refresh

// --- 👋 Greeting Section ---
const greeting = {
    intro: "Hello 👋, my name is",
<<<<<<< HEAD
    name: "Daniel Umetor",
    message: "I'm an Aspiring Software Developer.",
    basedLocation: "Cape Town",
    resumeLink: "https://drive.google.com/file/d/1Q0_SpJS5-dRi6CxGGuwfstQzHL8cp3kZ/view", // recommended: google drive file share link (change to "anyone on the internet can view")
    logo: {
        link: "images/mylogo.png", // use relative path from  parent directory -> ex: images/image.ext
        custom: true // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
    },
    portraitLink: 'images/danielportrait.jpg'
=======
    name: "Maxim Shelepov",
    message: "I'm a computer science student and an aspiring software engineer. Currently working as a web developer at my university building tools to aid students, educators, and staff.",
    basedLocation: "Raleigh, NC",
    resumeLink: "https://docs.google.com/document/d/1Sa_sK3RMusoezzgzxu8LkV16i2Jra2qd/edit?usp=sharing&ouid=113657039181859132688&rtpof=true&sd=true", // recommended: google drive file share link (change to "anyone on the internet can view")
    logo: {
        link: "images/initials.png", // use relative path from  parent directory -> ex: images/image.ext
        custom: true // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
    },
    portraitLink: 'images/portrait.jpg'
>>>>>>> 34f961ffa75d44895b26affe012d16ea7f4a3c93
}

const socialMediaLinks = {
    github: "https://github.com/feifyKike",
<<<<<<< HEAD
   
=======
    linkedin: "https://www.linkedin.com/in/maxim-shelepov1",
    medium: "https://medium.com/@mimaishel",
    stackoverflow: "",
    xtwitter: "https://twitter.com/mimaishel"
>>>>>>> 34f961ffa75d44895b26affe012d16ea7f4a3c93
} // to add any additional social media links check out the README.md or src/icons.js file

// --- 😎 About Section ---
const about = {
    autobiography: [
<<<<<<< HEAD
        "My name is Daniel Umetor and I'm a Aspiring software developer at Life Choices. I have a passion for coding in languages such as HTML, CSS and JavaScript.",
        "I am Responsible, organized, problem solver, and independent thinker. Work well in a team and a quick learner."
=======
        "My name is Maxim Shelepov and I'm a computer science student at North Carolina State University. I have a passion for coding in languages such as Python, Java, PHP, & Swift. Work in web development and have experience with Django and Laravel frameworks.",
        "Responsible, organized, problem solver, and independent thinker. Work well in a team and a quick learner. Programming for 3+ years and have 4 years of experience in advanced mathematics such as calculus, statistics, and discrete mathematics. Currently working as a web development intern for my university."
>>>>>>> 34f961ffa75d44895b26affe012d16ea7f4a3c93
    ], // Separated items are paragraphs
    techStack: [
        "PHP",
        "Python",
        "JavaScript",
        "Vue.js",
<<<<<<< HEAD
        "",
        ""
    ],
    photo1Link: "images/danielu.jpg",
=======
        "MySQL",
        "Swift"
    ],
    photo1Link: "images/portrait1.jpeg",
    photo2Link: "images/portrait2.jpeg",
    photo3Link: "images/portrait3.jpeg"
>>>>>>> 34f961ffa75d44895b26affe012d16ea7f4a3c93
}

// --- 🛡️ Experience Section ---
const experiences = [
    {
        position: "Web Dev Intern",
        company: {
<<<<<<< HEAD
            name: "The Bed Shop",
            link: ""
        },
        duration: "March 2024 - April 2024",
        bulletPoints: [
            "Promomting different types of beds",
            "Informing customers about the different types of beds, which are for comfort and for back pain, and also directing them to the main shop.",
            "Increasing brand awareness and maintaining a positive image of the brand."
=======
            name: "WolfTech",
            link: "https://tools.wolftech.ncsu.edu/support/index.php/WolfTech_Information_Technology"
        },
        duration: "Aug 2022 - Present",
        bulletPoints: [
            "Resolved issues and developed new tools within several university web applications (email automation, research discovery, educational resources, scheduling tools, and text-generative AI news sharing).",
            "Achieved 100+ github code contributions as an intern on the team.",
            "Currently rebuilding and modernizing the university digital sign manager and system."
>>>>>>> 34f961ffa75d44895b26affe012d16ea7f4a3c93
        ],
        hashtags: [
        ]
    },
    {
        position: "Matriculated",
        company: {
            name: "Bellville Technical High School",
            link: ""
        },
        duration: "2018 - 2023",
        bulletPoints: [
            "Did a Technical Based Curriculm consisting of:",
            "Engineering and Graphics Design, Civil Services",
            "Technical Mathematics and Technical Sciences"
        ],
        hashtags: [
        
        ]
    }
]

// --- 💻 Work Section ---
const works = [
    {
<<<<<<< HEAD
        projectName: "Awodwa Hendrik",
        yearCompleted: "Classmate",
        description: "Daniel is an incredible friend and a brilliant coder. His passion for programming and quick grasp of complex concepts during our coding bootcamp have been truly inspiring. I'm confident he has a bright future ahead in the tech industry.",
        techStack: "",
        links: [
            {
                label: "",
                type: "",
                url: ""
            },
            {
                label: "",
                type: "",
                url: ""
            }
        ],
        imageLink: "images/awodwa.jpg",
        alignLeft: false
    },
    {
        projectName: "Chelsea Julie",
        yearCompleted: "Classmate",
        description: "Daniel's dedication and talent have shone brightly throughout our coding bootcamp. His knack for problem-solving and eagerness to help others have made him an invaluable part of our group. I can't wait to see the amazing things he'll achieve in the tech world!",
        techStack: "",
=======
        projectName: "TrackYourSubs IOS App",
        yearCompleted: "2022",
        description: "An IOS app to track you subscriptions and expenses, all the while presenting in a clean and professional look with a load of features. Some of the more evident features are: Budgeting (monthly / yearly option available), Current monthly & yearly total expense at a glance, Custom suggestions to meet budget, Organize (Categorization & Importance) and filter through subscriptions, Reminders via scheduled notifications, Stats page: pie chart visual, bar chart visual, and streak indicator.",
        techStack: "Swift, SwiftUI",
>>>>>>> 34f961ffa75d44895b26affe012d16ea7f4a3c93
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/feifyKike/TrackYourSubsDemo/"
            },
            {
                label: "",
                type: "external",
                url: "https://youtu.be/KsTx-F70OOk"
            }
        ],
        imageLink: "images/tracksubs_pic.png",
        alignLeft: false
    },
    {
        projectName: "Dynamic Portfolio Website",
        yearCompleted: "2021",
        description: "Developed a personal portfolio website with Python backend using the Django web development framework. Incorporated HTML, CSS, and JavaScript to construct the frontend of the website.",
        techStack: "Django, Python, HTML, CSS, JS",
        links: [
            {
                label: "",
                type: "external",
                url: "https://maximshelepov.com"
            }
        ],
        imageLink: "images/portfolio_pic.png",
        alignLeft: true
    },
    {
        projectName: "Sudoku Game & Solver",
        yearCompleted: "2021",
        description: "Built a Sudoku game UI incorporating the Java Swing library. Randomly generates a Sudoku puzzle and solves itself using the backtracking algorithm written in Java..",
        techStack: "Java",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/feifyKike/sudokusolver"
            },
            {
                label: "",
                type: "external",
                url: "https://youtu.be/lXOjOrjf5hU"
            }
        ],
<<<<<<< HEAD
        imageLink: "images/erin.jpg",
        alignLeft: false
    },
     {
        projectName: "Keira Kistensamy",
        yearCompleted: "Classmate",
        description: "Daniel's journey through the coding bootcamp has been nothing short of inspiring. His commitment to mastering new skills and solving complex problems sets him apart. As a friend, Daniel is always ready to share insights and support, making our learning experience richer. I have no doubt he'll make a significant impact in the tech world",
        imageLink: "images/keira.jpg",
        alignLeft: false
    },
    {
        projectName: "",
        yearCompleted: "",
        description: "",
        techStack: "",
=======
        imageLink: "images/sudoku_pic.png",
        alignLeft: false
    },
    {
        projectName: "Trivia Quiz",
        yearCompleted: "2020",
        description: "Interested in taking a fun and interactive pop quiz? Using the HTML, CSS3, JavaScript, and jQuery I created a quiz that can be taken on numerous topics of your choice and gives instant feedback. The entire project is built mostly on JavaScript and all the functionality and events are controlled through functions such as ReadDisplay and Validate. The HTML portion of the online quiz only serves as the skeleton and template for elements that will be created via JS.",
        techStack: "JS, HTML, CSS",
>>>>>>> 34f961ffa75d44895b26affe012d16ea7f4a3c93
        links: [
            {
                label: "",
                type: "",
                url: ""
            },
            {
                label: "",
                type: "",
                url: ""
            }
        ],
<<<<<<< HEAD
        imageLink: "",
=======
        imageLink: "images/trivia_pic.png",
        alignLeft: true
    },
    {
        projectName: "Coronavirus Report",
        yearCompleted: "2020",
        description: "Created a program that displays up-to-date COVID-19 data and shows results in a graphical / visual representation. Coded with the Python programming language and libraries such as Matplotlib, Requests, and CSV.",
        techStack: "Python",
        links: [
            {
                label: "",
                type: "git",
                url: "https://youtu.be/gw5kb1QKVp0"
            },
            {
                label: "",
                type: "external",
                url: "https://github.com/feifyKike/Covid-Cases-Visual"
            }
        ],
        imageLink: "images/covid_pic.png",
>>>>>>> 34f961ffa75d44895b26affe012d16ea7f4a3c93
        alignLeft: false
    }
]

const archiveLink = "https://github.com/feifyKike?tab=repositories"

// --- 📭 Contact Section ---
// 2 Options available - Choose 1
const contact = {
    externalLink: {
        shortTitle: "Get in Touch",
        note: [
            "Currently seeking web and software development positions/internships in the RTP area for summer 2024.",
            "Also looking to build a team for projects & startup ideas or just make professional connections."
        ], // paragraph breaks will be entered after each item,
        link: {
            email: "", // email takes precedance
            other: "https://forms.gle/W3MswTKsPWMxEbn58"
        },
        responseTimeMessage: "...and I'll resopnd within the next 24hrs"
    },
    formEmbedLink: "" // inclusion of this link will take precedance
}

export default {
    colors,
    transitions,
    splashScreen,
    greeting,
    socialMediaLinks,
    about,
    experiences,
    works,
    archiveLink,
    contact
}