import styles from "./style.module.css"

export const Navbar = ({navcolor}:any) => {
    const navbutton=[
        {name:"Home",link:"./fkfkfkfkfkkf"},
        {name:"Home",link:"./fkfkfkfkfkkf"},
        {name:"Home",link:"./fkfkfkfkfkkf"},
        {name:"Home",link:"./fkfkfkfkfkkf"},
        {name:"Home",link:"./fkfkfkfkfkkf"},
        {name:"Home",link:"./fkfkfkfkfkkf"}
    ]

  return (
    <>
      <nav className={`absolute top-0 w-full flex justify-between ${navcolor} items-center px-30 py-6  z-10`}>
          <div className="">
              <a href="" className={` ${styles.nav_right} px-2`}>{navbutton[3].name}</a>
            <a href="" className={` ${styles.nav_right} px-2`}>{navbutton[4].name}</a>
            <a href="" className={` ${styles.nav_right} px-2`}>{navbutton[5].name}</a>
        </div>
    
        <div className="">MORGAN</div>
        <div className="">
              <a href="" className={` ${styles.nav_right} px-2`}>{navbutton[3].name}</a>
            <a href="" className={` ${styles.nav_right} px-2`}>{navbutton[4].name}</a>
            <a href="" className={` ${styles.nav_right} px-2`}>{navbutton[5].name}</a>
        </div>
      </nav>
    </>
  );
};
