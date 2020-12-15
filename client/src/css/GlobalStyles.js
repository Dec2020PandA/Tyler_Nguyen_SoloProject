import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  text: {
    color: "white",
  },
  textFieldInput: {
    width: 500,
    color: "white",
    borderColor: 'white'
  },
  textFieldLabelInput: {
    color: "white",
    
  },
  toolbar: {
    display: "flex",
  },
  logout: {
    justifyItems: "flex-end",
  },

  divider: {
    width: "100%",
  },
  modal: {
    position: "absolute",
    width: 600,
    height: 600,
    backgroundColor: "#272822",
    margin: "auto",
    color: "white",
  },
  modalForm: {
    width: 600,
    height: 600,
  },
  //LOGIN STYLES
  loginTextField: {
    color: "white",
  },
});
