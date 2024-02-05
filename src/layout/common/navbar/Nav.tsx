import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

export default () => {
    return (
        <>
            <Navbar
                //   expanded={expand}
                fixed='top'
                expand='md'
                //   className={navColour ? "sticky" : "navbar"}
            >
                <Container>
                    <Navbar.Brand href='/' className='brand-container'>
                        {' '}
                        Mauro Silva
                    </Navbar.Brand>

                    {/* <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <div className="toggleButton">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Navbar.Toggle> */}

                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='ms-auto' defaultActiveKey='#home'>
                            <Nav.Item>
                                <Nav.Link
                                    as={Link}
                                    to='/'
                                    //   onClick={() => updateExpanded(false)}
                                >
                                    Home
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link
                                    as={Link}
                                    to='/about'
                                    // onClick={() => updateExpanded(false)}
                                >
                                    About Me
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link
                                    as={Link}
                                    to='/projects'
                                    // onClick={() => updateExpanded(false)}
                                >
                                    Projects
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link
                                    as={Link}
                                    to='/contact'
                                    // onClick={() => updateExpanded(false)}
                                >
                                    Contact
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>

                        {/* //SWITCH THEME BUTTON (LIGHT && DARK) */}

                        {/* <Nav.Item>
            <div className="theme-switch">
              <div id="toggle" onClick={toggeltheme}>
                <div className="toggle-inner" />
              </div>
            </div>
          </Nav.Item> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
