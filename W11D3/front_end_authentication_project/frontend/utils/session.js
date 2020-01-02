// User Sign Up
export const postUser = user => {
  return $.ajax({
    method: "POST",
    url: "/api/users",
    data: { user }
  });
};

// User Sign In
export const postSession = user => {
  return $.ajax({
    method: "POST",
    url: "/api/session",
    data: { user }
  });
};

// User Sign Out
export const deleteSession = () => {
  return $.ajax({
    method: "DELETE",
    url: "/api/session"
  });
};