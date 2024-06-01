import { Col, Row } from 'antd'
import { style } from 'typestyle'
import { SwiftIcon, SwiftUIIcon, Xcode  } from '../assets'

export const StackCard = () => {
  return (
    <div className={wrapper}>
        <h5 className={textStyle}>Stack</h5>
        <Row className={style({alignItems:'baseline'})}>
            <Col span={8}>
                <SwiftIcon />
            </Col>
            <Col span={8}>
                <SwiftUIIcon />
            </Col>
            <Col span={8}>
               <Xcode />
            </Col>
        </Row>
    </div>
  )
}
const wrapper = style(
    {
        width: '389px',
        height: 'auto',
        flexShrink: 0,
        borderRadius: '12px',
        background: '#FFF',
        padding:"22px"
    }
)

const textStyle = style({
    color: '#4F4F4F',
  fontFamily: 'Montserrat',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: 'normal',
  textTransform: 'uppercase',
})