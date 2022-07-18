/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react'

const Director = () => {
    const data = [{
        name: 'Lauren Wilson, Board Chair',
        position: 'Owner & Consultant, Flourish Consulting Services LLC',
        description: ''
    },
    {
        name: 'Dr. Jeffrey Keenan, President',
        position: 'NEDC Medical Director, Southeastern Fertility Specialist',
        description: 'Dr. Jeffrey Keenan, a highly respected specialist in infertility and reproductive medicine, leads the NEDC team. He is the center’s medical director and a fertility specialist at Southeastern Fertility in Knoxville, TN. He is board certified in Obstetrics and Gynecology, as well as Reproductive Endocrinology and Infertility.<br>Dr. Keenan is also a professor at the University of Tennessee College of Medicine and is director of the Division of Reproductive Endocrinology and Infertility. He has been in practice since 1990 and has performed innumerable fertility procedures with outstanding success rates. To get to know Dr. Keenan better through an in-depth conversation with master interviewer Hallerin Hilton Hill, click here.'
    },
    {
        name: 'Amy Scott',
        position: 'Tennessee State Director, Bethany Christian Services',
        description: 'Amy Scott has enjoyed a career in Child Welfare that started in 2007. It has included work with expectant parents, adoptive families, adoptees, foster parents, unaccompanied children and families in crisis. She serves as the State Director over all programs in Tennessee, and she attributes the success of programming to the great staff she gets to work with each day. Amy has a Master’s degree in Marriage and Family Therapy from Richmont Graduate University and she has received extensive training in Trust Based Relational Intervention, Homebuilders and Leadership development. She lives in northwest Georgia with her husband and children.'
    },
    {
        name: 'Marti Bailey',
        position: 'Retired Public Relations Professional',
        description: 'Marti Bailey is a former Public Relations Manager and blogger for the NEDC. She is a graduate of East Tennessee State University, where she received a Bachelor of Business Administration degree with a concentration in Marketing.<br>After seven years of infertility (the same amount of time the embryos were frozen), Marti and her husband, Brian, were blessed with embryo-adopted twins through the NEDC. They knew God had a plan for them the whole time but weren’t sure how it would all unfold. Answered prayers came in the form of not only two tiny babies, but a beautiful relationship with another family through open adoption. Marti and Brian are very grateful for the NEDC and it is their desire for this blessing to be lavished on others who desire a larger family.'
    },
    {
        name: 'Andrew Brenneman',
        position: 'Owner, 721 Holding Company LLC',
        description: 'Andrew Brenneman is the owner of 721 Holding Company LLC, which focuses on building home services businesses in the Houston, Texas area.  Prior to starting 721 Holding Company, Andrew was a consultant at Bain and Company, specializing in the oil & gas and industrial sectors across a number of disciplines.<br>Andrew received his Bachelor and Master of Accountancy degrees from Baylor University in 2011.  He received a Master of Business Administration from Kellogg School of Management at Northwestern University in 2016.  He has lived in the Houston, Texas area for most of his life.<br>Andrew and his wife Nina have two wonderful children, Clara and Dean.  When not working, Andrew enjoys finding the best BBQ in Texas, golfing, skiing, and following the Baylor Bears with diehard passion.'
    },
    {
        name: 'Dr. Bill Geiger',
        position: 'Retired Family Physician',
        description: 'Dr. Bill Geiger graduated from The Ohio State University College of Medicine and completed a family medicine residency at Akron City Hospital (now Summa Health), in Akron, Ohio.  He started a private practice in Mansfield, Ohio before moving into academic family medicine for 28 years.  He has served as residency program director for over 18 years in two residency programs in Toledo, Ohio and Milwaukee, Wisconsin.  He lectured extensively at national board review courses for the American Academy of Family Physicians (AAFP) for over a decade and has served on the AAFP Panel of Consultants for residency education for nine years. He retired in 2018 and now lives near Knoxville, Tennessee.'
    },
    {
        name: 'Amber Lacey',
        position: 'Retired Juvenile Probation Officer',
        description: 'Amber Lacey is a Knoxville native and former Juvenile Probation Officer. She is currently at work at home mom to her 2 boys, Sawyer and Hudson, who are her NEDC miracles after nine long years of infertility and failed domestic adoption.<br>She has a B.S degree from The University of Tennessee in Child & Family Studies/Human Ecology.<br>Amber has a great passion for embryo adoption and especially the outstanding work the NEDC does for families like hers.  She loves to share her story with others to give them hope and has referred several people to the NEDC, many of whom have also successfully brought babies home! She is grateful to be a part of this board to ensure that the NEDC continues to serve its families with the utmost care, concern and love.'
    },
    {
        name: 'Andy Halbert',
        position: ' Missions Pastor and Administrator, Christ Covenant Presbyterian Church',
        description: 'Paul (Andy) Halbert and wife Renée live in Knoxville where Andy serves as Missions Pastor and Administrator of Christ Covenant Presbyterian Church, and Renée teaches 1st grade at Concord Christian School. Andy and Renée have three married sons, all of whom are serving in cross-cultural missions in various locations around the world. They are grateful to God for nine grandchildren, two of whom are adopted, and three of whom are embryo-adopted.<br>Andy and Renée met at Columbia International University in Columbia, South Carolina and were married in 1975. Their mutual desire and passion for world missions led them to 14 years of cross-cultural ministry with Mission Aviation Fellowship, serving in Honduras, Central America.<br>Upon return to the US in 1995, Andy accepted his current position with Christ Covenant Presbyterian Church.'
    },
    {
        name: 'Jamey Campbell',
        position: 'Chief Operating Officer, Christian Medical & Dental Associations',
        description: 'Jamey Campbell is Chief Operating Officer for Christian Medical & Dental Associations (CMDA) in Bristol, Tennessee. After nearly a decade as the organization’s Vice President for Stewardship Development, Jamey moved into the COO position on July 1, 2019.<br>Jamey has over 25 years of experience in communications and development. After obtaining his bachelor’s degree in communication from East Tennessee State University in 1986, he began work in the commercial television field before beginning his career in corporate communications and development.<br>Prior to joining CMDA, Jamey was on staff with former U.S. Senate Majority Leader Dr. Bill Frist, East Tennessee State University Quillen College of Medicine, and Precept Ministries International.<br>Jamey and his wife Janeen are involved in their church where they teach a young adult Sunday School class and Jamey serves as a deacon. They have two adult children, Rachel and Emily, and one grandchild, Titus.<br>When not working, Jamey enjoys spending time with his family, photography, and traveling with Janeen.'
    },
    {
        name: 'Roger Redding',
        position: 'Retired Executive Director, Holston Conference Foundation',
        description: 'Roger Redding  served as the Executive Director of the Holston Conference Foundation for 18 years (2000-2018), increasing assets under management from $25 million to $125 million at the time of his retirement. He has over 40 years of experience working with non-profits, including 10 years with St. Jude Children’s Research Hospital as a Development Officer and 12 years as Vice Chancellor of Development and Alumni Relations with UT Medical Center. He and his wife Rebecca reside in Maryville. They are active members of Cokesbury United Methodist Church.  They have two adult children, Russell Redding in Johnson City and Leslie Rosenbaum (husband Corey) in Knoxville.'
    },
    {
        name: 'Stephen Gillman, JD',
        position: 'Attorney, Partner, Pryor Priest & Harber',
        description: 'Stephen Gillman joined the law firm of Pryor Priest & Harber in 2003, became an associate in 2005,  and became a partner of the firm in 2017. He is a graduate of The University of Tennessee (B.A. Political Science, 2002, Summa Cum Laude) and The University of Tennessee College of Law (J.D., 2005, Cum Laude), where he concentrated in the school’s Advocacy and Dispute Resolution program.<br>He is a member of the Knoxville Bar Association, where he serves on its Membership Committee, and he is a member of the Tennessee Bar Association. In the community, he served as instructor for the Farragut High School Mock Trial team between 2008 and 2012 and is proud to serve as an advisor to the Career and Technical Services Department for Lenoir City High School. Stephen has also contributed as a guest legal expert on WBIR 10 News Weekend on Saturday mornings and has been a commentator on Newstalk 98.7. Mr. Gillman was proud to be selected to the 2015 and 2016 mid-south Super Lawyers Rising Stars list, which is peer nominated.<br>Stephen and his wife, Katie, have one daughter.'

    }
    ]
    return (
        <section sx={{
            background: ' #EFF9F8'
        }}>
            <div sx={{
                maxWidth: '1400px',
                mx: 'auto',
                mt: '3rem',
                px: '42px',
                py: '32px'
            }}>
                {data.map(item => (<div sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    bg: '#FFFFFF',

                }}>
                    <div sx={{
                        width: '85px',
                        height: '85px',
                        background: ' rgba(75, 147, 142, 0.9)',
                        border: '1px solid #F4FDFC',
                        borderRadius: '50px',

                    }}>
                        <img src="" alt="" />
                    </div>
                    <div sx={{
                        //display: 'flex',

                    }}>
                        <p>{item.name}</p>
                        <p>{item.position}</p>
                        <p>{item.description}</p>
                    </div>
                </div>))}
            </div>
        </section>
    )
}

export default Director