import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js"
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import styles from "assets/css/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>CONTACT US</h2>
          {/* <h4 className={classes.description}>
            Divide details about your product or agency work into parts. Write a
            few lines about each one and contact us about any further
            collaboration. We will responde get back to you in a couple of
            hours.
          </h4> */}
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Phone Number (optional)"
                  id="phone"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <ListItem className={classes.listItem}>
                  <CustomDropdown
                    id="service"
                    noLiPadding
                    buttonText="Service Request"
                    buttonProps={{
                      className: classes.navLink,
                      color: "#999"
                    }}
                    dropdownList={
                      [
                        <li value="Item 1">Item 1</li>, 
                        <li value="Item 2">Item 2</li>,
                        <li value="Item 3">Item 3</li>
                      ]}  
                  />
                </ListItem>
              </GridItem>
              <CustomInput
                labelText="Message"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5
                }}
              />
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
                  <Button color="primary">Send Message</Button>
                </GridItem>
              </GridContainer>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}