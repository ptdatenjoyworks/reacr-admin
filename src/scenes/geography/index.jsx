import { Box } from '@mui/material';
import Header from '../../components/Header';
import GeographyChart from '../../components/GeographyChart';
import { tokens } from '../../theme';
import { useTheme } from '@mui/material';

const Bar = () => {
    const colors = tokens(useTheme().palette.mode);
    return (
        <Box m="20px">
            <Header title="Geography" subtitle="Simple Geography" />
            <Box height="75vh" border={`1px solid ${colors.grey[100]}`}>
                <GeographyChart />
            </Box>
        </Box>
    );
};

export default Bar;
