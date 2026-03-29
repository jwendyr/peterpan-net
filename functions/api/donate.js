// POST /api/donate — Create Stripe Checkout session for donation
export async function onRequestPost(context) {
  const { request } = context;
  try {
    const { amount, name, email } = await request.json();
    const cents = Math.round(parseFloat(amount) * 100);
    if (!cents || cents < 100) {
      return Response.json({ error: 'Minimum donation is $1.00' }, { status: 400 });
    }
    if (cents > 1000000) {
      return Response.json({ error: 'For donations over $10,000, please contact us directly' }, { status: 400 });
    }

    const STRIPE_SECRET = context.env.STRIPE_SECRET_KEY;

    const params = new URLSearchParams();
    params.append('payment_method_types[]', 'card');
    params.append('mode', 'payment');
    params.append('line_items[0][price_data][currency]', 'usd');
    params.append('line_items[0][price_data][product_data][name]', 'Donation to Peterpan Corp');
    params.append('line_items[0][price_data][product_data][description]', '501(c)(3) tax-deductible donation — EIN: 39-2394084');
    params.append('line_items[0][price_data][unit_amount]', cents.toString());
    params.append('line_items[0][quantity]', '1');
    params.append('success_url', 'https://peterpan.net/donate?thanks=1');
    params.append('cancel_url', 'https://peterpan.net/donate');
    if (email) params.append('customer_email', email);
    params.append('metadata[donor_name]', name || 'Anonymous');
    params.append('metadata[source]', 'peterpan.net');
    params.append('submit_type', 'donate');

    const res = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${STRIPE_SECRET}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    const session = await res.json();
    if (session.error) {
      return Response.json({ error: session.error.message }, { status: 400 });
    }

    return Response.json({ url: session.url });
  } catch (e) {
    return Response.json({ error: 'Server error: ' + e.message }, { status: 500 });
  }
}
