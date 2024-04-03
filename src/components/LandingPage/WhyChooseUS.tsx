interface IWhyChooseUsProps {
  title: string;
  description: string;
}

export function WhyChooseUs({ title, description }: IWhyChooseUsProps) {
  return (
    <div className="container why-us">
      <div className="content-wrapper">
        <div className="title _h2">{title}</div>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}
