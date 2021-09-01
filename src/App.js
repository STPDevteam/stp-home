import "./App.css"
import styled from 'styled-components'
import stpLogo from './assets/logo.png'
function App() {
  return (
    <div className="App">
      <Header>
        <div className="container headerContent" >
          <HeaderLogo src={stpLogo} />
          <HeaderRight>
            <ul>
              <li>
                <a>
                  White Paper 2.0
                </a>
              </li>
              <li>
                <a>
                  STP DAO
                </a>
              </li>
              <li>
                <a>
                  Gov
                </a>
              </li>
              <li>
                <a>
                  KPA
                </a>
              </li>
              <li>
                <a>
                  <AppButton>
                    Go to APP
                  </AppButton>
                </a>
              </li>
            </ul>
          </HeaderRight>
        </div>
      </Header>
    </div>
  );
}

const Header = styled.div`
  .headerContent {
    height: 78.8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const HeaderLogo = styled.img`
  width: 135px;

`

const HeaderRight = styled.div`
  ul {
    display: flex;
  }
  a {
    color: #FFFFFF;
    padding: 13px 20px;
    font-size: 15px;
    font-weight: bold;
  }
`

const AppButton = styled.span`

`
export default App;
