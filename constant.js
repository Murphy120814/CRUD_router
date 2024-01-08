export const USER_URL =
  "https://my-json-server.typicode.com/Murphy120814/CRUD_router/users";

export const options = (body) => ({
  Method: "POST",
  Headers: {
    Accept: "application.json",
    "Content-Type": "application/json",
  },
  Body: JSON.stringify(body),
  Cache: "default",
});

export const sexOptions = [
  { key: "Select an Option", value: "" },
  { key: "Male", value: "male" },
  { key: "Female", value: "female" },
  { key: "Other", value: "other" },
];
