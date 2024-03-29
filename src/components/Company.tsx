import { Col, Row } from 'antd'
import { classes, style } from 'typestyle'
import { textMixin } from '../theme'

interface CompanyProps {
    img:string,
    date:string,
    title:string,
    desc:string
}
export const Company:React.FC<CompanyProps> = ({img, date, title, desc}) => {
  return (
    <Row className={style({backgroundColor:'#FFF'})}>
        <Col span={6} className={style({backgroundColor:'#FFF'})}>
            <figure className={companyImg}>
                <img className={imgStyle} src={img} alt=""  />
            </figure>
        </Col>
        <Col span={18} className={style({backgroundColor:'#FFF',paddingLeft:'16px'})}>
            <span className={classes(textStyle, style(textMixin('#828282','14px',500)))}>
                {date}
            </span>
            <h5 className={classes(textStyle, style(textMixin('#333','16px', 600)))}>{title}</h5>
            <div className={textWrapper}>
                <p className={classes(textStyle, style(textMixin('#828282', '16px', 500)))}>
                    {desc}
                </p>
            </div>
        </Col>
    </Row>
  )
}

const companyImg = style(
    {
        width: '84px',
        height: '84px',
        flexShrink: 0,
    }
)
const imgStyle = style(
    {
        width:'100%',
        height:'100%',
        objectFit:'cover'
    }
)

const textStyle = style(
    {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        lineHeight: 'normal',
    }
)

const textWrapper = style(
    {
        width: '273px',
        height: '79px',
        flexShrink: 0,
        marginTop:'33px',
    }
)


