/***
 This Component use for rendering question cards 
***/

import { Box, CardContent, LinearProgress, Typography } from '@mui/material';
import React from 'react';
import { Card } from 'react-bootstrap';
// import Card from 'react-bootstrap/Card';

const CustomCard = ({ currentQuestion, questions }) => {

    return (
        <>
            <Card sx={{ minWidth: 175 }} variant="outlined" className='common_card' >
                <CardContent>
                    <Box sx={{ width: '100%', mb: 1.5, color: 'black', textAlign: 'center' }}>
                        <span className='fs-4 fw-bolder'>0{currentQuestion + 1}</span> / <span className='text-muted '> {questions.length}</span>
                    </Box>

                    <Box sx={{ width: '100%', mb: 1.5 }} className="font-monospace">
                        <LinearProgress variant="determinate" value={currentQuestion * 25} />
                    </Box>
                    <Typography sx={{ fontSize: 18, p: 1, }} color="text.medium"  >
                        {questions[currentQuestion].question}
                    </Typography>
                </CardContent>
            </Card >
        </>
    );
};

export default CustomCard;