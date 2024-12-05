import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Branden',
    lastName:  'Vongphakdy',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Full-Stack Developer',
    avatar:    '/images/avatar.jpg',
    location:  'Canada/Eastern',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: []  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/Snowdenstyll',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/brandenvongphakdy',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:bvongphakdy21@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Full-Stack Developer</>,
    subline: <>I'm Branden, a Web Developer at <InlineCode>The Beer Guy</InlineCode>, where I craft intuitive<br/> user experiences. After hours, I build my own projects.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: false,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Branden Vongphakdy is a skilled web developer specializing in crafting efficient, scalable solutions that blend functionality with seamless user experiences. His expertise spans backend systems, API integrations, and blockchain technologies, with a commitment to driving innovation through thoughtful design and robust engineering.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'The Beer Guy',
                timeframe: '2021 - Present',
                role: 'Web Developer',
                achievements: [
                    <>Redesigned the UI/UX for The Beer Guy platform, resulting in a 20% increase in user engagement and 30% faster load times.</>,
                    <>Spearheaded the integration of of The Beer Guy plus, a subscription-based model, enabling users to access premium features.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/tbg/cover-01.png',
                        alt: 'The Beer Guy',
                        width: 16,
                        height: 11
                    }
                ]
            },
            {
                company: 'Detour Delivery',
                timeframe: '2020 - 2021',
                role: 'Founder',
                achievements: [
                    <>Increased Brand Engagement: Designed and launched a web platform integrated with social media campaigns, driving a 40% increase in customer engagement and visibility during the COVID-19 pandemic.</>,
                    <>Optimized Operations: Built a streamlined onboarding process for employees, reducing training time by 30% and significantly enhancing daily operational efficiency for the delivery service.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/detour/cover-01.png',
                        alt: 'The Beer Guy',
                        width: 16,
                        height: 11
                    }
                ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Fanshawe College',
                description: <>Computer Programmer Analyst</>,
                program_overview: [
                    {
                        coursework: ["Operating Systems", "Algorithms", "Software development", "Object-oriented development", "Client/server", "Web development", "Database development", "Mobile Development"],
                        technologies: ["Java", "C++", "JavaScript", "C#", ".NET", "React", "React Native", "Kotlin", "XML", "HTML", "JSON", "CSS"]
                    }
                ],
            },
        ]
    },
    technical: {
        display: false, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Figma',
                description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    },
    resume: {
        display: true, // set to false to hide this section
        title: 'Resume',
        image: '/images/projects/tbg/cover-01.png',
    },
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        {
            src: '/images/gallery/img-01.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-02.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-03.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-04.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-05.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-06.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-07.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-08.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-09.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-10.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-11.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-12.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-13.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-14.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };