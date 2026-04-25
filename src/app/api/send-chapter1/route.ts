// src/app/api/send-chapter1/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import fs from 'fs'
import path from 'path'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const { email } = await req.json()

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  const pdfPath = path.join(process.cwd(), 'public', 'downloads', 'chapter01_biology_bible.pdf')
  const pdfBuffer = fs.readFileSync(pdfPath)

  await resend.emails.send({
    from: 'WeightWise Health <contact@weightwisehealth.com>',
    to: email,
    subject: 'Your Free Chapter — Why "Normal" Lab Results May Be Lying to You',
    html: `
      <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; background: #0A0A0F; color: #F0F0F5; padding: 40px 32px;">
        <p style="color: #00D4FF; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 8px;">WEIGHTWISE HEALTH</p>
        <h1 style="font-size: 24px; font-weight: 800; margin-bottom: 16px;">Chapter 01 is attached.</h1>
        <p style="color: #8888AA; font-size: 15px; line-height: 1.6; margin-bottom: 24px;">
          This is the chapter that reframes everything. Read it once.<br>
          Then read your next lab report.
        </p>
        <p style="color: #8888AA; font-size: 15px; line-height: 1.6; margin-bottom: 32px;">
          When you're ready for the full system — all 40 chapters, the complete hormone and peptide framework, and quarterly updates — the Bible is available at Founding Access pricing.
        </p>
        <a href="https://gumroad.com/l/grmohs" style="display: inline-block; background: #00D4FF; color: #0A0A0F; font-weight: 700; padding: 14px 28px; text-decoration: none; font-size: 15px;">
          Get The Full Bible — $79.90
        </a>
        <p style="color: #555570; font-size: 12px; margin-top: 40px;">
          WeightWiseHealth.com · Educational content only · Not medical advice
        </p>
      </div>
    `,
    attachments: [
      {
        filename: 'WeightWise_Chapter01_Free.pdf',
        content: pdfBuffer.toString('base64'),
      },
    ],
  })

  // Notificação interna
  await resend.emails.send({
    from: 'WeightWise Site <contact@weightwisehealth.com>',
    to: 'contact@weightwisehealth.com',
    subject: `[LEAD] ${email}`,
    text: `Novo lead: ${email}\nData: ${new Date().toISOString()}`,
  })

  return NextResponse.json({ success: true })
}
