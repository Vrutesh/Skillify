function SkillCard({
  skillcardheading1,
  skillcardheading2,
  skillcardheading3,
  skillcardheading4,
  skillcardinfo1,
  skillcardinfo2,
  skillcardinfo3,
  skillcardinfo4,
  icon1,
  icon2,
  icon3,
  icon4,
}) {
  return (
    <>
      <div className="skills-section" id="skills">
        <h1>
          <i className="bi bi-magic"></i> Skills Required
        </h1>
        <div className="skill-info">
          <div className="skill-card card">
            {icon1}
            <h2>{skillcardheading1}</h2>
            <p>{skillcardinfo1}</p>
          </div>
          <div className="skill-card card">
            {icon2}
            <h2>{skillcardheading2}</h2>
            <p>{skillcardinfo2}</p>
          </div>
          <div className="skill-card card">
            {icon3}
            <h2>{skillcardheading3}</h2>
            <p>{skillcardinfo3}</p>
          </div>
          <div className="skill-card card">
            {icon4}
            <h2>{skillcardheading4}</h2>
            <p>{skillcardinfo4}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillCard;
