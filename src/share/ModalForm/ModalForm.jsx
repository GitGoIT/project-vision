import css from "./ModalForm.module.css";
import { Formik, Form, Field } from "formik";
import classnames from "classnames";
import emailjs from "emailjs-com";
import Notiflix from "notiflix";
import { VscClose } from "react-icons/vsc";
import { BsCheck2 } from "react-icons/bs";

const ModalForm = () => {

    function validateName(value) {
      if (!value) {
        return "Name is required";
      } else if (value.length < 2) {
        return "Name must be at least 2 characters";
      } else if (value.length > 30) {
        return "Name must not exceed 30 characters";
      }
    }

  function validateEmail(value) {
    if (!value) {
      return "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      return "Please input a valid Email";
    }
  }

  function validatePhone(value) {
    const passwordRegex =
      /^(\+{0,})(\d{0,})(\d{1,3}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s]?\d+([\s]?\d+){1,2}(\s){0,}$/gm;
    if (!value) {
      return "Phone is required";
    } else if (value.length < 10) {
      return "Phone must be min 10 characters long";
    } else if (!passwordRegex.test(value)) {
      return "Phone format must contain only numbers";
    }
  }

  const handleSubmit = (values) => {

    const templateParams = {
      name: values.name,
      email: values.email,
      phone: values.phone,
    };
    //   console.log(templateParams);

    // Sending letter from Email.js
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (response) => {
              console.log("Email sent successfully!", response);
              Notiflix.Notify.success("Request sent successfully!", {
                width: "280px",
                position: "center-top",
                distance: "25px",
                fontSize: "18px",
                timeout: 2500,
              });
        },
        (error) => {
            console.error("Error sending email:", error);
            Notiflix.Notify.failure("Error sending request", {
              width: "280px",
              position: "center-top",
              distance: "25px",
              fontSize: "18px",
              timeout: 2500,
            });
        }
      );
  };

  return (
    <div className={css.container}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
        }}
        onSubmit={(values, actions) => {
          handleSubmit({
            name: values.name,
            email: values.email,
            phone: values.phone,
          });
          actions.resetForm();
        }}
      >
        {({ errors, touched, values }) => (
          <Form className={css.inputList}>
            <Field
              validate={validateName}
              className={classnames(css.input, {
                [css.errorInput]: errors.name && touched.name,
                [css.validInput]: !errors.name && touched.name,
              })}
              type="name"
              name="name"
              required
              placeholder="Name"
            />
            {errors.name && touched.name && (
              <div className={css.errorMessageName}>
                <VscClose className={css.close} size="26px" />
                <p>{errors.name}</p>
              </div>
            )}
            {!errors.name && touched.name && (
              <div className={css.validMessageName}>
                <BsCheck2 className={css.valid} size="26px" />
                <p>Name is valid</p>
              </div>
            )}
            <Field
              validate={validateEmail}
              className={classnames(css.input, {
                [css.errorInput]: errors.email && touched.email,
                [css.validInput]: !errors.email && touched.email,
              })}
              type="email"
              name="email"
              required
              placeholder="Email"
            />
            {errors.email && touched.email && (
              <div className={css.errorMessageEmail}>
                <VscClose className={css.close} size="26px" />
                <p>{errors.email}</p>
              </div>
            )}
            {!errors.email && touched.email && (
              <div className={css.validMessageEmail}>
                <BsCheck2 className={css.valid} size="26px" />
                <p>Email is valid</p>
              </div>
            )}
            <Field
              className={classnames(css.input, {
                [css.errorInput]: errors.phone && touched.phone,
                [css.validInput]: !errors.phone && touched.phone,
              })}
              id="phone"
              name="phone"
              required
              validate={(value) => validatePhone(values.phone, value)}
              placeholder="Phone"
            />
            {errors.phone && touched.phone && (
              <div className={css.errorMessagePhone}>
                <VscClose className={css.close} size="26px" />
                <p>{errors.phone}</p>
              </div>
            )}
            {!errors.phone && touched.phone && (
              <div className={css.validMessagePhone}>
                <BsCheck2 className={css.valid} size="26px" />
                <p>Phone is valid</p>
              </div>
            )}
            <div className={css.btnWrapper}>
              <button className={css.btn} type="submit">
                Send
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ModalForm;

