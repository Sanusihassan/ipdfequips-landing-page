interface ITheSolutionYouCanRelyOnProps {
  title: string;
  description: string;
}

export function TheSolutionYouCanRelyOn({ title, description }: ITheSolutionYouCanRelyOnProps) {
  return (
    <div className="container why-us">
      <div className="content-wrapper">
        <h3 className="title _h2">{title}</h3>
        <h5 className="description">{description}</h5>
      </div>
    </div>
  );
}
