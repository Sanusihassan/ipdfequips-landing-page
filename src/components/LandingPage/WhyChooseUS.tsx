interface IWhyChooseUsProps {
  title: string;
  description: string;
}

export function WhyChooseUs({ title, description }: IWhyChooseUsProps) {
  return (
    <div className="container why-us">
      <div className="content-wrapper">
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}
