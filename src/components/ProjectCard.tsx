import { classes, media, style } from 'typestyle'

interface ProjectCardProps {
    hashtags:string[],
    title:string,
    desc:string,
    demo:string,
    code:string
}
export const ProjectCard:React.FC<ProjectCardProps> = ({hashtags, title, desc, demo, code}) => {
  return (
    <article className={projectWrapper}>
        <figure className={projectFigure}></figure>
        <div className={style({width:'auto', height:'auto'})}>
            <section className={classes(projectSection, style({display:'flex', gap:'9px'})) }>
                {hashtags.map(i=>(<span className={classes(textStyle, style({color: '#4F4F4F',fontSize: '16px',}))}>{i}</span>))}
            </section>
            <section className={classes(classes(projectSection, style({ marginTop:'22px' })))}>
                <h4 className={classes(textStyle, style({color: '#333', fontSize:'24px', margin:0}))}>
                {title}
                </h4>
                <p className={classes(textStyle, style({color:'#828282', fontSize:'16px'}))}>
                    {desc}
                </p>
            </section>
            <section className={classes(projectSection, style({display:'flex', gap:'9px'})) }>
                <a href={demo}>
                    <button className={classes(projectButton, textStyle)} >
                    Demo</button>
                </a>
            <a href={code}>
                <button className={classes(projectButton, textStyle, style({backgroundColor:'white', color:'#2F80ED', border:'1px #2F80ED solid'}))}>Code</button>
            </a>
            
            </section>
        </div>
    </article>
  )
}

const projectWrapper = style(
    {
        width: '395px',
        height: '588px',
        padding: '22px',
        flexShrink: 0,
       
    },
    media(
        {minWidth:768},
        {
            width: '1024px',
            height: '311px',
            display:'flex',
            gap:'34px', 
        }
    )
)

const projectFigure = style(
    {
        width:'100%',
        height: '261px',
        flexShrink: 0,
        margin:0
    },
    media(
        {minWidth:768},
        {
            width:'384px',
            height:'267px',
            flexShrink: 0
        }
    )
)
const projectSection = style(
    {
        width:'100%',
        height:'auto',
    }
)

const textStyle = style(
    {
        fontFamily: 'Montserrat',
        fontStyle:'normal',
        lineHeight:'normal',
        fontWeight: 500,
    }
)

const projectButton = style(
    {
        width: '135px',
        height: '46px',
        flexShrink:0,
        border: "none",
        borderRadius:'12px',
        backgroundColor:'#2F80ED',
        color:'#FFFFFF',
        fontSize:'18px',
    }
)