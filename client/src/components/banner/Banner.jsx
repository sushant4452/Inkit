
import { styled, Box, Typography } from '@mui/material';
import bannerimg from "../../images/banner.jpg"
const Image = styled(Box)`
    width: 100%;
    background: url(${bannerimg}) center/55% repeat-x #000;
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #000;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>INKIT</Heading>
            <SubHeading>Write, reflect, connect.</SubHeading>
        </Image>
    )
}

export default Banner;