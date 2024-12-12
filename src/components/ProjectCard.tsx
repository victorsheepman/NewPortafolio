import { classes, media, style } from 'typestyle'
import { textMixin } from '../theme'

interface ProjectCardProps {
    hashtags: string[],
    title:  string,
    desc:   string,
    demo:   string,
    code:   string,
    img:    string
}

export const ProjectCard: React.FC<ProjectCardProps> = ({hashtags, title, desc, demo, code, img}) => {
  return (
    <article className={projectWrapper}>
        <figure className={projectFigure}>
            <img src={img} className={projectImg} alt="" />
        </figure>
        <div className={style({width:'auto', height:'auto'})}>
            <section className={classes(projectSection, style({display:'flex', gap:'9px'})) }>
                {hashtags.map(i=>(<span className={classes(textStyle, style(textMixin('4F4F4F', '16px')))}>{i}</span>))}
            </section>
            <section className={classes(classes(projectSection, style({ marginTop:'22px' })))}>
                <h4 className={classes(textStyle, style(textMixin('#333', '24px')))}>
                {title}
                </h4>
                <p className={classes(textStyle, style(textMixin('#828282', '16px')), style({marginTop: '10px'}))}>
                    {desc}
                </p>
            </section>
            <section className={classes(projectSection, style({display:'flex', gap:'9px', marginTop:'51px'})) }>
                {
                    demo !== '' ? (
                        <a href={demo}>
                            <button className={classes(projectButton, textStyle)} >
                                Demo
                            </button>
                        </a>
                    ) : null
                }
               
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
        height: 'auto',
        padding: '22px',
        flexShrink: 0,
        backgroundColor:'#FFF',
        borderRadius:'12px'
       
    },
    media(
        {minWidth:1366},
        {
            width: '100%',
            height: 'auto',
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

const projectImg = style(
    {
        width:'100%',
        height:'100%',
        objectFit:'contain'
    }
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
        cursor:'pointer'
    }
)