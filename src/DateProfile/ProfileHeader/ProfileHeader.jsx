import UserPhoto from "../../_assets/user-profile-photo.jpg";

export default function ProfileHeader({ user }) {
  return (
    <div className="profile-header flex flex-col items-center">
      <img
        src={UserPhoto}
        alt="user-photo"
        className="h-24 w-24 cursor-pointer rounded-xl transition-all hover:scale-105"
      />
      <span className="ff-taviraj text-theme-purpleX mt-5 inline-block text-2xl font-semibold">{`${user.name.toLowerCase()}, ${
        user.age
      }`}</span>
    </div>
  );
}
