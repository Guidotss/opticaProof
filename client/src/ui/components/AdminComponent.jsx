import { useState } from 'react';
import {Box,Avatar,Menu,MenuItem,ListItemIcon,Divider,IconButton,Typography, Tooltip } from '@mui/material';
import { Settings,LibraryAdd, ModeEdit,Delete,GridOn } from '@mui/icons-material';

export const AccountMenu = () =>{

  const [anchorEl, setAnchorEl] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
        <Box>
            <Tooltip title="Glasses settings">
                <IconButton

                    onClick={ handleClick }
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Settings/>
                </IconButton>
            </Tooltip>
        </Box>
        <Menu 
            id="menu-list-grow"
            anchorEl={anchorEl}
            open={ Boolean(anchorEl) }
            onClose={handleClose}
            onClick={ handleClose }
            PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}

        >
            <MenuItem>
              <GridOn/>
              <Typography sx={{marginLeft:2}}>Todos los anteojos</Typography>
            </MenuItem>
            <Divider/>
            <MenuItem>
                <LibraryAdd/>
                <Typography sx={{marginLeft:2}}>Agregar anteojo</Typography>
            </MenuItem>
            <Divider/>
            <MenuItem>
                <ModeEdit/>
                <Typography sx={{marginLeft:2}}>Editar anteojo</Typography>
            </MenuItem>
            <Divider/>
            <MenuItem>
                <Delete/>
                <Typography sx={{marginLeft:2}}>Eliminar anteojo</Typography>
            </MenuItem>
        </Menu>
    </>
    
  );
}
