import { getSession } from '@/app/_hooks/useSession';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { user, profile } = await getSession();

    if (profile.role !== 'admin')
      return NextResponse.json('You need to be admin to do this', {
        status: 500,
      });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      success_url: `${process.env.PROJECT_URL}/paymentSuccess?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.PROJECT_URL}/paymentFailed`,
      customer_email: user.email,
      metadata: {
        userEmail: user?.email,
        company: profile?.company,
        userId: user?.id,
      },
      line_items: [
        {
          price: 'price_1S70VCEYCFDG80ndUsQwAmAJ',
          quantity: 1,
        },
      ],
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.log('ERROR_IN_PAYMENT_SESSION', error);
    return NextResponse.json('Error in creating payment session', {
      status: 500,
    });
  }
}
