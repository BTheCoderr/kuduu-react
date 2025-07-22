import { useState } from 'react'
import { Input, Button, Form, message } from 'antd'
import { MailOutlined, SendOutlined } from '@ant-design/icons'

interface EmailFormProps {
  onSubmit: (email: string) => void
}

export function EmailForm({ onSubmit }: EmailFormProps) {
  const [form] = Form.useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (values: { email: string }) => {
    setIsSubmitting(true)
    
    try {
      await onSubmit(values.email)
      form.resetFields()
      message.success('Thank you! We\'ll be in touch soon.')
    } catch (err) {
      message.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form
      form={form}
      onFinish={handleSubmit}
      layout="inline"
      className="email-form"
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '1rem',
        maxWidth: '32rem',
        margin: '0 auto'
      }}
    >
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: 'Please enter your email address' },
            { type: 'email', message: 'Please enter a valid email address' }
          ]}
          style={{ flex: 1, minWidth: '250px', margin: 0 }}
        >
          <Input
            size="large"
            placeholder="Enter your email address"
            prefix={<MailOutlined />}
            style={{
              height: '3rem',
              fontSize: '1rem',
              borderRadius: '0.5rem'
            }}
          />
        </Form.Item>
        
        <Form.Item style={{ margin: 0 }}>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            loading={isSubmitting}
            icon={!isSubmitting && <SendOutlined />}
            style={{
              height: '3rem',
              fontSize: '1rem',
              borderRadius: '0.5rem',
              padding: '0 2rem',
              fontWeight: 600
            }}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </Form.Item>
      </div>
    </Form>
  )
} 