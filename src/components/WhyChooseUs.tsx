import { FaRocket, FaLock, FaCheckCircle, FaGift } from 'react-icons/fa';

/**
 * Maps icon names to react-icons components with their colors
 */
const iconMap: Record<string, { Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>; color: string }> = {
    '🚀': { Icon: FaRocket, color: '#FF6B6B' },
    '🔒': { Icon: FaLock, color: '#FFA500' },
    '💯': { Icon: FaCheckCircle, color: '#FF1493' },
    '🆓': { Icon: FaGift, color: '#4A90E2' },
};

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
                    {reasons.map((reason, index) => {
                        const iconData = iconMap[reason.icon] || { Icon: FaCheckCircle, color: '#000' };
                        const { Icon, color } = iconData;
                        return (
                            <div key={index} className="reason-item">
                                <div className="reason-icon">
                                    <Icon style={{ color }} />
                                </div>
                                <h3>{reason.title}</h3>
                                <p>{reason.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}