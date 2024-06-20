import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';

const FolderAccordion = ({ folder }) => {
    const { name, subfolders, htmlContent } = folder;

    return (
        <Accordion>
            <AccordionSummary>
                <Typography>{name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {subfolders && subfolders.length > 0 ? (
                    subfolders.map((subfolder, index) => (
                        <FolderAccordion key={index} folder={subfolder} />
                    ))
                ) : (
                    <div className="folder-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />
                )}
            </AccordionDetails>
        </Accordion>
    );
};

export default FolderAccordion;