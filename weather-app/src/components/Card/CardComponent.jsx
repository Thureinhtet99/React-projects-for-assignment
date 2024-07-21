import React from "react";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

const CardComponent = ({ iconName, value, unit }) => {
  return (
    <>
      <Card sx={{ minWidth: 100 }}>
        <CardActionArea>
          <CardContent className="text-center">
            <i className={`fa-solid fa-${iconName} fa-2xl mb-4`}></i>
            <Typography variant="h5" component="div">
              <span className="fw-bold">{value}</span>
              <span className="small">{unit}</span>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default CardComponent;
