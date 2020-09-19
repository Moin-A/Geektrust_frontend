import React from "react";
import { withStyles } from "@material-ui/core/styles";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { DialogContent } from "@material-ui/core";

const styles = {
  root: {
    backgroundColor: "transparent",
  },
};

class SimpleDialog extends React.Component {
  render() {
    const { classes, title, content, ...other } = this.props;
    const dia = { fontSize: "19px" };

    return (
      <Dialog
        fullWidth={true}
        maxWidth={"md"}
        style={{ textAlign: "center" }}
        PaperProps={{
          style: {
            fontSize: "2rem",
          },
        }}
        aria-labelledby="simple-dialog-title"
        {...other}
        BackdropProps={{
          classes: {
            root: classes.root,
          },
        }}
      >
        <DialogTitle
          disableTypography={true}
          classes={dia}
          id="simple-dialog-title"
          style={{ backgroundColor: "navy", color: "white", fontSize: "35px" }}
        >
          {title}
        </DialogTitle>
        <DialogContent dividers={true}>{content}</DialogContent>
      </Dialog>
    );
  }
}

const SimpleDialogWrapped = withStyles(styles)(SimpleDialog);

export default SimpleDialogWrapped;
