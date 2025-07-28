

const aboutItems =[
    {
        label:"Project Done",
        number: 10,
    },
    {
        label:"Years of Experience",
        number: 2,
    }
];

const About = () => {
  return (
<section
    id="about"
    className="section"
>
    <div className="container">
        <   div className="bg-zinc-800/50 p-7 rounded-2xl 
        md:p-12">
            <p className="text-zinc-300 mb-4 md:mb-8
            md:text-xl md:max-w-[60ch]">
                    👋 About Me
                    Hi! I'm Pujan, a junior pursuing a Bachelor of Science in Computer Science at the University of Lynchburg. I’m passionate about building practical, efficient solutions through code and continuously expanding my skills in software development.

                    I recently completed an internship where I gained real-world experience and sharpened my problem-solving, teamwork, and technical abilities. It was a valuable step in applying classroom knowledge to real projects.

                    As a student, I enjoy exploring areas like web development, algorithms, and software engineering. I often spend time working on personal projects, learning new technologies, and staying curious about how things work under the hood.

                    I'm actively looking for new opportunities to grow and contribute—whether through internships, collaborative projects, or freelance work. Feel free to reach out if you’d like to connect or work together!
            </p>
            <div className="flex flex-wrap items-cente gap-4 md:gap-7">
                {
                    aboutItems.map(({label, number}, key)=>(
                        <div key={key}>
                            <div className="flex items-center 
                            md:mb-2">
                                <span className="text-2xl font-bold
                                md:text-4xl">
                                    {number}
                                </span>
                                <span className="text-sky-400 font-bold md:text-3xl">+</span>
                            </div>
                            <p className="text-sm text-zinc-400">{label}</p>
                         </div>
                    ))
                }
                <img src="/images/log.png" 
                alt="Logo"
                width={30}
                height={30}
                className="ml-auto md:w-[40px] md:h-[40px]" 
                />
            </div>
        </div>
    </div>
</section>  )
}

export default About