// ImageDialog.jsx
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  IconButton,
  useMediaQuery,
  useTheme,
  Box,
  Container,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import popupImg from '../assets/popup.png';

const ImageDialog = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Determine if the screen is small

  useEffect(() => {
    // Remove sessionStorage check to show the dialog every time the page reloads
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  // Function to handle image click and open the mail client
  const handleImageClick = () => {
    window.location.href = 'mailto:nabor@hcslavojvelkepopovice.cz';
  };

  return (
    <Container>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="image-dialog"
        maxWidth={true} // Disable maxWidth for full control over width
        fullWidth={false} // Disable fullWidth
        scroll="body" // Remove internal scrolling
        BackdropProps={{
          sx: { backgroundColor: 'rgba(0, 0, 0, 0.5)' }, // Semi-transparent black backdrop
        }}
        PaperProps={{
          sx: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            padding: 0, // Remove padding
            overflow: 'hidden', // Prevent internal scrolling
            maxHeight: '90vh', // Maximum height
            borderRadius: isSmallScreen ? 0 : 2, // Rounded corners only if not full-screen
            width: isSmallScreen ? '100%' : 'auto', // Set width to 100% on small screens
            margin: isSmallScreen ? '1vh auto' : 'auto', // Center the dialog
          },
        }}
      >
        {/* Hide the title for accessibility */}
        <span id="image-dialog" style={{ display: 'none' }}>
          Image Dialog
        </span>

        <DialogContent
          dividers={false}
          sx={{
            padding: 0, // Remove default padding
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%', // Ensure full height
          }}
        >
          <Box
            sx={{
              position: 'relative', // Allow positioning of buttons relative to this Box
              display: 'inline-block', // Image will take only necessary width
              maxWidth: '100%',
              maxHeight: '100%',
            }}
          >
            {/* Close button positioned at the top-right corner of the image */}
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                top: 8, // Distance from the top of the image
                right: 8, // Distance from the right of the image
                color: theme.palette.grey[500],
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for visibility
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                },
                padding: '4px', // Expand clickable area
                zIndex: 2, // Ensure the button is above the image
              }}
            >
              <CloseIcon />
            </IconButton>

            {/* Make the image clickable by adding an onClick handler */}
            <Box
              component="img"
              src={popupImg}
              alt="Popover"
              sx={{
                maxWidth: '100%',
                maxHeight: '80vh', // Maximum height of the image
                width: 'auto',
                height: 'auto',
                display: 'block',
                borderRadius: '8px', // Rounded corners
                cursor: 'pointer', // Change cursor to pointer on hover
              }}
              onClick={handleImageClick} // Handle click to open email client
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/500'; // Fallback image
              }}
            />
          </Box>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default ImageDialog;
