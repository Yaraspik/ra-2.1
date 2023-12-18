import { JSX } from "react";
import ToolbarFilters from "../interfaces/ToolbarFilters";

const Toolbar = (props: ToolbarFilters): JSX.Element => {
  const { filters, selected, onSelectFilter } = props;
  return (
    <>
      <div className="toolbar">
        {filters.map((el, index) => <button key={index} className={el === selected ? 'selected' : ''} onClick={() => onSelectFilter(el)}>{el}</button>
        )}
      </div>
    </>
  )
}

export default Toolbar;