import classes from "./GithubProfileImage.module.css";
import ProfilePic from "../../assets/images/ProfilePic.webp";

const GithubProfileImage = () => {
   return (
      <div className={classes["github-profile-img"]}>
         <h2>Ali Jabar</h2>
         <a
            href="https://github.com/sharonye0"
            target="_blank"
            rel="noreferrer"
         >
            <img src={ProfilePic} alt="my github profile pic" />
         </a>
      </div>
   );
};

export default GithubProfileImage;
