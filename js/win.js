class Win extends React.Component {
    render() {
           
          const { x, y, z, text} = this.props
          return (
               <div>
             <h1>{text}</h1>
             <h1>{x}  {y}  {z}</h1>
            {
              x==y && x==z ? 
              <img src="https://rowdymclean.com/wp-content/uploads/2020/05/win-header-740x280.jpg" />
              : "Di qet bala"
            }
      
               </div>
          );
      }
  }
  
  
