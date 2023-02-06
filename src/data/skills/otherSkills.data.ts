import CppIcon from "../../assets/svg/skills/other/c++.svg";
import ArduinoIcon from "../../assets/svg/skills/other/arduino.svg";
import GitIcon from "../../assets/svg/skills/other/git.svg";
import GithubIcon from "../../assets/svg/skills/other/github.svg";
import VsCodeIcon from "../../assets/svg/skills/other/vscode.svg";

const Cpp = {
  name: "C++",
  svg: CppIcon,
};

const Arduino = {
  name: "Arduino",
  svg: ArduinoIcon,
};

const Git = {
  name: "Git",
  svg: GitIcon,
};

const GitHub = {
  name: "GitHub",
  svg: GithubIcon,
  whiteBg: true,
};

const VSCode = {
  name: "VS Code",
  svg: VsCodeIcon,
};

const otherSkills = [Cpp, Arduino, Git, GitHub, VSCode];

export default otherSkills;

export { Cpp, Arduino, Git, GitHub, VSCode };
