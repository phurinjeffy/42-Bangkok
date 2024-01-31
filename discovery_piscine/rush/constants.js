export const homeContent = `
              <img src="/wallpaper.jpg" class="inset-0 z-0 absolute w-screen h-screen"/>
              <div class="flex flex-col justify-center items-center w-screen h-screen">
                <h1 class="font-bold lg:text-6xl md:text-5xl text-4xl z-10 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] transition-all duration-500">
                    My CVs Website
                </h1>
                <p class="font-light lg:text-2xl md:text-xl text-lg m-8 z-10 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]  transition-all duration-500">
                  Check our Team's Members
                </p>
                <div class="flex flex-row items-center justify-center gap-6 z-10 text-white">
                  <a href="/jeff" class="border rounded bg-orange-300 lg:p-8 md:p-6 p-5 lg:text-2xl md:text-xl text-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] transition-all duration-500">
                    Jeff
                  </a>
                  <a href="/bright" class="border rounded bg-blue-400 lg:p-8 md:p-6 p-5 lg:text-2xl md:text-xl text-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] transition-all duration-500">
                    Bright
                  </a>
                </div>
              </div>`;

export const jeffContent = `
              <link rel="stylesheet" href="jeff.css" />
              <div class="m-0">
                  <div class="sidebar h-screen">
                    <div class="sidebar-header">
                        <a href="/" class="m-0 p-0">
                            <svg class="w-4 h-4" viewBox="0 0 1024 1024" fill="#f2f2f2" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#f2f2f2"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z" fill=""></path></g></svg>
                        </a>
                    </div>
                    <div class="sidebar-list">
                        <li><a href="#personal" class="menu">Personal information</a></li>
                        <li><a href="#experience" class="menu">Experience</a></li>
                        <li><a href="#education" class="menu">Education</a></li>
                        <li><a href="#achievements" class="menu">Achievements</a></li>
                        <li><a href="#interests" class="menu">Interests</a></li>
                        <li><a href="#social" class="menu">Social</a></li>
                    </div>
                  </div>

                  <div id="personal" class="page">
                    <div class="title flex flex-row justify-evenly items-center">
                        <img class="w-32 h-32 rounded-full" src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg" alt="profile" />
                        Phurin Vanasrivilai
                    </div>
                    <div class="content">
                        <div class="info-box">
                            <div class="info">
                                <span class="key">
                                    Email Address
                                </span>
                                <span class="value">
                                    <a href="mailto: 65011463@kmitl.ac.th" target="_blank">65011463@kmitl.ac.th</a>
                                </span>
                            </div>
                            <div class="info">
                                <span class="key">
                                    Address
                                </span>
                                <span class="value">
                                    Bangkok, Thailand
                                </span>
                            </div>
                            <div class="info">
                                <span class="key">
                                    Phone number
                                </span>
                                <span class="value">
                                    (+66) 12-345-6789
                                </span>
                            </div>
                            <div class="info">
                                <span class="key">
                                    Job Title
                                </span>
                                <span class="value">
                                    Student
                                </span>
                            </div>
                        </div>

                        <div class="description">
                            <p>
                                A driven and enthusiastic individual, deeply committed to the pursuit of knowledge for personal
                                development. With an unwavering passion, I actively seek out opportunities to expand my
                                understanding and remain current with emerging trends and best practices in my field. This proactive
                                approach to learning empowers me to continuously evolve and excel, allowing me to contribute
                                meaningfully to my own growth and the advancement of my chosen domain.
                            </p>
                        </div>
                    </div>
                    </div>

                    <div id="experience" class="page even">
                    <div class="title even">
                        Experience
                    </div>
                    <div class="content">
                        <div class="exp">
                            <div class="date">
                                07/2023 - present
                            </div>
                            <div class="divider"></div>
                            <div class="entry">
                                <div class="entry-header">
                                    <div class="position">
                                        Teaching Assistant
                                    </div>
                                    <div class="address">
                                        Computer Programming, KMITL
                                    </div>
                                </div>
                                <div class="entry-description">
                                    <ul>
                                        <li>Facilitate student learning and comprehension of computer programming concepts as a
                                            Teaching
                                            Assistant within the Software Engineering department at KMITL.</li>
                                        <li>Foster a collaborative and inclusive learning environment, encouraging student
                                            engagement
                                            and participation to promote a deeper understanding of programming.</li>
                                        <li>Contribute to the growth and development of students' coding skills by offering review
                                            sessions, aiding in troubleshooting, and sharing insights into best coding practices.
                                        </li>
                                        <li>Demonstrate a strong commitment to the success of students, providing guidance,
                                            encouragement, and resources to help them excel in their programming studies.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>

                    <div id="education" class="page">
                    <div class="title">
                        Education
                    </div>
                    <div class="content">
                        <div class="exp">
                            <div class="date">
                                2022 - present
                            </div>
                            <div class="divider"></div>
                            <div class="entry">
                                <div class="entry-header">
                                    <div class="position">
                                        King Mongkut's Institute of Technology Ladkrabang
                                    </div>
                                    <div class="address">
                                        Lat Krabang, Bangkok
                                    </div>
                                </div>
                                <div class="entry-description">
                                    <ul>
                                        <li>Bachelor's Degree</li>
                                        <li>Engineering</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="exp">
                            <div class="date">
                                2016 - 2022
                            </div>
                            <div class="divider"></div>
                            <div class="entry">
                                <div class="entry-header">
                                    <div class="position">
                                        Assumption College
                                    </div>
                                    <div class="address">
                                        Bang Rak, Bangkok
                                    </div>
                                </div>
                                <div class="entry-description">
                                    <ul>
                                        <li>High School Diploma</li>
                                        <li>Science and Mathematics</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div id="achievements" class="page even">
                    <div class="title even">
                        Achievements
                    </div>
                    <div class="content">
                        <div class="entry-description">
                            <ul>
                                <li>Volunteered in busking activities, with high school musical charity, contributing to
                                    communities through donations and meaningful impact.</li>
                                <li>Overcame a fear or personal challenge, such as public speaking or trying a new skill,
                                    demonstrating
                                    personal growth and resilience.</li>
                            </ul>
                        </div>
                    </div>
                    </div>

                    <div id="interests" class="page">
                    <div class="title">
                        Interest
                    </div>
                    <div class="content">
                        <div class="keyword-list">
                            <div class="keyword">
                                <span>#Technology</span>
                            </div>
                            <div class="keyword">
                                <span>#Science</span>
                            </div>
                            <div class="keyword">
                                <span>#Design</span>
                            </div>
                            <div class="keyword">
                                <span>#Literature</span>
                            </div>
                            <div class="keyword">
                                <span>#Camping</span>
                            </div>
                            <div class="keyword">
                                <span>#Travelling</span>
                            </div>
                            <div class="keyword">
                                <span>#Music</span>
                            </div>
                            <div class="keyword">
                                <span>#Film</span>
                            </div>
                        </div>
                    </div>
                    </div>

                  <div class="footer" id="social">
                    <div>
                        <div class="footer-title">
                            Share my resume
                        </div>
                        <div class="footer-subtitle">
                            Spread the word and help me get hired.
                        </div>
                    </div>
                    <div class="social">
                        <button onclick="window.open('https://www.google.com/', '_blank')">
                            <img width="50" height="50"
                                src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png">
                        </button>
                        <button onclick="window.open('https://www.google.com/', '_blank')">
                            <img width="50" height="50" src="https://img.freepik.com/free-icon/linkedin_318-187585.jpg">
                        </button>
                        <button onclick="window.open('https://www.google.com/', '_blank')">
                            <img width="50" height="50"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png">
                        </button>
                    </div>
                    <div class="footer-line"></div>
                  </div>
                </div>`;

export const brightContent = `
                <link rel="stylesheet" href="bright.css" />
                <div class="m-0">
                  <div class="sidebar h-screen">
                    <div class="sidebar-header">
                      <a href="/" class="m-0 p-0">
                        <svg class="w-4 h-4" viewBox="0 0 1024 1024" fill="#f2f2f2" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#f2f2f2"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z" fill=""></path></g></svg>
                      </a>
                    </div>
                    <div class="sidebar-list">
                        <li><a href="#personal" class="menu">Personal information</a></li>
                        <li><a href="#experience" class="menu">Experience</a></li>
                        <li><a href="#education" class="menu">Education</a></li>
                        <li><a href="#achievements" class="menu">Achievements</a></li>
                        <li><a href="#interests" class="menu">Interests</a></li>
                        <li><a href="#social" class="menu">Social</a></li>
                    </div>
                  </div>

                  <div id="personal" class="page">
                      <div class="title flex flex-row justify-evenly items-center">
                        <img class="w-32 h-32 rounded-full" src="https://media.istockphoto.com/id/1361394182/photo/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?s=612x612&w=0&k=20&c=6yvVxdufrNvkmc50nCLCd8OFGhoJd6vPTNotl90L-vo=" alt="profile" />
                        Puriwat Koosuwan
                      </div>
                    <div class="content">
                        <div class="info-box">
                            <div class="info">
                                <span class="key">
                                    Email Address
                                </span>
                                <span class="value">
                                    <a href="mailto: 65011494@kmitl.ac.th" target="_blank">65011494@kmitl.ac.th</a>
                                </span>
                            </div>
                            <div class="info">
                                <span class="key">
                                    Address
                                </span>
                                <span class="value">
                                    Bangkok, Thailand
                                </span>
                            </div>
                            <div class="info">
                                <span class="key">
                                    Phone number
                                </span>
                                <span class="value">
                                    (+66) 12-345-6789
                                </span>
                            </div>
                            <div class="info">
                                <span class="key">
                                  Job Title
                                </span>
                                <span class="value">
                                  Student
                                </span>
                            </div>
                        </div>

                        <div class="description">
                            <p>
                              As a motivated and passionate individual, I am dedicated to personal growth through the relentless pursuit of knowledge. I actively explore opportunities to broaden my understanding, staying abreast of the latest trends and best practices in my field. This proactive learning approach enables continuous evolution, fostering excellence and meaningful contributions to both my personal development and the progress of my chosen domain.
                            </p>
                        </div>
                    </div>
                    </div>

                    <div id="experience" class="page even">
                    <div class="title even">
                        Experience
                    </div>
                    <div class="content">
                        <div class="exp">
                            <div class="date">
                                2024 - present
                            </div>
                            <div class="divider"></div>
                            <div class="entry">
                                <div class="entry-header">
                                    <div class="position">
                                        Discovery Piscine
                                    </div>
                                    <div class="address">
                                        42 Bangkok
                                    </div>
                                </div>
                                <div class="entry-description">
                                    <ul>
                                        <li>Enrolled in a comprehensive web coding school training program to acquire in-depth knowledge and practical skills in web development.</li>
                                        <li>Collaborated with a diverse group of peers, fostering teamwork, communication, and a supportive learning environment.</li>
                                        <li>Received personalized guidance and mentorship from experienced instructors to enhance understanding and proficiency in coding.</li>
                                        <li>Acquired problem-solving skills through debugging, troubleshooting, and tackling coding challenges during the training sessions.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div id="education" class="page">
                    <div class="title">
                        Education
                    </div>
                    <div class="content">
                        <div class="exp">
                            <div class="date">
                                2022 - present
                            </div>
                            <div class="divider"></div>
                            <div class="entry">
                                <div class="entry-header">
                                    <div class="position">
                                        King Mongkut's Institute of Technology Ladkrabang
                                    </div>
                                    <div class="address">
                                        Lat Krabang, Bangkok
                                    </div>
                                </div>
                                <div class="entry-description">
                                    <ul>
                                        <li>Bachelor's Degree</li>
                                        <li>Engineering</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="exp">
                            <div class="date">
                                2018 - 2022
                            </div>
                            <div class="divider"></div>
                            <div class="entry">
                                <div class="entry-header">
                                    <div class="position">
                                      King Mongkut's International Demonstration School (KMIDS)
                                    </div>
                                    <div class="address">
                                        Lat Krabang, Bangkok
                                    </div>
                                </div>
                                <div class="entry-description">
                                    <ul>
                                        <li>High School Diploma</li>
                                        <li>Science and Mathematics</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>

                    <div id="achievements" class="page even">
                    <div class="title even">
                        Achievements
                    </div>
                    <div class="content">
                        <div class="entry-description">
                            <ul>
                              <li>Manage category driving over $40 million annually </li>
                              <li>Lead costing negotiations to increase gross margin by 15% on key products </li>
                              <li>Excellent reporting and presentation skills Highly proficient with MS Excel, MS Access, PLM (product lifecycle management) software </li>
                              <li>Completed course work in ERP software implementation </li>
                            </ul>
                        </div>
                    </div>
                    </div>

                    <div id="interests" class="page">
                    <div class="title">
                        Interest
                    </div>
                    <div class="content">
                        <div class="keyword-list">
                            <div class="keyword">
                                <span>#Technology</span>
                            </div>
                            <div class="keyword">
                                <span>#Science</span>
                            </div>
                            <div class="keyword">
                                <span>#Design</span>
                            </div>
                            <div class="keyword">
                                <span>#Literature</span>
                            </div>
                            <div class="keyword">
                                <span>#Camping</span>
                            </div>
                            <div class="keyword">
                                <span>#Travelling</span>
                            </div>
                            <div class="keyword">
                                <span>#Music</span>
                            </div>
                            <div class="keyword">
                                <span>#Film</span>
                            </div>
                        </div>
                    </div>
                    </div>

                  <div class="footer" id="social">
                    <div>
                        <div class="footer-title">
                            Share my resume
                        </div>
                        <div class="footer-subtitle text-white">
                            Spread the word and help me get hired.
                        </div>
                    </div>
                    <div class="social">
                        <button onclick="window.open('https://www.google.com/', '_blank')">
                            <img width="50" height="50"
                                src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png">
                        </button>
                        <button onclick="window.open('https://www.google.com/', '_blank')">
                            <img width="50" height="50" src="https://img.freepik.com/free-icon/linkedin_318-187585.jpg">
                        </button>
                        <button onclick="window.open('https://www.google.com/', '_blank')">
                            <img width="50" height="50"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png">
                        </button>
                    </div>
                    <div class="footer-line"></div>
                  </div>
                  </div>`;
