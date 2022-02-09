import './App.css';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



const arr=[
  {
    img:"",
    name:"Fancy Product",
    price:"$40.00 - $80.00",
    button:"Add to Cart"
  },
  {
    img:"",
    name:"Special Item",
    price:"$18.00",
    button:"Add to Cart"
  },
  {
    img:"",
    name:"Sale Item",
    price:"$25.00",
    button:"Add to Cart"
  },
  {
    img:"",
    name:"Popular Item",
    price:"$40.00",
    button:"Add to Cart"
  },
  {
    img:"",
    name:"Sale Item",
    price:"$25.00",
    button:"Add to Cart"
  },
  {
    img:"",
    name:"Fancy Product",
    price:"$40.00 - $80.00",
    button:"Add to Cart"
  },
  {
    img:"",
    name:"Special Item",
    price:"$18.00",
    button:"Add to Cart"
  },
  {
    img:"",
    name:"Popular Item",
    price:"$40.00",
    button:"Add to Cart"
  },
]
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      img:"grey.jpeg",
      cartCount:0,
      arrayData:arr
    }
  }
  removeCart=(index)=>{
    const buttonCheck=this.state.arrayData[index].button;
    console.log(buttonCheck);
    var data=[...this.state.arrayData]
    
    console.log(data[index].button);
    if(buttonCheck==="Add to Cart"){
      data[index].button = "Remove from Cart";
      toast.success("Item added to the cart");
      this.setState({ arrayData: data, cartCount: this.state.cartCount + 1 });
      
    }
    else if(buttonCheck==="Remove from Cart"){
      data[index].button = "Add to Cart";
      toast.error("Item removed from the cart");
      this.setState({ arrayData: data, cartCount: this.state.cartCount - 1 });
    }
    
  }
  
  render(){
    return(
      <div>
        <nav className="navbar navbar-expand-md navbar-light bg-light navigation">
          <ToastContainer />
      <div className="container">
        <p className="navbar-brand navigation-btn">Shop Now</p>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <p className="nav-link active navigation-btn" aria-current="page" >Home</p>
            </li>
            <li className="nav-item">
              <p className="nav-link navigation-btn">About</p>
            </li>
            <li className="nav-item dropdown">
              <p className = 'navigation-btn nav-link dropdown-toggle' id = "navbarDropdown"role = "button" data-bs-toggle = "dropdown"  aria-expanded = "false" >Shop</p>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><p className="dropdown-item navigation-btn" >All Products</p></li>
                <li><hr className="dropdown-divider navigation-btn" /></li >
                <li><p className="dropdown-item navigation-btn" >Popular Items</p></li>
                <li><p className="dropdown-item navigation-btn" >New Arrivals</p></li>
              </ul>
            </li>
          </ul>
          <button className="btn btn-light cartbtn"><i className="fas fa-shopping-cart mx-2"></i>Cart <span className="badge bg-dark mx-2">{this.state.cartCount}</span></button>
        </div>
      </div>
    </nav>
    <div className="bg-dark banner">
      <h1 className="text-light bannertext1">Shop in style</h1>
      <p className="text-muted bannertext2">With this shop homepage template</p>
    </div>
      
    <div className="shopOuter">
    {arr.map((item,index)=>{
      return(
        <div className="shopList" key={index}>
          <img src={this.state.img} alt="450*300"  width="250px" height="200px" className="image img-fluid"/>
          <div className="shopContent py-4">
              <h3><strong>{item.name}</strong></h3>
              <p>{item.price}</p>
              <button type="button" className="btn btn-outline-secondary" onClick={()=>this.removeCart(index)}>{this.state.arrayData[index].button}</button>
          </div>
        </div>);})}
    </div>
    </div>
    );
      
    
  }
}

export default App;
