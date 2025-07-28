import SkillCard from "./SkillCard";



const skillItem =[
    {
        imgSrc: "/Pujan-Portfolio/images/figma.png",
        label: "Figma",
        desc: "Design Tool"
    },
    {
        imgSrc: "/Pujan-Portfolio/images/css3.png",
        label: "CSS3",
        desc: "User Interface"
    },
    {
        imgSrc:"images/javascript.png",
        label: "JavaScript",
        desc: "Interaction"
    },
    {
        imgSrc:"images/nodejs.png",
        label: "Node.js",
        desc: "Web Server"
    },

    {
        imgSrc:"images/expressjs.png",
        label: "Express.js",
        desc: "Node Framework"
    },
    {
        imgSrc:"images/mongodb.png",
        label: "MongoDB",
        desc: "Database"
    },
    {
        imgSrc:"images/reactjs.png",
        label: "React.js",
        desc: "Framework"
    },
    {
        imgSrc:"images/tailwindcss.png",
        label: "Tailwind CSS",
        desc: "User Interface"
    },
    {
        imgSrc:"images/git.png",
        label: "GitHub",
        desc: "Version control"
    },


]


const Skill = () => {
  return (
    <section className="section">
        <div className="container">
            <h2 className="headline-2">
                Essential Tools I Use
            </h2>
            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]
            ">
                A curated selection of powerful tools and technologies I leverage to build exceptional, high-performance websites and applications.
            </p>
            <div className="grid gap-3 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
                {skillItem.map(({imgSrc, label, desc}, key)=>
                (
                    <SkillCard 
                    key={key}
                    imgSrc={imgSrc}
                    label={label}
                    desc={desc}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Skill