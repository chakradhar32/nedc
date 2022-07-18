/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';

const Author = () => {
  const data = [
    {
      name: 'Jeffrey Keenan, M.D., HCLD',
      position: 'President/Medical Director',
      description: '<a href=\'https://www.youtube.com/watch?v=49YoE6I51rE' > 'Dr. Jeffrey Keenan</a>, a highly respected infertility and reproductive medicine specialist, leads the NEDC team. He is the center’s president and medical director and a fertility specialist with <a href="https://southeasternfertility.org/">Southeastern Fertility</a> in Knoxville, TN. He is board certified in Obstetrics and Gynecology, as well as Reproductive Endocrinology and Infertility.<br>Dr. Keenan is also a professor at the University of Tennessee (UT) Graduate School of Medicine and is director of UT’s Division of Reproductive Endocrinology and Infertility. In practice since 1990, Dr. Keenan has performed innumerable fertility procedures with outstanding success rates. <a href="https://www.youtube.com/watch?v=49YoE6I51rE">To get to know Dr. Keenan better through an in-depth conversation with master interviewer Hallerin Hilton Hill, click here.</a>'
    },
    {
      name: 'John Gordon, M.D.',
      position: 'Physician',
      description: 'Before joining Southeastern Fertility in August 2019,<a href="https://www.youtube.com/watch?v=x5FYpYNQFZk">Dr. John David Gordon</a> served as Co-Director of Dominion Fertility in Arlington, VA since 1999. Over those 2 decades he was listed as one of Washington’s top doctors in Washingtonian, Northern Virginia and Arlington magazines.<br>Dr. Gordon graduated summa-cum-laude from Princeton University with a degree in Biology and then attended medical school at Duke University. He was an intern in Obstetrics and Gynecology at the University of Texas Health Sciences Center in Houston and then completed his residency training in Obstetrics and Gynecology at Stanford University Medical Center and his fellowship in Reproductive Endocrinology and Infertility at the University of California San Francisco.<br>Dr. Gordon is board-certified in Obstetrics and Gynecology and subspecialty board certified in Reproductive Endocrinology and Infertility. Dr. Gordon was a Clinical Professor of Obstetrics and Gynecology at The George Washington University in Washington D.C. and an Associate Clinical Professor at Virginia Commonwealth University / Medical College of Virginia Fairfax Campus. He served as the Division Director of Reproductive Endocrinology and Infertility at Inova Fairfax Hospital.<br>Dr. Gordon has a passion for teaching and as a professor, he provided regular lectures in Reproductive Endocrinology to the Obstetrics and Gynecology interns, residents, and medical students. Dr. Gordon is the author of many scientific articles and several books but he is best known to health professionals as the Editor-in-Chief of “Obstetrics, Gynecology, and Infertility,” a best-selling medical handbook with over 150,000 copies in print. This handbook is used worldwide by medical students, residents, physicians, and women’s health care providers.<br>Dr. Gordon has been honored on numerous occasions for his educational activities and is a three-time recipient of the Council on Resident Education in Obstetrics and Gynecology (CREOG) National Resident Teaching Award.<br> <a href="https://www.youtube.com/watch?v=x5FYpYNQFZk">Learn more about the Gordon family’s amazing journey to the NEDC in this video.</a>'
    },
    {
      name: 'L.J. Robinson, BSN, RN, MBA',
      position: 'General Manager',
      description: ''
    },
    {
      name: 'Carol Sommerfelt, M.SC. ELD (ABB)',
      position: 'Lab Director Emeritus/ Senior Embryologist',
      description: 'Carol has numerous years of experience in the areas of human reproduction and assisted reproductive technologies and has been involved in the fertility field since 1977. Prior to joining us, Carol was the laboratory director and embryologist for over 10 years at UT Medical Center in Memphis, TN. She has been with the NEDC since its establishment in 2003.<br>Check out the Facebook Live video below for a rare chance to go inside the lab with Carol, checking out embryos in their storage tanks and under the microscope.'
    },
    {
      name: 'Sarah Coe Atkinson, M.SC',
      position: ' Lab Supervisor/ Embryologist',
      description: 'Sarah received a Bachelor’s Degree in Biological Sciences from Vanderbilt University and a Master of Science in the Reproductive Laboratory Science (RLS) track from the University of Kentucky. She completed her clinical practica in assisted reproductive laboratory technology at New York Methodist Hospital, Brooklyn, N.Y. Sarah continued to serve the RLS education program by corresponding with applicants, and mentoring new students, as well as teaching labs on embryo culturing and vitrification. She has extensive experience in molecular techniques, data analysis and laboratory management, having held the position of Research Analyst at the University of Kentucky. Sarah led an embryology clinic in Lexington, Kentucky as Lab Supervisor and Senior Embryologist, in the process traveling down to Southeastern Fertility & the NEDC to help out on cycles for 6 years. In March 2021, she moved to Knoxville to join Southeastern Fertility & the NEDC full-time.'
    },
    {
      name: 'Mark Mellinger',
      position: ' Marketing and Development Director',
      description: 'Mark Mellinger handles all marketing and public relations functions for the NEDC and is also in charge of our development efforts. His background consists of almost three decades in broadcast journalism. From 2011 to 2018, Mark served as a contributor to <a href="https://www.thegospelcoalition.org/">The Gospel Coalition</a>, one of the world’s largest Christian websites, where he <a href="https://www.thegospelcoalition.org/profile/mark-mellinger/">helped start TGC’s podcast operations and regularly interviewed some of the world’s most influential evangelical teachers and leaders.</a><br>You may email Mark at mmellinger@baby4me.net.'
    },
    {
      name: 'Christa Carter, RN',
      position: 'Patient Coordinator',
      description: 'As one of our patient coordinators, Christa Carter helps recipients navigate the embryo adoption process with the NEDC. Christa is a Registered Nurse with previous experience at the Knox County Health Department, St. Vincent’s Medical Center in Little Rock, AR, and Baylor Medical Center in Carrolton, TX.'
    },
    {
      name: 'Lisa Kozsan, RN',
      position: 'Patient Coordinator',
      description: ''
    },
    {
      name: 'Kelley Seymour, RN',
      position: 'Program Coordinator',
      description: 'As program coordinator, Kelley Seymour helps shepherd donating families through the embryo donation process and also has a hand in various operations for the NEDC.<br>Kelley has more than 25 years of experience as a Registered Nurse, much of that in women’s health. Most importantly, she has a passion for what the NEDC is all about.'
    },
  ];
  return (
    <section
      sx={{
        background: ' rgba(75, 147, 142, 0.9)',
      }}
    >
      <div
        sx={{
          maxWidth: '1400px',
          mx: 'auto',
        }}
      >
        <div>
          <h1
            sx={{
              fontFamily: 'Adobe Devanagari',
              fontStyle: 'normal',
              fontWeight: 400,
              fontWize: '50px',
              lineHeight: '80px',
              color: '#FFFFFF',
              textAlign: 'center',
            }}
          >
            Our Staff
          </h1>
        </div>
        {data.map((item) => (
          <div
            sx={{
              display: 'flex',
              gap: '16px',
              bg: '#FFFFFF',
            }}
          >
            <div
              sx={{
                width: '85px',
                height: '85px',
                background: ' rgba(75, 147, 142, 0.9)',
                border: '1px solid #F4FDFC',
                borderRadius: '50px',
              }}
            >
              <img src="" alt="" />
            </div>
            <div>
              <p>{item.name}</p>
              <p>{item.position}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <hr
        sx={{
          mt: '3rem',
        }}
      />
    </section>
  );
};

export default Author;
