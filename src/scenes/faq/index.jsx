import { Box, useTheme, Typography } from '@mui/material';
import Header from '../../components/Header';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../theme';

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions" />

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        What is the purpose of this project?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        The purpose of this project is to demonstrate the use of MUI components in a React application.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        What is the purpose of this project?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        The purpose of this project is to demonstrate the use of MUI components in a React application.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        What is the purpose of this project?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        The purpose of this project is to demonstrate the use of MUI components in a React application.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        What is the purpose of this project?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        The purpose of this project is to demonstrate the use of MUI components in a React application.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        What is the purpose of this project?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        The purpose of this project is to demonstrate the use of MUI components in a React application.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        What is the purpose of this project?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        The purpose of this project is to demonstrate the use of MUI components in a React application.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default FAQ;
