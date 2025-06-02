import React from "react";
import {
  Linkedin,
  Github,
  Instagram,
  Youtube,
  ExternalLink,
} from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    displayName: "Let's Connect",
    subText: "on LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/jaloliddin-zokirov-4869b0276/",
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#0077B5]",
    isPrimary: true,
  },
  {
    name: "Instagram",
    displayName: "Instagram",
    subText: "@jaloliddinzokirov_",
    icon: Instagram,
    url: "https://www.instagram.com/jaloliddinzokirov_/",
    color: "#E4405F",
    gradient: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]",
  },
  {
    name: "YouTube",
    displayName: "Youtube",
    subText: "@jaloliddin_zokirov",
    icon: Youtube,
    url: "https://www.youtube.com/@jaloliddin_zokirov",
    color: "#FF0000",
    gradient: "from-[#FF0000] to-[#CC0000]",
  },
  {
    name: "GitHub",
    displayName: "Github",
    subText: "@Jaloliddin-Zokirov",
    icon: Github,
    url: "https://github.com/Jaloliddin-Zokirov",
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]",
  },
  {
    name: "Telegram",
    displayName: "Telegram",
    subText: "@Zokirov_Jaloliddin",
    icon: ({ className, ...props }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#ffffff"
        class="bi bi-telegram"
      >
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
      </svg>
    ),
    url: "https://t.me/Zokirov_Jaloliddin",
    color: "black",
    gradient: "from-[#000000] via-[#25F4EE] to-[#FE2C55]",
  },
];

const SocialLinks = () => {
  const linkedIn = socialLinks.find((link) => link.isPrimary);
  const otherLinks = socialLinks.filter((link) => !link.isPrimary);
  const [instagram, youtube, github, tiktok] = otherLinks;

  return (
    <div className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
        <span className="inline-block w-8 h-1 bg-indigo-500 rounded-full"></span>
        Connect With Me
      </h3>

      <div className="flex flex-col gap-4">
        {/* LinkedIn - Primary Row */}
        <a
          href={linkedIn.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-between p-4 rounded-lg 
             bg-white/5 border border-white/10 overflow-hidden
             hover:border-white/20 transition-all duration-500"
        >
          {/* Hover Gradient Background */}
          <div
            className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
               bg-gradient-to-r ${linkedIn.gradient}`}
          />

          {/* Content Container */}
          <div className="relative flex items-center gap-4">
            {/* Icon Container */}
            <div className="relative flex items-center justify-center">
              <div
                className="absolute inset-0 opacity-20 rounded-md transition-all duration-500
                   group-hover:scale-110 group-hover:opacity-30"
                style={{ backgroundColor: linkedIn.color }}
              />
              <div className="relative p-2 rounded-md">
                <linkedIn.icon
                  className="w-6 h-6 transition-all duration-500 group-hover:scale-105"
                  style={{ color: linkedIn.color }}
                />
              </div>
            </div>

            {/* Text Container */}
            <div className="flex flex-col">
              <span className="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">
                {linkedIn.displayName}
              </span>
              <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {linkedIn.subText}
              </span>
            </div>
          </div>

          {/* External Link */}
          <ExternalLink
            className="relative w-5 h-5 text-gray-500 group-hover:text-white
               opacity-0 group-hover:opacity-100 transition-all duration-300
               transform group-hover:translate-x-0 -translate-x-1"
          />

          {/* Shine Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                  translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
            />
          </div>
        </a>
        <a
          key={instagram.name}
          href={instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-3 p-4 rounded-xl 
                       bg-white/5 border border-white/10 overflow-hidden
                       hover:border-white/20 transition-all duration-500"
        >
          <div
            className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                             bg-gradient-to-r ${instagram.gradient}`}
          />

          <div className="relative flex items-center justify-center">
            <div
              className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500
                               group-hover:scale-125 group-hover:opacity-30"
              style={{ backgroundColor: instagram.color }}
            />
            <div className="relative p-2 rounded-lg">
              <instagram.icon
                className="w-5 h-5 transition-all duration-500 group-hover:scale-110"
                style={{ color: instagram.color }}
              />
            </div>
          </div>

          {/* Text Container */}
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
              {instagram.displayName}
            </span>
            <span className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
              {instagram.subText}
            </span>
          </div>

          <ExternalLink
            className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto
                                     opacity-0 group-hover:opacity-100 transition-all duration-300
                                     transform group-hover:translate-x-0 -translate-x-2"
          />

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
            />
          </div>
        </a>

        <a
          key={github.name}
          href={github.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-3 p-4 rounded-xl 
                       bg-white/5 border border-white/10 overflow-hidden
                       hover:border-white/20 transition-all duration-500"
        >
          <div
            className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                             bg-gradient-to-r ${github.gradient}`}
          />

          <div className="relative flex items-center justify-center">
            <div
              className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500
                               group-hover:scale-125 group-hover:opacity-30"
              style={{ backgroundColor: github.color }}
            />
            <div className="relative p-2 rounded-lg">
              <github.icon
                className="w-5 h-5 transition-all duration-500 group-hover:scale-110"
                style={{ color: github.color }}
              />
            </div>
          </div>

          {/* Text Container */}
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
              {github.displayName}
            </span>
            <span className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
              {github.subText}
            </span>
          </div>

          <ExternalLink
            className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto
                                     opacity-0 group-hover:opacity-100 transition-all duration-300
                                     transform group-hover:translate-x-0 -translate-x-2"
          />

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
            />
          </div>
        </a>

        <a
          key={youtube.name}
          href={youtube.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-3 p-4 rounded-xl 
                       bg-white/5 border border-white/10 overflow-hidden
                       hover:border-white/20 transition-all duration-500"
        >
          <div
            className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                             bg-gradient-to-r ${youtube.gradient}`}
          />

          <div className="relative flex items-center justify-center">
            <div
              className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500
                               group-hover:scale-125 group-hover:opacity-30"
              style={{ backgroundColor: youtube.color }}
            />
            <div className="relative p-2 rounded-lg">
              <youtube.icon
                className="w-5 h-5 transition-all duration-500 group-hover:scale-110"
                style={{ color: youtube.color }}
              />
            </div>
          </div>

          {/* Text Container */}
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
              {youtube.displayName}
            </span>
            <span className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
              {youtube.subText}
            </span>
          </div>

          <ExternalLink
            className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto
                                     opacity-0 group-hover:opacity-100 transition-all duration-300
                                     transform group-hover:translate-x-0 -translate-x-2"
          />

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
            />
          </div>
        </a>

        <a
          key={tiktok.name}
          href={tiktok.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-3 p-4 rounded-xl 
                       bg-white/5 border border-white/10 overflow-hidden
                       hover:border-white/20 transition-all duration-500"
        >
          <div
            className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                             bg-gradient-to-r ${tiktok.gradient}`}
          />

          <div className="relative flex items-center justify-center">
            <div
              className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500
                               group-hover:scale-125 group-hover:opacity-30"
              style={{ backgroundColor: tiktok.color }}
            />
            <div className="relative p-2 rounded-lg">
              <tiktok.icon
                className="w-5 h-5 transition-all duration-500 group-hover:scale-110"
                style={{ color: tiktok.color }}
              />
            </div>
          </div>

          {/* Text Container */}
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
              {tiktok.displayName}
            </span>
            <span className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
              {tiktok.subText}
            </span>
          </div>

          <ExternalLink
            className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto
                                     opacity-0 group-hover:opacity-100 transition-all duration-300
                                     transform group-hover:translate-x-0 -translate-x-2"
          />

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
