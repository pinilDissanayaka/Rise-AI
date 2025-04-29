// Contact form API service

export interface ContactFormData {
  first_name: string;
  last_name: string;
  company_name: string;
  phone_number: string;
  description: string;
  email: string;
}

export const submitContactForm = async (formData: ContactFormData): Promise<{success: boolean; message: string}> => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/contact/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      return { 
        success: true, 
        message: "Thank you for your inquiry! We'll get back to you shortly." 
      };
    } else {
      const errorData = await response.json().catch(() => null);
      return { 
        success: false, 
        message: errorData?.message || "Failed to submit. Please try again." 
      };
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    return { 
      success: false, 
      message: "Connection error. Please check your internet and try again." 
    };
  }
};
