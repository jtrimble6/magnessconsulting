import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import AddCircleIcon from '@material-ui/icons/AddCircle'
import CategoryIcon from '@material-ui/icons/Category';
import PeopleIcon from '@material-ui/icons/People';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/css/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Leadership Coaching</h2>
          <h5 className={classes.description}>
          Coaching leaders is one of the best decisions and organization can make. 
          Organizations only grow to the level that their leaders perform. Leaders 
          grow every day with proper direction, we want to provide that direction 
          and help them on that journey. Leadership coaching is a one-on-one 
          process that is designed to improve performance and increase the ability 
          to lead high performing teams. We will help to drive the highest performance
          from your staff and create a sustainable future for your organization. (sales coaching as well)
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Process Improvement"
              description="Every organization has challenges. Not only do we help to build teams to be critical thinkers and problem solvers, we also deep dive into challenges that may be hindering your organizations performance. Whether your opportunity is people or process related,  we can evaluate these challenges to provide corrective actions and an appropriate plan for improvement."
              icon={AddCircleIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Organizational Development"
              description="We can create structure within your organization through succession planning and preventing critical knowledge loss. We can help you to identify gaps in your programs and even develop new programs that are more sustainable. We can create fully integrated systems for your organization to increase productivity by adding monitors and controls to your process, systems to identify and improve opportunities, expediting learning processes, and procedures for identifying root causes of problems and installing corrective countermeasures."
              icon={CategoryIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Team Development"
              description="A cohesive high performing team is the most valuable asset an organization can have, which can lead to exceptional growth for your organization. Our goal is to train teams to perform to their full potential. We develop programs that will improve collaboration and efficiency in your organization. We help to build and structure long lasting teams through training and developing talent in your organization."
              icon={PeopleIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
