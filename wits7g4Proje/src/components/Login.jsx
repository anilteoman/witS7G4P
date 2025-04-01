import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

let initalValues = {
  email: "",
  password: "",
  terms: false,
};

let errorMessages = {
  email: "Geçerli bir e-posta adresi girin",
  password: "Güçlü bir şifre girin",
  terms: "giriş için şartları kabul et",
};

const Login = () => {
  const [formData, setFormData] = useState(initalValues);
  const [errors, setErrors] = useState({
    email: false,
    password: false,
    terms: false,
  });

  const [isValid, setIsValid] = useState(false);

  const history=useHistory();

  useEffect(() => {
    if (
      validateEmail(formData.email) &&
      checkPassword(formData.password) &&
      formData.terms
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [formData]);

  const handleChange = (e) => {
    let { type, checked, name, value } = e.target;
    value = type == "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: value });

    if (name == "email") {
      if (validateEmail(value)) {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    }

    if (name === "password") {
      if (checkPassword(value)) {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    }
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  function checkPassword(password) {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(password);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push('/Success');

  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="exampleEmail">Email:</Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Email"
          type="email"
          onChange={handleChange}
          value={formData.email}
          invalid={errors.email}
        />
        {errors.email && <FormFeedback>{errorMessages.email}</FormFeedback>}
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Şifre:</Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="sifre"
          type="password"
          onChange={handleChange}
          value={formData.password}
          invalid={errors.password}
        />
        {errors.password && (
          <FormFeedback>{errorMessages.password}</FormFeedback>
        )}
      </FormGroup>
      <FormGroup check>
        <Input
          type="checkbox" 
          name="terms" 
          value={formData.terms} 
          onChange={handleChange} 
        />{" "}
        <Label check>Şartlari Kabul Ediyorum</Label>
      </FormGroup>
      <Button disabled={!isValid}>Submit</Button>
    </Form>
  );
};

export default Login;
