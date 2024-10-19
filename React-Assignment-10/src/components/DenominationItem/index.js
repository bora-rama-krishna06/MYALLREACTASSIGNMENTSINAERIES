
import './index.css'
const DenominationItem=(props)=>
{ 
    const{denominationsList ,onWithdraw}=props
    const {value,id}=denominationsList 
    const CashWithdraw=()=>
    {
       onWithdraw(id)
    }
    return(
        <div className="container">
            <button onClick={CashWithdraw}>{value}</button>
        </div>
    )
}
export default DenominationItem