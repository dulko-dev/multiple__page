import fire from "../Firebase/firebaseConfig";

export const handleLogOut = (e) => {
  e.preventDefault();
  fire
    .auth()
    .signOut()
    .then(() => {
      window.location.href = "/";
    })

    .catch(function (error) {
      console.log(error);
    });
};
