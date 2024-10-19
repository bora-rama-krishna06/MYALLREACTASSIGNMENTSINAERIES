import {Component} from 'react';
import './index.css'
import DenominationItem from '../DenominationItem'; 
class CashWithdrawal extends Component
{
    state={
        totalAmount:'2000'
    }
 onWithdraw=(id)=>
 {
    const {totalAmount}=this.state
     console.log(id)
   
        if(id===1 && totalAmount>=50)
            {
               this.setState({totalAmount:totalAmount-50})
            }
        else if(id===2 && totalAmount>=100)
            {
                this.setState({totalAmount:totalAmount-100})
            }    
            else if(id===3 && totalAmount>=200)
            {
                this.setState({totalAmount:totalAmount-200})
            }
            else if(id===4 && totalAmount>=500)
            {
                this.setState({totalAmount:totalAmount-500})
            }
   
     else
     {
        alert("no amount")
     }
     console.log(totalAmount);
 }
    render()
    { 
        
        const {totalAmount}=this.state
        const { denominationsList } = this.props;
                return(
            <div className='container'>Sharah Willams            {totalAmount}
              <ul>
              {denominationsList.map((eachItem) => (
                        <DenominationItem key={eachItem.id}  denominationsList={eachItem} onWithdraw={this.onWithdraw}/>
                    ))}
              </ul>
              </div>
        )
    } 
}
export default CashWithdrawal 