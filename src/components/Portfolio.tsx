import { JSX } from "react";
import { useState } from "react";
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";
import data from "../db/data";


const Portfolio = (): JSX.Element => {
  const filters = ["All", "Websites", "Flayers", "Business Cards"];
  const [state, setState] = useState('All');
  const onSelectFilter = (state: string) => {
    setState(state);
  }

  let selectedProjects = data;
  if (state !== 'All') {
    selectedProjects = data.filter((img) => img.category === state);
  }

  return (
    <>
      <Toolbar
        filters={filters}
        selected={state}
        onSelectFilter={onSelectFilter}
      />
      <ProjectList data={selectedProjects} />
    </>
  )
}

export default Portfolio;