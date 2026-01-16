interface Env {
  SENDGRID_API_KEY: string;
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

  // CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const formData: ContactFormData = await request.json();

    // Validate required fields
    if (!formData.name || !formData.email || !formData.business) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    // Build tracking info
    const tracking = formData.tracking;
    const hasUtm = tracking && (tracking.utmSource || tracking.utmMedium || tracking.utmCampaign);

    // Build email content
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
        ${tracking.utmTerm ? `
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">UTM Term</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${tracking.utmTerm}</td>
        </tr>` : ''}
        ${tracking.utmContent ? `
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">UTM Content</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${tracking.utmContent}</td>
        </tr>` : ''}
        ` : ''}
      </table>
      <p style="margin-top: 20px; color: #666;">Submitted from strategystack.com contact form</p>
    `;

    const emailText = `
New Lead from Strategy Stack Website

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Business: ${formData.business}
Industry: ${formData.service || 'Not specified'}
Message: ${formData.message || 'No message provided'}

--- Lead Source ---
Referrer: ${tracking?.referrer || 'Direct'}
Landing Page: ${tracking?.landingPage || 'N/A'}
${hasUtm ? `UTM Source: ${tracking.utmSource || '-'}
UTM Medium: ${tracking.utmMedium || '-'}
UTM Campaign: ${tracking.utmCampaign || '-'}
${tracking.utmTerm ? `UTM Term: ${tracking.utmTerm}` : ''}
${tracking.utmContent ? `UTM Content: ${tracking.utmContent}` : ''}` : ''}

Submitted from strategystack.com contact form
    `;

    // Send via SendGrid
    const sendGridResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: env.CONTACT_EMAIL || 'russchandler@strategystackmarketing.com' }],
            subject: `New Lead: ${formData.business} - ${formData.name}`,
          },
        ],
        from: {
          email: 'russchandler@strategystackmarketing.com',
          name: 'Strategy Stack AI',
        },
        reply_to: {
          email: formData.email,
          name: formData.name,
        },
        content: [
          { type: 'text/plain', value: emailText },
          { type: 'text/html', value: emailHtml },
        ],
      }),
    });

    if (!sendGridResponse.ok) {
      const errorText = await sendGridResponse.text();
      console.error('SendGrid error:', errorText);
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

// Handle OPTIONS for CORS preflight
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
