import React from "react";
import Terminal from "./Terminal";
import classes from "./InfoCard.module.css";

const InfoCard = (props) => {
   const { commandUsed, path } = props;
   return (
      <div className={classes["info-card"]}>
         <Terminal
            commandUsed={commandUsed}
            path={path}
            className={classes.terminal}
         />
         {props.children}
      </div>
   );
};

export default InfoCard;
