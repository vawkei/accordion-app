import { FaPlus } from "react-icons/fa6";
import classes from "./Items.module.css";
import { useState } from "react";

const Items = () => {
  const Items = [
    {
      id: "1",
      text: "What is Github and how does it work ?",
      content:
        "GitHub is the home for all developers—a platform where you can share code, contribute to open source projects, or even automate your workflow with tools like GitHub Actions and Packages. If you’re just getting started with GitHub, you may know us best as a place for version control and collaboration.",
    },
    {
      id: "2",
      text: "How do i see Githubs availability ?",
      content:
        "Check our real-time status report",
    },
    {
      id: "3",
      text: "Why is Github so popular ?",
      content:
        "GitHub is built by developers for developers, and we’re proud to be home to the world’s largest open source community. With 50 million developers and millions more open source projects, GitHub has become the go-to place to collaborate and build software together.",
    },
    {
      id: "4",
      text: "Who is Github for ?",
      content:
        "GitHub is for developers, teams, and organizations looking to collaborate on software projects. It offers version control, code review, project management, and collaboration tools. GitHub caters to both open-source and private projects, making it ideal for individual programmers, startups, large enterprises, and open-source communities.",
    },
  ];

  const [showContent, setShowContent] = useState(false);
  const [itemToToggle, setItemToToggle] = useState(null);

  const itemToToggleHandler = (id) => {
    setItemToToggle(id);
    console.log(id);
    setShowContent((prev) => !prev);
  };

  return (
    <div className={classes["item-container"]}>
      <ul>
        {/* <li>What is Github and how does it work?</li><FaPlus />
        <li>How do i see Githubs availability?</li>
        <li>Why is Github so popular?</li>
        <li>Who is Github for?</li>
        <li>Do people use Github only for code?</li> */}
        {Items.map((item) => {
          return (
            <div>
              <div key={item.id} className={classes.item}>
                <li>{item.text}</li>
                <FaPlus
                  size={15}
                  className={classes.icon}
                  onClick={() => itemToToggleHandler(item.id)}
                />
              </div>
              {itemToToggle === item.id
                ? showContent && (
                    <div className={classes["hidden-content"]}>
                      <li>{item.content}</li>
                    </div>
                  )
                : ""}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Items;
