import './projects.scss';
import Crud from '../../../assets/images/simple-crud.png';
import Calculator from '../../../assets/images/calculator-jeres.png';
import Game from '../../../assets/images/game-preview.png';


const RecentProject = () => {

    const projects = [
        {
            title: 'Simple CRUD table',
            url: Crud,
            description: "A simple CRUD table and this was created back in my internship",
            link: '#'
        },
        {
            title: 'Calculator',
            url: Calculator,
            description: "After my internship, I created this calculator out of boredom. ",
            link: 'https://calculator-jeres.herokuapp.com/'
        },
        {
            title: 'Adventure of Baji',
            url: Game,
            description: "During my 4th year college 1st semester, we have this prelim exam to create a game",
            link: '#'
        },
    ];

    return (
        <section className='container projects-wrapper'>
            <h1 className='title my-4'>Projects</h1>
            <div className="row justify-content-between project-img-wrapper">
                {projects.map((project, i) => {
                    return (
                        <figure className="col-lg-5 figure mb-5" key={i}>
                            <img src={project.url} alt="projects-img" className="img-project" />
                            <figcaption className="figure-caption mb-4"><a href={project.link}>{project.title}</a></figcaption>
                            <figcaption className="figure-caption">{project.description}</figcaption>
                        </figure>
                    )
                })}
            </div>
        </section>
    );
}

export default RecentProject;