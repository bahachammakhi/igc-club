import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import classes from "./contactForm.module.scss"
const { TextArea } = Input;

const formItemLayout = {
    labelCol: { span:  6 },
    wrapperCol: { span: 12 },
  };


const ContactFrom = () =>{
    
    return(
      <div className={classes.wrapper}>
        <h1 className={classes.text}>Contactez-nous</h1>
         <Form.Item {...formItemLayout} label="Nom">
        <Input placeholder="Nom et prenom"  />
      </Form.Item>
      <Form.Item {...formItemLayout} label="Email">
        <Input  placeholder="Adresse-email" size="large" />
      </Form.Item>
      <Form.Item {...formItemLayout} label="Object" size="large">
        <Input  placeholder="Sujet de message" />
      </Form.Item>
      <Form.Item {...formItemLayout} label="Message" size="small">
        <TextArea  placeholder="Message ..." autosize={ {minRows: 3}}/>
      </Form.Item>
      <div>
           <Button type="primary" size="omitted" loading={false}>Envoyer</Button>
      </div>
   
      </div>
       
    )
}

export default ContactFrom;