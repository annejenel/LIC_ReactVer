import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const SnackbarComponent = ({ open, handleClose, alert }) => {
    return (
        <Snackbar 
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }} 
        open={open} 
        autoHideDuration={6000} 
        onClose={handleClose}>
            <Alert onClose={handleClose} severity={alert.type} sx={{ width: '100%', backgroundColor: alert.type === 'error' ? '#f44336' : '#4caf50', color: '#fff'}}>
                {alert.message}
            </Alert>
        </Snackbar>
    );
};

export default SnackbarComponent;
