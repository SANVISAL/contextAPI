import * as Yup from "yup";

const CardValidateSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Username should be at least 3 characters long")
    .max(25, "Username should not exceed 25 characters")
    .required("Please enter a username."),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter an email"),
  image: Yup.string()
    .test("file-size", "Image size is too large", function (value) {
      const file =
        value && this.options.context && this.options.context.files
          ? this.options.context.files[value]
          : null;
      if (file && file.size) {
        return file.size <= 1024 * 1024;
      }
      return true;
    })
    .required("Please upload an image"),
});

export { CardValidateSchema };
