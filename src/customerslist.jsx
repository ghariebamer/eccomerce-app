import React,{Component} from "react";
export default class CustomersList extends Component{
    state={Title:'Employees',employee_num:'50',
            employees:[
                {id:'1', name:'gharieb '
                ,age:'24',Address:{city:'Mansoura'}
            ,photo:"https://picsum.photos/id/300/200/200"},
                {id:'2', name:'osama ',
                age:'22',Address:{city:'Mansoura'},
                photo:"https://picsum.photos/id/500/200/200"},
                {id:'3', name:'ahmed' , 
                age:'26',Address:{city:'Mansoura'},
                photo:"https://picsum.photos/id/400/200/200"},
                {id:'4', name:' ',age:'23',
                Address:{city:'Mansoura'},
                photo:"https://picsum.photos/id/300/200/200"},
                {id:'5', name:' ',age:'20',
                Address:{city:'Mansoura'},
                photo:"https://picsum.photos/id/200/200/200"}
            ]


};
    render(){
        return(
            <h1 className='border-bottom m-1 p-1'>{this.state.Title}
            <span>
                <button className='btn btn-secondary m-1' >{this.state.employee_num}</button>

                </span>
            
            <button className='btn btn-success m-3' >refresh</button>
                <div >
                <table className='table' >
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Images</th>
                        <th>Employee</th>
                        <th>Age</th>
                        <th>Address</th>

                      </tr>

                    </thead>
                    <tbody>
                        {this.state.employees.map((emp,index)=>{
                            return(
                                <tr key={emp.id}> 
                                    <td>{emp.id }</td>
                                    <td><img src={emp.photo} alt=" Employee"/>
                                        <div>
                                            <button className='btn btn-primary' onClick={()=>{
                                                this.changeClick(emp,index)
                                            }}> change picture
                                            </button>

                                        </div>
                                    
                                     </td>
                                    <td>{this.getName(emp.name)}</td>
                                    <td>{emp.age}</td>
                                   

                                    <td>{emp.Address.city}</td>

                                </tr>                               
                            ) })}
                    </tbody>
                </table>
                </div>
             </h1>
             
            
        )
        }

        getName = (name) =>{
            if(name===' ') {
                return(<button className='btn btn-info'>no name enter</button>); }
                else{
                    return name;
                }

        }
    
      changeClick=(emp,index)=>{

        // git exiting employees and assign it to variable
          var array=this.state.employees;

          // index important so we can change specfic index in array
          array[index].photo="https://picsum.photos/id/100/200/200";


          // update the employee with new value in array
          this.setState({employees:array})
        }
      };
    
    