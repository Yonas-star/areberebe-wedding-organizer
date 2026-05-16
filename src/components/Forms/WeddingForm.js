import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import './WeddingForm.css';

const WeddingForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Configure with your EmailJS credentials
      const templateParams = {
        bride_name: data.brideName,
        groom_name: data.groomName,
        wedding_date: data.weddingDate,
        venue: data.venue,
        email: data.email,
        phone: data.phone,
        message: data.message
      };

      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams,
        'YOUR_USER_ID' // Replace with your EmailJS user ID
      );

      toast.success('Wedding planning request submitted successfully!');
      reset();
    } catch (error) {
      toast.error('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-container">
      <ToastContainer />
      <h2>Wedding Planning Request Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Bride's Full Name *</label>
          <input
            type="text"
            {...register('brideName', { required: 'Bride name is required' })}
            placeholder="Enter bride's full name"
          />
          {errors.brideName && <span className="error">{errors.brideName.message}</span>}
        </div>

        <div className="form-group">
          <label>Groom's Full Name *</label>
          <input
            type="text"
            {...register('groomName', { required: 'Groom name is required' })}
            placeholder="Enter groom's full name"
          />
          {errors.groomName && <span className="error">{errors.groomName.message}</span>}
        </div>

        <div className="form-group">
          <label>Wedding Date *</label>
          <input
            type="date"
            {...register('weddingDate', { required: 'Wedding date is required' })}
          />
          {errors.weddingDate && <span className="error">{errors.weddingDate.message}</span>}
        </div>

        <div className="form-group">
          <label>Venue *</label>
          <input
            type="text"
            {...register('venue', { required: 'Venue is required' })}
            placeholder="Enter wedding venue"
          />
          {errors.venue && <span className="error">{errors.venue.message}</span>}
        </div>

        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            placeholder="Enter your email"
          />
          {errors.email && <span className="error">{errors.email.message}</span>}
        </div>

        <div className="form-group">
          <label>Phone Number *</label>
          <input
            type="tel"
            {...register('phone', { required: 'Phone number is required' })}
            placeholder="Enter phone number"
          />
          {errors.phone && <span className="error">{errors.phone.message}</span>}
        </div>

        <div className="form-group">
          <label>Additional Message</label>
          <textarea
            {...register('message')}
            placeholder="Any additional requirements or notes"
            rows="4"
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Request'}
        </button>
      </form>
    </div>
  );
};

export default WeddingForm;
