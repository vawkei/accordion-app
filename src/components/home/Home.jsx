import classes from "./Home.module.css";
import Items from "../items/Items";

const Home = () => {
    return ( 
        <div className={classes.home}>
            <h1>Accordion App</h1>
            <Items />
        </div>
     );
}
 
export default Home;