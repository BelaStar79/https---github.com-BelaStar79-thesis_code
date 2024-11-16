export let loggedUser = "admin";

export function setLoggedUser(user) {
  loggedUser = user;
}

export function clearLoggedUser() {
    loggedUser = "";
}

