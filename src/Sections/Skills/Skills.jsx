import SkillList from '../../Common/SkillsList';
import styles from './SkillStyle.module.css';
import checkMarkIcon from '../../assets/checkmark-light.svg';

function Skills() {
  const frontendSkills = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];
  const backendSkills = ["C", "Core Java", "JDBC", "Spring Core", "Spring Boot", "MySQL"];

  return (
    <section id="skills" className={styles.skillsContainer}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        {frontendSkills.map(skill => (
          <SkillList key={skill} src={checkMarkIcon} skill={skill} />
        ))}
      </div>
      <hr />
      <div className={styles.skillList}>
        {backendSkills.map(skill => (
          <SkillList key={skill} src={checkMarkIcon} skill={skill} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
