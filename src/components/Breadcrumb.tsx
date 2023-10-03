import { Link } from "react-router-dom";

const Breadcrumb = (props: { current: string, link?: string, children? }) => {
  return (
    <div className="breadcrumb">
      <div>
        <Link to={props.link ? props.link : '/' }>Inicio</Link> &gt; {props.current}
      </div>
      {props.children}
    </div>
  );
};

export default Breadcrumb;
