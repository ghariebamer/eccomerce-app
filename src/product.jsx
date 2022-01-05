import React,{Component}from"react";
export default class Product extends Component{
    render(){
        return (
    
        <div className="card  col-lg-6 m-2">
            
            <div className="card-header m-2 fs-2">
                 {this.props.productname}
            </div>
            <div className="card-body">
                    <h5 className="card-title">#{this.props.id}</h5>
                    <h5 className="card-text">${this.props.productprice}</h5>
            </div>
            {/* card work */}
            
            <div className="card-footer"> 
            <div className=' row'>
                <div className='float-start'>{this.props.children}</div>
                <div>
                    
                    <div className='btn-group float-end'>
                    <span >{this.props.quantity} </span>
                        <button className='btn btn-outline-success ' onClick={()=>{this.props.onIncreament(this.state.Product);}}>+</button>
                         <button className='btn btn-outline-success'  onClick={this.props.onDecrement}>-</button>
                    </div>
                </div>
            
            </div> 

             
                
            
                
               
                
               
            
            </div>
      </div>);
    
    }
}