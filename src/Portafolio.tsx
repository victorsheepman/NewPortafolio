import { ProjectCard } from "./components"
import { ProfileCard } from "./components/ProfileCard"
import { profile, project1 } from "./mock"

export const Portafolio = () => {
  return (
    <>
    <ProfileCard name={profile.name} img={profile.img} email={profile.email} job={profile.job} phone={profile.phone}  />
    <ProjectCard hashtags={project1.hashtags} title={project1.title} desc={project1.desc} demo={""} code={""} />
    </>
    )
}
