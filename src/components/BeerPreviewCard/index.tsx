import { BeerPreviewCardProps } from "models/BeerPreviewCardModels";
import { StyledCard, StyledContentCard } from "./styled";
import GradeIcon from "@mui/icons-material/Grade";

const BeerPreviewCard: React.FC<BeerPreviewCardProps> = ({
    id,
    name,
    tagline,
    imageUrl,
}) => {
    return (
        <StyledCard>
            <StyledContentCard>
                <img src={imageUrl} alt="beer" />
                <span>{name}</span>
                <GradeIcon />
                <span>{tagline}</span>
            </StyledContentCard>
        </StyledCard>
    );
};

export default BeerPreviewCard;
