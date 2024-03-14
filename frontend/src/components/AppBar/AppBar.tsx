import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

import { useContext } from 'react';
import { AuthContext } from '@/provider/AuthProvider';
import api from '@/utils/api';
import { useRouter } from 'next/router';

export default function ButtonAppBar() {
  const {auth, setAuth} = useContext(AuthContext);
  const router = useRouter();
  const onLogout = () => {
    api.post("/logout", undefined, {withCredentials:true}).then((data) => {
      setAuth(null);
      router.push("/produto")
    }).catch((err) => {
      console.log(err);
    });
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Minha Loja
          </Typography>
          {!auth && (
            <>
            <Button color="inherit" component={Link} href="/auth/login">Login</Button>
            <Button color="inherit" component={Link} href="/auth/signup">Cadastrar</Button>
            </>
          )}
          {auth && (
            <>
              <Button color="inherit" component={Link} href="/auth/login">Logout</Button>
            </>
          )}
          <Button component={Link} href="/produto" color="inherit">Produtos</Button>
          
          
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}