import { supabase } from "@/lib/supabase";

export interface WaitlistSubmission {
  fullName: string;
  company: string;
  email: string;
  companySize: string;
}

export interface WaitlistResponse {
  success: boolean;
  position?: number;
  message?: string;
}

export class WaitlistService {
  static async submit(data: WaitlistSubmission): Promise<WaitlistResponse> {
    // 1. Validate input fields
    if (!data.fullName.trim() || !data.company.trim() || !data.email.trim() || !data.companySize) {
      return {
        success: false,
        message: "All registration fields are required.",
      };
    }

    // 2. Validate email structure
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      return {
        success: false,
        message: "Please enter a valid work email address.",
      };
    }

    // 3. Verify database client is initialized
    if (!supabase) {
      return {
        success: false,
        message: "Database connection parameters are unconfigured. Please check environment files.",
      };
    }

    try {
      // 4. Retrieve queue size for position index (fallback to base offset 100)
      const { count, error: countError } = await supabase
        .from("waitlist")
        .select("*", { count: "exact", head: true });
      
      const currentCount = countError ? 0 : (count || 0);
      const position = 101 + currentCount;

      // 5. Insert record into PostgreSQL database
      const { error: insertError } = await supabase
        .from("waitlist")
        .insert([
          {
            full_name: data.fullName.trim(),
            company: data.company.trim(),
            email: data.email.trim().toLowerCase(),
            company_size: data.companySize,
            created_from: "landing-page",
          },
        ]);

      if (insertError) {
        // Detect Postgres unique constraint violation (code 23505)
        if (insertError.code === "23505") {
          return {
            success: false,
            message: "This email is already registered on our waitlist.",
          };
        }
        
        return {
          success: false,
          message: insertError.message || "Failed to insert waitlist record.",
        };
      }

      return {
        success: true,
        position,
        message: "Successfully added to waitlist.",
      };
    } catch {
      return {
        success: false,
        message: "Network exception. Failed to contact waitlist registry.",
      };
    }
  }
}
