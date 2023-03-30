import { BeerPreviewCardProps } from "models/BeerPreviewCardModels";
import { StyledCard } from "./styled";
import { CardContent } from "@mui/material";

const BeerPreviewCard: React.FC<BeerPreviewCardProps> = ({
    id,
    name,
    tagline,
    imageUrl,
}) => {
    return (
        <StyledCard>
            <img src={imageUrl} alt="beer" />
        </StyledCard>
    );
};

export default BeerPreviewCard;
