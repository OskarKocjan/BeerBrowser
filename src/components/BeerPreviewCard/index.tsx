import { BeerPreviewCardProps } from "models/BeerPreviewCardModels";
import { StyledCard, StyledContentCard } from "./styled";
import GradeIcon from "@mui/icons-material/Grade";
import { useNavigate } from "react-router";

const BeerPreviewCard: React.FC<BeerPreviewCardProps> = ({
    id,
    name,
    tagline,
    imageUrl,
}) => {
    const navigate = useNavigate();

    return (
        <StyledCard onClick={() => navigate(`/beer/${id}`)}>
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
