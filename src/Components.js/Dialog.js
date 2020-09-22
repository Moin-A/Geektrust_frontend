import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { DialogContent, DialogActions, Button } from "@material-ui/core";

const styles = {
  root: {
    backgroundColor: "transparent",
  },
};

class SimpleDialog extends React.Component {
  render() {
    const { classes, title, content, ...other } = this.props;
    const dia = { fontSize: "19px" };

    const handleClickOpen = () => {
      console.log("OPEn");
    };

    const handleClose = () => {
      console.log("Close");
    };

    return (
      <Dialog
        fullWidth={true}
        maxWidth={"sm"}
        style={{ textAlign: "center" }}
        PaperProps={{
          style: {
            fontSize: "1rem",
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
          style={{ backgroundColor: "navy", color: "white", fontSize: "2rem" }}
        >
          {title}
        </DialogTitle>
        <DialogContent dividers={true}>{content}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

const SimpleDialogWrapped = withStyles(styles)(SimpleDialog);

const mapStateToProps = (state) => ({
  list: state.Destination.planets || {
    entities: { planets: {} },
    result: {},
  },
});
const mapDispatchToProps = (dispatch) => ({
  Submit: () => {},
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleDialogWrapped);
