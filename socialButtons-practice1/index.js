const Button = (props) => {
     const { name, className } = props;
     return <button className={`button ${className}`}>{name}</button>;
 }
 
 const element = (
     <div className="container-div">
         <div className="text-container">
          <h1 className="heading"> Social Buttons </h1>
             <div className="button-container">
                 <Button name="Like" className="like" />
                 <Button name="Share" className="share" />
                 <Button name="Comment" className="comment" /> 
             </div> 
         </div>
     </div>
 );
 
 ReactDOM.render(element, document.getElementById('root'));
 