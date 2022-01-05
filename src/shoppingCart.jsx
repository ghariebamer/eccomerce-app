import React,{Component}from"react";
import Product from "./product";
export default class ShoppingCart extends Component{
    state={products:[{id:1,productName:'Iphone',price:8900,quantitiy:0},
                    {id:2,productName:'readme',price:5000,quantitiy:0},
                    {id:3,productName:'sonycamera',price:10000,quantitiy:0},
                    {id:4,productName:'Ipad',price:4000,quantitiy:0},
                    {id:5,productName:'handwatch',price:3000,quantitiy:0},
                    {id:6,productName:'airdoges',price:2000,quantitiy:0}
                ]}
    render(){
        return (
                <div className='container-fluid'>
                    <h4>Shopping Cart</h4>
                    <div className='row'>
                        <div >
                            {this.state.products.map((prod,)=>{ // map products as prod we deal six producr as one prod
                                return (<Product key={prod.id} id={prod.id} productname={prod.productName} productprice={prod.price}
                                        quantity={prod.quantitiy}  onIncreament={this.handelIncreament} onDecrement={this.handelDeacrement}>

                                        <button className='btn btn-primary '> Buy Now</button>

                                </Product>);// we used id beacause key access bry react, key={Product.id} because the console error, we invoke child component 'product' inside parent component 'Shopping Cart' 
                            })}
                        </div>
                    </div>
                    
                </div>);}
               handelIncreament = (product)=>{
                   // get the product in array shape
                let allproduct=[...this.state.products]  
                let index=allproduct.indexOf(product)
                allproduct[index].productquantity++;
                
                // update the state value
                this.setState({products:allproduct});
            };
        handelDeacrement = ()=>{
            console.log('handle the decreament'); }

}