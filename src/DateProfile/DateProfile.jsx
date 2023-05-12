import "./DateProfile.css";
import { useState } from "react";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileUserPhotos from "./ProfileUserPhotos/ProfileUserPhotos";
import MyProfilePrompts from "./MyProfilePrompts/MyProfilePrompts";
import AboutMe from "./AboutMe/AboutMe";
import MyWorkAndEducation from "./MyWorkAndEducation/MyWorkAndEducation";
import MyBasics from "./MyBasics/MyBasics";
import LinkedAccounts from "./LinkedAccounts/LinkedAccouts";

function DateProfile() {
  const user = {
    name: "Ayush",
    age: 21,
  };

  const [itemSelected, setItemSelected] = useState(null);

  return (
    <div className="wrapper h-full w-full">
      <div className="date-profile mx-auto h-full max-w-lg px-4 py-10">
        <ProfileHeader user={user} />
        <ProfileUserPhotos />
        <MyProfilePrompts
          idx={1}
          itemSelected={itemSelected}
          setItemSelected={setItemSelected}
        />
        <AboutMe
          idx={2}
          itemSelected={itemSelected}
          setItemSelected={setItemSelected}
        />
        <MyWorkAndEducation
          idx={3}
          itemSelected={itemSelected}
          setItemSelected={setItemSelected}
        />
        <MyBasics
          idx={4}
          itemSelected={itemSelected}
          setItemSelected={setItemSelected}
        />
        <LinkedAccounts
          idx={5}
          itemSelected={itemSelected}
          setItemSelected={setItemSelected}
        />
      </div>
    </div>
  );
}

export default DateProfile;
