
import { Box, Drawer, Grid, Toolbar, Typography, Divider, List, ListItemText, ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";
import { useSelector } from "react-redux";

export const Sidebar = ({ drawerWidth }) => {

    const { displayName } = useSelector(state => state.auth)

    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant="permanent"
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>
                        {displayName}
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    {
                        ['Enero', 'Febreo', 'Marzo', 'Abril'].map(text => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>

                                    <Grid container>
                                        <ListItemText primary={text} />
                                        <ListItemText secondary={'Lorem sdjasjamabfa'} />

                                    </Grid>
                                </ListItemButton>

                            </ListItem>
                        ))
                    }
                </List>

            </Drawer>
        </Box>
    )
}
