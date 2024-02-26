import { Col, Row } from "antd"
import { ProfileCard, StackCard, ExperienceCard, ProjectCard } from "./components"
import {  profile, projects } from "./mock"


export const Portafolio = () => {
  return (
    <Row gutter={[16, 16]} style={{padding:"12px"}}>
      <Col xs={24} md={12} lg={8}>
        <Row gutter={[16,24]}>
          <Col span={12} xs={24}>
            <ProfileCard name={profile.name} job={profile.job} email={profile.email} phone={profile.phone} img={profile.img} />
          </Col>
          <Col span={12} xs={24}>
            <ExperienceCard />
          </Col>
        </Row>
      </Col>
      <Col xs={24} md={12} lg={16}>
        <Row gutter={[16, 24]}>
            <Col xs={24} style={{display:'flex', flexDirection:"column", gap:'12px'}}>
              {projects.map(i=>(<ProjectCard img={i.img} hashtags={i.hashtags} title={i.title} desc={i.desc} demo={i.demo} code={i.code} />))}
            </Col>
            <Col xs={24}>
              <StackCard />
            </Col>
        </Row>  
      </Col>
    </Row>
    )
}
