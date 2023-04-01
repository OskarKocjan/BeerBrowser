import { LoadingSpinProps } from "models/LoadingSpinModels";
import { useEffect, useState } from "react";
import { Loader } from "./styled";

const LoadingSpin: React.FC<LoadingSpinProps> = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsVisible(false);
        }, 7000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);
    return isVisible ? (
        <Loader />
    ) : (
        <div className="center-section-column">
            <p>Oooops this beer does not exist</p>
            <p>or</p>
            <p>it took too long to load up</p>
        </div>
    );
};

export default LoadingSpin;
