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
    if(buttonCheck=="Add to Cart"){
      data[index].button = "Remove from Cart";
      toast.success("Item added to the cart");
      this.setState({ arrayData: data, cartCount: this.state.cartCount + 1 });
      
    }
    else if(buttonCheck=="Remove from Cart"){
      data[index].button = "Add to Cart";
      toast.error("Item removed from the cart");
      this.setState({ arrayData: data, cartCount: this.state.cartCount - 1 });
    }
    
  }
  
  render(){
    return(
      <div>
        <nav class="navbar navbar-expand-md navbar-light bg-light navigation">
          <ToastContainer />
      <div class="container">
        <a class="navbar-brand" href="#">Shop Now</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Shop
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">All Products</a></li>
                <li><hr class="dropdown-divider" /></li >
                <li><a class="dropdown-item" href="#">Popular Items</a></li>
                <li><a class="dropdown-item" href="#">New Arrivals</a></li>
              </ul>
            </li>
          </ul>
          <button className="btn btn-light cartbtn"><i class="fas fa-shopping-cart mx-2"></i>Cart <span class="badge bg-dark mx-2">{this.state.cartCount}</span></button>
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
        <div className="shopList">
          <img src={this.state.img} alt="450*300"  width="250px" height="200px" className="image img-fluid"/>
          <div className="shopContent py-4">
              <h3><strong>{item.name}</strong></h3>
              <p>{item.price}</p>
              <button type="button" class="btn btn-outline-secondary" onClick={()=>this.removeCart(index)}>{this.state.arrayData[index].button}</button>
          </div>
        </div>);})}
    </div>
    </div>
    );
      
    
  }
}

export default App;
