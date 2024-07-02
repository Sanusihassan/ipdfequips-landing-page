// please give me the scss for why-choose-us
interface IWhyChooseUsProps {
    title: string;
    reasons: {
        icon: string;
        title: string;
        description: string;
    }[]
}
export function WhyChooseUs({ title, reasons }: IWhyChooseUsProps) {


    return (
        <div className="container why-choose-us">
            <div className="content-wrapper">
                <div className="title">{title}</div>
                <div className="reasons-grid">
                    {reasons.map((reason, index) => (
                        <div key={index} className="reason-item">
                            <span className="reason-icon">{reason.icon}</span>
                            <h3>{reason.title}</h3>
                            <p>{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}