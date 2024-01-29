import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import toast from 'react-hot-toast';

const LinkForm = ({ onLinkSave }) => {
  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    // Simple validation
    if (!values.platform || !values.link) {
      // Show error toast
      toast.error('Please fill out all fields.');
      setSubmitting(false);
      return;
    }

    // Notify parent component to save link
    onLinkSave(values);

    // Show success toast notification
    toast.success('Link saved successfully!');
    
  };

  return (
    <div>
      <Formik
        initialValues={{ platform: '', link: '' }}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-4">
            <label htmlFor="platform" className="block text-sm font-medium text-gray-700">
              Platform
            </label>
            <Field as="select" name="platform" className="mt-1 p-2 border rounded-md w-full">
              <option value="" disabled>
                Select Platform
              </option>
              <option value="Github">Github</option>
              <option value="Linkedin">Linkedin</option>
              <option value="Leetcode">Leetcode</option>
              {/* Add more options as needed */}
            </Field>
            <ErrorMessage name="platform" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4">
            <label htmlFor="link" className="block text-sm font-medium text-gray-700">
              Link
            </label>
            <Field type="text" name="link" className="mt-1 p-2 border rounded-md w-full" />
            <ErrorMessage name="link" component="div" className="text-red-500 text-sm" />
          </div>

          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
            Save
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LinkForm;
