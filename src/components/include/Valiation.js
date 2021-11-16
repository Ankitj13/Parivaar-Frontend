import * as Yup from "yup";


 validate = Yup.object({
    name: Yup.string()
      .required("This filed is required"),
    email: Yup.string()
      .email("Email is Invaild")
      .required("This filed is required"),
    mobileno: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .max(10, "Must be 10 characters")
      .min(10, "Must be 10 characters")
      .required("This filed is required"),
    village: Yup.string()
      .required("This filed is required"),
    password: Yup.string()
      .required("This filed is required"),
    role_id: Yup.string().required("This filed is required"),
  });