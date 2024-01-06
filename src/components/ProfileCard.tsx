import { classes, style } from 'typestyle'
import { MailIcon, PhoneIcon } from '../assets'


interface ProfileCardProps {
    name: string
    job:string
    email:string,
    phone:string,
    img:string
}

export const ProfileCard:React.FC<ProfileCardProps> = ({name, job, email, phone, img}) => {
  return (
    <article className={articleWrapper}>
        <figure className={articleFigure}>
            <img src={img} className={articleImg} alt="" />
        </figure>
        <section className={classes(articleSection, style({marginTop:'24px'}))}>
            <h4 className={nameTitle}>
                {name}
            </h4>
            <span className={articleSpan}>
                {job}
            </span>
        </section>
        <section className={classes(articleSection, style({marginTop:'32px'}))}>
            <span className={classes(articleInfo, articleSpan, style({color:'#4F4F4F'}))}>
                <MailIcon />
                {email}
            </span>
            <span className={classes(articleInfo, articleSpan, style({color:'#4F4F4F'}))}>
                <PhoneIcon />
                {phone}
            </span>
        </section>
        <div className={ style({ 
                width: '332.491px',
                height: '69.008px',
                flexShrink: 0, 
                marginTop:'34px'
            })}>
        </div>
    </article>
  )
}

const articleWrapper = style(
    {
        width: '413px',
        height: '692.167px',
        flexShrink: 0,
        borderRadius: '12px',
        background: '#FFF',
        padding:'23px',
    }
)

const articleFigure = style(
    {
        width: '100%',
        height: '358.63px',
        flexShrink: 0,
        backgroundColor:'#C4C4C4',
        margin:0,
        borderRadius: '12px'
    }
)

const articleSection = style(
    {
        width:'100%',
        height:'auto',
        display:'flex',
        flexDirection:'column',
        gap:'10px',
    }
)

const nameTitle = style(
    {
        color: '#4F4F4F',
        fontFamily: 'Montserrat',
        fontSize: '24px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: 'normal',
    }
)

const articleSpan = style(
    {
        color: '#828282',
        fontFamily: 'Montserrat',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal',
    }
)

const articleInfo = style(
    {
        width:'100%',
        height:'auto',
        display:'flex',
        gap:'8.5px',
    }
)

const articleImg = style(
    {
        width:'100%',
        height:'100%',
        objectFit:'cover'
    }
)