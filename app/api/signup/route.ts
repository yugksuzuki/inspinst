import { createClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email, signupType = "early_access" } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Email válido é obrigatório" }, { status: 400 })
    }

    const supabase = await createClient()

    // Insert email into database
    const { data, error } = await supabase
      .from("email_signups")
      .insert([
        {
          email: email.toLowerCase().trim(),
          signup_type: signupType,
        },
      ])
      .select()
      .single()

    if (error) {
      // Handle duplicate email error
      if (error.code === "23505") {
        return NextResponse.json({ error: "Este email já está cadastrado!" }, { status: 409 })
      }

      console.error("Database error:", error)
      return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
    }

    return NextResponse.json(
      {
        message: "Email cadastrado com sucesso!",
        data: data,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}
