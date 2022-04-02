import { NextApiRequest, NextApiResponse } from "next";
import {getSession} from 'next-auth/react';
import { stripe } from "../../services/stripe";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if(req.method !== 'POST') {
    

    const checkoutSession = await stripe.checkout.sessions.create({
      customer:{},
      payment_method_types: ['card'],
      billing_address_collection: 'required',
      line_items: [
        {price: 'price_1KdMErGyVztrkAhGuO0WOrdF', quantity: 1}
      ],
      mode: 'subscription',
      allow_promotion_codes: true,
      success_url: process.env.STRIPE_SUCCESS_URL,
      cancel_url: process.env.STRIPE_CANCEL_URL
    })

  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Methdo not allwed')
  }
}