import React from "react";
import Skill from "./Skill.component";
import { SkillType } from "../../../../../app.interface";
import { motion } from "framer-motion";
import { SlideFromBottomVariants } from "../../../../animation-variants/slide.variants";
import { randomKey } from "../../../../utils/randomKey.util";

// data import
import Skills from "../../../../data/skills/skills.data";


export default function SkillList() {
  const allSkills = React.useMemo<SkillType[]>(
    () => [
      {
        name: "FRONTEND SKILLS",
        skills: Skills.frontendSkills,
      },
      {
        name: "BACKEND SKILLS",
        skills: Skills.backendSkills,
      },
      {
        name: "OTHERS",
        skills: Skills.otherSkills,
      },
    ],
    []
  );

  return (
    <motion.div
      transition={{
        staggerChildren: 0.4,
        when: "beforeChildren"
      }}
      id="skills"
      className=" flex flex-col gap-x-9 gap-y-10 font-bold text-sm text-white w-full "
    >
      {allSkills.map((skillType: SkillType) => (
        <motion.div
          variants={SlideFromBottomVariants}
          whileInView="inView"
          initial="hidden"
          key={randomKey()}
          className=" min-w-fit w-full "
        >
          <h4 className=" mb-1 ">{skillType.name}</h4>

          <div className=" grid grid-cols-[repeat(auto-fill,_minmax(9rem,_1fr))] md:justify-start gap-1 ">
            {skillType.skills.map((skill) => (
              <Skill key={randomKey()} {...skill} />
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
