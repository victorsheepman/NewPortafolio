import { Col, Row } from 'antd'
import { style } from 'typestyle'
import { ReactIcon, TsIcon, ReduxIcon } from '../assets'


export const StackCard = () => {
  return (
    <div className={wrapper}>
        <h5 className={textStyle}>Front end</h5>
        <Row>
            <Col span={8}>
                <ReactIcon />
            </Col>
            <Col span={8}>
                <ReduxIcon />
            </Col>
            <Col span={8}>
                <TsIcon />
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