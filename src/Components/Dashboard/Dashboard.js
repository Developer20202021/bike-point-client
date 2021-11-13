import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {useHistory,useRouteMatch, useLocation} from 'react-router-dom';
import './Dashboard.css';
import {Switch, Route} from 'react-router-dom';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import AddIcon from '@mui/icons-material/Add';
import ReviewsIcon from '@mui/icons-material/Reviews';
import SettingsIcon from '@mui/icons-material/Settings';
import PaymentIcon from '@mui/icons-material/Payment';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import YourProducts from '../YourProducts/YourProducts';
import ManageOrders from '../ManageOrders/ManageOrders';
import AddAdmin from '../AddAdmin/AddAdmin';
import AdminList from '../AdminList/AdminList';
import PlaceOrder from '../PlaceOrder/PlaceOrder';
import AddReview from '../AddReview/AddReview';
import AddProduct from '../AddProduct/AddProduct';
import AllProducts from '../AllProducts/AllProducts';
import ListIcon from '@mui/icons-material/List';
import DashboardFrontPage from './DashboardFrontPage/DashboardFrontPage';
import TrackOrder from '../TrackOrder/TrackOrder';
import { Grid } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import UseAuthFirebase from '../CustomHook/UseAuthFirebase';
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword,onAuthStateChanged, signOut, GoogleAuthProvider,signInWithPopup,GithubAuthProvider, updateProfile } from "firebase/auth";
import Products from '../Products/Products';
import Payment from '@mui/icons-material/Payment';
import PaymentSystem from '../Payment/Payment';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);















 function Dashboard() {

  
const {newUser,setIsLoading,logInUser,setNewUser,setErrorMsg, errorMsg, } = UseAuthFirebase();



  const theme = useTheme();
  theme.palette.background.paper='rgb(47, 55, 66)'
  console.log(theme.palette);
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };





  const history = useHistory();
  const {url, path} = useRouteMatch()

  const goLocation = (location)=>{

    history.push(`${url}${location}`)

  }


  const {pathname} = useLocation();
  console.log(pathname);



  const [toogle, setToogle] = React.useState(false);

  const toogling = ()=>{
    
    setToogle(!toogle);

  }


  const [user, setUser] = React.useState()



  React.useEffect(()=>{


    fetch(`https://immense-fjord-66300.herokuapp.com/public/users?email=${newUser?.email}`)
    .then(res=>res.json())
    .then(data=>{
      setUser(data[0])
      console.log(data[0])
    })
    .catch(err=>{
      console.log(err);
    })
    console.log(user?.role);
    console.log(newUser?.photoURL);
  




  },[newUser])

  const auth = getAuth();


  const logOut = ()=>{
    signOut(auth)
    .then(()=>{
       
     
        console.log("Log out Successfull");
        setNewUser('');
        history.push("/login")
       
    })
    .catch(err=>{
        const error = err.message;
                    setErrorMsg(error);
        console.log(err);
    })
    .finally(()=>{
      setIsLoading(false)
    })


}








  return (
    <Box sx={{ display: 'flex', position:"relative" }}>
      <CssBaseline />
      <AppBar style={{
          backgroundColor:'#5867DD',
          display: 'flex',
          justifyContent:"space-between",
          alignItems:"center",
          flexDirection:"row"
      }} position="fixed" open={open}>
        <Toolbar>
            
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
        
           {pathname==='/dashboard/track-your-orders'? <Typography variant="h6" noWrap component="div">
           Track Your Order
          </Typography>:null}
           {pathname==='/dashboard'? <Typography variant="h6" noWrap component="div">
          Dashboard
          </Typography>:null}
           {pathname==='/dashboard/add-reviews'? <Typography variant="h6" noWrap component="div">
         Add Review
          </Typography>:null}
           {pathname==='/dashboard/add-products'? <Typography variant="h6" noWrap component="div">
         Add Product
          </Typography>:null}
           {pathname==='/dashboard/add-new-admin'? <Typography variant="h6" noWrap component="div">
         Add New Admin
          </Typography>:null}
           {pathname==='/dashboard/my-orders'? <Typography variant="h6" noWrap component="div">
              My Orders
          </Typography>:null}
           {pathname==='/dashboard/manage-orders'? <Typography variant="h6" noWrap component="div">
            Manage Orders
          </Typography>:null}
           {pathname==='/dashboard/pay-now'? <Typography variant="h6" noWrap component="div">
         Pay Now
          </Typography>:null}
           {pathname==='/dashboard/admins-list'? <Typography variant="h6" noWrap component="div">
            Admin List
          </Typography>:null}
           {pathname==='/dashboard/your-account'? <Typography variant="h6" noWrap component="div">
           Your Account
          </Typography>:null}
           {pathname==='/dashboard/all-products'? <Typography variant="h6" noWrap component="div">
           All Products 
          </Typography>:null}

          
         
          

         
         
        </Toolbar>
        <div className="user-logout-d"> 
        {newUser?.photoURL?<img
        onClick={toogling}
        className ='userImage' src={newUser?.photoURL} alt="" width="50px" height='50px'/>:<img
        onClick={toogling}
        className ='userImage' src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" width="50px" height='50px'/>} </div>
          <div className="phone-user-name">
            <p>{newUser?.displayName?.slice(0,10)+"..."}</p>
          </div>
        <div className="phone-user-logout-d"> 

        {newUser?.photoURL?<img
       
        className ='userImage' src={newUser?.photoURL} alt="" width="40px" height='40px'/>:<img
       
        className ='userImage' src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" width="40px" height='40px'/>} </div>
        



        {toogle? <div className="toogleitem">
          <div className="image-user">
          {newUser?.photoURL?<img
        onClick={toogling}
        className ='userImage' src={newUser?.photoURL} alt="" width="50px" height='50px'/>:<img
        onClick={toogling}
        className ='userImage' src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" width="50px" height='50px'/>}
            <span className="active-icon"><FiberManualRecordIcon style={{
              color:"#00F100"
            }}></FiberManualRecordIcon></span>
          </div>
          <div className="user-name">
            <h2>{newUser?.displayName?.slice(0,15)+"..."}</h2>
          </div>
        
          
          <div  onClick={()=>goLocation('/my-orders')} className="toogle-button">
          <ShoppingCartIcon/> My Orders
          </div>
          <div onClick={()=>goLocation('/your-account')} className="toogle-button">
          <SettingsIcon/> Settings
          </div>
          <div onClick={logOut} className="toogle-button">
          <LogoutIcon/> Log Out
          </div>
         
        
       
      </div>:null}
      
      </AppBar>
      
      <Drawer  variant="permanent" open={open}>
        <DrawerHeader style={{
          backgroundColor:'#5867DD'
      }} >
          <h3 className='dashboard-header-logo' style={{
              color:'white',
              
          }}>BIKE POINT DASHBOARD</h3>
          <IconButton  onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon   /> : <ChevronLeftIcon  style={{
        color:'white'
      }}/>}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {user?.role==="admin"&& newUser?.email?<ListItem onClick={()=>goLocation('')} button>
              <ListItemIcon>
              <DashboardIcon style={{
        color:'white'
      }}/>
              </ListItemIcon>
              <ListItemText style={{
        color:'white'
      }} primary='Dashboard' />
            </ListItem>:null}


          
            

            {user?.role==="admin"&& newUser?.email? <ListItem onClick={()=>goLocation('/all-products')} button>
              <ListItemIcon>
                <ListIcon style={{
        color:'white'
      }}/>
              
              </ListItemIcon>
              <ListItemText style={{
        color:'white'
      }} primary='All Products' />
            </ListItem>:null}
           


            <ListItem onClick={()=>goLocation('/add-reviews')} button>
              <ListItemIcon>
              <StarBorderIcon style={{
        color:'white'
      }}/>
              </ListItemIcon>
              <ListItemText style={{
        color:'white'
      }} primary='Add Reviews' />
            </ListItem>


            <ListItem onClick={()=>history.push('/')} button>
              <ListItemIcon>
              <HomeIcon style={{
        color:'white'
      }}/>
              </ListItemIcon>
              <ListItemText style={{
        color:'white'
      }} primary='Home' />
            </ListItem>


            {user?.role==="admin"&& newUser?.email?<ListItem onClick={()=>goLocation('/add-products')} button>
              <ListItemIcon>
                  <ReviewsIcon style={{
        color:'white'
      }}/>
              
              </ListItemIcon>
              <ListItemText style={{
        color:'white'
      }} primary='Add Products' />
            </ListItem>:null}
            


            {user?.role==="admin"&& newUser?.email?
            <ListItem onClick={()=>goLocation('/add-new-admin')} button>
              <ListItemIcon>
                  <AddIcon style={{
        color:'white'
      }}/>
              
              </ListItemIcon>
              <ListItemText style={{
        color:'white'
      }} primary='Add Admin' />
            </ListItem>:null}





            <ListItem onClick={()=>goLocation('/my-orders')} button>
              <ListItemIcon>
              <AddShoppingCartIcon style={{
        color:'white'
      }}/>
              </ListItemIcon>
              <ListItemText style={{
        color:'white'
      }} primary='My Orders' />
            </ListItem>


            {user?.role==="admin"&& newUser?.email? <ListItem onClick={()=>goLocation('/manage-orders')} button>
              <ListItemIcon>
              <ManageAccountsIcon style={{
        color:'white'
      }}/>
              </ListItemIcon>
              <ListItemText style={{
        color:'white'
      }} primary='Manage Orders' />
            </ListItem>:null}
           




            <ListItem onClick={()=>goLocation('/track-your-orders')} button>
              <ListItemIcon>
              <LocalAirportIcon style={{
        color:'white'
      }}/>
              </ListItemIcon>
              <ListItemText style={{
        color:'white'
      }} primary='Track Your Orders' />
            </ListItem>




            <ListItem onClick={()=>goLocation('/pay-now')} button>
              <ListItemIcon>
                  
              < PaymentIcon style={{
        color:'white'
      }}/>
              </ListItemIcon>
              <ListItemText style={{
        color:'white'
      }} primary='Pay Now' />
            </ListItem>



            {user?.role==="admin" && newUser?.email?<ListItem onClick={()=>goLocation('/admins-list')} button>
              <ListItemIcon>
              <AdminPanelSettingsIcon style={{
        color:'white'
      }}/>
              </ListItemIcon>
              <ListItemText style={{
        color:'white'
      }} primary='Admins' />
            </ListItem>:null}
            

            
            <ListItem onClick={()=>goLocation('/your-account')} button>
              <ListItemIcon>
                  
              <SettingsIcon style={{
        color:'white'
      }}/>
              </ListItemIcon>
              <ListItemText style={{
        color:'white'
      }} primary='Account Details' />
            </ListItem>
            
            <ListItem onClick={logOut} button>
              <ListItemIcon>
              <LogoutIcon  style={{
        color:'white'
      }}/>
              
              </ListItemIcon>
              <ListItemText style={{
        color:'white'
      }} primary='Log Out' />
            </ListItem>
       
        </List>
      
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        <Switch>

          

            <PrivateRoute path={`${path}/add-reviews`}>
              <AddReview></AddReview>
            
            </PrivateRoute>

           


            <PrivateRoute path={`${path}/add-products`} >
              <AddProduct></AddProduct>

            </PrivateRoute>



            <PrivateRoute path={`${path}/add-new-admin`}>
              <AddAdmin></AddAdmin>

            </PrivateRoute>

            
            <PrivateRoute path={`${path}/my-orders`}>
                <YourProducts></YourProducts>

            </PrivateRoute>
            


            <PrivateRoute path={`${path}/manage-orders`}>
              <ManageOrders></ManageOrders>

            </PrivateRoute>



            <PrivateRoute path={`${path}/track-your-orders`}>
              <TrackOrder></TrackOrder>
            </PrivateRoute >

            <PrivateRoute path={`${path}/all-products`}>
              <AllProducts></AllProducts>

            </PrivateRoute >


            <PrivateRoute path={`${path}/pay-now`}>

            <PaymentSystem></PaymentSystem>

            </PrivateRoute>
            <PrivateRoute path={`${path}/placeorder/:id`}>
              <PlaceOrder></PlaceOrder>

            </PrivateRoute>


            <PrivateRoute path={`${path}/admins-list`}>
            {/* <Route > */}
              <AdminList></AdminList>
           
            {/* </Route> */}
            </PrivateRoute>


            <PrivateRoute path={`${path}/your-account`}>
                
            </PrivateRoute>

            <PrivateRoute exact path='/dashboard'>

              {newUser?.email && user?.role==="admin"?<DashboardFrontPage></DashboardFrontPage>: <YourProducts></YourProducts>}
              
              


            </PrivateRoute>





        </Switch>






       
      </Box>
    
    </Box>
  );
}

export default Dashboard
