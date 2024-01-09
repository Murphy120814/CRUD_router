export const USER_URL =
  "https://my-json-server.typicode.com/Murphy120814/CRUD_router/users";

export const options = (body) => ({
  method: "POST",
  headers: {
    Accept: "application.json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(body),
  cache: "default",
});

export const sexOptions = [
  { key: "Select an Option", value: "" },
  { key: "Male", value: "male" },
  { key: "Female", value: "female" },
  { key: "Other", value: "other" },
];
