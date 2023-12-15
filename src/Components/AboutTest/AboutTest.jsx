function AboutTest({
  abouttest,
  abouttestinfo_para1,
  abouttestinfo_para2,
  abouttestinfo_para3,
  abouttestinfo_para4,
}) {
  return (
    <>
      <div className="about-section" id="about">
        <h1>{abouttest}</h1>
        <p>{abouttestinfo_para1}</p>
        <p>{abouttestinfo_para2}</p>
        <p>{abouttestinfo_para3}</p>
        <p>{abouttestinfo_para4}</p>
      </div>
    </>
  );
}

export default AboutTest;
