import Avatar from '../../components/Avatar';
import { UserCard } from '../../components/Card';
import Notifications from '../../components/Notifications';
import SearchInput from '../../components/SearchInput';
import { notificationsData } from '../../demos/header';
import withBadge from '../../hocs/withBadge';
import { Redirect } from 'react-router-dom';
import React from 'react';
import {useState, useEffect} from 'react';
import {
  MdClearAll,
  MdExitToApp,
  MdHelp,
  MdInsertChart,
  MdMessage,
  MdNotificationsActive,
  MdNotificationsNone,
  MdPersonPin,
  MdSettingsApplications,
} from 'react-icons/md';
import {
  Button,
  ListGroup,
  ListGroupItem,
  // NavbarToggler,
  Nav,
  Navbar,
  NavItem,
  NavLink,
  Popover,
  PopoverBody,
} from 'reactstrap';
import bn from '../../utils/bemnames';

const bem = bn.create('header');

const MdNotificationsActiveWithBadge = withBadge({
  size: 'md',
  color: 'primary',
  style: {
    top: -10,
    right: -10,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  children: <small>5</small>,
})(MdNotificationsActive);

const Header = () => {

  const [clog,setLog] = useState(localStorage.getItem('loginData'));

  const [isOpenNotificationPopover, setIsOpenNP] = useState(false);
  const [isNC,setIsNC] = useState(false);
  const [isOUCP,setOUCP] = useState(false);
  const [num,setNum] = useState(1);

  const [userData,setUserData] = useState({});
 


  useEffect(() => {
    let s = '';
    for(let i=0;i<clog.length;i++){
      // console.log(clog.charAt(i) + " ");
      
      if(i==0 || i==clog.length-1){
        continue;
      }
      s+=clog.charAt(i);

    }
          fetch(process.env.REACT_APP_API+"socialuser/"+s)
          .then((res)=>res.json())
          .then((data) => setUserData(data))
          .catch((error)=>console.log(error));

}, []);


  const toggleNotificationPopover = () => {
    setIsOpenNP(true);
  }

  // toggleUserCardPopover = () => {
  //   this.setState({
  //     isOpenUserCardPopover: !this.state.isOpenUserCardPopover,
  //   });
  // };

  const toggleUserCardPopover = () => {
    if(isOUCP){
      setOUCP(false);
    }else{
      setOUCP(true);
    }
  }

  const handleSidebarControlButton = (event) => {
    event.preventDefault();
    event.stopPropagation();

    document.querySelector('.cr-sidebar').classList.toggle('cr-sidebar--open');
  };

 
  const handleLogout = () => {
      localStorage.removeItem('loginData');
      setLog(localStorage.getItem('loginData'));
     
  }


    return (
      <>
        {clog !== null ? 
        <>
      <Navbar light expand className={bem.b('bg-white')}>
        <Nav navbar className="mr-2">
          <Button outline  onClick={handleSidebarControlButton}>
            <MdClearAll size={25} />
          </Button>
        </Nav>
        <Nav navbar>
          <SearchInput />
        </Nav>
        {/* <h3>{log}</h3> */}

        <Nav navbar className={bem.e('nav-right')}>

          <NavItem>
            <NavLink id="Popover2">
              <Avatar
                 src = {userData.image}
                 onClick={toggleUserCardPopover}
                className="can-click"
              />
            </NavLink>
            <Popover
              placement="bottom-end"
              isOpen={isOUCP}
              toggle={toggleUserCardPopover}
              target="Popover2"
              className="p-0 border-0"
              style={{ minWidth: 250 }}
              image = {userData.image}
            >
              <PopoverBody className="p-0 border-light" >
                <UserCard
                  src = {userData.image}
                  title= {userData.username}
                  // subtitle={userData.email}
                  // text={userData.username}
                  className="border-light"
                >
                  <ListGroup flush>
                    <ListGroupItem tag="button" action className="border-light">
                      {/* <MdInsertChart /> Stats */}
                      {userData.username}
                    </ListGroupItem>
                    <ListGroupItem tag="button" action className="border-light">
                      {/* <MdMessage /> Messages */}
                      {userData.email}
                    </ListGroupItem>
                    <ListGroupItem tag="button" action className="border-light" onClick={handleLogout}>
                      {/* <MdExitToApp /> Signout  */}
                      Signout
                    </ListGroupItem>
                  </ListGroup>
                </UserCard>
              </PopoverBody>
            </Popover>
          </NavItem>
        </Nav>
      </Navbar>
    </>
        : <Redirect to="/" /> 
    }
        </>
    )}


export default Header