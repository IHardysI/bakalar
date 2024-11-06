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

const ImageDialog = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Вызначае, ці малое экрана

  useEffect(() => {
    const hasShown = sessionStorage.getItem('imageDialogShown');
    if (!hasShown) {
      setOpen(true);
      sessionStorage.setItem('imageDialogShown', 'true');
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="image-dialog"
        maxWidth={true} // Адключэнне maxWidth для поўнага кантролю над шырынёй
        fullWidth={false} // Адключэнне fullWidth
        scroll="body" // Прачышэнне ўнутранага пракручвання
        BackdropProps={{
          sx: { backgroundColor: 'rgba(0, 0, 0, 0.5)', }, // Паўпразрысты чорны фон
        }}
        PaperProps={{
          sx: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            padding: 0, // Выдаленне падступаў
            overflow: 'hidden', // Папярэджанне пракручвання ўнутры
            maxHeight: '90vh', // Максімальная вышыня
            borderRadius: isSmallScreen ? 0 : 2, // Закругленыя вуглы толькі калі не поўнаэкранны
            width: isSmallScreen ? '100%' : 'auto', // Усталёўваем шырыню 98% на малых экранах
            margin: isSmallScreen ? '1vh auto' : 'auto', // Цэнтраванне дыялогу
          },
        }}
      >
        {/* Схаваць загаловак для доступнасці */}
        <span id="image-dialog" style={{ display: 'none' }}>
          Image Dialog
        </span>

        <DialogContent
          dividers={false}
          sx={{
            padding: 0, // Выдаленне стандартных падступаў
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%', // Забеспячэнне поўнай вышыні
          }}
        >
          <Box
            sx={{
              position: 'relative', // Дазваляе размяшчаць кнопкі адносна гэтага Box
              display: 'inline-block', // Выява будзе займаць толькі патрэбную шырыню
              maxWidth: '100%',
              maxHeight: '100%',
            }}
          >
            {/* Кнопка закрыцця размяшчаецца ў правым верхнім куце выявы */}
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                top: 8, // Адступ зверху выявы
                right: 8, // Адступ справа выявы
                color: theme.palette.grey[500],
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Паўпразрысты фон для бачнасці
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                },
                padding: '4px', // Пашырэнне вобласці кліка
                zIndex: 2, // Забяспечвае, што кнопка будзе вышэй за выяву
              }}
            >
              <CloseIcon />
            </IconButton>
            <Box
              component="img"
              src="http://www.hcslavojvelkepopovice.cz/uvod/ban/obr_nab2.png"
              alt="Popover"
              sx={{
                maxWidth: '100%',
                maxHeight: '80vh', // Максімальная вышыня выявы
                width: 'auto',
                height: 'auto',
                display: 'block',
                borderRadius: '8px', // Закругленыя вуглы
              }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/500'; // Запасная выява
              }}
            />
          </Box>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default ImageDialog;
