import { createPayment } from '@/app/_actions/createPayment';
import { createPremium } from '@/app/_actions/createPremium';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const sig = req.headers.get('stripe-signature');
    let event;

    const rawBody = await req.text();
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      console.log(session);

      const userEmail = session.customer_email;
      const amountInDollars = session.amount_total / 100;

      const payment = {
        amount: amountInDollars,
        currency: session?.currency,
        userId: session?.metadata.userId,
        company: session?.metadata.company,
        userEmail: userEmail,
        paymentId: session?.payment_intent,
      };

      const createdPayment = await createPayment(payment);

      const premiumData = {
        companyName: session?.metadata.company,
        paymentId: createdPayment.id,
        status: 'confirmed',
      };

      await createPremium(premiumData);
      return NextResponse.json({ received: true });
    }

    return NextResponse.json({ message: 'Event received' });
  } catch (error) {
    console.error('❌ Webhook Signature Verification Failed:', error.message);
    return NextResponse.json(
      { error: 'Webhook error: ' + error.message },
      { status: 400 }
    );
  }
}
