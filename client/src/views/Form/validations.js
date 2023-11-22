import { format } from "../../functions"; 

const validations = (formData, errors, setErrors) => {
  const { name, health, attack, defense, speed, height, weight, types, image } = formData;
  const newErrors = {};

  const setEmptyError = (key) => {
    newErrors[key] = "";
  };

  const validateField = (value, key, max, errorMessage, regex = null) => {
    if (value === null || value === undefined || value === 0) {
      newErrors[key] = `${format(key)} cannot be null`;
    } else if (key === 'name' && (value.length === 0 || value.length > 20)) {
      newErrors[key] = value.length === 0
        ? "Please complete the field"
        : "20 characters is the maximum";
    } else if (regex && !regex.test(value)) {
      newErrors[key] = errorMessage;
    } else if (value > max) {
      newErrors[key] = errorMessage;
    } else {
      setEmptyError(key);
    }
  };

  const validateTypes = () => {
    newErrors.types = types && types.length === 0 ? "Select at least one type" : "";
  };

  validateField(name, 'name', 0, "Name can only contain letters", /^[a-zA-Z\s]+$/);
  validateField(health, 'health', 400, "Health must be less than 400");
  validateField(attack, 'attack', 250, "Attack must be less than 250");
  validateField(defense, 'defense', 180, "Defense must be less than 180");
  validateField(speed, 'speed', 270, "Speed must be less than 270");
  validateField(height, 'height', 40, "Height must be less than 40");
  validateField(weight, 'weight', 1200, "Weight must be less than 1200");
  validateTypes();

  setErrors({
    ...errors,
    ...newErrors
  });
};

export default validations;