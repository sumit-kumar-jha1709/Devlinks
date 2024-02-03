import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { updateLinkData } from '../redux/store';

const LinkForm = () => {

  const dispatch = useDispatch();
  const linkData = useSelector((state) => state.linkData);

  const handleSubmit = (values, { setSubmitting }) => {
    // Simple validation
    if (!values.platform || !values.link) {
      // Show error toast
      toast.error('Please fill out all fields.');
      setSubmitting(false);
      return;
    }

    // Dispatch action to save link data to the Redux store
    dispatch(updateLinkData({platform: values.platform, link: values.link}));

    // Show success toast notification
    toast.success('Link saved successfully!');
    
  };

  // Filter out selected platforms from other links
  const filteredPlatforms = linkData.map((item) => item.platform);

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
              <option value="Github" disabled={filteredPlatforms.includes('Github')}>Github</option>
              <option value="Linkedin" disabled={filteredPlatforms.includes('Linkedin')}>Linkedin</option>
              <option value="Leetcode" disabled={filteredPlatforms.includes('Leetcode')}>Leetcode</option>
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