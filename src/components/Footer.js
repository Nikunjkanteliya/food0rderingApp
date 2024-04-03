import {
  EarthIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  Mail,
  Github,
} from "lucide-react";
const socialLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nikunj-kanteliya-043859209",
    icon: <LinkedinIcon />,
  },
  {
    name: "Github",
    link: "https://github.com/Nikunjkanteliya",
    icon: <Github />,
  },
  {
    name: "Mail",
    link: "mailto:kanteliyanikunj422@gmail.com",
    icon: <Mail />,
  },
  {
    name: "Website",
    link: "https://portfolio-5m5j.onrender.com/",
    icon: <EarthIcon />,
  },
];
const Footer = () => {
  return (
    <footer className=" border-t-[0.5px]  bg-gray-50 dark:bg-gray-800">
      <div className="mx-[auto] p-[15px] max-w-[560px]">
        <div>
          {" "}
          <div className="mt-5">
            <span className="text-[#767E94] block text-center mb-6 font-medium text-lg">
              Follow Us
            </span>
            <ul className="flex gap-6 items-center justify-center">
              {socialLinks.map(({ name, icon, link }) => (
                <li key={name}>
                  <a
                    href={link}
                    title={name}
                    className=" hover:text-[#767e94]"
                    target="_blank"
                  >
                    {icon}
                  </a>
                  <span className="sr-only">{name} account</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className="text-center px-3 py-3">
            <span className="text-[#767E94]">
              Coded with 💙 by{" "}
              <a href="mailto:kanteliyanikunj422@gmail.com" target="_blank">
                Nikunj Kanteliya{" "}
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
