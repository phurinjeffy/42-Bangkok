const webSkills = [
  {
    id: 1,
    icon: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    skill: "HTML",
    style: "shadow-orange-500",
  },
  {
    id: 2,
    icon: "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png",
    skill: "CSS",
    style: "shadow-blue-500",
  },
  {
    id: 3,
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    skill: "JS",
    style: "shadow-yellow-500",
  },
];

const contacts = [
  {
    id: 1,
    icon: "https://foundations.projectpythia.org/_images/GitHub-logo.png",
    contact: "GitHub",
    style: "shadow-zinc-400"
  },
  {
    id: 2,
    icon: "https://1000logos.net/wp-content/uploads/2023/01/LinkedIn-Logo-2019.png",
    contact: "LinkedIn",
    style: "shadow-blue-400"
  }
]

export const jeffContent = `
  <div class="flex justify-between items-center w-full h-20 px-4 backdrop-blur-lg text-white fixed z-10">
    <div>
      <a href="#top" class="font-signature text-5xl m-2">
        jeff
      </a>
    </div>

    <ul class="flex">
      <li class="px-4 cursor-pointer capitalize font-medium text-gray-100 hover:scale-105 duration-200">
        <a href="#about">
          About
        </a>
      </li>
      <li class="px-4 cursor-pointer capitalize font-medium text-gray-100 hover:scale-105 duration-200">
        <a href="#showcase">
          Showcase
        </a>
      </li>
      <li class="px-4 cursor-pointer capitalize font-medium text-gray-100 hover:scale-105 duration-200">
        <a href="#contact">
          Contact
        </a>
      </li>
    </ul>
  </div>

  <div
    id="about"
    class="py-6 h-fit min-h-screen w-full bg-gradient-to-b from-gray-700 via-gray-900 to-black flex justify-center"
  >
    <div class="max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 md:flex-row">
      <div class="flex flex-col justify-center p-4">
        <h2 class="text-4xl sm:text-7xl font-bold text-white">
          Hello! My  is Jeff
        </h2>
        <p class="text-gray-500 py-4 max-w-md">
          Currently, I'm a Software Engineering student at KMITL. I'm
          interested in building and developing software. I love working on
          website applications as a Full Stack developer.
        </p>

        <div>
          <a
            href="/"
            class="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md 
          bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            Back to Home
            <span class="group-hover:rotate-90 duration-300">
              <MdOutlineKeyboardArrowRight size={25} class="ml-1" />
            </span>
          </a>
        </div>
      </div>

      <div>
        <img
          src="https://media.licdn.com/dms/image/D5603AQF0nsElmp4zqQ/profile-displayphoto-shrink_400_400/0/1702175535615?e=1712188800&v=beta&t=T2qIRqmKZpvrfchCsJGPdttoKH1NX2m4hk1SZppHFwk"
          alt="myProfile"
          class="rounded-2xl mx-auto w-2/3 md:w-full"
        />
      </div>
    </div>
  </div>

  <div
    id="showcase"
    class="py-6 h-fit min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-gray-700 text-white"
  >
    <div class="max-w-screen-lg p-4 mx-auto flex flex-col justify-center">
      <div class="pb-6">
        <p class="text-4xl font-bold inline border-b-4 border-gray-500">
          Skills
        </p>
      </div>

      <div class="py-6">
        <p class="italic">Web Development</p>
        <div class="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          <div
            class="${webSkills[0].style} flex flex-col justify-evenly shadow-md duration-500 hover:scale-105 py-2 rounded-lg"
          >
            <img src=${webSkills[0].icon} alt="skill" class="w-20 mx-auto" />
            <p class="mt-4">${webSkills[0].skill}</p>
          </div>
          <div
            class="${webSkills[1].style} flex flex-col justify-evenly shadow-md duration-500 hover:scale-105 py-2 rounded-lg"
          >
            <img src=${webSkills[1].icon} alt="skill" class="w-20 mx-auto" />
            <p class="mt-4">${webSkills[1].skill}</p>
          </div>
          <div
            class="${webSkills[2].style} flex flex-col justify-evenly shadow-md duration-500 hover:scale-105 py-2 rounded-lg"
          >
            <img src=${webSkills[2].icon} alt="skill" class="w-20 mx-auto" />
            <p class="mt-4">${webSkills[2].skill}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
  id="contact"
  class="py-6 h-fit min-h-screen w-full bg-gradient-to-b from-gray-700 via-gray-900 to-black text-white"
  >
    <div class="max-w-screen-lg p-4 mx-auto flex flex-col justify-center">
      <div class="pb-6">
        <p class="text-4xl font-bold inline border-b-4 border-gray-500">
          Contacts
        </p>
      </div>

      <div class="py-6">
        <p class="italic">Check out my profiles</p>
        <div class="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          <div
            class="${contacts[0].style} flex flex-col justify-evenly shadow-md duration-500 hover:scale-105 py-2 rounded-lg"
          >
            <a href="https://www.github.com">
              <img src=${contacts[0].icon} alt="skill" class="w-20 mx-auto" />
              <p class="mt-4">${contacts[0].contact}</p>
            </a>
          </div>
          <div
            class="${contacts[1].style} flex flex-col justify-evenly shadow-md duration-500 hover:scale-105 py-2 rounded-lg"
          >
            <a href="https://linkedin.com">
              <img src=${contacts[1].icon} alt="skill" class="w-20 mx-auto" />
              <p class="mt-4">${contacts[1].contact}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
