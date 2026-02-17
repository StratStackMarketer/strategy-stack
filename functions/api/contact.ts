interface Env {
  BREVO_API_KEY: string;
  CONTACT_EMAIL: string;
}
                                                                                                                                                                                       
interface TrackingData {
  referrer: string;
  landingPage: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmTerm: string;
  utmContent: string;
}
                                                                                                                                                                                       
interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  business: string;
  service?: string;
  message?: string;
  tracking?: TrackingData;
}
                                                                                                                                                                                       
export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
                                                                                                                                                                                       
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
                                                                                                                                                                                       
  try {
    const formData: ContactFormData = await request.json();
                                                                                                                                                                                       
    if (!formData.name || !formData.email || !formData.business) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }
                                                                                                                                                                                       
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }
                                                                                                                                                                                       
    const tracking = formData.tracking;
    const hasUtm = tracking && (tracking.utmSource || tracking.utmMedium || tracking.utmCampaign);
                                                                                                                                                                                       
    const emailHtml = `                                                                                                                                                                
      <h2>New Lead from Strategy Stack Website</h2>                                                                                                                                    
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">                                                                                                        
        <tr>                                                                                                                                                                           
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Name</td>                                                                                              
          <td style="padding: 10px; border: 1px solid #ddd;">${formData.name}</td>                                                                                                     
        </tr>                                                                                                                                                                          
        <tr>                                                                                                                                                                           
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email</td>                                                                                             
          <td style="padding: 10px; border: 1px solid #ddd;"><a href="mailto:${formData.email}">${formData.email}</a></td>                                                             
        </tr>                                                                                                                                                                          
        <tr>                                                                                                                                                                           
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Phone</td>                                                                                             
          <td style="padding: 10px; border: 1px solid #ddd;">${formData.phone || 'Not provided'}</td>                                                                                  
        </tr>                                                                                                                                                                          
        <tr>                                                                                                                                                                           
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Business</td>                                                                                          
          <td style="padding: 10px; border: 1px solid #ddd;">${formData.business}</td>                                                                                                 
        </tr>                                                                                                                                                                          
        <tr>                                                                                                                                                                           
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Industry</td>                                                                                          
          <td style="padding: 10px; border: 1px solid #ddd;">${formData.service || 'Not specified'}</td>                                                                               
        </tr>                                                                                                                                                                          
        <tr>                                                                                                                                                                           
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Message</td>                                                                                           
          <td style="padding: 10px; border: 1px solid #ddd;">${formData.message || 'No message provided'}</td>                                                                         
        </tr>                                                                                                                                                                          
      </table>                                                                                                                                                                         
      <h3 style="margin-top: 30px; color: #333;">Lead Source</h3>                                                                                                                      
      <table style="border-collapse: collapse; width: 100%; max-width: 600px; background: #f9f9f9;">                                                                                   
        <tr>                                                                                                                                                                           
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Referrer</td>                                                                                          
          <td style="padding: 10px; border: 1px solid #ddd;">${tracking?.referrer || 'Direct'}</td>                                                                                    
        </tr>                                                                                                                                                                          
        <tr>                                                                                                                                                                           
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Landing Page</td>                                                                                      
          <td style="padding: 10px; border: 1px solid #ddd; word-break: break-all;">${tracking?.landingPage || 'N/A'}</td>                                                             
        </tr>                                                                                                                                                                          
        ${hasUtm ? `
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">UTM Source</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${tracking.utmSource || '-'}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">UTM Medium</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${tracking.utmMedium || '-'}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">UTM Campaign</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${tracking.utmCampaign || '-'}</td>
        </tr>
        ${tracking.utmTerm ? `<tr><td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">UTM Term</td><td style="padding: 10px; border: 1px solid                       
#ddd;">${tracking.utmTerm}</td></tr>` : ''}
        ${tracking.utmContent ? `<tr><td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">UTM Content</td><td style="padding: 10px; border: 1px solid                 
#ddd;">${tracking.utmContent}</td></tr>` : ''}
        ` : ''}                                                                                                                                                                        
      </table>                                                                                                                                                                         
      <p style="margin-top: 20px; color: #666;">Submitted from strategystackai.com contact form</p>                                                                                    
    `;
                                                                                                                                                                                       
    const emailText = `New Lead from Strategy Stack Website\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\nBusiness:                 
${formData.business}\nIndustry: ${formData.service || 'Not specified'}\nMessage: ${formData.message || 'No message provided'}\n\n--- Lead Source ---\nReferrer: ${tracking?.referrer ||  
'Direct'}\nLanding Page: ${tracking?.landingPage || 'N/A'}\n${hasUtm ? `UTM Source: ${tracking.utmSource || '-'}\nUTM Medium: ${tracking.utmMedium || '-'}\nUTM Campaign:
${tracking.utmCampaign || '-'}` : ''}\n\nSubmitted from strategystackai.com contact form`;
                                                                                                                                                                                       
    const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': env.BREVO_API_KEY,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        sender: {
          name: 'Strategy Stack Website',
          email: 'russ@strategystackmarketing.com',
        },
        to: [
          {
            email: env.CONTACT_EMAIL || 'russ@strategystackmarketing.com',
            name: 'Russ Chandler',
          },
          {
            email: 'kai@strategystackmarketing.com',
            name: 'Kai - Strategy Stack',
          },
        ],
        replyTo: {
          email: formData.email,
          name: formData.name,
        },
        subject: `New Lead: ${formData.business} - ${formData.name}`,
        htmlContent: emailHtml,
        textContent: emailText,
        tags: ['website-lead'],
      }),
    });
                                                                                                                                                                                       
    if (!brevoResponse.ok) {
      const errorText = await brevoResponse.text();
      console.error('Brevo error:', errorText);
      return new Response(
        JSON.stringify({ error: 'Failed to send email' }),
        { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }
                                                                                                                                                                                       
    return new Response(
      JSON.stringify({ success: true, message: 'Form submitted successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
    );
  }
};
                                                                                                                                                                                       
export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};

