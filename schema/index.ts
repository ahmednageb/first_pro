import { z } from "zod"

 export const todoFormSchema = z.object({
    title: z
      .string()
      .min(5, {
        message: "title must be at least 5 characters.",
      })
      .max(30, {
        message: "title must not be longer than 30 characters.",
      }),
      body :z.string().max(50,{
        message: "Body must not be longer than 50 characters."
      }).optional(),
      completed:z.boolean().optional()

  })
  
  export type todoFormValues = z.infer<typeof todoFormSchema>