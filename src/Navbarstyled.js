import React, { Component } from "react";
import styled from "styled-components";

const Nav = styled.div`
  width: 100%;
  height: 70px;
  background: linear-gradient(170deg, #4267b2, #ff3376);
  display: flex;
  justify-content: space-between;
`;
const Title = styled.div`
  font-size: 30;
  color: #fff;
  align-items: center;
  text-align: center;
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-family: Montserrat, sans-serif;
  text-transform: uppercase;
  margin-left: 20px;
  &:hover {
    color: #0f0;
  }
`;

const CartIconContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const CartImg = styled.img`
  height: 40px;
  margin-right: 20px;
  margin-top: 10px;
`;
const CartCount = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 50%;
  padding: 4px 8px;
  position: absolute;
  right: 10px;
  top: 5px;
  color: #ff3376;
  font-size: 10px;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
`;

class Navbar extends Component {
  render() {
    let { cartCount } = this.props;
    return (
      <Nav>
        <Title>Movie-App</Title>
        <CartIconContainer>
          <CartImg
            src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
            alt="cart-icon"
            // style={styles.cartIcon}
          />

          <CartCount color="yellow" show={true}>
            {cartCount}
          </CartCount>
        </CartIconContainer>
      </Nav>
    );
  }
}

const styles = {
  cartIcon: {
    height: 35,
    marginRight: 20,
  },
  nav: {
    height: 70,
    background: "#4267b2",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
  },
  title: {
    fontSize: 30,
    color: "#fff",
    fontWeight: 600,
    fontFamily: '"Montserrat", sans-serif',
    textTransform: "uppercase",
    marginLeft: 20,
  },

  cartIconContainer: {
    position: "relative",
    cursor: "pointer",
  },
  cartCount: {
    background: "orange",
    borderRadius: "50%",
    padding: "4px 8px",
    position: "absolute",
    right: 10,
    top: -5,
    fontSize: 12,
  },
};

export default Navbar;
