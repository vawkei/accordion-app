import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <div>
      <MainNavigation />  
      <main style={{ width: "100", maxWidth: "70 rem", margin: "3rem auto" }}>
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
