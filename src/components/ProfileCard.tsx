import { classes, media, style } from 'typestyle'
import { MailIcon, PhoneIcon } from '../assets'
import { Button, Popover } from 'antd'


interface ProfileCardProps {
    name: string
    job:string
    email:string,
    phone:string,
    img:string
}



export const ProfileCard:React.FC<ProfileCardProps> = ({name, job, email, phone, img}) => {
    const emailContent = (
        <div>
          <p>{email}</p>
        </div>
    );
    const phoneContent = (
        <div>
          <p>{phone}</p>
        </div>
    );
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
            <div className={articlePoverSection}>
                <Popover content={emailContent} title="Email" trigger="hover">
                    <Button type="link">
                        <MailIcon />
                    </Button>
                </Popover>
                <Popover content={phoneContent} title="Telefono" trigger="hover">
                    <Button type="link">
                        <PhoneIcon />
                    </Button>
                </Popover>
            </div>
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
        width: '100%',
        height: '550px',
        flexShrink: 0,
        borderRadius: '12px',
        background: '#FFF',
        padding:'23px',
    },
    media(
        {minWidth:1366},
        {
            width:'413px'
        }
    )
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

const articlePoverSection = style(
    {
        width:'100%',
        height:'auto',
        display:'flex',
        justifyContent:'flex-start',
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
        backgroundColor:'#FFF'
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

const articleImg = style(
    {
        width:'100%',
        height:'100%',
        objectFit:'cover'
    }
)