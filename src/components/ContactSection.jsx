import React from 'react';
import { motion } from 'framer-motion';
import { Form, Input, Button, Select, message } from 'antd';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './ContactSection.css';

const { TextArea } = Input;
const { Option } = Select;

const ContactSection = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Form values:', values);
    message.success('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
    form.resetFields();
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'info@animalsworld.com',
      link: 'mailto:info@animalsworld.com'
    },
    {
      icon: Phone,
      title: 'Телефон',
      value: '+7 (495) 123-45-67',
      link: 'tel:+74951234567'
    },
    {
      icon: MapPin,
      title: 'Адрес',
      value: 'Москва, ул. Природная, 123',
      link: null
    }
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg">Свяжитесь с нами</h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Есть вопросы о животных? Мы будем рады помочь!
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="contact-info-title">Контактная информация</h3>
            <p className="contact-info-description">
              Мы всегда готовы ответить на ваши вопросы о мире животных 
              и поделиться интересными фактами.
            </p>

            <div className="contact-list">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  className="contact-item"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="contact-icon">
                    <contact.icon size={20} />
                  </div>
                  <div className="contact-details">
                    <div className="contact-title">{contact.title}</div>
                    {contact.link ? (
                      <a href={contact.link} className="contact-value">
                        {contact.value}
                      </a>
                    ) : (
                      <div className="contact-value">{contact.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="contact-form-card">
              <h3 className="form-title">Отправить сообщение</h3>
              
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                className="contact-form"
              >
                <Form.Item
                  name="name"
                  label="Имя"
                  rules={[{ required: true, message: 'Пожалуйста, введите ваше имя' }]}
                >
                  <Input placeholder="Ваше имя" size="large" />
                </Form.Item>

                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    { required: true, message: 'Пожалуйста, введите email' },
                    { type: 'email', message: 'Введите корректный email' }
                  ]}
                >
                  <Input placeholder="your@email.com" size="large" />
                </Form.Item>

                <Form.Item
                  name="subject"
                  label="Тема"
                  rules={[{ required: true, message: 'Выберите тему сообщения' }]}
                >
                  <Select placeholder="Выберите тему" size="large">
                    <Option value="general">Общие вопросы</Option>
                    <Option value="animals">Вопросы о животных</Option>
                    <Option value="cooperation">Сотрудничество</Option>
                    <Option value="feedback">Отзывы и предложения</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  name="message"
                  label="Сообщение"
                  rules={[{ required: true, message: 'Пожалуйста, введите сообщение' }]}
                >
                  <TextArea 
                    rows={4} 
                    placeholder="Ваше сообщение..."
                    size="large"
                  />
                </Form.Item>

                <Form.Item>
                  <Button 
                    type="primary" 
                    htmlType="submit" 
                    size="large"
                    className="submit-button"
                    icon={<Send size={16} />}
                  >
                    Отправить сообщение
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;