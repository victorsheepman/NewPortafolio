import { style } from 'typestyle'
import { Company } from './Company'
import { companies } from '../mock'
export const ExperienceCard = () => {
  return (
    <div className={experienceWrapper}>
        <h5 className={experienceTitle}>Experiences</h5>
        <div className={companiesWrapper}>
            {companies.map(i=>(<Company img={i.img} date={i.date} title={i.title} desc={i.desc} />))}
        </div>
        
    </div>
  )
}

const experienceWrapper = style(
    {
        width: '417px',
        height: 'auto',
        flexShrink: 0,
        borderRadius: '12px',
        backgroundColor: '#FFF',
        padding:'17px 22px'
    }
)

const experienceTitle = style(
    {
        color: '#4F4F4F',
        fontFamily: 'Montserrat',
        fontSize: '24px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal',
        backgroundColor:'#FFF'
    }
)

const companiesWrapper = style({width:'100%',height:'auto', display:'flex', flexDirection:'column', gap:'33px', marginTop:'44px' })