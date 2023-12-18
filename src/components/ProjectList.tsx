import { JSX } from "react";
import Images from "../interfaces/Images";

const ProjectList = (props: { data: Array<Images> }): JSX.Element => {
  const { data } = props;
  return (
    <>
      {data.map((el, index) => <img key={index} src={el.img} />)}
    </>
  )
}

export default ProjectList;