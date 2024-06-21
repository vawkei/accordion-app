import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
    return ( 
        <div className={classes["main-navigation"]}>
            <h2>Resources</h2>
            <nav>
                <ul>
                    <li>Why git?</li>
                    <li>Topics</li>
                    <li>Learn</li>
                    <li>Events</li>
                </ul>
            </nav>
        </div>
     );
}
 
export default MainNavigation;