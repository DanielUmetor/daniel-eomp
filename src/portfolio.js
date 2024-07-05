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
    name: "Daniel Umetor",
    message: "I'm an Aspiring Software Developer.",
    basedLocation: "Cape Town",
    resumeLink: "https://drive.google.com/file/d/1Q0_SpJS5-dRi6CxGGuwfstQzHL8cp3kZ/view", // recommended: google drive file share link (change to "anyone on the internet can view")
    logo: {
        link: "images/mylogo.png", // use relative path from  parent directory -> ex: images/image.ext
        custom: true // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
    },
    portraitLink: 'images/danielportrait.jpg'
}

const socialMediaLinks = {
    github: "https://github.com/DanielUmetor",
   
} // to add any additional social media links check out the README.md or src/icons.js file

// --- 😎 About Section ---
const about = {
    autobiography: [
        "My name is Daniel Umetor and I'm a Aspiring software developer at Life Choices. I have a passion for coding in languages such as HTML, CSS and JavaScript.",
        "I am Responsible, organized, problem solver, and independent thinker. Work well in a team and a quick learner."
    ], // Separated items are paragraphs
    techStack: [
        "PHP",
        "Python",
        "JavaScript",
        "Vue.js",
        "",
        ""
    ],
    photo1Link: "images/danielu.jpg",
}

// --- 🛡️ Experience Section ---
const experiences = [
    {
        position: "Brand Ambassodor",
        company: {
            name: "The Bed Shop",
            link: ""
        },
        duration: "March 2024 - April 2024",
        bulletPoints: [
            "Promomting different types of beds",
            "Informing customers about the different types of beds, which are for comfort and for back pain, and also directing them to the main shop.",
            "Increasing brand awareness and maintaining a positive image of the brand."
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
        imageLink: "images/betterchelsea.jpg",
        alignLeft: false
    },
    {
        projectName: "Erin Williams",
        yearCompleted: "Classmate",
        description: "Daniel has been a standout in our coding bootcamp, consistently impressing us with his sharp intellect and knack for tackling challenging coding tasks.",
        techStack: "",
        links: [
            {
                label: "",
                type: "",
                url: ""
            }
        ],
        imageLink: "images/erin.jpg",
        alignLeft: true
    },
    {
        projectName: "Keira Kistensamy",
        yearCompleted: "Classmate",
        description: "Daniel's journey through the coding bootcamp has been nothing short of inspiring. His commitment to mastering new skills and solving complex problems sets him apart. As a friend, Daniel is always ready to share insights and support, making our learning experience richer. I have no doubt he'll make a significant impact in the tech world",
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
        imageLink: "images/keira.jpg",
        alignLeft: false
    },
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