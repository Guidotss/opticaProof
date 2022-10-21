import { useNavigate } from 'react-router-dom';
import { Box,IconButton, Drawer, Toolbar, Grid, Divider, List, ListItem, ListItemIcon,Link, Menu, Typography, ListItemButton, ListItemText } from '@mui/material'
import { Settings,LibraryAdd, ModeEdit,Delete,GridOn,AdminPanelSettings, Key, ArrowBack } from '@mui/icons-material';
import { AdminSideBarItem } from '../../ui/components/AdminSideBarItem';





export const SideBar = () => {
    const navigate = useNavigate();

    const navigateButton = (route) => {
        navigate(`/admin/${ route }`)
    }

  return (

    <Box componet='nav' sx={{width:'200px', flexShrink:{sm:0}}}>
        <Drawer variant='permanent' open sx={{display:{xs:'block'},'& .MuiDrawer-paper':{boxSizing:'border-box',width:'300px', backgroundColor:'#EFE4CF', boxShadow:'0 0 0 1px gray'}}}>
            <Toolbar  component='div'>
                <Grid>
                    <AdminPanelSettings sx={{fontSize:50}}/>
                </Grid>
                <Grid>
                    <h1>Admin Panel</h1>
                </Grid>
            </Toolbar>
            <Divider/>
            
            <List>
                <ListItem>
                    <ListItemButton onClick={() => navigateButton('todoslosanteojos')}>
                        <ListItemIcon>
                            <GridOn/>
                        </ListItemIcon>
                        <ListItemText>
                            <AdminSideBarItem route='todoslosanteojos' title='Todos los anteojos'/>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton onClick={() => navigateButton('agregaranteojos')}>
                        <ListItemIcon>
                            <LibraryAdd/>
                        </ListItemIcon>
                        <ListItemText>
                            <AdminSideBarItem route='agregaranteojos' title='Agregar anteojos'/>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton onClick={() => navigateButton('editaranteojos')} >
                        <ListItemIcon>
                            <ModeEdit/>
                        </ListItemIcon>
                        <ListItemText>
                            <AdminSideBarItem route='editaranteojos' title='Editar anteojos'/>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton onClick={() => navigateButton('eliminaranteojos')}>
                        <ListItemIcon>
                            <Delete/>
                        </ListItemIcon>
                        <ListItemText>
                            <AdminSideBarItem route='eliminaranteojos' title='Eliminar anteojos'/>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton onClick={() => navigateButton('optica')} >
                        <ListItemIcon>
                            <ArrowBack/>
                        </ListItemIcon>
                        <ListItemText>
                            <AdminSideBarItem route='optica' title='Optica'/>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>

        </Drawer>
    </Box>


  )
}