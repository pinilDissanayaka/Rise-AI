// API types and functions for the contact form

export interface ContactFormData {
  first_name: string;
  last_name: string;
  company_name: string;
  phone_number: string;
  description: string;
  email: string;
  services: string[]; // Added to match the form fields
  goal: string; // Added to match the form fields
  other_service?: string; // Optional field
}

export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean, message: string }> {
  // This is a placeholder for actual API call implementation
  // In a real app, you would send this data to your backend
  console.log('Form data to submit:', data);
  
  return new Promise((resolve) => {
    // Simulate API call
    setTimeout(() => {
      resolve({
        success: true,
        message: 'Your message has been sent successfully!'
      });
    }, 1500);
  });
}