import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
import CarouSelCo2 from './CarouSelCo2';


//Nedan kod är hämtad från https://material-ui.com/components/modal/#modal för att få till popup knappar på förstasidan. Med react-spring


/* Styling för popuprutan */
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

/* Gör att popup rutan öppnas och stängs med en fade */
const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

/* Styling för iconen för att stänga popupen */
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(20),
    top: theme.spacing(5),
    color: theme.palette.grey[100],
    backgroundColor: 'rgba(0, 0, 0, 0.5)'

  },
});

/* Denna kod skapar stängningsknappen iform av ett kryss. Denna kod kommer från material-ui. */
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon style={{fontSize:"30px"}}/> {/* Iconen som visas */}
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});


Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export default function PopupCO2() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false);
  
 
  const handleOpen = () => { /*Hanterar öppningen av popuprutan*/
    setOpen(true);
  };

  const handleClose = () => { /*Hanterar stängningen av popuprutan*/
    setOpen(false);
  };


  return (
    /*Nedan kod skapar en knapp som genererar en popupruta. I denna ruta hämtas diagrammet för koldioxidutläpp. 
    Detta hämtas i komponenten CarouSelCo2*/
    <div> 
      <button type="button" className="popupButton" style={{background:"rgba(41, 170, 225, 0.9)"}} onClick={handleOpen}>
       Koldioxidutsläpp
      </button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}> 
        <DialogTitle id="customized-dialog-title" onClose={handleClose}/>  {/* Denna del hämtar stängningsknappen som kommer upp för att stänga ner popupen*/}
          <div style={{ overflow:"scroll", maxHeight:"900px", minHeight:"100%" }}>
            <CarouSelCo2/>             
        </div>

        </Fade>
      </Modal>
     
     
      
    </div>
  );
}