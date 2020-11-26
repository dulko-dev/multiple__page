import fire from "../Firebase/firebaseConfig";

export const handleLogOut = (e) => {
  e.preventDefault();
  fire
    .auth()
    .signOut()
    .then(function () {
      console.log("wylogowano");
    })
    .catch(function (error) {
      console.log(error);
    });
};
