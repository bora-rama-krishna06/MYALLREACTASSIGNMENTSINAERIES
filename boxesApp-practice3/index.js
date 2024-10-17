const Box = props => {
const {className,name}=props;
return <div className={`ch ${className}`}>{name}</div>
}

const element = (
<div>
  <div className="rama">
    <h1>Boxes</h1>
    </div>
    <div className="container">
<Box className="small-box" name="Small"/>
<Box className="medium-box" name="medium"/>
<Box className="large-box" name="Large"/>
</div>
</div>
)

ReactDOM.render(element, document.getElementById("root"));
