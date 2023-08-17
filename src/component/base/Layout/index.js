import { styled } from "styled-components";
import AppHeader from "../AppHeader";

const LayoutContainer = styled("div")`
  position: relative;
  padding: 0 20px;
`;
const Layout = (props) => {
  return (
    <div style={{}}>
      <AppHeader />

      <LayoutContainer>{props.children}</LayoutContainer>
    </div>
  );
};

export default Layout;
