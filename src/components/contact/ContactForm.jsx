import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import classes from "./contactForm.module.scss"
const { TextArea } = Input;

const formItemLayout = {
    labelCol: { span:  4 },
    wrapperCol: { span: 20 },
  };

const ContactFrom = () =>{
    
    return(
      <div className={classes.wrapper}>
         <Form.Item {...formItemLayout} label="Nom">
        <Input placeholder="Nom et prenom" size="large" />
      </Form.Item>
      <Form.Item {...formItemLayout} label="Email">
        <Input  placeholder="Adresse-email" size="large" />
      </Form.Item>
      <Form.Item {...formItemLayout} label="Object" size="large">
        <Input  placeholder="Sujet de message" />
      </Form.Item>
      <Form.Item {...formItemLayout} label="Message" size="large">
        <TextArea  placeholder="Message ..." autosize={ {minRows: 8, maxRows: 6 }}/>
      </Form.Item>
      <div style={{textAlign:"center"}}>
           <Button type="primary" size="omitted" loading={false}>Envoyer</Button>
      </div>
   
      </div>
       
    )
}

export default ContactFrom;