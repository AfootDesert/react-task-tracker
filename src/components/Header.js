import Button from './Button.js';

const Header = ( {title} ) => {
  return (
    <div className="header">
        <h1>{title}</h1>
        <Button color="green" text="add" />
    </div>  
  )
}

// Inline CSS in JSX
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header