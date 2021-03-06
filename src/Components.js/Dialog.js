import React from "react";
import { submitfinal } from "../Store/Slice/Destination";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
    const {
      classes,
      title,
      content,
      userinput,
      token,
      submitfinal,
      ...other
    } = this.props;

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
          fontSize={"3rem"}
          id="simple-dialog-title"
          style={{ backgroundColor: "navy", color: "white", fontSize: "2rem" }}
        >
          {title}
        </DialogTitle>
        <DialogContent dividers={true}>{content}</DialogContent>
        <Switch>
          <Route exact path="/Homepage">
            <DialogActions>
              <Button
                onClick={() => {
                  this.props.submitfinal();
                }}
                color="primary"
              >
                Disagree
              </Button>
              <Link to="/resultpage">
                <Button color="primary">Agree</Button>
              </Link>
            </DialogActions>
          </Route>
        </Switch>
      </Dialog>
    );
  }
}

const SimpleDialogWrapped = withStyles(styles)(SimpleDialog);

const mapStateToProps = (state) => ({
  userinput: state.Destination.userinput,
  token: state.Destination.token,
});
const mapDispatchToProps = (dispatch) => ({
  submitfinal: () => dispatch(submitfinal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleDialogWrapped);
