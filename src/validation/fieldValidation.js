function isValidString(str) {
  if (str && str?.length > 0 && str !== undefined) return true;
  return false;
}
function isValidWebsite(str) {
  if (!str) return false;
  var res = str?.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g
  );
  return res !== null;
}

export const validateFormFields = ({ name, website, description, type }) => {
  let errors = [];
  if (!isValidString(name)) errors.push("name-div");
  if (!isValidWebsite(website)) errors.push("website-div");
  if (!isValidString(description)) errors.push("description-div");
  if (!isValidString(type)) errors.push("type-div");
  return errors;
};
