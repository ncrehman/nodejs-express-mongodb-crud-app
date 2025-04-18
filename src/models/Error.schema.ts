import { z } from "zod";

export enum ErrorType {
    contextError="CONTEXT-ERROR", 
    coreError="CORE-ERROR", 
    domainError="DOMAIN-ERROR", 
    policyError="POLICY-ERROR"
}

export const ErrorSchema=z.object({
    type: z.nativeEnum(ErrorType),
    code: z.number(),
    path: z.string().optional(),
    message: z.string(),
    data: z.array(z.any()).optional()
});

export type ErrorDataType=z.infer<typeof ErrorSchema>;