interface IWhyChooseUsProps {
    title: string;
    description: string;
}

export function WhyChooseUs({ title, description }: IWhyChooseUsProps) {
    const reasons = [
        {
            icon: "🚀",
            title: "Fast and Efficient",
            description: "Convert your PDFs quickly with our optimized tools."
        },
        {
            icon: "🔒",
            title: "Secure",
            description: "Your files are processed locally and never stored on our servers."
        },
        {
            icon: "💯",
            title: "High Quality",
            description: "Maintain the original quality of your documents throughout the conversion process."
        },
        {
            icon: "🆓",
            title: "Free to Use",
            description: "Enjoy our PDF tools without any cost or hidden fees."
        }
    ];

    return (
        <div className="container why-choose-us">
            <div className="content-wrapper">
                <h2>{title}</h2>
                <p>{description}</p>
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