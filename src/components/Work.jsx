import ProjectCard from "./ProjectCard";



const works=[
    {
        imgSrc:"images/work1.png",
        title: "BIG TROUBLE GAME",
        tags:['C++','SDL2','FMOD STUDIO'],
        ProjectLink:'https://github.com/PujanPande/BigTrouble-Obsctacle-3D-Game.git'
    },
     {
        imgSrc:"images/work2.png",
        title: "CHESS GAME",
        tags:['C#','AZURE','Development'],
        ProjectLink:'https://Team5-CS350@dev.azure.com/Team5-CS350/Team5/_git/ChessLib'
    },
     {
        imgSrc:"images/work3.png",
        title: "TRAVEL VLOG WEBSITE",
        tags:['HTML','CSS','JAVASCRIPT','PHP'],
        ProjectLink:'https://github.com/PujanPande/TravelVlog.git'
    }
    /*
     {
        imgSrc:"images/work4.png",
        title: "Project One",
        tags:['API','MVC','Development'],
        ProjectLink:''
    },
     {
        imgSrc:"images/work5.png",
        title: "Project One",
        tags:['API','MVC','Development'],
        ProjectLink:''
    },
     {
        imgSrc:"images/work6.png",
        title: "Project One",
        tags:['API','MVC','Development'],
        ProjectLink:''
    },
    */
]

const Work = () => {
  return (
    <section
    id="work"
     className="section">
        <div className="container">
            <h2 className="headline-2 mb-8">
                MY PROJECTS
            </h2>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
                {works.map(({imgSrc, title, tags, ProjectLink}, key) => (
                    <ProjectCard 
                    key={key}
                    imgSrc={imgSrc}
                    title={title}
                    tags={tags}
                    ProjectLink={ProjectLink}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Work