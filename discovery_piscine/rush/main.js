import './style.css'

const home = `<div class="flex flex-col justify-center items-center my-auto mx-auto w-screen h-screen">
                <img src="/wallpaper.jpg" class="inset-0 z-0 absolute w-screen h-screen"/>
                <h1 class="font-bold text-7xl z-10 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                    My CVs Website
                </h1>
                <p class="font-light text-2xl m-8 z-10 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                  Check our Team's Members
                </p>
                <div class="flex flex-row items-center justify-center gap-6 z-10 text-white">
                  <a href="/jeff" class="border rounded bg-orange-400 p-8 text-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                    Jeff
                  </a>
                  <a href="/bright" class="border rounded bg-green-400 p-8 text-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                    Bright
                  </a>
                </div>
              </div>`;

const jeff = `
              <link rel="stylesheet" href="jeff.css" />
              <div class="m-0">
                  <div class="sidebar h-screen">
                    <div class="sidebar-header">
                        <a href="/">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHQNQ7R_yOba3rLcs_zfh9REcY8MCOmu9H2BDSeKMI94TWRV12uEHxXvMR5NM4QtYZ2Mo&usqp=CAU"
                                alt="pfp">
                        </a>
                    </div>
                    <div class="sidebar-list">
                        <li><a href="#personal" class="menu">Personal information</a></li>
                        <li><a href="#experience" class="menu">Experience</a></li>
                        <li><a href="#education" class="menu">Education</a></li>
                        <li><a href="#achievements" class="menu">Achievements</a></li>
                        <li><a href="#interests" class="menu">Interests</a></li>
                    </div>
                  </div>

                  <div id="personal" class="page">
                    <div class="title">
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
                                    Website
                                </span>
                                <span class="value">
                                    <a href="https://google.com" target="_blank">google.com</a>
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
                        <div class="exp">
                            <div class="date">
                                08/2023 - present
                            </div>
                            <div class="divider"></div>
                            <div class="entry">
                                <div class="entry-header">
                                    <div class="position">
                                        Cadet
                                    </div>
                                    <div class="address">
                                        42 Bangkok
                                    </div>
                                </div>
                                <div class="entry-description">
                                    <ul>
                                        <li>Immersed in a dynamic and creative environment dedicated to learning programming.</li>
                                        <li>Intensive and hands-on exposure to programming languages, algorithms, and
                                            problem-solving
                                            techniques.</li>
                                        <li>Collaborative interactions with diverse fellow students fostered teamwork,
                                            communication,
                                            and a sense of mutual support.</li>
                                        <li>Developed a growth mindset, gained confidence in tackling challenges, and deepened my
                                            understanding of problem-solving strategies.</li>
                                        <li>Ignited a lifelong passion for programming, with a strong foundation and a thirst for
                                            ongoing learning in the ever-evolving field of technology.</li>
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
                                        <li>Software Engineering</li>
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
                                        <li>Grade: 3.97</li>
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

const bright = `
                <link rel="stylesheet" href="bright.css" />
                <div class="m-0">
                  <div class="sidebar h-screen">
                    <div class="sidebar-header">
                        <a href="/">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkmZB67e6esDKyxIUTnQhNmOvexujNJ3pccQ&usqp=CAU"
                                alt="pfp">
                        </a>
                    </div>
                    <div class="sidebar-list">
                        <li><a href="#personal" class="menu">Personal information</a></li>
                        <li><a href="#experience" class="menu">Experience</a></li>
                        <li><a href="#education" class="menu">Education</a></li>
                        <li><a href="#achievements" class="menu">Achievements</a></li>
                        <li><a href="#interests" class="menu">Interests</a></li>
                    </div>
                  </div>

                  <div id="personal" class="page">
                    <div class="title">
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
                                    Website
                                </span>
                                <span class="value">
                                    <a href="https://google.com" target="_blank">google.com</a>
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
                        <div class="exp">
                            <div class="date">
                                08/2023 - present
                            </div>
                            <div class="divider"></div>
                            <div class="entry">
                                <div class="entry-header">
                                    <div class="position">
                                        Cadet
                                    </div>
                                    <div class="address">
                                        42 Bangkok
                                    </div>
                                </div>
                                <div class="entry-description">
                                    <ul>
                                        <li>Immersed in a dynamic and creative environment dedicated to learning programming.</li>
                                        <li>Intensive and hands-on exposure to programming languages, algorithms, and
                                            problem-solving
                                            techniques.</li>
                                        <li>Collaborative interactions with diverse fellow students fostered teamwork,
                                            communication,
                                            and a sense of mutual support.</li>
                                        <li>Developed a growth mindset, gained confidence in tackling challenges, and deepened my
                                            understanding of problem-solving strategies.</li>
                                        <li>Ignited a lifelong passion for programming, with a strong foundation and a thirst for
                                            ongoing learning in the ever-evolving field of technology.</li>
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
                                        <li>Software Engineering</li>
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
                                        <li>Grade: 3.97</li>
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

function router() {
  const path = window.location.pathname;
  const contentDiv = document.getElementById('app');

  if (path === '/') {
    contentDiv.innerHTML = `${home}`;
  } else if (path === '/jeff') {
    contentDiv.innerHTML = `${jeff}`;
  } else if (path === '/bright') {
    contentDiv.innerHTML = `${bright}`;
  } else {
    contentDiv.innerHTML = '<h2>404 - Page Not Found</h2>';
  }
}

window.addEventListener('popstate', router);

router();

document.addEventListener("DOMContentLoaded", function () {
  const sidebarLinks = document.querySelectorAll(".menu");

  function updateActivePage() {
    const currentScroll = window.scrollY;
    let activeLink = null;

    sidebarLinks.forEach(link => {
      const sectionId = link.getAttribute("href");
      const section = document.querySelector(sectionId);

      if (section.offsetTop <= currentScroll && section.offsetTop + section.offsetHeight > currentScroll) {
        activeLink = link;
      } else {
        link.classList.remove("active");
      }
    });

    if (activeLink) {
      sidebarLinks.forEach(link => {
        if (link === activeLink) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  }

  window.addEventListener("scroll", updateActivePage);

  sidebarLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const sectionId = link.getAttribute("href");
      const section = document.querySelector(sectionId);

      window.scrollTo({
        top: section.offsetTop,
      });
    });
  });

  updateActivePage();
});