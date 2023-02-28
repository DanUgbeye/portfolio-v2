import React from "react";
import { filter } from "../../../../../app.interface";
import StyledSection from "../../../../components/StyledSection.component";
import ProjectFilter from "./ProjectFilter.component";
import ProjectList from "./ProjectList.component";

export default function PortfolioSection() {
  const [filter, setFilter] = React.useState<filter>("all");
  return (
    <StyledSection className="  ">
      <div id="projects" className=" mt-[8.5rem] ">
        <h4 className=" font-bold mb-3 ">PORTFOLIO SHOWCASE</h4>

        <p className=" text-sm mb-5 font-normal max-w-lg ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nam
          nam imperdiet maecenas vivamus.
        </p>

        <div className=" flex flex-col gap-y-9 relative ">
          <ProjectFilter filter={filter} setFilter={setFilter} />
          <ProjectList filter={filter} />
        </div>
      </div>
    </StyledSection>
  );
}
